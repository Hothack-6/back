import { Types } from 'mongoose';
import _ from 'lodash';
import { User } from '../models/user';
import type { TypedResolvers } from '../types/GraphQL';
import { usersApi } from '../services/user';
import { CompanyUserStatus, LocationTypes, SpecialistServiceStatus, UserStatus, UserType } from '../generated/graphql';
import { SpecialistInformation } from '../models/specialist_information';
import { Company } from '../models/company';

const { ObjectId } = Types;

interface specialistQueryParametersProps {
  _service_category_id?: string | null;
  search?: string | null;
  location_type: LocationTypes;
}

const getSpecialistQueryParameters = ({ _service_category_id, search, location_type }: specialistQueryParametersProps) => {
  const matchFilter: any = {};
  const lookupFields: any = [];

  lookupFields.push(
    ...[
      {
        $lookup: {
          from: 'specialist_service',
          localField: '_id',
          foreignField: '_specialist_id',
          pipeline: [
            {
              $lookup: {
                from: 'service_category',
                localField: '_service_category_id',
                foreignField: '_id',
                as: 'service_category',
              },
            },
            {
              $lookup: {
                from: 'service_subcategory',
                localField: '_service_subcategory_id',
                foreignField: '_id',
                as: 'service_subcategory',
              },
            },
          ],
          as: 'specialist_services',
        },
      },
      {
        $lookup: {
          from: 'specialist_information',
          localField: '_id',
          foreignField: '_specialist_id',
          as: 'specialist_information',
        },
      },
      {
        $unwind: '$specialist_information',
      },
    ],
  );

  matchFilter['specialist_information.location_types'] = location_type;

  if (_service_category_id) {
    matchFilter['specialist_services._service_category_id'] = new ObjectId(_service_category_id);
    matchFilter['specialist_services.status'] = SpecialistServiceStatus.Active;
  }

  if (search) {
    lookupFields.push(
      ...[
        {
          $lookup: {
            from: 'company',
            localField: 'specialist_information._company_id',
            foreignField: '_id',
            as: 'company',
          },
        },
      ],
    );

    const searchFilter = { $regex: new RegExp(search, 'i') };

    matchFilter['$or'] = [
      { firstname: searchFilter },
      { lastname: searchFilter },
      { 'specialist_information.business_name': searchFilter },
      { 'specialist_information.description': searchFilter },
      { 'specialist_information.phone': searchFilter },
      { 'specialist_information.address.name': searchFilter },
      { 'specialist_information.address.street': searchFilter },
      { 'specialist_information.address.complement': searchFilter },
      { 'specialist_information.address.city': searchFilter },
      { 'specialist_information.address.state': searchFilter },
      { 'specialist_information.address.country': searchFilter },
      { 'specialist_information.address.zip_code': searchFilter },
      { 'specialist_services.service_category.name': searchFilter },
      { 'specialist_services.service_subcategory.name': searchFilter },
      { 'specialist_services.name': searchFilter },
      { 'specialist_services.description': searchFilter },
      { 'company.name': searchFilter },
      { 'company.description': searchFilter },
      { 'company.address.name': searchFilter },
      { 'company.address.street': searchFilter },
      { 'company.address.complement': searchFilter },
      { 'company.address.city': searchFilter },
      { 'company.address.state': searchFilter },
      { 'company.address.country': searchFilter },
      { 'company.address.zip_code': searchFilter },
    ];
  }

  return [matchFilter, lookupFields];
};

const userResolvers: TypedResolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    userByID: async (root, { _id }) => {
      return User.findOne({ _id: new ObjectId(_id) });
    },
    userByEmail: async (root, { email }) => {
      return User.findOne({ email, status: UserStatus.Active });
    },
    specialists: async (root, {}) => {
      return User.find({
        type: UserType.Specialist,
        status: UserStatus.Active,
      });
    },
    mostPopularSpecialists: async (root, { location_type, _service_category_id, search, offset, limit }) => {
      const [matchFilter, lookupFields] = getSpecialistQueryParameters({
        _service_category_id,
        search,
        location_type,
      });

      return User.aggregate([
        {
          $match: {
            type: UserType.Specialist,
            status: UserStatus.Active,
          },
        },
        ...lookupFields,
        {
          $match: matchFilter,
        },
        {
          $skip: offset || 0,
        },
        {
          $limit: limit || 99999,
        },
      ]);
    },
    specialistsNearYou: async (root, { coordinates, location_type, _service_category_id, search, offset, limit }) => {
      const [matchFilter, lookupFields] = getSpecialistQueryParameters({
        _service_category_id,
        search,
        location_type,
      });

      matchFilter['specialist_information.address.location'] = {
        $geoWithin: {
          $centerSphere: [coordinates, 5 / 6378.1], // 5 kilometers = The equatorial radius of the Earth is approximately 3,963.2 miles or 6,378.1 kilometers
        },
      };

      if (!search) {
        lookupFields.push(
          ...[
            {
              $lookup: {
                from: 'specialist_information',
                localField: '_id',
                foreignField: '_specialist_id',
                as: 'specialist_information',
              },
            },
            {
              $unwind: '$specialist_information',
            },
          ],
        );
      }

      return User.aggregate([
        {
          $match: {
            type: UserType.Specialist,
            status: UserStatus.Active,
          },
        },
        ...lookupFields,
        {
          $match: matchFilter,
        },
        {
          $skip: offset || 0,
        },
        {
          $limit: limit || 99999,
        },
      ]);
    },
  },
  User: {
    specialist_information: async ({ _id }) => {
      return SpecialistInformation.findOne({
        _specialist_id: new ObjectId(_id),
      });
    },
    Company: async ({ _id }) => {
      // Return all the companies the user belong to and are active
      return Company.find({ 'users._user_id': new ObjectId(_id), 'users.status': CompanyUserStatus.Active });
    },
  },
  Mutation: {
    createUser: (root, { user }) => {
      return usersApi.createUser(user);
    },
    updateUser: (root, { _id, user }) => {
      return usersApi.updateUser(_id, user);
    },
    finishRegistration: async (_root, { _id, user }) => {
      return usersApi.finishRegistration(_id, user);
    },
    login: (root, { email, password }) => {
      return usersApi.login(email, password);
    },
    loginAdmin: (root, { email, password }) => {
      return usersApi.loginAdmin(email, password);
    },
    forgotPassword: (root, { email }) => {
      return usersApi.forgotPassword(email);
    },
    changePassword: (root, { email, old_password, new_password }) => {
      return usersApi.changePassword(email, old_password, new_password);
    },
    deleteAccount: (root, { _id }) => {
      return usersApi.deleteAccount(_id);
    },
  },
};

export default userResolvers;
