'use strict';
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    yourUrl : 'gigup.mobileprogramming.net',

    resetPasswordUrl : 'http://gigup.mobileprogramming.net:1081/#/auth/resetPassword?token=',

    // Auth to set password 
    auth: {
        user: '************@gmail.com',
        pass: '*******',
    },

    // From address to set password 
    defaultFromAddress: 'Rajesh Kumar *************',

    // Subject of mail
    subject: 'You have an email',

}
