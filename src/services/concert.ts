import mongoose, { Types } from "mongoose";
import _ from "lodash";
import {
  CreateConcertInput,
  CreateTicketInput,
  UpdateTicketInput,
} from "../generated/graphql";
import { Concert } from "../models/concert";
import { ConcertTicket } from "../models/concert_ticket";
import { SendGrid, TICKET_EMAIL_TEMPLATE } from "../lib/sendgrid";
import { ApolloError } from "apollo-server-express";

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
      token_id: concert.token_id,
    });

    return newConcert;
  },

  purchaseTicket: async (ticketInfo: CreateTicketInput) => {
    const  ticketAlreadyExists = await ConcertTicket.find({
      $and: [{user_id: ticketInfo.user_id}, {concert_id: ticketInfo.concert_id}]
    })

    if(ticketAlreadyExists.length) return new ApolloError("Ticket already exists")

    // Create concert tickets
    const newTicket = await ConcertTicket.create({
      user_id: ticketInfo.user_id, 
      concert_id: ticketInfo.concert_id
    })
    
    // Query on concerts
    const concert = await Concert.findOne({ _id: ticketInfo.concert_id });

    //console.log(concert);

    const newStartDate = Intl.DateTimeFormat("en-au", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(concert?.start)

    const newEndDate = Intl.DateTimeFormat("en-au", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(concert?.start)

    console.log(newStartDate)
    console.log(newEndDate)

    SendGrid.sendMail('danielvantran09@gmail.com', {
      Name: concert?.name,
      Start: newStartDate,
      End: newEndDate,
      Description: concert?.description,
      Artist: concert?.artist
    }, TICKET_EMAIL_TEMPLATE)

    console.log(newTicket);

    return newTicket;

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

    // return newUser;
  },

  updateAttendance: async (ticketInfo: UpdateTicketInput) => {
    const updatedTicket = await ConcertTicket.findOneAndUpdate(
      { concert_id: ticketInfo.concert_id, user_id: ticketInfo.user_id },
      {
        attended: ticketInfo.attended
      }, {
        upsert: true,
        returnDocument: "after"
      }
    )

    return updatedTicket;
  },
};

export { concertApi };
