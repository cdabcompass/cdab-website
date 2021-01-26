import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Col, Modal, Row} from "react-bootstrap";
import CardActu from "./utils/CardActu";
import MenuBar from "./utils/MenuBar";
import Grid from "@material-ui/core/Grid";
import ExpertisesComponents from "./utils/ExpertisesComponents";
import Button from "react-bootstrap/Button";
import FooterBar from "./utils/FooterBar";
import Helmet from "react-helmet";
import MessengerCustomerChat from "react-messenger-customer-chat";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    signIn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        height: "700px"
    },
    header: {
    },
    imageCarousel:{
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
    },
    eachCarousel:{
        height: "550px",
        width: "100%"
    },
    carousell:{
        // height: "500px",
        width: "100%"
    },
    expertises: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    expTitle: {
        fontSize: "60px",
        fontWeight: "bold"
    },
    sTitle:{
        fontSize: "40px"
    },
    countries:{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
    },
    countriesFlag:{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    drapeau:{
        width: "95px",
        height: "60px"
    },
    actualite:{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
    },
    actu:{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    },
    aboutUs: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    cardAboutUs:{
        width: "100%",
        borderRadius: 10,
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
    },
    textAboutUs:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E58F1E",
        color: "white"
    },
    txtUs:{
        padding: "40px",
        fontSize: 20
    },
    dwlPdf:{
        lineHeight: "37px",
        position: "relative",
        top: "80%",
        textDecoration: "none",
        width: "200px",
        height: "40px",
        border: "1px solid #EDBA2D",
        borderRadius: "6px",
        textAlign: "center",
        background: "#1d1d1da8",
        color: "#EDBA2D",
        '&:hover':{
            background: "#1d1d1d",
            textDecoration: "none",
            color: "#EDBA2D",
        }
    },
    btnreport:{
        lineHeight: "37px",
        position: "relative",
        top: "80%",
        textDecoration: "none",
        width: "200px",
        height: "40px",
        border: "1px solid #EDBA2D",
        borderRadius: "6px",
        textAlign: "center",
        background: "#1d1d1d",
        color: "#EDBA2D",
        '&:hover':{
            textDecoration: "none",
            background: "#1d1d1da8",
            color: "#EDBA2D",
        }
    },
    videoPres:{
        textAlign: "center",
        height: "100%",
        padding: "10%",
    },
    ModalContent:{
        width: "700px",
        marginTop: '10%',
        marginBottom: '10%',
        maxWidth: "50% !important"
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },

});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
        };
    }

    handleOpenModal = (e) =>{
        window.location.href = "/cdab/plus_infos"
        // this.setState({openModal: true});
    };

    redirectReportage = (e) =>{
        window.location.href = "/temoignages"
        // this.setState({openModal: true});
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };

    specificPath = (path) =>{
        if(localStorage.getItem("token") !== null){
            window.location.href = "/quiz"+path;
        }else{
            alert("Veuillez tout d'abord créer un compte ou vous connecter!");
            window.location.href = '/connexion';
        }
    };

    render(){
        const {classes} = this.props;
        return (
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CDAB COMPASS</title>
                    <meta
                        name="CDAB COMPASS"
                        content="CDAB COMPASS est une structure
                                éducative élaborant le profil de
                                l’apprenant. Du profil de l’apprenant,
                                tout se clarifie à l’horizon: le potentiel à
                                optimiser, le projet d’études à élaborer,
                                le monde professionnel à apprivoiser
                                selon le marché. A CDAB COMPASS,
                                nous détectons vos talents et les
                                mettons en valeur pour
                                assurer votre avenir!"
                    />
                </Helmet>

                <div className={classes.container}>
                    <div className={classes.header}>
                        <MenuBar/>
                    </div>
                    <div className="imageCarousel">
                        <Carousel className={classes.carousell}>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/NP1.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/new_p8.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/NP2.jpg")} alt=""/></Carousel.Item>

                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/P14.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/P4.jpg")} alt=""/></Carousel.Item>

                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/P10.JPG")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/P5.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/new_p3.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/P7.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className="eachCarousel"  src={require("./assets/new_p9.jpeg")} alt=""/></Carousel.Item>
                        </Carousel>
                    </div>

                    <div className={classes.aboutUs}>
                        <div style={{marginBottom: "100px"}}>
                            <p className="expTitle">QUI SOMMES-NOUS ?</p>
                        </div>

                        <div className="textAboutUs">
                            {/*<Grid item xs={1}></Grid>*/}
                            <Grid alignItems={"center"} item xs={6} className={classes.txtUs}>
                                CDAB COMPASS est une structure éducative détectant le profil de l’apprenant. De ce fait,
                                cher parent, connaitre le profil de l’enfant vous aide :
                                <br/><br/>
                                <ul>
                                    <li><strong>sur la personnalité à</strong> à détecter son potentiel et ses talents, le rendre autonome, le
                                        rendre responsable,</li>
                                    <li><strong>sur le plan scolaire à</strong> l’aider à étudier et s’organiser, l’aider à travailler seul, l’aider à
                                        avoir la méthodologie de travail,</li>
                                    <li><strong>sur le plan de la confiance à</strong> l’aider à établir une bonne communication en famille,
                                        l’aider à avoir confiance en lui, l’aider à définir ses priorités,</li>
                                    <li><strong>sur l’avenir professionnel à</strong> l’aider à se projeter dans l’avenir, l’aider à élaborer son
                                        projet d’études, l’aider à choisir les différents métiers possibles correspondant.</li>
                                </ul>
                            </Grid>
                            <Grid alignItems={"center"} item xs={1}>
                                <a type="button"
                                    className={classes.dwlPdf}
                                    onClick={this.handleOpenModal}
                                   >En savoir plus
                                </a>
                                <Modal dialogClassName ={"ModalContent"} show={this.state.openModal} onHide={this.handleCloseModal}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img style={{width: "100%"}}  src={require("./othersfiles/manuel.png")} alt=""/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleCloseModal}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Grid>
                            <Grid alignItems={"center"} item xs={5}>
                                {/*<img style={{width: "100%"}}  src={require("./assets/lightbulb.jpg")} alt=""/>*/}
                                <div className={classes.videoPres}>
                                    {/*<iframe className="videoPresentation" src="https://www.youtube.com/embed/Cv9Xiyd9IOY"*/}
                                    {/*        frameBorder="0"*/}
                                    {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                                    {/*        allowFullScreen></iframe>*/}
                                    <iframe className="videoPresentation"
                                            src="https://www.youtube.com/embed/KZ8xRuxYLRI"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </Grid>
                            {/*<Grid item xs={1}></Grid>*/}
                        </div>
                    </div>

                    <div className={classes.expertises}>
                        <div style={{marginBottom: "100px"}}>
                            <p className="expTitle">NOS EXPERTISES</p>
                        </div>

                        <ExpertisesComponents/>

                        <br/>
                        <button type="button"
                                style={{background: "rgba(28,27,27,0.94)"}}
                           className={classes.dwlPdf}
                                onClick={() => this.specificPath("/principal_quiz")}
                        >PASSER VOTRE TEST
                        </button>
                    </div>

                    <div className={classes.expertises}>
                        <div style={{marginBottom: "100px"}}>
                            <p className="expTitle">TEMOIGNAGES</p>
                        </div>
                        <div>
                            <iframe className="videoReport" src="https://www.youtube.com/embed/DGYnbGv7Csw"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <br/>
                        <div>
                            <a type="button"
                               className={classes.btnreport}
                               onClick={this.redirectReportage}
                            >VOIR PLUS
                            </a>
                        </div>
                    </div>

                    <div className={classes.countries}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>Nous sommes actuellement présents dans 4 pays</p>
                        </div>

                        <div className={classes.countriesFlag} style={{textAlign: "center"}}>
                            <div><img title={"France"} className={classes.drapeau}  src={require("./assets/fr.png")} alt=""/></div>
                            <div><img title={"Sénegal"}  className={classes.drapeau}  src={require("./assets/sn.png")} alt=""/></div>
                            <div><img title={"Côte d'ivoire"} className={classes.drapeau}  src={require("./assets/ci.png")} alt=""/></div>
                            <div><img title={"Togo"} className={classes.drapeau}  src={require("./assets/tg.png")} alt=""/></div>
                        </div>

                        <div style={{marginTop: "50px",textAlign: "center"}}>
                            <p className={classes.subTitle}>N’hésitez pas à nous contacter en ligne si vous êtes dans un autre pays.</p>
                        </div>
                    </div>

                    <div className={classes.actualite}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>NOS ACTUALITES</p>
                        </div>

                        <Row className={classes.actu}>
                            <Col xs={12} md={6} lg={3}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu4.png")} alt=""/>}
                                    title={"Examens de fin d’année scolaire 2020 : Côte d'ivoire"}
                                    description={"Proclamation des résultats des examens de fin d’année : les taux de réussite une preuve du\n" +
                                    "faible niveau scolaire des élèves."}
                                    onclick={()=>{window.location="/actu/4"}}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu1.jpg")} alt=""/>}
                                    title={"L’importance d’un projet d’études bien élaboré"}
                                    description={"La plupart du temps, l’échec des jeunes apprenants " +
                                    "est dû au projet d’étude presque inexistant ou encore mal élaboré. " +
                                    "Car beaucoup  se lancent dans les études sans une vision globale. …"}
                                    onclick={()=>{window.location="/actu/1"}}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu2.jpg")} alt=""/>}
                                    title={"La motivation : paramètre utile de réussite"}
                                    description={"L’une des causes les plus courantes de l’échec est de" +
                                    " commencer un projet sans le terminer.  L’absence de motivation en " +
                                    "est l’une des raisons. Cela arrive à tout un chacun …"}
                                    onclick={()=>{window.location="/actu/2"}}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu3.jpg")} alt=""/>}
                                    title={"L’importance d’une bonne orientation"}
                                    description={"Un projet professionnel se définit d’après les objectifs " +
                                    "professionnels qui sont eux-mêmes le bilan du vécu, de la personnalité, des " +
                                    "intérêts, des aptitudes, des motivations et des valeurs. Toute prise …"}
                                    onclick={()=>{window.location="/actu/3"}}
                                />
                            </Col>
                        </Row>
                    </div>

                </div>
                <div>
                    <MessengerCustomerChat
                        pageId="454141181441870"
                        appId="238909897689414"
                    />
                    <FooterBar/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
