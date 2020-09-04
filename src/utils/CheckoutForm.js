import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import pdfDoc from '../othersfiles/Mag-08-20.pdf';



const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '35vh auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        margin: '2em auto 1em',
    },
    snackGreen: {
        backgroundColor: "green",
        color: "white"
    },
    snackRed: {
        backgroundColor: "red",
        color: "white"
    },
});

function CheckoutForm(props) {
    const classes = useStyles();
    // State
    const [email, setEmail] = useState(
        localStorage.getItem("email") != null ?
            localStorage.getItem("email") : '');
    const [openAlert, setOpenAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState('');
    const [alertStyle, setAlertStyle] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
        setMsgAlert('');
    };

    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const res = await axios.post('/pay', {email: email,amount: props.amount,continent: props.continent});

        const clientSecret = res.data.client_secret;

        const result = await stripe.confirmCardPayment(clientSecret, {
            receipt_email: email,
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });

        //console.log("res = "+JSON.stringify(result,null,4));

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            setAlertStyle(false);
            setOpenAlert(true);
            setMsgAlert(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                // TODO : check {props.amount} value and set validSold to true

                window.open(pdfDoc, "_blank");

                setAlertStyle(true);
                setOpenAlert(true);
                setMsgAlert('Votre paiement à été effectué, veuillez consulter vos mails');

                if(props.amount === "e-book"){
                    //lert("d : "+ email);
                    axios.post('/users/mailing', {
                        userEmail: "paiement@cdabcompass.com,"+email,
                        subject: "Cdab magazine",
                        attachment: "mag-1",
                        container: "<p>Mr,Mme "+ localStorage.getItem("lastName") + "<br><br>"
                            + "Vous pouvez télécharger votre magazine en cliquant sur cette url : https://drive.google.com/file/d/13bjpRDDE6JhkVeve4482op9ZfGFX9cQa/view?usp=sharing . Bonne lecture " +
                            "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
                    })
                        .then(res=>{
                            if(res.status === 200){
                                setMsgAlert('Veuillez consulter vos mails');
                                setTimeout(
                                    ()=>{window.location.href="/"},
                                    5000
                                )
                            }
                            else{alert("Une erreur est survenue, veuillez nous joindre afin de savoir si votre transaction à bien été éffectuée.")}
                        })
                        .catch(err=>{
                            if(err.response.status === 409){
                            }
                        });
                }
                else if(props.amount === "student-profil"){
                    axios.post('/users/update', {
                        lastName: localStorage.getItem("lastName"),
                        firstName: localStorage.getItem("firstName")
                    }) .then(res=>{
                        if(res.status === 200){
                            console.log("set payment")
                        }
                        else{console.log("Error set payment")}
                    })
                        .catch(err=>{
                            console.log("Error set payment")
                        });

                    axios.post('/users/mailing', {
                        userEmail: "paiement@cdabcompass.com,"+localStorage.getItem("email"),
                        subject: "Preuve de paiement",
                        container: "<p>Mr,Mme "+ localStorage.getItem("lastName") + " "
                            + localStorage.getItem("firstName")  +" vient d'effectuer son paiement. " +
                            "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
                    })
                        .then(res=>{
                            if(res.status === 200){
                                setMsgAlert('Veuillez consulter vos mails');
                                localStorage.setItem("userAccept","true");
                                setTimeout(
                                    ()=>{window.location.href="/"},
                                    5000
                                )
                            }
                            else{alert("Une erreur est survenue, veuillez nous joindre afin de savoir si votre transaction à bien été éffectuée.")}
                        })
                        .catch(err=>{
                            if(err.response.status === 409){
                            }
                        })
                }
            }
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>

                <TextField
                    // defaultValue={Votre solde est de : 15 eur}
                    defaultValue={"Votre solde est de : " + props.currentPrice}
                    disabled={true}
                    variant='outlined'
                />
                <TextField
                    label='Email'
                    id='outlined-email-input'
                    helperText={`Vous recevrez les informations sur cette addresse`}
                    margin='normal'
                    variant='outlined'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
                <CardInput />
                <div className={classes.div}>
                    <Button style={{backgroundColor: "#FF9800",color: "white"}} className={classes.button} onClick={handleSubmit}>
                        Payer
                    </Button>
                </div>
            </CardContent>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openAlert}
                autoHideDuration={7000}
                onClose={handleCloseAlert}
                message={msgAlert}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseAlert}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
                ContentProps={{
                    classes: {
                        root: (alertStyle === true ? classes.snackGreen : classes.snackRed)
                    }
                }}
            />
        </Card>
    );
}

export default CheckoutForm;
