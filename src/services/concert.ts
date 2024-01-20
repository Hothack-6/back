import mongoose, { Types } from "mongoose";
import _ from "lodash";

const { ObjectId } = Types;

const concertApi = {
  purchaseTicket: async (_user_id, _concert_id) => {
    // Create concert tickets
    console.log("purchaseTicket", _user_id, _concert_id);

    // Send Sendgrid email to user

    // const newUser = await User.create({
    //   email: user.email,
    //   password: await bcrypt.hash(user.password, 10),
    //   type: user.type,
    //   status:
    //     user.type == UserType.User
    //       ? UserStatus.NotOnboarded
    //       : UserStatus.Active,
    // });
    return {};

    // return newUser;
  },
};

export { concertApi };
