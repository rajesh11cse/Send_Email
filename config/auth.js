'use strict';
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    yourUrl : 'gigup.mobileprogramming.net',

    resetPasswordUrl : 'http://gigup.mobileprogramming.net:1081/#/auth/resetPassword?token=',

    // Auth to set password 
    auth: {
        user: 'rajeshkumar11cse@gmail.com',
        pass: 'rajsikar',
    },

    // From address to set password 
    defaultFromAddress: 'Rajesh Kumar rajeshkumar11cse@gmail.com',

    // Subject of mail
    subject: 'You have an email',

}
