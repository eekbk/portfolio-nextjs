import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(request) {
  const req = await request.json();
  const message = {
    from: process.env.SMTP_EMAIL_ADDRESS,
    to: process.env.MAIN_EMAIL,
    cc: process.env.CC_EMAIL,
    subject: `SENT TO ERICKUE.DEV: ${req.subject}`,
    text: `Name: ${req.name}
    Email: ${req.email}
    Company: ${req.company}
    Message: ${req.message}`,
    html: `<p>Name: ${req.name}<br/>
      Email: ${req.email}<br/>
      Company: ${req.company}<br/>
      Message: ${req.message}</p>`,
  }

  let transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth: {
      user: process.env.SMTP_EMAIL_ADDRESS,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
    debug: false,
    logger: true,
  })

  try {
    await transporter.sendMail(message)
    return new NextResponse(JSON.stringify({ success: `Message delivered to ${info.accepted}`}),
    {status: 200}
    );
  } catch (err) {
    return  new NextResponse(
      JSON.stringify({ english: `ERROR: ${err}`}),
      { status: 400 }
    )
  }

}
