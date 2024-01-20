import mongoose, { Types } from "mongoose";
import _ from "lodash";
import { CreateConcertInput, CreateTicketInput } from "../generated/graphql";
import { Concert } from "../models/concert";
import { ConcertTicket } from "../models/concert_ticket";

const { ObjectId } = Types;

const concertApi = {
  createConcert: async (concert: CreateConcertInput) => {
    const newConcert = await Concert.create({
      name: concert.name,
      start: concert.start,
      end: concert.end,
      artist: concert.artist,
      description: concert.description,
      price: concert.price,
      base_image: concert.base_image,
      available_tickets: concert.available_tickets,
      token_id: concert.token_id
    })

    return newConcert
  },
  
  purchaseTicket: async (ticketInfo: CreateTicketInput) => {
    // Create concert tickets
    const newTicket = await ConcertTicket.create({
      user_id: ticketInfo.user_id, 
      concert_id: ticketInfo.concert_id
    })

    return newTicket
    // console.log("purchaseTicket", _user_id, _concert_id);

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
