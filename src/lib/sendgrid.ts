import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const FORGOT_PASSWORD_EMAIL_TEMPLATE = "d-5b375c7d65f44b228a98f2d724b56f2d";
export const TICKET_EMAIL_TEMPLATE = "d-46f8bd0427964ca990b5e6f2dd6c89da";
export const NFTMINTING_EMAIL_TEMPLATE = "d-bdea461932814d60978d3cd0378725b7";

export type EMAILS_TEMPLATES = {
  [key: string]: string;
};

export const EMAILS_TEMPLATES: EMAILS_TEMPLATES = {
  forgotPassword: FORGOT_PASSWORD_EMAIL_TEMPLATE,
  userInvitedByCompany: TICKET_EMAIL_TEMPLATE,
};

export const SendGrid = {
  sendMail: (to: string, subs: any, templateId: string) => {
    const msg = {
      from: "HotHack <contact@glowapp.com.au>",
      to,
      templateId,
      dynamic_template_data: subs,
    };
    return sgMail.send(msg);
  },
};
