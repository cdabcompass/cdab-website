import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
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
            <div style={{width: "100%"}}>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <CardCustom
                                icon={<FindInPageIcon/>}
                                title={"Profil"}
<<<<<<< HEAD
                                description={"La détection du profil est une phase à travers laquelle nous vous aidons à travers des tests adéquat à découvrir et à connaître la personnalité de l'apprenant ,à faire ressortir ses capacités, améliorer ses aptitudes et affermir son environnement Social. Ainsi dit ,cette phase est importante et primordiale pour l’apprenant et sa famille."}
=======
                                description={"La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.\n" +
                                "En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement."}
>>>>>>> 4899b21b803853482288152bb87d2a16c57d151c
                                onclick={()=>{this.moreInfo("/profil_etudiant")}}
                            />)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <CardCustom
                                icon={<FindInPageIcon/>}
                                title={"Profil"}
                                description={"The profile detection phase remains a mystery to some and a game of games for others.\n" +
                                "In fact, this phase consists in discovering the child and his environment quite simply."}
                                onclick={()=>{this.moreInfo("/profil_etudiant")}}
                            />)}
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <CardCustom
                                icon={<SchoolIcon/>}
                                title={"Projet d’étude national \n ou international"}
<<<<<<< HEAD
                                description={"Un projet d’étude est une feuille de route permettant à l'apprenant d’asseoir son parcours scolaire ,estudiantin ou de formation . Il fait preuve de la volonté à atteindre l’univers professionnel. Ainsi ,il comporte les aspirations post-bac et post-brevet des apprenants. "}
=======
                                description={"Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de" +
                                "notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants. "}
>>>>>>> 4899b21b803853482288152bb87d2a16c57d151c
                                onclick={()=>{this.moreInfo("/projet_etude")}}
                            />)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <CardCustom
                                icon={<SchoolIcon/>}
                                title={"National study project \n or international"}
                                description={"A study project is a roadmap for profiling one's student career. The study project shows" +
                                "our desire to reach the professional world. It includes the post-baccalaureate and post-diploma aspirations of learners."}
                                onclick={()=>{this.moreInfo("/projet_etude")}}
                            />
                        )}
                    </Col>
                </Row>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <CardCustom
                                icon={<AccountCircleIcon/>}
                                title={"Potentiel"}
<<<<<<< HEAD
                                description={"Cette expertise met en relief la méthodologie ,l’organisation de travail de l’apprenant dans son espace . il apprend à être autonome et responsable assez rapidement au bout de deux mois."}
=======
                                description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                                "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
>>>>>>> 4899b21b803853482288152bb87d2a16c57d151c
                                onclick={()=>{this.moreInfo("/potential")}}
                            />
                        )}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <CardCustom
                                icon={<AccountCircleIcon/>}
                                title={"Potential"}
                                description={"The CDAB COMPASS educational structure, also specialized in the support and guidance of learners " +
                                "on all academic, university and even professional levels, attaches importance to this expertise."}
                                onclick={()=>{this.moreInfo("/potential")}}
                            />
                        )}
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <CardCustom
                                icon={<MenuBookIcon/>}
                                title={"Professionnel"}
<<<<<<< HEAD
                                description={"S’épanouir dans son emploi est nécessaire à part l’aspect financier. On peut ainsi se recycler ou entreprendre à tout âge."}
=======
                                description={"Beaucoup sont ceux qui n’ont pas de projet professionnel, qui se lancent dans une carrière\n" +
                                "juste parce que leurs parents veulent qu’ils exercent ce métier."}
>>>>>>> 4899b21b803853482288152bb87d2a16c57d151c
                                onclick={()=>{this.moreInfo("/professional")}}
                            />
                        )}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <CardCustom
                                icon={<MenuBookIcon/>}
                                title={"Professional"}
                                description={"Many are those who do not have a professional project, who are embarking on a career\n" +
                                "just because their parents want them to do this job."}
                                onclick={()=>{this.moreInfo("/professional")}}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withStyles(styles)(ExpertisesComponents);
