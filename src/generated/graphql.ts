import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type RootSchema = {
  __typename?: 'RootSchema';
  status?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getStatus?: Maybe<Array<Maybe<RootSchema>>>;
  appVersion?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  userByID?: Maybe<User>;
  userByEmail?: Maybe<User>;
  specialists?: Maybe<Array<Maybe<User>>>;
  specialistsNearYou?: Maybe<Array<Maybe<User>>>;
  mostPopularSpecialists?: Maybe<Array<Maybe<User>>>;
  companies?: Maybe<Array<Maybe<Company>>>;
  companyByID?: Maybe<Company>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  bookingByID?: Maybe<Booking>;
  bookingsByCustomerID?: Maybe<Array<Maybe<Booking>>>;
  bookingsBySpecialistID?: Maybe<Array<Maybe<Booking>>>;
  serviceCategories?: Maybe<Array<Maybe<ServiceCategory>>>;
  serviceCategoryByID?: Maybe<ServiceCategory>;
  serviceSubcategories?: Maybe<Array<Maybe<ServiceSubcategory>>>;
  serviceSubcategoryByID?: Maybe<ServiceSubcategory>;
  serviceSubcategoriesByServiceCategoryID?: Maybe<
    Array<Maybe<ServiceSubcategory>>
  >;
  services?: Maybe<Array<Maybe<Service>>>;
  serviceByID?: Maybe<Service>;
  servicesByServiceCategoryID?: Maybe<Array<Maybe<Service>>>;
  servicesByServiceSubcategoryID?: Maybe<Array<Maybe<Service>>>;
  specialistServices?: Maybe<Array<Maybe<SpecialistService>>>;
  specialistServiceByID?: Maybe<SpecialistService>;
  specialistServicesBySpecialistID?: Maybe<Array<Maybe<SpecialistService>>>;
  specialistServicesByServiceCategoryID?: Maybe<
    Array<Maybe<SpecialistService>>
  >;
  specialistServicesByServiceSubcategoryID?: Maybe<
    Array<Maybe<SpecialistService>>
  >;
  specialistInformationByID?: Maybe<SpecialistInformation>;
  specialistInformationBySpecialistID?: Maybe<SpecialistInformation>;
  specialistInformationByCompanyID?: Maybe<Array<Maybe<SpecialistInformation>>>;
  passwordChangeRequestByRequestID?: Maybe<PasswordChangeRequest>;
  creditPacks?: Maybe<Array<Maybe<Credits>>>;
  creditActivityByID?: Maybe<CreditActivity>;
  transactionByID?: Maybe<Transactions>;
  couponByCode?: Maybe<Coupon>;
};

export type QueryAppVersionArgs = {
  app: Scalars['String'];
};

