import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import 'bootstrap/dist/css/bootstrap.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import CardCustom from "./CardCustom";
import {Col, Container, Row} from "react-bootstrap";

const styles = theme => ({
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
    },
});

class ExpertisesComponents extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/expertises"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{width: "100%",background : '#fec601', opacity :'0.8'}}>
                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                <div id="expertiseid" style={{margin: "60px", paddingTop: "50px",paddingBottom: "50px"}}>

                    <div className="row" style={{marginBottom: "50px"}}>
                        <div className="col-sm-12 col-md-12 col-lg-3">
                             
                        </div>

                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-6" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/coach.jpg")} style={{width: "50%", height: "65%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top imgResponsive" alt="..."/>
                            
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Le Coaching Éducatif"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >Avoir des objectifs en tant qu'apprenant est important. Chercher à réussir dans ses études pour atteindre ses objectifs c'est bien. Mais savoir comment réussir dans ses études c'est mieux. Trouver et éveiller ses potentiels pour garantir l'atteinte de ses objectifs c'est prioritaire.</p>
                                <a href="/expertises/coaching" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-3">
                            
                        </div>
                    </div>

                    <div className="row" style={{marginBottom: "50px"}}>
                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/PROFIL.png")} style={{width: "50%", height: "60%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top imgResponsive" alt="..."/>
                            
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Profil"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >La détection du profil est une phase à travers laquelle nous vous aidons à travers des tests adéquat à découvrir et à connaître la personnalité de l'apprenant, à faire ressortir ses capacités, améliorer ses aptitudes et affermir son environnement Social.</p>
                                <a href="/expertises/profil_etudiant" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                             
                        </div>

                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/PROJETDETUDES.png")} style={{width: "50%",height: "60%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Projet d’étude national \n ou international"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>Un projet d’étude est une feuille de route permettant à l'apprenant d’asseoir son parcours scolaire ,estudiantin ou de formation . Il fait preuve de la volonté à atteindre l’univers professionnel.</p>
                                <a href="/expertises/projet_etude" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card cardlastResponsive cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/POTENTIAL.png")} style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Potentiel"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>Cette expertise met en relief la méthodologie, l’organisation de travail de l’apprenant dans son espace . il apprend à être autonome et responsable assez rapidement au bout de deux mois.</p>
                                <a href="/expertises/potential" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                             
                        </div>
                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/PROFESSIONNEL.png")} style={{width: "50%",height: "80%", marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Professionnel"}</strong> </li> </ul> </h5>
                                <p className="card-text">S’épanouir dans son emploi est nécessaire à part l’aspect financier. On peut ainsi se recycler ou entreprendre à tout âge.</p>
                                <a href="/expertises/professional" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                            </div>
                        </div>
                    </div>
                </div>
                 )}

                {localStorage.getItem("locale_lg")==="en-us" &&(
                <div style={{margin: "60px"}}>
                    <div className="row" style={{marginBottom: "50px"}}>
                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                        <img src={require("../assets/PROFIL.png")} style={{width: "50%", height: "60%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Profile"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >The profile detection phase remains a mystery to some and a game of games for others.
                                In fact, this phase consists in discovering the child and his environment quite simply.</p>
                                <a href="/expertises/profil_etudiant" className="btn" style={{color : "#BA4A1A"}}>LEARN MORE</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                             
                             </div>
                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{ flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/PROJETDETUDES.png")} style={{width: "50%",height: "60%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"National study project \n or international"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>A study project is a roadmap for profiling one's student career. The study project shows
                                our desire to reach the professional world.</p>
                                <a href="/expertises/projet_etude" className="btn" style={{color : "#BA4A1A"}}>LEARN MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card cardlastResponsive cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/POTENTIAL.png")} style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Potential"}</strong> </li> </ul> </h5>
                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>The CDAB COMPASS educational structure, also specialized in the support and guidance of learners
                                on all academic, university and even professional levels, attaches importance to this expertise.</p>
                                <a href="/expertises/potential" className="btn" style={{color : "#BA4A1A"}}>LEARN MORE</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                             
                             </div>
                        <div className="card cardResponsive col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                            <img src={require("../assets/PROFESSIONNEL.png")} style={{width: "50%",height: "80%", marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top imgResponsive" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Professional"}</strong> </li> </ul> </h5>
                                <p className="card-text">Many are those who do not have a professional project, who are embarking on a career
                                just because their parents want them to do this job.</p>
                                <a href="/expertises/professional" className="btn" style={{color : "#BA4A1A"}}>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                 )}

            </div>
             
                
        );
    }
}

export default withStyles(styles)(ExpertisesComponents);
