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
import TextField from "@material-ui/core/TextField/TextField";
import {Modal} from "react-bootstrap";

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
    },

    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: 300,
    },

    containerQuizs:{
        width: "85%",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        marginBottom: "10px",
        margin: "auto",
        paddingRight: "5%",
        paddingLeft: "5%"
    },

    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
});

class PanelAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            moreInformation: false,
            openModal: false,

            consultation: "",
            lastName: "",
            firstName: "",
            student: "",
            studentFather: "",
            studentMother: "",
            birthday: "",
            sexe: "",
            year: "",
            school: "",
            actualLevel: "",
            schoolSystem: "",
            resumeConsult: "",
            dreamJob: "",
            reference: "",

            currentMailer : ""
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

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        // console.log(e.target.name + " : "+e.target.value);
    };

    handleOpenModal = (currentMailer) =>{
        // console.log("currentMailer : "+currentMailer);
        this.setState({openModal: true});
        this.setState({currentMailer: currentMailer})
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
        this.setState({currentMailer: ""})
    };

    submitAnswers = (e) => {

        // console.log("userMail : "+this.state.currentMailer);

        e.preventDefault();
        let result = "<p>Bonjour, </p>"+
            "<h3>RAPPORT DE CONSULTATION ORIENTATION APPRENANT</h3>"+
            "<strong>Date de consultation : </strong>"+this.state.consultation+
            "<br/><br/><strong>Nom : </strong>"+this.state.lastName+
            "<br/><br/><strong>Prénoms : </strong>"+this.state.firstName+
            "<br/><br/><strong>Apprenant : </strong>"+this.state.student+
            "<br/><br/><strong>Père : </strong>"+this.state.studentFather+
            "<br/><br/><strong>Mère : </strong>"+this.state.studentMother+
            "<br/><br/><strong>Date de naissance : </strong>"+this.state.birthday+
            "<br/><br/><strong>Sexe : </strong>"+this.state.sexe+
            "<br/><br/><strong>Année d'étude : </strong>"+this.state.year+
            "<br/><br/><strong>Etablissement : </strong>"+this.state.school+
            "<br/><br/><strong>Niveau détudes actuel : </strong>"+this.state.actualLevel+
            "<br/><br/><strong>Systèmes d'études : </strong>"+this.state.schoolSystem+
            "<br/><br/><strong>Bilan de consultation : </strong>"+this.state.resumeConsult+
            "<br/><br/><strong>Metier envisagé : </strong>"+this.state.dreamJob+
            "<br/><br/><strong>Recommandations : </strong>"+this.state.reference;

        axios.post('/users/mailing', {
            userEmail: this.state.currentMailer,
            subject: "RAPPORT DE CONSULTATION ORIENTATION APPRENANT",
            attachment: "",
            container: result
        })
            .then(res=>{
                if(res.status === 200){
                    alert('Votre rapport à bien été envoyé');
                }
                else{alert("Une erreur est survenue, veuillez nous joindre afin de savoir si votre transaction à bien été éffectuée.")}
            })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });

    };

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
                    <Modal dialogClassName ={"ModalContent"} show={this.state.openModal} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={classes.containerQuizs}>
                                <h2>Rapport de consultation</h2>
                                <form onSubmit={this.submitAnswers}>
                                    <div>
                                        <TextField
                                            id="date"
                                            label="Date de consultation"
                                            type="date"
                                            value={this.state.consultation}
                                            className={classes.textField}
                                            name={"consultation"}
                                            required={true}
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            label="Nom"
                                            value={this.state.lastName}
                                            name={"lastName"}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Prénom"
                                            name={"firstName"}
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Apprenant"
                                            name={"student"}
                                            value={this.state.student}
                                            onChange={this.handleChange}
                                            type={"tel"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Père"
                                            name={"studentFather"}
                                            value={this.state.studentFather}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={false}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Mère"
                                            name={"studentMother"}
                                            value={this.state.studentMother}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={false}
                                            className={classes.textField}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Date et lieu de naissance"
                                            name={"birthday"}
                                            value={this.state.birthday}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Sexe"
                                            name={"sexe"}
                                            value={this.state.sexe}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Année d'étude"
                                            name={"year"}
                                            value={this.state.year}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Etablissement"
                                            name={"school"}
                                            value={this.state.school}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Niveau d’études actuel :"
                                            name={"actualLevel"}
                                            value={this.state.actualLevel}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Système d’études :"
                                            name={"schoolSystem"}
                                            value={this.state.schoolSystem}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Bilan de consultation"
                                            name={"resumeConsult"}
                                            value={this.state.resumeConsult}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Métier envisagé"
                                            name={"dreamJob"}
                                            value={this.state.dreamJob}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="Recommandations :"
                                            name={"reference"}
                                            value={this.state.reference}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                    <Button type="submit" className={classes.btnQuiz}
                                    >
                                        Envoyer
                                    </Button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
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
                                                <Button className={classes.btnMoreInfo}
                                                        onClick={()=>this.handleOpenModal(user.email)}
                                                >
                                                    Editer le rapport
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
