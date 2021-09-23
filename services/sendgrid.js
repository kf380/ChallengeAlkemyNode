const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.KEY_MAIL)



module.exports = sgMail;