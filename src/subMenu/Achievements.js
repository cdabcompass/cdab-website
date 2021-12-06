import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";
import CardCustom from "../utils/CardCustom";
import WorkIcon from '@material-ui/icons/Work';
import PanToolIcon from '@material-ui/icons/PanTool';
import PollIcon from '@material-ui/icons/Poll';
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
    achievements: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
});

class Achievements extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/nos_realisations"+path;
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
                        
                    <div className={classes.achievements}>
                             
                             <div style={{marginBottom: "-30px"}} className="row">
                                 <div style={{marginTop : "22px"}} className="square"></div> <p style =  {{color : '#7c1c18' }} className="expTitle">{translate("Nos_realisations")}</p>
                             </div>
                             
                         </div>

                         <div style={{width: "100%",background : '#fec601', opacity :'0.8'}}>
                            
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                <div id="expertiseid" style={{margin: "60px",  paddingTop: "50px",paddingBottom: "50px"}}>
                                    <div className="row" style={{marginBottom: "50px"}}>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_24-256.png" style={{width: "50%", height: "80%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top" alt="..."/>
                                            
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Visites d'entreprises"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres. 
                                         En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement.</p>
                                                <a href="/nos_realisations/companyVisits" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-2">
                                            
                                        </div>

                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/pie-chart-256.png" style={{width: "50%",height: "80%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"REPORTAGES"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants  
                                         sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise.</p>
                                                <a href="/nos_realisations/testimonials" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                       
                                        <div className="col-sm-12 col-md-12 col-lg-3">
                                            
                                        </div>
                                        <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                            <img src="https://cdn3.iconfinder.com/data/icons/customer-support-24/64/report-service-statistics-call-performance-256.png" style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Rapport d'activités"}</strong> </li> </ul> </h5>
                                                <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de 
                                         notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants.</p>
                                                <a href="/nos_realisations/activityRepport" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-3">
                                             
                                        </div>
                                    </div>
                                </div>
                                )}

                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                 <div id="expertiseid" style={{margin: "60px",  paddingTop: "50px",paddingBottom: "50px"}}>
                                 <div className="row" style={{marginBottom: "50px"}}>
                                     <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                         <img src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_24-256.png" style={{width: "50%", height: "80%" , marginLeft: "-15px", borderRadius: "25px", color : "#FFC300"}} className="card-img-top" alt="..."/>
                                         
                                         <div className="card-body">
                                             <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Company visits"}</strong> </li> </ul> </h5>
                                             <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }} >The profile detection phase remains a mystery for some and a game of games for others.  
                                        In fact, this phase consists in discovering the child and his environment quite simply.</p>
                                             <a href="/nos_realisations/companyVisits" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                         </div>
                                     </div>

                                     <div className="col-sm-12 col-md-12 col-lg-2">
                                         
                                     </div>

                                     <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                         <img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/pie-chart-256.png" style={{width: "50%",height: "80%", marginLeft: "-15px" , borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                             <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"REPORTS"}</strong> </li> </ul> </h5>
                                             <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>The CDAB COMPASS educational structure, also specialized in the support and guidance of learners  
                                         on all academic, university and even professional levels, attaches importance to this expertise.</p>
                                             <a href="/nos_realisations/testimonials" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="row">
                                    
                                     <div className="col-sm-12 col-md-12 col-lg-3">
                                         
                                     </div>
                                     <div className="card col-sm-12 col-md-12 col-lg-5" style={{  flexDirection: "row",  borderRadius: "30px", border: "0px"}}>
                                         <img src="https://cdn3.iconfinder.com/data/icons/customer-support-24/64/report-service-statistics-call-performance-256.png" style={{width: "50%", height: "80%",  marginLeft: "-15px", borderRadius: "25px"}} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                             <h5 className="card-title"><ul> <li style={{color: "#a14627"}}><strong>{"Activity Report"}</strong> </li> </ul> </h5>
                                             <p className="card-text" style={{textAlign: "justify",textJustify: "inter-word" }}>A study project is a roadmap for profiling one's student career. The study project shows  
                                        our desire to reach the professional world. It includes the post-baccalaureate and post-graduate aspirations of learners.</p>
                                             <a href="/nos_realisations/activityRepport" className="btn" style={{color : "#BA4A1A"}}>EN SAVOIR PLUS</a>
                                         </div>
                                     </div>

                                     <div className="col-sm-12 col-md-12 col-lg-3">
                                          
                                     </div>
                                 </div>
                             </div>
                                )}

                        </div>
 
                         {/* 
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <Row className={classes.cards}>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<WorkIcon/>}
                                        title={"Visites d'entreprises"}
                                        description={"La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.\n" +
                                        "En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement."}
                                        onclick={()=>{this.moreInfo("/companyVisits")}}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<PanToolIcon/>}
                                        title={"REPORTAGES"}
                                        description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                                        "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
                                        onclick={()=>{this.moreInfo("/testimonials")}}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<PollIcon/>}
                                        title={"Rapport d'activités"}
                                        description={"Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de" +
                                        "notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants. "}
                                        onclick={()=>{this.moreInfo("/activityRepport")}}
                                    />
                                </Col>
                            </Row>
                        )}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <Row className={classes.cards}>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<WorkIcon/>}
                                        title={"Company visits"}
                                        description={"The profile detection phase remains a mystery for some and a game of games for others. \ N "+
                                        "In fact, this phase consists in discovering the child and his environment quite simply."}
                                        onclick={()=>{this.moreInfo("/companyVisits")}}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<PanToolIcon/>}
                                        title={"REPORTS"}
                                        description={"The CDAB COMPASS educational structure, also specialized in the support and guidance of learners "+
                                        "on all academic, university and even professional levels, attaches importance to this expertise."}
                                        onclick={()=>{this.moreInfo("/testimonials")}}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardCustom
                                        icon={<PollIcon/>}
                                        title={"Activity Report"}
                                        description={"A study project is a roadmap for profiling one's student career. The study project shows "+
                                        "our desire to reach the professional world. It includes the post-baccalaureate and post-graduate aspirations of learners."}
                                        onclick={()=>{this.moreInfo("/activityRepport")}}
                                    />
                                </Col>
                            </Row>
                        )}
                        
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


export default withStyles(styles)(Achievements);
