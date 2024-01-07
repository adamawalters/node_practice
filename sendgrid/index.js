const sgMail = require('@sendgrid/mail')
console.log(require('dotenv').config({path: `sendgrid/.env`}));

//console.log(`SendGrid API Key: ${SENDGRID_API_KEY}`)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'awalters1456@gmail.com', // Change to your recipient
  from: 'adamawalters@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })