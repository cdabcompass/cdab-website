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
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.titles}>
                            <p className="subTitle">{translate("Nos_realisations")}</p>
                        </div>
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
