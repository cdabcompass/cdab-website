import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";
import Sidemenu from "../utils/Sidemenu";
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
});

class Professional extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <Helmet>
                        <meta
                            name="CDAB COMPASS"
                            content="
                            Detection de profil
                            L'avenir de votre enfant
                            Voyager en Europe et faire ses études à l'étranger
                            L'avenir de vos enfants
                            "
                        />
                    </Helmet>

                    <div>
                        <MenuBar/>
                        <Sidemenu/>
                    </div>
                    <div style={{marginTop: "100px",marginBottom: "100px"}}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/professional.jpg")} alt=""/>}
                                title={"Le Professionel"}
                            />)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/professional.jpg")} alt=""/>}
                                title={"Professional"}
                            />)}
                        <div className={classes.subContext}>
                            <div className="subContainer">
                                <div style={{flex: 1}}>
                                    <iframe width="" height="186" src="https://www.youtube.com/embed/dByOdhtnPi0"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe></div>
                                <div style={{flex: 1}}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <p style={{fontSize: "20px",textAlign:"justify"}}>
                                            Beaucoup sont ceux qui n’ont pas de projet professionnel, qui se lancent dans une carrière
                                            juste parce que leurs parents veulent qu’ils exercent ce métier. Pour réussir dans le monde
                                            professionnel, il faut avoir des objectifs clairement définis, savoir ce qu’on vaut et chercher à
                                            évoluer de jour en jour. <br/><br/>
                                            Le choix d’une formation ou d’un métier est une démarche qui passe par plusieurs étapes.
                                            Pour être à l’écoute de ses aspirations personnelles, il faut parfois regarder au-delà des clichés
                                            et des idées toutes faites sur les métiers "féminins" ou "masculins". <br/><br/>
                                            Il faut d’abord connaître son profil (personnalité, capacités, attitudes, qualités, etc.), déceler
                                            son potentiel afin de connaître vraiment ce à quoi on est disposé à faire comme profession,
                                            savoir mettre en valeur ses études sur le terrain professionnel, être opérationnel par des
                                            formations complémentaires, et assurer la transition études-stage-emploi. <br/><br/>
                                            Si vous êtes déjà dans le domaine professionnel et vous ne vous sentez pas à votre place, vous
                                            désirez changer de voie ou d’orientation, ou vous rassurer dans le métier exercé actuellement,
                                            votre épanouissement professionnel est important et nous vous accompagnons. <br/><br/>
                                            A CDAB COMPASS, notre expertise en la matière vous éclaire et aide à vous épanouir
                                            professionnellement.
                                        </p>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <p style = {{fontSize: "20px", textAlign: "justify"}}>
                                            Many are those who do not have a professional project, who are embarking on a career
                                            just because their parents want them to do this job. To succeed in the world
                                            professional, you must have clearly defined objectives, know your worth and seek to
                                            evolve day by day. <br/> <br/>
                                            Choosing a course or a profession is a process that goes through several stages.
                                            To be attentive to your personal aspirations, you sometimes have to look beyond the clichés
                                            and ready-made ideas on "female" or "male" professions. <br/> <br/>
                                            You must first know your profile (personality, abilities, attitudes, qualities, etc.), identify
                                            its potential in order to really know what one is willing to do as a profession,
                                            know how to highlight your studies in the professional field, be operational through
                                            additional training, and ensure the transition from studies to internship to employment. <br/> <br/>
                                            If you are already in the professional field and you do not feel like you belong, you
                                            want to change your path or direction, or reassure yourself in the job currently exercised,
                                            your professional development is important and we support you. <br/> <br/>
                                            At CDAB COMPASS, our expertise in this field enlightens you and helps you flourish
                                            professionally.
                                        </p>
                                    )}
                                </div>
                            </div>
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


export default withStyles(styles)(Professional);
