import { Types } from "mongoose";
import _ from "lodash";
import { ConcertTicket } from "../models/concert_ticket";
import { SendGrid, NFTMINTING_EMAIL_TEMPLATE } from "../lib/sendgrid";

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

        const baseURL = "http://localhost:3000/mint/65ac76b8576fd9d698fd670b/";
        const concertID = _id;

        
        
        const nftURL = baseURL + concertID;

        console.log(nftURL);


        SendGrid.sendMail('danielvantran09@gmail.com', {
            NFT: nftURL,
          }, NFTMINTING_EMAIL_TEMPLATE)    

        return updateAttendance;
        },

            
};

export { concertTicketApi };
