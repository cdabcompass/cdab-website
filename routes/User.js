const userModel = require('../models/User');
const express = require('express');
const route = express.Router();
const passwordHash = require("password-hash");
const validator = require("email-validator");
const EmailSender = require("../services/EmailSender");

route.post('/inscription', async (req,res) => {
    let user = new userModel();
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);
    user.number = req.body.number;
    user.country = req.body.country;
    user.city = req.body.city;
    user.situation = req.body.situation;
    user.continent = req.body.continent;

    if (validator.validate(user.email)){
        userModel.find({email : user.email}, async (err,docs)=>{
            console.log(" user"+user);
            if (!docs.length) {
                await user.save(err => {
                    if (err) {
                        return res.status(500).json({text : 'Erreur sauvegarde'});
                    }
                    return res.status(200).json({
                        status: "200",
                        text : "New user added",
                        token : user.getToken(),
                        lastName: user.lastName,
                        firstName: user.firstName,
                        email: user.email,
                        number: user.number,
                        country: user.country,
                        city: user.city,
                        situation: user.situation,
                    });
                });
            } else {
                return res.status(409).json({text : 'User already exists'});
            }
        });
    }else {
        return res.status(412).json({text : 'Email invalid'});
    }
});


route.post('/connexion', async (req,res)=>{
    let user = new userModel();
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);

    console.log("email : "+user.email+" password : "+user.password);

    if (validator.validate(user.email)){
        userModel.find({email: user.email, password: user.password}, async ()=>{
            const findUser = await userModel.findOne({email: user.email});
            console.log(findUser);
            if (!findUser){return res.status(409).json({text: "Mail error"})}
            if (findUser.authenticationPwd(req.body.password)) {
                return res.status(200).json({
                    text: "You are connected",
                    token: user.getToken(),
                    lastName: findUser.lastName,
                    firstName: findUser.firstName,
                    email: findUser.email,
                    number: findUser.number,
                    country: findUser.country,
                    city: findUser.city,
                    continent: findUser.continent,
                    situation: findUser.situation,
                    validSold: findUser.validSold,
                    quizFirstStep: findUser.quizFirstStep,
                    quizSecondStep: findUser.quizSecondStep,
                })
            } else {
                return res.status(409).json({text: "Password error"})
            }
        })
    }else {
        return res.status(412).json({text : 'Email invalid'});
    }
});

route.post('/update', async (req,res)=>{
    let user = new userModel();
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    userModel.updateOne(
        {lastName: user.lastName,firstName:user.firstName},
        {validSold: "true"},
        {upsert: true},
        (err,doc)=>{
            if(err){
                res.send(err);
            }
            return res.status(200).json({text : 'set account payment'});
    })
});


route.post('/update/quizFirstStep', async (req,res)=>{
    let user = new userModel();
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    userModel.updateOne(
        {lastName: user.lastName,firstName:user.firstName},
        {quizFirstStep: "true"},
        {upsert: true},
        (err,doc)=>{
            if(err){
                res.send(err);
            }
            return res.status(200).json({text : 'set account payment'});
        })
});

route.post('/update/quizSecondStep', async (req,res)=>{
    let user = new userModel();
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    userModel.updateOne(
        {lastName: user.lastName,firstName:user.firstName},
        {quizSecondStep: "true"},
        {upsert: true},
        (err,doc)=>{
            if(err){
                res.send(err);
            }
            return res.status(200).json({text : 'set account payment'});
        })
});

route.post('/mailing', async(req,res)=>{
    console.log("-> Sending first quiz...");
    let userEmail = req.body.userEmail;
    let subject = req.body.subject;
    let container = req.body.container;
    let attachment = req.body.attachment;

    //console.log("attachment step 1 : "+attachment);
    EmailSender.sendEmail(userEmail,subject,container,attachment)
        .then(_res => {
            return res.status(200).json({text : 'Email send to cdab'});
        })
        .catch(ex => {
            console.log("Err mailing : "+ex);
            return res.status(409).json({text : 'Erreur envois de mail'});
        })
});

route.post('/allUsers', async(req,res)=>{
    let user = new userModel();
    user.email = req.body.email;
    user.lastName = req.body.lastName;
    if(user.email === "admin@cdabcompass.com"
        && user.lastName === "admin"){
        userModel.find({}, (err,users)=>{
            res.status(200).json(users)
        })
    }else{
        res.status(409).json({text: "Identifiants non valide"})
    }
});

route.post('/confirmUserPayment', async(req,res)=>{
    let user = new userModel();
    user.userId = req.body.userId;
    user.email = req.body.email;
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    userEmail = user.email;
    subject = "Confirmation de paiement";
    container = "<p>Bonjour Mr,Mme</p>"+user.lastName+" "+user.firstName
        +"<br><br><p>Nous vous confirmons que votre compte a été validé et votre paiement pris en compte.</p>"
        +"<p>Cordialement,<br>L'équie Cdab Compass</p>"
    ;
    attachment = "";


    // console.log("ConfirmUserPayment : "+user.email);

    userModel.findByIdAndUpdate(
        user.userId,
        {validSold: "true"},
        {upsert: true},
        (err,doc)=>{
            if(err){
                res.send(err);
            }
            else{
                EmailSender.sendEmail(userEmail,subject,container,attachment)
                    .then(_res => {
                        return res.status(200).json({text : 'Email send to cdab'});
                    })
                    .catch(ex => {
                        console.log("Err mailing : "+ex);
                        return res.status(409).json({text : 'Erreur envois de mail'});
                    })
            }
        }
    )
});


module.exports = route;
