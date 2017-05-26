'use strict'

// routes.js

// load all the things we need
var path = require('path');
var nodemailer = require('nodemailer');
var configAuth = require('./config/auth.js');

var appRouter = function (app) {

  // Default API
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '', './index.html'));
  });

  // ============================= Set up the RESTful APIs ==================================

  // API to send mail
  app.route("/api/send_mail")
    .post(function (req, res) {

      if (!req.body || !req.body.email) {
        return res.status(400).send({ result: "Error", message: "Email address is required" });
      }
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: configAuth.auth.user,
          pass: configAuth.auth.pass
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: configAuth.defaultFromAddress, // sender address
        to: req.body.email,// list of receivers user.email 'nrbdrm@gmail.com'
        subject: configAuth.subject, // Subject line
        html: "<p>Hello,</p>" +
        "<p>We have received an email.</p>" +
        '<p><a href="http://www.google.com">Go to google.com</a></p>' +
        "<p>Regards,</p>" +
        "<p>Your Rajesh Kumar</p>"
      };

      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log('Server is ready to take our messages');
        }
      });
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ success: false, message: error });
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return res.status(200).json({ success: true, message: 'Instructions have been mailed' });
      });
    })
}
module.exports = appRouter;