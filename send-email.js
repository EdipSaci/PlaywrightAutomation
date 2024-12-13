const nodemailer = require('nodemailer');

// Split the EMAIL_TO environment variable by commas to handle multiple recipients
const recipients = process.env.EMAIL_TO.split(',');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: recipients, // Use array of email addresses
  subject: 'Playwright Test Report',
  text: 'Please find the Playwright test report attached.',
  attachments: [
    {
      path: 'playwright-report/index.html' // Adjust path as needed
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