export type QueryUserByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export type QuerySpecialistsNearYouArgs = {
  coordinates: Array<InputMaybe<Scalars['Float']>>;
  location_type: LocationTypes;
  _service_category_id?: InputMaybe<Scalars['ID']>;
  search?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryMostPopularSpecialistsArgs = {
  location_type: LocationTypes;
  _service_category_id?: InputMaybe<Scalars['ID']>;
  search?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryCompanyByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryBookingByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryBookingsByCustomerIdArgs = {
  _customer_id: Scalars['ID'];
};

export type QueryBookingsBySpecialistIdArgs = {
  _specialist_id: Scalars['ID'];
  only_active_bookings?: InputMaybe<Scalars['Boolean']>;
  statuses?: InputMaybe<Array<InputMaybe<BookingStatus>>>;
  from_date?: InputMaybe<Scalars['Float']>;
  to_date?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryServiceCategoryByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryServiceSubcategoryByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryServiceSubcategoriesByServiceCategoryIdArgs = {
  _service_category_id: Scalars['ID'];
};

export type QueryServiceByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryServicesByServiceCategoryIdArgs = {
  _service_category_id: Scalars['ID'];
};

export type QueryServicesByServiceSubcategoryIdArgs = {
  _service_subcategory_id: Scalars['ID'];
};

export type QuerySpecialistServiceByIdArgs = {
  _id: Scalars['ID'];
};

export type QuerySpecialistServicesBySpecialistIdArgs = {
  _specialist_id: Scalars['ID'];
};

export type QuerySpecialistServicesByServiceCategoryIdArgs = {
  _service_category_id: Scalars['ID'];
};

export type QuerySpecialistServicesByServiceSubcategoryIdArgs = {
  _service_subcategory_id: Scalars['ID'];
};

export type QuerySpecialistInformationByIdArgs = {
  _id: Scalars['ID'];
};

export type QuerySpecialistInformationBySpecialistIdArgs = {
  _specialist_id: Scalars['ID'];
};

export type QuerySpecialistInformationByCompanyIdArgs = {
  _company_id: Scalars['ID'];
};

export type QueryPasswordChangeRequestByRequestIdArgs = {
  request_id: Scalars['Int'];
  email: Scalars['String'];
};

export type QueryCreditPacksArgs = {
  type?: InputMaybe<CreditsTypeEnum>;
};

export type QueryCreditActivityByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryTransactionByIdArgs = {
  _id: Scalars['ID'];
};

export type QueryCouponByCodeArgs = {
  code: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeStatus?: Maybe<RootSchema>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  finishRegistration?: Maybe<User>;
  login?: Maybe<User>;
  loginAdmin?: Maybe<User>;
  forgotPassword?: Maybe<User>;
  changePassword?: Maybe<User>;
  deleteAccount?: Maybe<User>;
  updateCompany?: Maybe<Company>;
  createCompany?: Maybe<Company>;
  addCompanyUser?: Maybe<Company>;
  createBooking?: Maybe<Booking>;
  updateBooking?: Maybe<Booking>;
  deleteBooking?: Maybe<Booking>;
  approveBooking?: Maybe<Booking>;
  rejectBooking?: Maybe<Booking>;
  updateServiceCategory?: Maybe<ServiceCategory>;
  createServiceCategory?: Maybe<ServiceCategory>;
  updateServiceSubcategory?: Maybe<ServiceSubcategory>;
  createServiceSubcategory?: Maybe<ServiceSubcategory>;
  deleteService?: Maybe<Service>;
  updateService?: Maybe<Service>;
  createService?: Maybe<Service>;
  deleteSpecialistService?: Maybe<SpecialistService>;
  updateSpecialistService?: Maybe<SpecialistService>;
  createSpecialistService?: Maybe<SpecialistService>;
  updateSpecialistInformation?: Maybe<SpecialistInformation>;
  createSpecialistInformation?: Maybe<SpecialistInformation>;
  changePasswordByRequestID?: Maybe<User>;
  createCreditActivity?: Maybe<CreditActivity>;
  importEmployees?: Maybe<Company>;
  createTransaction?: Maybe<Transactions>;
  confirmTransaction?: Maybe<Transactions>;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  user: UserInput;
};

export type MutationFinishRegistrationArgs = {
  _id: Scalars['ID'];
  user: UserInput;
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginAdminArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  email: Scalars['String'];
  old_password: Scalars['String'];
  new_password: Scalars['String'];
};

export type MutationDeleteAccountArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateCompanyArgs = {
  _id: Scalars['ID'];
  company: CompanyInput;
};

export type MutationCreateCompanyArgs = {
  company: CompanyInput;
};

export type MutationAddCompanyUserArgs = {
  _id: Scalars['ID'];
  email: Scalars['String'];
};

export type MutationCreateBookingArgs = {
  booking: BookingInput;
};

export type MutationUpdateBookingArgs = {
  _id: Scalars['ID'];
  booking: BookingInput;
};

export type MutationDeleteBookingArgs = {
  _id: Scalars['ID'];
};

export type MutationApproveBookingArgs = {
  _id: Scalars['ID'];
};

export type MutationRejectBookingArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateServiceCategoryArgs = {
  _id: Scalars['ID'];
  service_category: ServiceCategoryInput;
};

export type MutationCreateServiceCategoryArgs = {
  service_category: ServiceCategoryInput;
};

export type MutationUpdateServiceSubcategoryArgs = {
  _id: Scalars['ID'];
  service_subcategory: ServiceSubcategoryInput;
};

export type MutationCreateServiceSubcategoryArgs = {
  service_subcategory: ServiceSubcategoryInput;
};

export type MutationDeleteServiceArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateServiceArgs = {
  _id: Scalars['ID'];
  service: ServiceInput;
};

export type MutationCreateServiceArgs = {
  service: ServiceInput;
};

export type MutationDeleteSpecialistServiceArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateSpecialistServiceArgs = {
  _id: Scalars['ID'];
  specialist_service: SpecialistServiceInput;
};

export type MutationCreateSpecialistServiceArgs = {
  specialist_service: SpecialistServiceInput;
};

export type MutationUpdateSpecialistInformationArgs = {
  _id: Scalars['ID'];
  specialist_information: SpecialistInformationInput;
};

export type MutationCreateSpecialistInformationArgs = {
  specialist_information: SpecialistInformationInput;
};

export type MutationChangePasswordByRequestIdArgs = {
  email: Scalars['String'];
  request_id: Scalars['Int'];
  new_password: Scalars['String'];
};

export type MutationCreateCreditActivityArgs = {
  credit_activity: CreditActivityInput;
};

export type MutationImportEmployeesArgs = {
  _company_id: Scalars['ID'];
  base64_file: Scalars['String'];
  file_name: Scalars['String'];
};

export type MutationCreateTransactionArgs = {
  transaction: TransactionsInput;
};

export type MutationConfirmTransactionArgs = {
  _id: Scalars['ID'];
};

export enum UserStatus {
  Inactive = 'inactive',
  Active = 'active',
  NotOnboarded = 'not_onboarded',
  Banned = 'banned',
  Deleted = 'deleted',
}

export enum UserType {
  User = 'user',
  Specialist = 'specialist',
  Company = 'company',
}

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  status?: Maybe<UserStatus>;
  type?: Maybe<UserType>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  picture?: Maybe<Scalars['String']>;
  expo_push_token?: Maybe<Scalars['String']>;
  specialist_information?: Maybe<SpecialistInformation>;
  wallet?: Maybe<UserWalletType>;
  Company?: Maybe<Array<Maybe<Company>>>;
};

export type UserWalletType = {
  __typename?: 'UserWalletType';
  credits?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserType>;
  status?: InputMaybe<UserStatus>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  picture?: InputMaybe<Scalars['String']>;
  expo_push_token?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  type?: InputMaybe<UserType>;
};

export enum AddressType {
  Home = 'home',
  Work = 'work',
  Gps = 'gps',
  Other = 'other',
}

export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID'];
  type: AddressType;
  name?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
  formatted_address?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  is_current?: Maybe<Scalars['Boolean']>;
  location?: Maybe<LocationType>;
};

export type LocationType = {
  __typename?: 'LocationType';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type AddressInput = {
  _id: Scalars['ID'];
  type: AddressType;
  name?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  complement?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['String']>;
  formatted_address?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  is_current?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationInput>;
};

export type LocationInput = {
  type?: InputMaybe<Scalars['String']>;
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum DayOfTheWeek {
  WorkDays = 'work_days',
  Weekends = 'weekends',
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
}

export type AvailableTime = {
  __typename?: 'AvailableTime';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
};

export type WorkingHour = {
  __typename?: 'WorkingHour';
  day_of_the_week?: Maybe<DayOfTheWeek>;
  available_time?: Maybe<AvailableTime>;
};

export type AvailableTimeInput = {
  start?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['Float']>;
};

export type WorkingHourInput = {
  day_of_the_week?: InputMaybe<DayOfTheWeek>;
  available_time?: InputMaybe<AvailableTimeInput>;
};

export enum CompanyCategory {
  Barber = 'barber',
  Saloon = 'saloon',
  Company = 'company',
  Other = 'other',
}

export enum CompanyType {
  Company = 'company',
  Specialist = 'specialist',
}

export enum CompanyStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export enum CompanyUserStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID'];
  name: Scalars['String'];
  type: CompanyType;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<CompanyCategory>>>;
  status?: Maybe<CompanyStatus>;
  address?: Maybe<Address>;
  instagram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  working_hour?: Maybe<WorkingHour>;
  abn_number?: Maybe<Scalars['String']>;
  bsb_number?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  users?: Maybe<Array<Maybe<CompanyUsersType>>>;
  wallet?: Maybe<CompanyWalletType>;
  employees?: Maybe<Array<Maybe<User>>>;
};

export type CompanyUsersType = {
  __typename?: 'CompanyUsersType';
  _id?: Maybe<Scalars['ID']>;
  status?: Maybe<CompanyUserStatus>;
};

export type CompanyWalletType = {
  __typename?: 'CompanyWalletType';
  credits?: Maybe<Scalars['Int']>;
};

export type CompanyInput = {
  name: Scalars['String'];
  type: CompanyType;
  email?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Array<InputMaybe<CompanyCategory>>>;
  status?: InputMaybe<CompanyStatus>;
  address?: InputMaybe<AddressInput>;
  instagram?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  working_hour?: InputMaybe<Array<InputMaybe<WorkingHourInput>>>;
  abn_number?: InputMaybe<Scalars['String']>;
  bsb_number?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
};

export enum BookingStatus {
  Draft = 'draft',
  Active = 'active',
  Completed = 'completed',
  CancelledBySpecialist = 'cancelled_by_specialist',
  CancelledByCustomer = 'cancelled_by_customer',
  Declined = 'declined',
  InReview = 'in_review',
  Removed = 'removed',
}

export type Booking = {
  __typename?: 'Booking';
  _id: Scalars['ID'];
  _specialist_id: Scalars['ID'];
  _customer_id: Scalars['ID'];
  status: BookingStatus;
  booking_date?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<BookingService>>>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  specialist_information?: Maybe<SpecialistInformation>;
  booking_duration?: Maybe<Scalars['Int']>;
  location_type?: Maybe<LocationTypes>;
  customer_address?: Maybe<Address>;
  customer?: Maybe<User>;
};

export type BookingService = {
  __typename?: 'BookingService';
  _service_id: Scalars['ID'];
  _specialist_service_id: Scalars['ID'];
  specialist_service?: Maybe<SpecialistService>;
};

export type BookingInput = {
  _specialist_id: Scalars['ID'];
  _customer_id: Scalars['ID'];
  status: BookingStatus;
  booking_date?: InputMaybe<Scalars['Float']>;
  total?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<BookingServiceInput>>>;
  customer_address?: InputMaybe<AddressInput>;
  location_type?: InputMaybe<LocationTypes>;
};

export type BookingServiceInput = {
  _service_id: Scalars['ID'];
  _specialist_service_id: Scalars['ID'];
};

export enum ServiceCategoryStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  _id: Scalars['ID'];
  name: Scalars['String'];
  status?: Maybe<ServiceCategoryStatus>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
};

export type ServiceCategoryInput = {
  name: Scalars['String'];
  status?: InputMaybe<ServiceCategoryStatus>;
};

export enum ServiceSubcategoryStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type ServiceSubcategory = {
  __typename?: 'ServiceSubcategory';
  _id: Scalars['ID'];
  _service_category_id: Scalars['ID'];
  name: Scalars['String'];
  status: ServiceSubcategoryStatus;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  service_category?: Maybe<ServiceCategory>;
};

export type ServiceSubcategoryInput = {
  _service_category_id: Scalars['ID'];
  name: Scalars['String'];
  status: ServiceSubcategoryStatus;
};

export enum ServiceStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type Service = {
  __typename?: 'Service';
  _id: Scalars['ID'];
  _service_category_id: Scalars['ID'];
  _service_subcategory_id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ServiceStatus>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  service_category?: Maybe<ServiceCategory>;
  service_subcategory?: Maybe<ServiceSubcategory>;
  service_bookings_count?: Maybe<Scalars['Int']>;
};

export type ServiceInput = {
  _service_category_id: Scalars['ID'];
  _service_subcategory_id: Scalars['ID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ServiceStatus>;
};

export enum SpecialistServiceStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export type SpecialistService = {
  __typename?: 'SpecialistService';
  _id: Scalars['ID'];
  _specialist_id: Scalars['ID'];
  _service_category_id: Scalars['ID'];
  _service_subcategory_id: Scalars['ID'];
  _service_id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<SpecialistServiceStatus>;
  price?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  specialist?: Maybe<User>;
  service?: Maybe<Service>;
  service_category?: Maybe<ServiceCategory>;
  service_subcategory?: Maybe<ServiceSubcategory>;
  service_bookings_count?: Maybe<Scalars['Int']>;
};

export type SpecialistServiceInput = {
  _specialist_id: Scalars['ID'];
  _service_category_id: Scalars['ID'];
  _service_subcategory_id: Scalars['ID'];
  _service_id: Scalars['ID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SpecialistServiceStatus>;
  price?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Int']>;
};

export enum LocationTypes {
  SpecialistAddress = 'specialist_address',
  UserAddress = 'user_address',
}

export type SpecialistInformation = {
  __typename?: 'SpecialistInformation';
  _id: Scalars['ID'];
  _specialist_id: Scalars['ID'];
  _company_id?: Maybe<Scalars['ID']>;
  business_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  instagram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  working_hour?: Maybe<Array<Maybe<WorkingHour>>>;
  created?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['Float']>;
  specialist?: Maybe<User>;
  /**  Photos that get displayed on the specialist details page  */
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_types?: Maybe<Array<Maybe<LocationTypes>>>;
};

export type SpecialistInformationInput = {
  _specialist_id?: InputMaybe<Scalars['ID']>;
  _company_id?: InputMaybe<Scalars['ID']>;
  business_name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressInput>;
  instagram?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  working_hour?: InputMaybe<Array<InputMaybe<WorkingHourInput>>>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_types?: InputMaybe<Array<InputMaybe<LocationTypes>>>;
};

export type PasswordChangeRequest = {
  __typename?: 'PasswordChangeRequest';
  _id: Scalars['ID'];
  request_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Float']>;
};

export enum CreditsTypeEnum {
  Pack = 'pack',
  Adhoc = 'adhoc',
}

export type Credits = {
  __typename?: 'Credits';
  _id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  type?: Maybe<CreditsTypeEnum>;
  price?: Maybe<Array<Maybe<CreditsPriceType>>>;
};

export type CreditsPriceType = {
  __typename?: 'CreditsPriceType';
  currency_code?: Maybe<Scalars['String']>;
  currency_symbol?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export enum CreditActivityAccountingTypes {
  Debit = 'debit',
  Credit = 'credit',
}

export enum CreditActivityTypes {
  Usage = 'usage',
  Purchase = 'purchase',
  Refund = 'refund',
  AdminAdjustment = 'admin_adjustment',
}

export type CreditActivity = {
  __typename?: 'CreditActivity';
  _id: Scalars['ID'];
  _user_id?: Maybe<Scalars['ID']>;
  _company_id?: Maybe<Scalars['ID']>;
  _booking_id?: Maybe<Scalars['ID']>;
  _transaction_id?: Maybe<Scalars['ID']>;
  created?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
  /**  Debit (User balance goes down), Credit (User balance goes up)  */
  accounting_type?: Maybe<CreditActivityAccountingTypes>;
  type?: Maybe<CreditActivityTypes>;
};

export type CreditActivityInput = {
  _user_id?: InputMaybe<Scalars['ID']>;
  _company_id?: InputMaybe<Scalars['ID']>;
  _booking_id?: InputMaybe<Scalars['ID']>;
  _transaction_id?: InputMaybe<Scalars['ID']>;
  amount: Scalars['Float'];
  accounting_type?: InputMaybe<CreditActivityAccountingTypes>;
  type?: InputMaybe<CreditActivityTypes>;
};

/**  Debit (Someone pays Glow), Credit (Glow pays someone)  */
export enum AccountingTypes {
  Debit = 'debit',
  Credit = 'credit',
}

export enum TransactionTypes {
  CreditPurchase = 'credit_purchase',
  CreditRefund = 'credit_refund',
}

export enum TransactionStatus {
  Completed = 'completed',
  Pending = 'pending',
  Cancelled = 'cancelled',
}

export enum TransactionMethods {
  CreditCard = 'credit_card',
  Invoice = 'invoice',
}

export type Transactions = {
  __typename?: 'Transactions';
  _id: Scalars['ID'];
  _user_id?: Maybe<Scalars['ID']>;
  _company_id?: Maybe<Scalars['ID']>;
  created?: Maybe<Scalars['Float']>;
  accounting_type?: Maybe<AccountingTypes>;
  type?: Maybe<TransactionTypes>;
  status?: Maybe<TransactionStatus>;
  currency_code?: Maybe<Scalars['String']>;
  currency_symbol?: Maybe<Scalars['String']>;
  total_amount?: Maybe<Scalars['Float']>;
  method?: Maybe<TransactionMethods>;
  provider?: Maybe<ProviderTransactions>;
};

export type ProviderTransactions = {
  __typename?: 'ProviderTransactions';
  /**  Name of the 3rd party integration  */
  name?: Maybe<Scalars['String']>;
  /**  Id in the format that the 3rd party uses  */
  reference?: Maybe<Scalars['String']>;
  /**  URL to view more details about the transaction  */
  url?: Maybe<Scalars['String']>;
  /**  Client Secret from the 3rd party integration  */
  client_secret?: Maybe<Scalars['String']>;
  /**  CustomerID from the 3rd party integration  */
  customer?: Maybe<Scalars['String']>;
  /**  EphemeralKey from the 3rd party integration  */
  ephemeralKey?: Maybe<Scalars['String']>;
};

export type TransactionsInput = {
  _user_id: Scalars['ID'];
  _company_id?: InputMaybe<Scalars['ID']>;
  accounting_type?: InputMaybe<AccountingTypes>;
  type?: InputMaybe<TransactionTypes>;
  status?: InputMaybe<TransactionStatus>;
  currency_code?: InputMaybe<Scalars['String']>;
  currency_symbol?: InputMaybe<Scalars['String']>;
  total_amount?: InputMaybe<Scalars['Float']>;
  method?: InputMaybe<TransactionMethods>;
};

export enum DiscountType {
  Currency = 'currency',
  Percentage = 'percentage',
}

export type Coupon = {
  __typename?: 'Coupon';
  _id: Scalars['ID'];
  created?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  discount_value?: Maybe<Scalars['Float']>;
  discount_type?: Maybe<DiscountType>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootSchema: ResolverTypeWrapper<RootSchema>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  UserStatus: UserStatus;
  UserType: UserType;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  UserWalletType: ResolverTypeWrapper<UserWalletType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UserInput: UserInput;
  CreateUserInput: CreateUserInput;
  AddressType: AddressType;
  Address: ResolverTypeWrapper<Address>;
  LocationType: ResolverTypeWrapper<LocationType>;
  AddressInput: AddressInput;
  LocationInput: LocationInput;
  DayOfTheWeek: DayOfTheWeek;
  AvailableTime: ResolverTypeWrapper<AvailableTime>;
  WorkingHour: ResolverTypeWrapper<WorkingHour>;
  AvailableTimeInput: AvailableTimeInput;
  WorkingHourInput: WorkingHourInput;
  CompanyCategory: CompanyCategory;
  CompanyType: CompanyType;
  CompanyStatus: CompanyStatus;
  CompanyUserStatus: CompanyUserStatus;
  Company: ResolverTypeWrapper<Company>;
  CompanyUsersType: ResolverTypeWrapper<CompanyUsersType>;
  CompanyWalletType: ResolverTypeWrapper<CompanyWalletType>;
  CompanyInput: CompanyInput;
  BookingStatus: BookingStatus;
  Booking: ResolverTypeWrapper<Booking>;
  BookingService: ResolverTypeWrapper<BookingService>;
  BookingInput: BookingInput;
  BookingServiceInput: BookingServiceInput;
  ServiceCategoryStatus: ServiceCategoryStatus;
  ServiceCategory: ResolverTypeWrapper<ServiceCategory>;
  ServiceCategoryInput: ServiceCategoryInput;
  ServiceSubcategoryStatus: ServiceSubcategoryStatus;
  ServiceSubcategory: ResolverTypeWrapper<ServiceSubcategory>;
  ServiceSubcategoryInput: ServiceSubcategoryInput;
  ServiceStatus: ServiceStatus;
  Service: ResolverTypeWrapper<Service>;
  ServiceInput: ServiceInput;
  SpecialistServiceStatus: SpecialistServiceStatus;
  SpecialistService: ResolverTypeWrapper<SpecialistService>;
  SpecialistServiceInput: SpecialistServiceInput;
  LocationTypes: LocationTypes;
  SpecialistInformation: ResolverTypeWrapper<SpecialistInformation>;
  SpecialistInformationInput: SpecialistInformationInput;
  PasswordChangeRequest: ResolverTypeWrapper<PasswordChangeRequest>;
  CreditsTypeEnum: CreditsTypeEnum;
  Credits: ResolverTypeWrapper<Credits>;
  CreditsPriceType: ResolverTypeWrapper<CreditsPriceType>;
  CreditActivityAccountingTypes: CreditActivityAccountingTypes;
  CreditActivityTypes: CreditActivityTypes;
  CreditActivity: ResolverTypeWrapper<CreditActivity>;
  CreditActivityInput: CreditActivityInput;
  AccountingTypes: AccountingTypes;
  TransactionTypes: TransactionTypes;
  TransactionStatus: TransactionStatus;
  TransactionMethods: TransactionMethods;
  Transactions: ResolverTypeWrapper<Transactions>;
  ProviderTransactions: ResolverTypeWrapper<ProviderTransactions>;
  TransactionsInput: TransactionsInput;
  DiscountType: DiscountType;
  Coupon: ResolverTypeWrapper<Coupon>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootSchema: RootSchema;
  Boolean: Scalars['Boolean'];
  Query: {};
  String: Scalars['String'];
  Mutation: {};
  JSON: Scalars['JSON'];
  User: User;
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  UserWalletType: UserWalletType;
  Int: Scalars['Int'];
  UserInput: UserInput;
  CreateUserInput: CreateUserInput;
  Address: Address;
  LocationType: LocationType;
  AddressInput: AddressInput;
  LocationInput: LocationInput;
  AvailableTime: AvailableTime;
  WorkingHour: WorkingHour;
  AvailableTimeInput: AvailableTimeInput;
  WorkingHourInput: WorkingHourInput;
  Company: Company;
  CompanyUsersType: CompanyUsersType;
  CompanyWalletType: CompanyWalletType;
  CompanyInput: CompanyInput;
  Booking: Booking;
  BookingService: BookingService;
  BookingInput: BookingInput;
  BookingServiceInput: BookingServiceInput;
  ServiceCategory: ServiceCategory;
  ServiceCategoryInput: ServiceCategoryInput;
  ServiceSubcategory: ServiceSubcategory;
  ServiceSubcategoryInput: ServiceSubcategoryInput;
  Service: Service;
  ServiceInput: ServiceInput;
  SpecialistService: SpecialistService;
  SpecialistServiceInput: SpecialistServiceInput;
  SpecialistInformation: SpecialistInformation;
  SpecialistInformationInput: SpecialistInformationInput;
  PasswordChangeRequest: PasswordChangeRequest;
  Credits: Credits;
  CreditsPriceType: CreditsPriceType;
  CreditActivity: CreditActivity;
  CreditActivityInput: CreditActivityInput;
  Transactions: Transactions;
  ProviderTransactions: ProviderTransactions;
  TransactionsInput: TransactionsInput;
  Coupon: Coupon;
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CacheControlDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RootSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RootSchema'] = ResolversParentTypes['RootSchema'],
> = {
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getStatus?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['RootSchema']>>>,
    ParentType,
    ContextType
  >;
  appVersion?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QueryAppVersionArgs, 'app'>
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  userByID?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, '_id'>
  >;
  userByEmail?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByEmailArgs, 'email'>
  >;
  specialists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  specialistsNearYou?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecialistsNearYouArgs, 'coordinates' | 'location_type'>
  >;
  mostPopularSpecialists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryMostPopularSpecialistsArgs, 'location_type'>
  >;
  companies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Company']>>>,
    ParentType,
    ContextType
  >;
  companyByID?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyByIdArgs, '_id'>
  >;
  bookings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Booking']>>>,
    ParentType,
    ContextType
  >;
  bookingByID?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<QueryBookingByIdArgs, '_id'>
  >;
  bookingsByCustomerID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Booking']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryBookingsByCustomerIdArgs, '_customer_id'>
  >;
  bookingsBySpecialistID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Booking']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryBookingsBySpecialistIdArgs, '_specialist_id'>
  >;
  serviceCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ServiceCategory']>>>,
    ParentType,
    ContextType
  >;
  serviceCategoryByID?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType,
    RequireFields<QueryServiceCategoryByIdArgs, '_id'>
  >;
  serviceSubcategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ServiceSubcategory']>>>,
    ParentType,
    ContextType
  >;
  serviceSubcategoryByID?: Resolver<
    Maybe<ResolversTypes['ServiceSubcategory']>,
    ParentType,
    ContextType,
    RequireFields<QueryServiceSubcategoryByIdArgs, '_id'>
  >;
  serviceSubcategoriesByServiceCategoryID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ServiceSubcategory']>>>,
    ParentType,
    ContextType,
    RequireFields<
      QueryServiceSubcategoriesByServiceCategoryIdArgs,
      '_service_category_id'
    >
  >;
  services?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Service']>>>,
    ParentType,
    ContextType
  >;
  serviceByID?: Resolver<
    Maybe<ResolversTypes['Service']>,
    ParentType,
    ContextType,
    RequireFields<QueryServiceByIdArgs, '_id'>
  >;
  servicesByServiceCategoryID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Service']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryServicesByServiceCategoryIdArgs, '_service_category_id'>
  >;
  servicesByServiceSubcategoryID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Service']>>>,
    ParentType,
    ContextType,
    RequireFields<
      QueryServicesByServiceSubcategoryIdArgs,
      '_service_subcategory_id'
    >
  >;
  specialistServices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SpecialistService']>>>,
    ParentType,
    ContextType
  >;
  specialistServiceByID?: Resolver<
    Maybe<ResolversTypes['SpecialistService']>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecialistServiceByIdArgs, '_id'>
  >;
  specialistServicesBySpecialistID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SpecialistService']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecialistServicesBySpecialistIdArgs, '_specialist_id'>
  >;
  specialistServicesByServiceCategoryID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SpecialistService']>>>,
    ParentType,
    ContextType,
    RequireFields<
      QuerySpecialistServicesByServiceCategoryIdArgs,
      '_service_category_id'
    >
  >;
  specialistServicesByServiceSubcategoryID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SpecialistService']>>>,
    ParentType,
    ContextType,
    RequireFields<
      QuerySpecialistServicesByServiceSubcategoryIdArgs,
      '_service_subcategory_id'
    >
  >;
  specialistInformationByID?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecialistInformationByIdArgs, '_id'>
  >;
  specialistInformationBySpecialistID?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType,
    RequireFields<
      QuerySpecialistInformationBySpecialistIdArgs,
      '_specialist_id'
    >
  >;
  specialistInformationByCompanyID?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SpecialistInformation']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecialistInformationByCompanyIdArgs, '_company_id'>
  >;
  passwordChangeRequestByRequestID?: Resolver<
    Maybe<ResolversTypes['PasswordChangeRequest']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryPasswordChangeRequestByRequestIdArgs,
      'request_id' | 'email'
    >
  >;
  creditPacks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Credits']>>>,
    ParentType,
    ContextType,
    Partial<QueryCreditPacksArgs>
  >;
  creditActivityByID?: Resolver<
    Maybe<ResolversTypes['CreditActivity']>,
    ParentType,
    ContextType,
    RequireFields<QueryCreditActivityByIdArgs, '_id'>
  >;
  transactionByID?: Resolver<
    Maybe<ResolversTypes['Transactions']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransactionByIdArgs, '_id'>
  >;
  couponByCode?: Resolver<
    Maybe<ResolversTypes['Coupon']>,
    ParentType,
    ContextType,
    RequireFields<QueryCouponByCodeArgs, 'code'>
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  changeStatus?: Resolver<
    Maybe<ResolversTypes['RootSchema']>,
    ParentType,
    ContextType
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'user'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, '_id' | 'user'>
  >;
  finishRegistration?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationFinishRegistrationArgs, '_id' | 'user'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >;
  loginAdmin?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginAdminArgs, 'email' | 'password'>
  >;
  forgotPassword?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'email'>
  >;
  changePassword?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationChangePasswordArgs,
      'email' | 'old_password' | 'new_password'
    >
  >;
  deleteAccount?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAccountArgs, '_id'>
  >;
  updateCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyArgs, '_id' | 'company'>
  >;
  createCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, 'company'>
  >;
  addCompanyUser?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCompanyUserArgs, '_id' | 'email'>
  >;
  createBooking?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBookingArgs, 'booking'>
  >;
  updateBooking?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBookingArgs, '_id' | 'booking'>
  >;
  deleteBooking?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBookingArgs, '_id'>
  >;
  approveBooking?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<MutationApproveBookingArgs, '_id'>
  >;
  rejectBooking?: Resolver<
    Maybe<ResolversTypes['Booking']>,
    ParentType,
    ContextType,
    RequireFields<MutationRejectBookingArgs, '_id'>
  >;
  updateServiceCategory?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateServiceCategoryArgs, '_id' | 'service_category'>
  >;
  createServiceCategory?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateServiceCategoryArgs, 'service_category'>
  >;
  updateServiceSubcategory?: Resolver<
    Maybe<ResolversTypes['ServiceSubcategory']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateServiceSubcategoryArgs,
      '_id' | 'service_subcategory'
    >
  >;
  createServiceSubcategory?: Resolver<
    Maybe<ResolversTypes['ServiceSubcategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateServiceSubcategoryArgs, 'service_subcategory'>
  >;
  deleteService?: Resolver<
    Maybe<ResolversTypes['Service']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteServiceArgs, '_id'>
  >;
  updateService?: Resolver<
    Maybe<ResolversTypes['Service']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateServiceArgs, '_id' | 'service'>
  >;
  createService?: Resolver<
    Maybe<ResolversTypes['Service']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateServiceArgs, 'service'>
  >;
  deleteSpecialistService?: Resolver<
    Maybe<ResolversTypes['SpecialistService']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSpecialistServiceArgs, '_id'>
  >;
  updateSpecialistService?: Resolver<
    Maybe<ResolversTypes['SpecialistService']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateSpecialistServiceArgs,
      '_id' | 'specialist_service'
    >
  >;
  createSpecialistService?: Resolver<
    Maybe<ResolversTypes['SpecialistService']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSpecialistServiceArgs, 'specialist_service'>
  >;
  updateSpecialistInformation?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateSpecialistInformationArgs,
      '_id' | 'specialist_information'
    >
  >;
  createSpecialistInformation?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateSpecialistInformationArgs,
      'specialist_information'
    >
  >;
  changePasswordByRequestID?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationChangePasswordByRequestIdArgs,
      'email' | 'request_id' | 'new_password'
    >
  >;
  createCreditActivity?: Resolver<
    Maybe<ResolversTypes['CreditActivity']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCreditActivityArgs, 'credit_activity'>
  >;
  importEmployees?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationImportEmployeesArgs,
      '_company_id' | 'base64_file' | 'file_name'
    >
  >;
  createTransaction?: Resolver<
    Maybe<ResolversTypes['Transactions']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTransactionArgs, 'transaction'>
  >;
  confirmTransaction?: Resolver<
    Maybe<ResolversTypes['Transactions']>,
    ParentType,
    ContextType,
    RequireFields<MutationConfirmTransactionArgs, '_id'>
  >;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes['UserStatus']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>;
  firstname?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthdate?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  addresses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Address']>>>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expo_push_token?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  specialist_information?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType
  >;
  wallet?: Resolver<
    Maybe<ResolversTypes['UserWalletType']>,
    ParentType,
    ContextType
  >;
  Company?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Company']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserWalletType'] = ResolversParentTypes['UserWalletType'],
> = {
  credits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AddressType'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complement?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted_address?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_current?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  location?: Resolver<
    Maybe<ResolversTypes['LocationType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LocationType'] = ResolversParentTypes['LocationType'],
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coordinates?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Float']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AvailableTime'] = ResolversParentTypes['AvailableTime'],
> = {
  start?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkingHourResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WorkingHour'] = ResolversParentTypes['WorkingHour'],
> = {
  day_of_the_week?: Resolver<
    Maybe<ResolversTypes['DayOfTheWeek']>,
    ParentType,
    ContextType
  >;
  available_time?: Resolver<
    Maybe<ResolversTypes['AvailableTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CompanyType'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CompanyCategory']>>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes['CompanyStatus']>,
    ParentType,
    ContextType
  >;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  instagram?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  working_hour?: Resolver<
    Maybe<ResolversTypes['WorkingHour']>,
    ParentType,
    ContextType
  >;
  abn_number?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  bsb_number?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  account_number?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CompanyUsersType']>>>,
    ParentType,
    ContextType
  >;
  wallet?: Resolver<
    Maybe<ResolversTypes['CompanyWalletType']>,
    ParentType,
    ContextType
  >;
  employees?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyUsersTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanyUsersType'] = ResolversParentTypes['CompanyUsersType'],
> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes['CompanyUserStatus']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyWalletTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanyWalletType'] = ResolversParentTypes['CompanyWalletType'],
> = {
  credits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _specialist_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _customer_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BookingStatus'], ParentType, ContextType>;
  booking_date?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  services?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['BookingService']>>>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  specialist_information?: Resolver<
    Maybe<ResolversTypes['SpecialistInformation']>,
    ParentType,
    ContextType
  >;
  booking_duration?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  location_type?: Resolver<
    Maybe<ResolversTypes['LocationTypes']>,
    ParentType,
    ContextType
  >;
  customer_address?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  customer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingServiceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookingService'] = ResolversParentTypes['BookingService'],
> = {
  _service_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _specialist_service_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  specialist_service?: Resolver<
    Maybe<ResolversTypes['SpecialistService']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServiceCategory'] = ResolversParentTypes['ServiceCategory'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes['ServiceCategoryStatus']>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceSubcategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServiceSubcategory'] = ResolversParentTypes['ServiceSubcategory'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _service_category_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['ServiceSubcategoryStatus'],
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  service_category?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _service_category_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  _service_subcategory_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes['ServiceStatus']>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  service_category?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType
  >;
  service_subcategory?: Resolver<
    Maybe<ResolversTypes['ServiceSubcategory']>,
    ParentType,
    ContextType
  >;
  service_bookings_count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecialistServiceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SpecialistService'] = ResolversParentTypes['SpecialistService'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _specialist_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _service_category_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  _service_subcategory_id?: Resolver<
    ResolversTypes['ID'],
    ParentType,
    ContextType
  >;
  _service_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes['SpecialistServiceStatus']>,
    ParentType,
    ContextType
  >;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  specialist?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  service_category?: Resolver<
    Maybe<ResolversTypes['ServiceCategory']>,
    ParentType,
    ContextType
  >;
  service_subcategory?: Resolver<
    Maybe<ResolversTypes['ServiceSubcategory']>,
    ParentType,
    ContextType
  >;
  service_bookings_count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecialistInformationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SpecialistInformation'] = ResolversParentTypes['SpecialistInformation'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _specialist_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _company_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  business_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  instagram?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  working_hour?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['WorkingHour']>>>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  specialist?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  photos?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  location_types?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['LocationTypes']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordChangeRequestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PasswordChangeRequest'] = ResolversParentTypes['PasswordChangeRequest'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  request_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Credits'] = ResolversParentTypes['Credits'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['CreditsTypeEnum']>,
    ParentType,
    ContextType
  >;
  price?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CreditsPriceType']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditsPriceTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreditsPriceType'] = ResolversParentTypes['CreditsPriceType'],
> = {
  currency_code?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  currency_symbol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreditActivity'] = ResolversParentTypes['CreditActivity'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _user_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _company_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _booking_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _transaction_id?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  accounting_type?: Resolver<
    Maybe<ResolversTypes['CreditActivityAccountingTypes']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes['CreditActivityTypes']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Transactions'] = ResolversParentTypes['Transactions'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _user_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _company_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accounting_type?: Resolver<
    Maybe<ResolversTypes['AccountingTypes']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes['TransactionTypes']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes['TransactionStatus']>,
    ParentType,
    ContextType
  >;
  currency_code?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  currency_symbol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  total_amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  method?: Resolver<
    Maybe<ResolversTypes['TransactionMethods']>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<
    Maybe<ResolversTypes['ProviderTransactions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProviderTransactions'] = ResolversParentTypes['ProviderTransactions'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_secret?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ephemeralKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount_value?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  discount_type?: Resolver<
    Maybe<ResolversTypes['DiscountType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  RootSchema?: RootSchemaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserWalletType?: UserWalletTypeResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  LocationType?: LocationTypeResolvers<ContextType>;
  AvailableTime?: AvailableTimeResolvers<ContextType>;
  WorkingHour?: WorkingHourResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyUsersType?: CompanyUsersTypeResolvers<ContextType>;
  CompanyWalletType?: CompanyWalletTypeResolvers<ContextType>;
  Booking?: BookingResolvers<ContextType>;
  BookingService?: BookingServiceResolvers<ContextType>;
  ServiceCategory?: ServiceCategoryResolvers<ContextType>;
  ServiceSubcategory?: ServiceSubcategoryResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  SpecialistService?: SpecialistServiceResolvers<ContextType>;
  SpecialistInformation?: SpecialistInformationResolvers<ContextType>;
  PasswordChangeRequest?: PasswordChangeRequestResolvers<ContextType>;
  Credits?: CreditsResolvers<ContextType>;
  CreditsPriceType?: CreditsPriceTypeResolvers<ContextType>;
  CreditActivity?: CreditActivityResolvers<ContextType>;
  Transactions?: TransactionsResolvers<ContextType>;
  ProviderTransactions?: ProviderTransactionsResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
