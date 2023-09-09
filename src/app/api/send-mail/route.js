import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
// const nodemailer = require('nodemailer')
import nodemailer from 'nodemailer'


export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const req = await request.json();
  // console.log('req: ', req );
  // console.log('requestHeaders: ', requestHeaders);
  const message = {
    from: process.env.SMTP_EMAIL_ADDRESS,
    to: process.env.MAIN_EMAIL,
    cc: process.env.CC_EMAIL,
    subject: req.subject,
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
    // host: 'smtp.mail.yahoo.com',
    service: 'Yahoo',
    // port: 587,
    // secure: false,
    auth: {
      user: process.env.SMTP_EMAIL_ADDRESS,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
    debug: false,
    logger: true,
  })

  // transporter.sendMail(message, (err, info) => {
  //   if (err) {
  //     return new NextResponse(
  //       JSON.stringify({ english: `ERROR: ${err}`}),
  //       { status: 400 }
  //     )
  //     res.status(404).send({
  //       english: `ERROR: ${err}`,
  //       error: `Connection refused at ${err.address}`,
  //     })
  //   }

  //   return new NextResponse(JSON.stringify({ success: `Message delivered to ${info.accepted}`}),
  //     {status: 200}
  //   );
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
    // else {
    //   res.status(250).send({
    //     success: `Message delivered to ${info.accepted}`,
    //   })
    // }
  // })
}
