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
                    from: 'answers-quizs@cdabcompass.com',
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
                    from: 'answers-quizs@cdabcompass.com',
                    to: userEmail,
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
                    user: 'answers-quizs@cdabcompass.com',
                    pass: '@Cdab!mL2022'
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

    confirmEmailPin: async (userEmail, userCode) => {
        return new Promise((resolve, reject) => {
            userModel.find({email: userEmail, verificationCode: userCode}, async (err, docs) => {
                if (docs.length !== 0) {
                    return resolve(docs)
                }
                return reject(err)
            })
        })
    }
};
