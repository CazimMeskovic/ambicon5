import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.HOSTINGER_SMTP_HOST,
    auth: {
      user: process.env.HOSTINGER_SMTP_USERNAME,  
      pass: process.env.HOSTINGER_SMTP_PASS,
    },
    secure: true,
  });

  const body = await req.json();
  const { name, email, subject, message, company, telefon } = body;

  const mailData: Mail.Options = {
    from: `No-Replay | ambicon website <${process.env.HOSTINGER_SMTP_USERNAME}>`,
    to: process.env.AMBICON_MAIL,
    subject: `Kontakt ${name} - ${subject}`,
    replyTo: email,
    html: `<h4>Kontakt Details:</h4><br /><br />
      <span><h5>Name: </h5>${name}</span><br />
      <span><h5>Firma: </h5>${company}</span><br />
      <span><h5>Email: </h5>${email}</span><br />
      <span><h5>Telefon: </h5>${telefon}</span><br />
      <span><h5>Betreff: </h5>${subject}</span><br />
      <span><h5>Nachricht: </h5><br />${message}</span>`,
  };

  // Verify connection configuration
  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  // Send mail
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: SMTPTransport.SentMessageInfo) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  console.log(body);
  return NextResponse.json({ message: 'success' }, { status: 200 });
}
