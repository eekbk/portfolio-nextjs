const nodemailer = require('nodemailer')

export default function handler(req, res) {
  const message = {
    from: process.env.SMTP_EMAIL_ADDRESS,
    to: process.env.MAIN_EMAIL,
    cc: process.env.CC_EMAIL,
    subject: req.body.subject,
    text: `Name: ${req.body.name}
    Email: ${req.body.email}
    Company: ${req.body.company}
    Message: ${req.body.message}`,
    html: `<p>Name: ${req.body.name}<br/>
      Email: ${req.body.email}<br/>
      Company: ${req.body.company}<br/>
      Message: ${req.body.message}</p>`,
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

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).send({
          english: `ERROR: ${err}`,
          error: `Connection refused at ${err.address}`,
        })
      } else {
        res.status(250).send({
          success: `Message delivered to ${info.accepted}`,
        })
      }
    })
  }
}
