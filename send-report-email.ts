// send-report-email.js
const nodemailer = require('nodemailer');
const fs = require('fs');

// Configure your email server and the email content
let transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email user
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

let mailOptions = {
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  subject: 'Playwright Test Report',
  text: 'Please find attached the Playwright test report.',
  attachments: [
    {
      filename: 'report.zip',
      content: fs.createReadStream('playwright-report/report.zip'), // Make sure the report is zipped
    },
  ],
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Error sending email:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
