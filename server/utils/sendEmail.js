import nodemailer from 'nodemailer';

export const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: options.email,
    bcc: `${process.env.EMAIL_TO}`,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};
