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
import { User } from "../models/user";

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
    const ticketAlreadyExists = await ConcertTicket.find({
      $and: [
        { user_id: ticketInfo.user_id },
        { concert_id: ticketInfo.concert_id },
      ],
    });

    if (ticketAlreadyExists.length)
      return new ApolloError("Ticket already exists");

    // Create concert tickets
    const newTicket = await ConcertTicket.create({
      user_id: ticketInfo.user_id,
      concert_id: ticketInfo.concert_id,
    });

    // Query on concerts
    const concert = await Concert.findOne({ _id: ticketInfo.concert_id });
    const user = await User.findOne({ _id: ticketInfo.user_id });

    const newStartDate = Intl.DateTimeFormat("en-au", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(concert?.start);

    const newEndDate = Intl.DateTimeFormat("en-au", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(concert?.start);

    const data = await fetch("https://hovercode.com/api/v2/hovercode/create/", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.HOVERCODE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workspace: process.env.HOVERCODE_ORG_ID,
        qr_data: `${process.env.FRONT_END_URL}/concert-tickets/${newTicket._id}`,
        primary_color: "#1DA1F2",
        generate_png: true,
      }),
    });

    const finalQR = await data.json();
    const qr_png_url = finalQR.png;
    // return

    SendGrid.sendMail(
      `${user?.email}`,
      {
        Name: concert?.name,
        Start: newStartDate,
        End: newEndDate,
        Description: concert?.description,
        Artist: concert?.artist,
        QRCODE: qr_png_url,
      },
      TICKET_EMAIL_TEMPLATE
    );

    // console.log(newTicket);

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
        attended: ticketInfo.attended,
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );

    return updatedTicket;
  },
};

export { concertApi };
