import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    titles: {
        marginBottom: "100px",
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
    subTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#f17f17"
    },
    magTitle:{
        width: "600px",
        margin: "0 auto",
        border: "1px solid",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)"
    },
    btnQuizPayment: {
        backgroundColor: "#bd2d13",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
        color: "white",
    },
});

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    payProducts = () =>{
        if(localStorage.getItem("token") !== null){
            window.location.href = '/pay/eBook';
        }else{
            alert("Veuillez créer un compte ou vous connectez");
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.titles}>
                            <p className={classes.title}>E-book</p>
                            <p className={classes.subTitle}>2 €</p>
                        </div>
                        <div style={{textAlign: "center", margin: "0 auto"}}>
                            <img width="100%" height="100%" title={"Magazine"} className="magTitle"  src={require("../assets/MagTitlee.png")} alt=""/>
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <Button className={classes.btnQuizPayment}
                                    onClick={this.payProducts}
                            >
                                Procéder au paiement
                            </Button>
                        </div>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(Products);
