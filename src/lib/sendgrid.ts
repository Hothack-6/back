import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const FORGOT_PASSWORD_EMAIL_TEMPLATE = "d-5b375c7d65f44b228a98f2d724b56f2d";
const USER_INVITED_BY_COMPANY = "d-25e197a710df4c71969d85aa8c2c05c4";
const COMPANY_SIGN_UP_EMAIL_TEMPLATE = "";

export type EMAILS_TEMPLATES = {
  [key: string]: string;
};

export const EMAILS_TEMPLATES: EMAILS_TEMPLATES = {
  forgotPassword: FORGOT_PASSWORD_EMAIL_TEMPLATE,
  userInvitedByCompany: USER_INVITED_BY_COMPANY,
};

export const SendGrid = {
  sendMail: (to: string, subs: any, templateId: string) => {
    const msg = {
      from: "GlowApp <contact@glowapp.com.au>",
      to,
      templateId,
      substitutionWrappers: ["{{", "}}"],
      dynamic_template_data: subs,
    };
    return sgMail.send(msg);
  },
};
