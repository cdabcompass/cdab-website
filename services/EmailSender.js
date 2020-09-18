const nodemailer = require("nodemailer");
const userModel = require('../models/User');
const path = require('path');

module.exports = {
    sendEmail: async (userEmail, subject, container,attachment) => {
        return new Promise((resolve, reject) => {
            let mailOptions = {};
            if(attachment === "mag-1"){

                console.log("mailer : "+subject);
                mailOptions = {
                    from: 'answers-quiz@cdabcompass.com',
                    to: userEmail,
                    subject: subject,
                    // attachments: [{
                    //     filename: 'Mag-08-20.pdf',
                    //     path: path.join(__dirname,'../src/othersfiles/Mag-08-20.pdf'),
                    //     contentType: 'application/pdf'
                    // }],
                    html: container
                };
            }else{
                mailOptions = {
                    from: 'answers-quiz@cdabcompass.com',
                    to: 'fabricesumsa2000@gmail.com',
                    subject: subject,
                    html: container
                };
            }

            let transporter = nodemailer.createTransport({
                host: 'ssl0.ovh.net',
                //service: 'gmail',
                port: 465,
                secure: true,
                auth: {
                    user: 'answers-quiz@cdabcompass.com',
                    pass: 'tXNmBqJgVbiMbBI0'
                }
            });
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                    return reject(err)
                } else {
                    console.log('Message sent : ' + info.response);
                    return resolve(info.response)
                }
            });
            transporter.close();
        });
    },
};
