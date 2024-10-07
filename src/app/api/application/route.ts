import { NextRequest, NextResponse } from 'next/server';
 import nodemailer from 'nodemailer'; 

import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  const { name, email, subject, message, phone, xing, linkedin } = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.HOSTINGER_SMTP_HOST,
    auth: {
      user: process.env.HOSTINGER_SMTP_USERNAME,
      pass: process.env.HOSTINGER_SMTP_PASS,
    },
    secure: true,  
  });

  const mailData: Mail.Options = {
    from: `No-Replay | ambicon website <${process.env.HOSTINGER_SMTP_USERNAME}>`,
    to: process.env.AMBICON_CAREER_MAIL,
    subject: `Bewerbung von ${name} - ${subject}`,
    replyTo: email,
    html: `<h4>Bewerbung Details:</h4><br /><br />
          <span><h5>Name: </h5>${name}</span><br />
          <span><h5>Email: </h5>${email}</span><br />
          <span><h5>Telefon: </h5>${phone}</span><br />
          <span><h5>Xing Profile: </h5>${xing}</span><br />
          <span><h5>LinkedIn Profile: </h5>${linkedin}</span><br />
          <span><h5>Nachricht: </h5><br />${message}</span>`,
  };

  // Verifikacija konekcije
  try {
    await transporter.verify();
    console.log('Server is ready to take our messages');
  } catch (error) {
    console.error('Error verifying SMTP connection:', error);
    return NextResponse.json({ error: 'Error verifying SMTP connection' }, { status: 500 });
  }

  // Slanje email-a
  try {
    const info: SMTPTransport.SentMessageInfo = await transporter.sendMail(mailData);
    console.log(info);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
