const userModel = require('../models/User');
const express = require('express');
const route = express.Router();
const passwordHash = require("password-hash");
const validator = require("email-validator");
const EmailSender = require("../services/EmailSender");
const randomstring = require("randomstring");

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

    console.log("container : "+container);
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
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    if(user.firstName === "admin"
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
        +"<br><br><p>Nous vous confirmons que votre compte a été validé et votre paiement pris en compte.</p>"+
        "<br>Vous pouvez passer vos différents tests en vous rendant sur l'onglet 'Detection de profil'. " +
        "Si ces derniers ne s'affichent pas d'eux même vous devrez alors vous déconnectez et vous reconnectez "
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

route.post('/recoverAccount/1', async (req, res) => {
    console.log("step1...");
    let randomCode = randomstring.generate({
        length: 6,
        charset: 'numeric'
    });
    let user = new userModel();

    userEmail = req.body.email;
    subject = "Récuperation de compte";
    container = "<p>Bonjour Mr,Mme</p>"
        +"<br><p>Votre code de confirmation est : </p><strong>"+randomCode
        +"</strong><br><p>Cordialement,<br>L'équie Cdab Compass</p>"
    ;
    attachment = "";
    // send code to user's email and set confirmationCode
    userModel.find({email: userEmail}, async (err, doc) => {
        if (err) {
            res.status(401).json({text: "Cet adresse n'existe pas!"});
        } else {
            console.log("User ask : "+doc);
            if(doc.length !== 0){
                EmailSender.sendEmail(userEmail,subject,container,attachment)
                    .then(_res => {
                        userModel.update({email: userEmail},
                            {$set: {verificationCode: randomCode}},
                            {upsert: true}, (err, doc) => {
                                if (doc.length !== 0) {
                                    return res.status(200).json({text: "Votre code a été envoyé sur votre adresse mail"});
                                }
                            }
                        );
                    }).catch(ex => {
                    return res.status(401).json({text: "Erreur envois de mail"})
                })
            }else{
                return res.status(401).json({text: "Aucun compte n'existe à cette adresse mail"})
            }
        }
    })
});


route.post('/recoverAccount/2', async (req, res) => {
    let user = new userModel();
    user.email = req.body.email;
    user.confirmationCode = req.body.confirmationCode;
    user.password = req.body.password;
    EmailSender.confirmEmailPin(user.email, user.confirmationCode)
        .then(_res => {
            userModel.update({email: user.email},
                {$set: {password: passwordHash.generate(user.password)}},
                {upsert: true}, (err, doc) => {
                    if (err) {
                        return res.send(err);
                    }
                    return res.status(200).json({text: "Votre mot de passe à été changé"});
                }
            );
        }).catch(ex => {
        return res.status(401).json({text: "Mauvais code"})
    })
});


module.exports = route;
