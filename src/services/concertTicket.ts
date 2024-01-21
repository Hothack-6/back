import { Types } from "mongoose";
import _ from "lodash";
import { ConcertTicket } from "../models/concert_ticket";

const { ObjectId } = Types;

const concertTicketApi = {
    // Concertticket.update
    // Update the concert tickets table attended to true
    // Return the Ticket ID

    redeemQRCode: async (_id: string) => {

    const updateAttendance = await ConcertTicket.findByIdAndUpdate(_id, { attended: true}, {
        upsert: true,
        returnDocument: "after"
      });

    return updateAttendance;
    },
};

export { concertTicketApi };
