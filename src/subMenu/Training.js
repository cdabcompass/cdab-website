import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import CardCustom from "../utils/CardCustom";
import SchoolIcon from '@material-ui/icons/School';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import translate from "../i18n/messages/translate";
import {IntlProvider} from "../i18n";
import Sidemenu from "../utils/Sidemenu";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
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
    training: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
});

class Training extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/training"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                        <Sidemenu/>
                    </div>
                    
                    
                    <div style={{marginTop: "260px"}}>
                        
                        <div className={classes.training}>
                             
                             <div style={{marginBottom: "-30px"}} className="row">
                                 <div style={{marginTop : "22px"}} className="square"></div> <p style =  {{color : '#7c1c18' }} className="expTitle">{translate("Training")}</p>
                             </div>
                             
                         </div>

                         <div style={{width: "100%",background : '#fec601', opacity :'0.8'}}>
                            
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                <div id="expertiseid" style={{margin: "60px",  paddingTop: "50px",paddingBottom: "50px"}}>
                                    <div className="row" style={{marginBottom: "50px"}}>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src={require("../assets/form.jpg")} style={{width: "50%", height: "80%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top" alt="..."/>
                                            
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Formation"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >La formation peut se définir du point de vu général comme étant un apprentissage de 
                                                             connaissances et de méthodes de travail mais aussi d’une expérimentation nouvelle dans divers 
                                                             domaines.</p>
                                                <a href="/training/formations" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-2">
                                            
                                        </div>

                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src={require("../assets/stage.jpg")} style={{width: "50%",height: "80%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Stage"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>La plupart du temps, les étudiants en fin de cycle sont orientés vers des stages dans le but de leur 
                                         permettre de découvrir le monde du travail, de mettre en pratique leurs connaissances et acquérir une expérience 
                                          professionnelle.</p>
                                                <a href="/training/stages" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src={require("../assets/cv.jpg")} style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Conseils - CV - Lettre de motivation"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>Le CV (curriculum vitae) est un formel de recrutement très courant. Il présente une bonne proportion  
                                         entre le temps passé à le lire et la quantité/qualité d’informations que nous apprenons d’un candidat.</p>
                                                <a href="/training/conseils" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-2">
                                            
                                        </div>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src={require("../assets/offres.jpg")} style={{width: "50%",height: "80%", marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Nos offres"}</strong> </li> </ul> </h5>
                                                <p className="card-text">Il n’est jamais trop tard de saisir l’opportunité de franchir un nouveau pas 
                                        Tous les enfants peuvent réussir. Avec un profil bien établi, le projet d’études est bien ficelé 
                                         Ainsi la porte est ouverte pour franchir un nouveau palier.</p>
                                                <a href="/training/nos_offres" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}

                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                <div style={{margin: "60px", paddingTop: "50px",paddingBottom: "50px"}}>
                                    <div className="row" style={{marginBottom: "50px"}}>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn4.iconfinder.com/data/icons/education-school-1/64/board-256.png" style={{width: "50%", height: "60%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top" alt="..."/>
                                            
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Training"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >The training can be defined from a general point of view as being an apprenticeship of 
                                         knowledge and working methods but also new experimentation in various 
                                         areas. It allows adaptation to another framework, the development of an individual's potential 
                                         to another.</p>
                                                <a href="/training/formations" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-2">
                                            
                                        </div>

                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/03.Office-256.png" style={{width: "50%",height: "60%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Internship"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>Most of the time, students at the end of their cycle are oriented towards internships with the aim of their 
                                         allow them to discover the world of work, to put their knowledge into practice and gain experience 
                                         professional.</p>
                                                <a href="/training/stages" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn2.iconfinder.com/data/icons/viiva-business/32/resume-256.png" style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Advice - CV - Cover letter"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>The CV (curriculum vitae) is a very common form of recruitment. It has a good proportion
                                         between the time spent reading it and the amount / quality of information we learn from a candidate. The CV allows you to have the same information 
                                         relevant for a short reading time.  </p>
                                                <a href="/training/conseils" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-2">
                                            
                                        </div>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_business_48px-256.png" style={{width: "50%",height: "80%", marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Our offers"}</strong> </li> </ul> </h5>
                                                <p className="card-text">It’s never too late to seize the opportunity to take another step forward.
                                        All children can be successful. With a well-established profile, the school plan is well put together.
                                        So the door is open to take a new level.</p>
                                                <a href="/training/nos_offres" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}

                            </div>
 
                        {/*
                        <Row className={classes.cards}>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<SchoolIcon/>}
                                        title={"Formation"}
                                        description={"La formation peut se définir du point de vu général comme étant un apprentissage de\n" +
                                        "                        connaissances et de méthodes de travail mais aussi d’une expérimentation nouvelle dans divers\n" +
                                        "                        domaines. Elle permet l’adaptation à un autre cadre, le développement du potentiel d’un individu\n" +
                                        "                        à un autre."}
                                        onclick={()=>{this.moreInfo("/formations")}}
                                    />
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<SchoolIcon/>}
                                        title={"Training"}
                                        description={"The training can be defined from a general point of view as being an apprenticeship of\n" +
                                        "knowledge and working methods but also new experimentation in various\n" +
                                        "areas. It allows adaptation to another framework, the development of an individual's potential\n" +
                                        "to another."}
                                        onclick={()=>{this.moreInfo("/formations")}}
                                    />
                                )}
                            </Col>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<HomeWorkIcon/>}
                                        title={"Stage"}
                                        description={"La plupart du temps, les étudiants en fin de cycle sont orientés vers des stages dans le but de leur " +
                                        "permettre de découvrir le monde du travail, de mettre en pratique leurs connaissances et acquérir une expérience" +
                                        " professionnelle."}
                                        onclick={()=>{this.moreInfo("/stages")}}
                                    />)}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<HomeWorkIcon/>}
                                        title={"Traineeship"}
                                        description={"Most of the time, students at the end of their cycle are oriented towards internships with the aim of their" +
                                        "allow them to discover the world of work, to put their knowledge into practice and gain experience" +
                                        "professional."}
                                        onclick={()=>{this.moreInfo("/stages")}}
                                    />)}
                            </Col>
                        </Row>
                        <Row className={classes.cards}>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<ReceiptIcon/>}
                                        title={"Conseils - CV - Lettre de motivation"}
                                        description={"Le CV (curriculum vitae) est un formel de recrutement très courant. Il présente une bonne proportion " +
                                        "entre le temps passé à le lire et la quantité/qualité d’informations que nous apprenons d’un candidat. Le CV permet d’avoir les mêmes informations " +
                                        "pertinentes pendant un court temps de lecture.\n"}
                                        onclick={()=>{this.moreInfo("/conseils")}}
                                    />
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<ReceiptIcon/>}
                                        title={"Advice - CV - Cover letter"}
                                        description={"The CV (curriculum vitae) is a very common form of recruitment. It has a good proportion" +
                                        "\n" +
                                        "between the time spent reading it and the amount / quality of information we learn from a candidate. The CV allows you to have the same information " +
                                        "relevant for a short reading time.\n"}
                                        onclick={()=>{this.moreInfo("/conseils")}}
                                    />
                                )}
                            </Col>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<BusinessCenterIcon/>}
                                        title={"Nos offres"}
                                        description={"\n" +
                                        " Il n’est jamais trop tard de saisir l’opportunité de franchir un nouveau pas. " +
                                        "Tous les enfants peuvent réussir. Avec un profil bien établi, le projet d’études est bien ficelé." +
                                        " Ainsi la porte est ouverte pour franchir un nouveau palier."}
                                        onclick={()=>{this.moreInfo("/nos_offres")}}
                                    />)}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<BusinessCenterIcon/>}
                                        title={"Our offers"}
                                        description={"It’s never too late to seize the opportunity to take another step forward." +
                                        "All children can be successful. With a well-established profile, the school plan is well put together." +
                                        "So the door is open to take a new level."}
                                        onclick={()=>{this.moreInfo("/nos_offres")}}
                                    />
                                )}
                            </Col>
                        </Row>

                        */}
                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(Training);
