import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import axios from "axios";
import Button from "@material-ui/core/Button";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },

    btnMoreInfo: {
        backgroundColor: "rgb(224 224 224 / 95%)",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
        margin: "5px",
        display: "block"
    },

    userMoreInfo: {
        width: "100%",
        display: "flex",
        textAlign: "start",
    }
});

class PanelAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            moreInformation: false,
        };
    }

    sendReceipt(email,lastName,firstName,receiptType){
        let container = "";
        if(receiptType === 1){
            container = "<p>Mr,Mme "+ lastName + " "+ firstName + "<br><br>"
                + "Nous vous confirmons que votre paiement concernant la caution bancaire a bien été pris en compte" +
                "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
        }else if(receiptType === 2){
            container = "<p>Mr,Mme "+ lastName + " "+ firstName + "<br><br>"
                + "Nous vous confirmons que votre paiement concernant le logement étudiant a bien été pris en compte" +
                "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
        }else if(receiptType === 3){
            container = "<p>Mr,Mme "+ lastName + " "+ firstName + "<br><br>"
                + "Nous vous confirmons que votre paiement concernant la recherche d'université a bien été pris en compte" +
                "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
        }else if(receiptType === 4){
            container = "<p>Mr,Mme "+ lastName + " "+ firstName + "<br><br>"
                + "Vous pouvez télécharger votre magazine en cliquant sur cette url : https://drive.google.com/file/d/13bjpRDDE6JhkVeve4482op9ZfGFX9cQa/view?usp=sharing . Bonne lecture " +
                "<br><br><br>Cordialement, <br>L'équie Cdab Compass </p>"
        }


        axios.post('/users/mailing', {
            userEmail: "paiement@cdabcompass.com,"+email,
            subject: "Cdab magazine",
            attachment: "mag-1",
            container: container
        })
            .then(res=>{
                if(res.status === 200){
                    alert('Votre action a bien été pris en compte');
                }
                else{alert("Une erreur est survenue, veuillez nous joindre afin de savoir si votre transaction à bien été éffectuée.")}
            })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });
    }

    confirmPayment(userId,userMail,userLastName,userFirstName){
        //console.log("UserId : "+userId);

        axios.post("/users/confirmUserPayment", {
            userId: userId,
            email: userMail,
            lastName: userLastName,
            firstName: userFirstName,
        })
            .then(res=>{
                if(res.status === 200){
                    alert("Le compte a été validé");
                }
            })
            .catch(err=>{
                alert("Erreur de validation");
            })
    }

    componentDidMount() {
        axios.post('/users/allUsers',{
            email: localStorage.getItem("email"),
            lastName: localStorage.getItem("lastName"),
        })
            .then(res=>{
                if(res.status === 200){
                    //alert("Good User");
                    this.setState({
                        users: res.data
                    });
                    // console.log("Result : "+JSON.stringify(res.data,null,4))
                }
            })
            .catch(err => {
                if(err.response.status === 409){
                    alert("Identifiants non valide")
                }
            })
    }

    render() {
        const {classes} = this.props;
        const {users} = this.state;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div className="contAll">
                    {
                        users.map((user,index)=>
                            <div key={user._id} style={{marginBottom: "10px"}}>
                                <Accordion style={{backgroundColor: "#ff9800ad"}}>
                                    <AccordionSummary
                                        style={{color: "black"}}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>
                                            {user.lastName} {user.firstName}  {user.country}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails style={{backgroundColor: "white"}}>

                                        <div className={classes.userMoreInfo}>
                                            <div style={{flex: 1}}>
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>
                                                            this.confirmPayment(user._id,user.email,user.lastName,user.firstName)
                                                        }
                                                >
                                                    Detection de profil
                                                </Button>
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>
                                                            this.sendReceipt(user.email,user.lastName,user.firstName,1)
                                                        }
                                                >
                                                    Caution bancaire
                                                </Button>
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>
                                                            this.sendReceipt(user.email,user.lastName,user.firstName,2)
                                                        }
                                                >
                                                    Logement étudiant
                                                </Button>
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>
                                                            this.sendReceipt(user.email,user.lastName,user.firstName,3)
                                                        }
                                                >
                                                    Recherche d'université
                                                </Button>
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>
                                                            this.sendReceipt(user.email,user.lastName,user.firstName,4)
                                                        }
                                                >
                                                    Envoyer E-book
                                                </Button>
                                            </div>
                                            <div style={{flex: 1}}>
                                                <div>Email : {user.email} </div>
                                                <div>Numéro : {user.number} </div>
                                                <div>Ville : {user.city} </div>
                                                <div>Pays : {user.country} </div>
                                                <div>Situation : {user.situation} </div>
                                                <div>Continent : {user.continent} </div>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    }
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(PanelAdmin);
