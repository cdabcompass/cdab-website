import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Col, Modal, Row} from "react-bootstrap";
import CardActu from "./utils/CardActu";
import Header from "./utils/Header";
import Grid from "@material-ui/core/Grid";
import ExpertisesComponents from "./utils/ExpertisesComponents";
import Button from "react-bootstrap/Button";
import FooterBar from "./utils/FooterBar";
import Helmet from "react-helmet";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {LOCALES,IntlProvider} from "./i18n";
import translate from "./i18n/messages/translate";
import {FrenshData, EnglishData} from "./articlesData/articleData"

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
        marginTop: "0px",
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
        marginTop: "0px",
    },
    actu:{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        overflowX: "scroll"
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
        fontSize: 20,
        color: "white"
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
        marginTop: '0%',
        marginBottom: '0%',
        maxWidth: "50% !important"
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    btnTrade:{
        textDecoration: "none",
        border: "1px solid",
        margin: "0 15px",
    },
    mainCard: {
    },

    stackleft:{
       position: 'absolute', 
       zIndex: '10', 
       opacity: '0.8', 
       width : '200px', 
       height: '350px',
       background : '#FFC300'  , 
       marginTop: '200px', 
       marginLeft: '50px', 
       alignText: 'center'
    },

    responsiveLeftMenu: {
       
        "@media (max-width: 746px)": {
            visibility: "hidden"
        }
    }
    

});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
            locale: LOCALES.FRENCH
        };
    }

    componentDidMount() {
        if(localStorage.getItem("locale_lg")===null ||
            localStorage.getItem("locale_lg")===undefined){
            this.changeLangue(this.state.locale);
        }else {
            this.changeLangue(localStorage.getItem("locale_lg"));
        }
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

    changeLangue = (lg) =>{
        localStorage.setItem("locale_lg",lg);
        console.log("test test test "+localStorage.getItem("locale_lg"));
        // if(localStorage.getItem("locale_lg")===null || localStorage.getItem("locale_lg")===undefined){
        //     console.log(this.state.locale);
        //     localStorage.setItem("locale_lg",this.state.locale);
        // }
        this.setState({locale: localStorage.getItem("locale_lg") });
    }

    render(){
        const {classes} = this.props;
        return (
            <IntlProvider locale={this.state.locale}>
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
                            {/* <MenuBar/>*/}
                            <Header/>
                        <div style = {{position: 'relative'}} className={classes.responsiveLeftMenu} >

                            <div style = {{position: 'absolute', zIndex: '10', opacity: '0.85', width : '200px', height: '360px',background : '#FFC300'  , marginTop: '200px', marginLeft: '50px', alignText: 'center'}}>
                                <Grid style =  {{}}   container   direction="column">
            
                                <Button style = {{border: '1px solid white',background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/cdab/plus_infos"><strong>{translate("QUI_SOMMES_NOUS")}</strong></Button>
                                <hr style = {{border: '1px solid white', width : '160px'}}/>
                                <Button style = {{border: '1px solid white',background : '#FFC300', textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_produits_evenements/produits"><strong>{translate("Nos_produits")}</strong></Button>
                                <hr style = {{border: '1px solid white', width : '160px'}}/>
                                <Button style = {{border: '1px solid white',background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_produits_evenements/evenements"><strong>{translate("Nos_evenements")}</strong></Button>
                                <hr style = {{border: '1px solid white', width : '160px'}}/>
                                
                                <Button style = {{border: '1px solid white', background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_locaux"><strong>{translate("Nos_locaux")}</strong></Button>
                                 
                                </Grid>
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
                        </div>

                        <div className={classes.aboutUs}>
                            <div style={{marginBottom: "30px"}}>
                                <p style =  {{color : '#7c1c18' }} className="expTitle">{translate("QUI_SOMMES_NOUS")}</p>
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-5 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            CDAB Compass est une structure éducative qui vous aide à détecter  le profil d'un  apprenant donné. Elle vous aide à  révéler  de façon précise et concise  le meilleur  de votre enfant, non seulement  sur sa vie éducative,  mais aussi professionnelle.  Sur ce ,cher parent , CDAD compass s'engage à vos côtés  à  connaître  le profil de votre enfant et à y apporter des solutions  qui vous aide :
                                            <br/><br/>
                                            <ul>
                                                <li><strong>sur la personnalité à</strong> faire ressortir son potentiel et ses talents ,le rendre autonome ,le rendre responsable,</li>
                                                <li><strong>sur le plan scolaire à</strong> l'aider a étudier et s'organiser ,l'aider à travailler seul, l'aider à avoir la méthodologie de travail,</li>
                                                <li><strong>sur le plan de la confiance à</strong> l'aider à établir une bonne communication en famille ,l'aider à avoir confiance en lui ,l'aider à définir ses priorités,</li>
                                                <li><strong>sur l’avenir professionnel à</strong> l'aider à se projeter dans l'avenir ,l'aider à élaborer son projet d’études et choisir les différents métiers possibles correspondant.</li>
                                            </ul>
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            CDAB Compass is an educational facility that helps you to detect the profile of a given learner. It is our duty to assist you to accurately detect the best hidden gift or talent of your child, not only in terms of education but also in terms of profession. 
    And so dear parent, CDAD Compass devoted to your course is poised to knowing what your child is made up with and providing solutions that will help you in terms of :
                                            <br/><br/>
                                            <ul>
                                                <li><strong>Personality -</strong> to unearth his/her potential and talent so as to make him/her self-reliant and responsible,</li>
                                                <li><strong>Academic -</strong> to help him/her to study and organize himself, to help him/her work on his own and get him/her to be familiar with work methodology,</li>
                                                <li><strong>Confidence - </strong> helping him to establish good communication within the family setting, to develop self-confidence and define his/her priorities,</li>
                                                <li><strong>Future career - </strong> helping him/her foresee the future, develop his/her education plan and select the various possible corresponding professions.</li>
                                            </ul>
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    
                                    {/*<img style={{width: "100%"}}  src={require("./assets/lightbulb.jpg")} alt=""/>*/}
                                    <div className={classes.videoPres}>
                                        {/*<iframe className="videoPresentation" src="https://www.youtube.com/embed/Cv9Xiyd9IOY"*/}
                                        {/*        frameBorder="0"*/}
                                        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                                        {/*        allowFullScreen></iframe>*/}
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/-cy4T6UJPdk"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                                {/*<Grid item xs={1}></Grid>*/}
                            </div>
                            <div className="row">
                                <Grid alignItems={"center"}>
                                    <a type="button"
                                    className={classes.dwlPdf}
                                    onClick={this.handleOpenModal}
                                    >{translate("En_savoir_plus")}
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
                            </div>
                        </div>

                        <div className={classes.expertises}>
                            <div style={{marginBottom: "100px"}}>
                                <p className="expTitle">{translate("NOS_EXPERTISES")}</p>
                            </div>

                            <ExpertisesComponents/>

                            <br/>
                            { localStorage.getItem("situation") !== "Parent" && (

                                <button type="button"
                                style={{background: "rgba(28,27,27,0.94)"}}
                                className={classes.dwlPdf}
                                onClick={() => this.specificPath("/principal_quiz")}
                                >{translate("PASSER_VOTRE_TEST")}
                                </button>
                            )}
                            { localStorage.getItem("situation") === "Parent" && (
                                <button type="button"
                                        style={{background: "rgba(28,27,27,0.94)"}}
                                        className={classes.dwlPdf}
                                        onClick={() => this.specificPath("/parent1")}
                                >{translate("PASSER_VOTRE_TEST")}
                                </button>
                            )}
                        </div>

                        <div className={classes.expertises}>
                            <div style={{marginBottom: "100px"}}>
                                <p className="expTitle">{translate("TEMOIGNAGES")}</p>
                            </div>
                             
                            <div className="row" >
                                <div className="col-sm-12 col-md-6 col-lg-4 center">
                                     
                                        <iframe style={{height: "320px",width : "480px"}} src="https://player.vimeo.com/video/582899743"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen> </iframe>
                                  
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 center">
                                    
                                        <iframe style={{height: "320px",width : "480px"}} src="https://player.vimeo.com/video/635224135" 
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                    
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4 center">
                                     
                                        <iframe style={{height: "320px",width : "480px"}} src="https://player.vimeo.com/video/583327058" 
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                 
                                </div>
                            </div>

                            <br/>
                            <div>
                                <a type="button"
                                   className={classes.btnreport}
                                   onClick={this.redirectReportage}
                                >{translate("VOIR_PLUS")}
                                </a>
                            </div>
                        </div>

                        <div className={classes.countries}>
                            <div style={{marginBottom: "50px",textAlign: "center"}}>
                                <p className={classes.sTitle}>{translate("Emplacement")}</p>
                            </div>

                            <div className={classes.countriesFlag} style={{textAlign: "center"}}>
                                <div><img title={"France"} className={classes.drapeau}  src={require("./assets/fr.png")} alt=""/></div>
                                <div><img title={"Sénegal"}  className={classes.drapeau}  src={require("./assets/sn.png")} alt=""/></div>
                                <div><img title={"Côte d'ivoire"} className={classes.drapeau}  src={require("./assets/ci.png")} alt=""/></div>
                                <div><img title={"Togo"} className={classes.drapeau}  src={require("./assets/tg.png")} alt=""/></div>
                            </div>

                            <div style={{marginTop: "50px",textAlign: "center"}}>
                                <p className={classes.subTitle}>{translate("Emplacement_contact")}</p>
                            </div>
                        </div>

                        <div className={classes.actualite}>
                            <div style={{marginBottom: "50px",textAlign: "center"}}>
                                <p className={classes.sTitle}>{translate("NOS_ACTUALITES")}</p>
                            </div>

                            {/* <div className={classes.actuCard}>
                                <div className={classes.cardBody}>
                                    <h5>Examens de fin d’année scolaire 2020 : Côte d'ivoire</h5>
                                    <p>Proclamation des résultats des examens de fin d’année :
                                        les taux de réussite une preuve du
                                        faible niveau scolaire des élèves.
                                    </p>
                                </div>
                            </div> */}

                            <div>
                            {localStorage.getItem("locale_lg")==="fr-fr" && (
                                <div className={classes.mainCard}>
                                    <Grid container
                                        alignItems="center"
                                        spacing={3}>
                                        {FrenshData.map((item, index) => (
                                            <Grid key={item.title} item xs={12} sm={4} >
                                                <CardActu
                                                    title={item.title}
                                                    description={item.description}
                                                    onclick={()=>{window.location=item.link}}
                                                    image={item.image}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            )}
                            {localStorage.getItem("locale_lg")==="en-us" && (
                                <div className={classes.mainCard}>
                                    <Grid container
                                        alignItems="center"
                                        spacing={3}>
                                        {EnglishData.map((item, index) => (
                                            <Grid key={item.title} item xs={12} sm={4} >
                                                <CardActu
                                                    title={item.title}
                                                    description={item.description}
                                                    onclick={()=>{window.location=item.link}}
                                                    image={item.image}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            )}
                            </div>
                        </div>

                    </div>
                    <div>
                        <MessengerCustomerChat
                            pageId="454141181441870"
                            appId="238909897689414"
                        />
                        <button className={classes.btnTrade} onClick={()=>this.changeLangue(LOCALES.ENGLISH)}><img width={25} src={require("./assets/state_dr.png")}/></button>
                        <button className={classes.btnTrade} onClick={()=>this.changeLangue(LOCALES.FRENCH)}><img width={25} src={require("./assets/france_dr.png")}/></button>

                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default withStyles(styles)(App);
