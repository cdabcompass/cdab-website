import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "./MenuBar";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import FooterBar from "./FooterBar";
import {IntlProvider} from "../i18n";

const stripePromise = loadStripe("pk_live_51HJF8DBsL4DtxhIS66mytr08h1j0G1G5bSmww9MvEeIiK4zCyj4YV5TL8USBHNAhemvcLe0oYs4fvXQ0Tqq3HTFa00ZtXEDehe");
//const stripePromise = loadStripe("pk_test_51HJF8DBsL4DtxhIS3PTnQGR4fwY9GMKRwaYwNAKY8tKun7lpKqtpaOXIzMdl5lGqEvBF5nao6a5l6jeSWpn5GWbN000KKwgajK");

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
});

class PaymentView extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {classes} = this.props;
    return (
        <IntlProvider locale={localStorage.getItem("locale_lg")}>
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div >
                    {(localStorage.getItem("continent") === "Afrique")&&
                    <Elements stripe={stripePromise}>
                        <CheckoutForm continent={"Afrique"} currentPrice={"165 €"} amount={"student-profil"} />
                    </Elements>
                    }
                    {(localStorage.getItem("continent") !== "Afrique")&&
                    <Elements stripe={stripePromise}>
                        <CheckoutForm continent={"Autre"} currentPrice={"500 €"} amount={"student-profil"} />
                    </Elements>
                    }
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        </IntlProvider>
    );
  }
}


export default withStyles(styles)(PaymentView);
