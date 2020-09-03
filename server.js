const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const hostname = '0.0.0.0';
const user = require('./routes/User');
const path = require('path');

const stripe = require("stripe")("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");
//const stripe = require("stripe")("sk_test_51HJF8DBsL4DtxhISvKXTDOT9cRhRrc0g1toW4BNaXs3zJp4QPKkIGtlxkBgEuDcWqQZHmeKcRsRMZPoNV8m2GpmZ00VPAMOfO0");


app.get('/test', (req, res) => {
    res.status(200).send("Test Fab")
});

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Définition des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// db connexion
const url = "mongodb+srv://cdab:NfHKG]d0jJRVX{r@cluster0.5ssoi.mongodb.net/Cdabcompass?retryWrites=true&w=majority";

// const url = "mongodb+srv://Fabrice:lqfuokPOycyg9zSQ@abloni-mc3d6.mongodb.net/Shara?retryWrites=true&w=majority";
mongoose.connect( process.env.MONGODB_URI || url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use('/users',user);

function checkMoneyVal(val,continent){
    if(val === "student-profil"){
        if(continent !== "Afrique"){
            // 50 eur
            return 16500;
        }else{
            // 500 eur
            return 50000
        }
    }
    else if(val === "e-book"){
        if(continent !== "Afrique"){
            // 2 eur
            return 200;
        }else{
            // 2 eur
            return 200
        }
    }
}

function checkCurrency(continent){
    if(continent !== "Afrique"){
        return 'eur'
    }else{
        return 'eur'
    }
}

app.post('/pay', async (req,res)=>{
    // 1 € => 100 cents
    const {email,amount,continent} = req.body;
    let _amount = checkMoneyVal(amount,continent);
    let _currency = checkCurrency(continent);
    console.log("usermail : "+email);
    console.log("price : "+_amount);
    console.log("currency : "+_currency);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: _amount,
        currency: _currency,
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email
    });
    console.log("res = "+JSON.stringify(paymentIntent,null,4));
    await res.json({'client_secret': paymentIntent.client_secret})
});

// Serve static assets if in production
if(process.env.NODE_ENV === "production"){
    // Set static folder
    app.use(express.static('build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });
}

app.listen(port,() => console.log(`Listen on http://${hostname}:${port}/`));
