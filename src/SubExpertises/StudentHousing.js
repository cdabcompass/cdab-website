import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import {Modal} from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Sidemenu from "../utils/Sidemenu";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    subContext: {
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "50px",
        textAlign: "center",
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    profilImage:{
        width: "100%",
        height: "500px",
        filter: "blur(2px)",
    },

    ModalContent:{
        width: "700px",
        marginTop: '10%',
        marginBottom: '10%',
        maxWidth: "50% !important"
    },
    snackRoot: {
        backgroundColor: "red",
        color: "white"
    }
});

class StudentHousing extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
            openAlert: false,
        };
    }

    handleOpenModal = (e) =>{
        this.setState({openModal: true});
    };

    handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({openAlert:false});
    };

    downloadPdf = () => {
        if(localStorage.getItem("token") !== null){
            window.open("https://drive.google.com/uc?export=view&id=1hpJCym8tat3DdpJlJTncVxgvYUJRxIKZ");
        }else{
            this.setState({openAlert:true});
        }
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <Helmet>
                        <meta
                            name="CDAB COMPASS"
                            content="
                            Mettre en valeur ses
                            études sur le terrain
                            professionnel
                            Etre opérationnel
                            par des formations
                            complémentaires
                            Assurer la transition
                            études-stage
                            -emploi
                            #Afrique #Enfant #Europe #Education #Meilleur
                            "
                        />
                    </Helmet>
                    <div>
                        <MenuBar/>
                        <Sidemenu/>
                    </div>
                    <div style={{marginTop: "100px",marginBottom: "100px"}}>
                        <DetailsPageBanner
                            image={<img className={classes.profilImage}  src={require("../assets/Lg1.jpeg")} alt=""/>}
                            title={"Logement Etudiant à l'étranger"}/>
                        <div className={classes.subContext}>
                            <div className="subContainer">
                                <div style={{flex: 1}}>
                                    <iframe width="" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe></div>
                                <div style={{flex: 1}}>
                                    <p style={{fontSize: "20px",textAlign:"justify"}}>
                                        L’accompagnement hébergement consiste pour CDAB COMPASS à alléger la tâche et le souci
                                        de la recherche d’un logement, aux apprenants. Ainsi la structure prend sur elle la charge
                                        de faire la recherche des logements aux apprenants. Ces logements répondent au standard minimum
                                        requis pour le logement étudiant en France et conviennent au budget des familles en tenant compte
                                        du prix moyen de location étudiante dans la ville d’études. Ainsi sont proposés des logements en
                                        résidence universitaire privée, des logements confortables chez des partenaires ou chez le particulier.
                                        Nous assurons aussi la caution locative (garant), épine pour beaucoup d’apprenant n’ayant pas de parents en France ou,
                                        incapables financièrement d’assumer cette charge.
                                    </p>
                                </div>
                            </div>
                            <Button onClick={this.handleOpenModal} className={classes.btnQuiz} >
                                Protocole de recherche de logement
                            </Button>
                            <Modal dialogClassName ={'ModalContent'} show={this.state.openModal} onHide={this.handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                        Telecharger
                                    </Button>
                                </Modal.Header>
                                <Modal.Body>
                                    <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=136oIlj_YpzHS8Ei8e3PJrkBS-kC1o3rF"} alt=""/>
                                    <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1PcSONPScTUpZu1VIhbajNKcZL16YmrbZ"} alt=""/>
                                    <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=11ZehpXucyGMJBe6eEGbGXJ9lsRrElqFB"} alt=""/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                        Telecharger
                                    </Button>
                                    <Button variant="secondary" onClick={this.handleCloseModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>


                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                open={this.state.openAlert}
                                autoHideDuration={7000}
                                onClose={this.handleCloseAlert}
                                message="Veuillez tout d'abord vous connecter ou créer un compte !"
                                action={
                                    <React.Fragment>
                                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                ContentProps={{
                                    classes: {
                                        root: classes.snackRoot
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(StudentHousing);
