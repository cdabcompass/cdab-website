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

class Coaching extends Component {
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
                                image={<img className={classes.profilImage}  src={require("../assets/coach.jpg")} alt=""/>}
                                title={"Le Coaching Éducatif"}
                            />)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/coach.jpg")} alt=""/>}
                                title={"Le Coaching Éducatif"}
                            />)}
                        <div className={classes.subContext}>
                            <div className="subContainer">
                                <div style={{flex: 1}}>
                                    <iframe width="" height="186" src="https://www.youtube.com/embed/PFAMxT7BCAI"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe></div>
                                <div style={{flex: 1}}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <p style={{fontSize: "20px",textAlign:"justify"}}>
                                            Avoir des objectifs en tant qu'apprenant est important. Chercher à réussir dans ses études pour atteindre ses objectifs c'est bien. Mais savoir comment réussir dans ses études c'est mieux. Trouver et éveiller ses potentiels pour garantir l'atteinte de ses objectifs c'est prioritaire. Cest pourquoi il est nécessaire de faire le coaching éducatif.<br/><br/>
                                            I- LE COACHING ÉDUCATIF : DEFINITION <br/><br/>
                                            Le coaching éducatif est un accompagnement personnel conduisant à un changement, permettant d'obtenir des résultats concrets et mesurables dans la vie scolaire et personnelle de l’apprenant.<br/><br/>
                                            II- QUEL EST LE BUT DU COACHING ÉDUCATIF ?<br/><br/>
                                            Le coaching éducatif vise quatre points essentiels :<br/><br/>
                                            1.	L’éveil de son intérêt pour les études (les cours) ou sa formation, <br/> 
                                            2.	La mise en valeur de son potentiel de réussite scolaire, <br/> 
                                            3.	Le développement de ses aptitudes à progresser en tenant compte des paramètres personnel, émotionnel et psychologique,<br/> 
                                            4.	Et l’harmonisation dans son environnement familial et/ou amical.<br/><br/>

                                            III- EN QUOI LE COACH ÉDUCATIF EST-IL DIFFÉRENT D'UN ENSEIGNANT ?<br/><br/>
                                            Le coach éducatif joue un rôle d’accompagnateur personnel afin d’aider l’apprenant à acquérir de nouvelles bases personnelles, de s’améliorer dans ses résultats scolaires, à prendre confiance en lui, à s’organiser, à avoir une méthodologie de travail, et à être autonome et responsable. Le processus du coaching éducatif met l’accent sur la réalisation des objectifs personnels et spécifiques avec l'apprenant.<br/><br/>

                                            IV- QUELLE EST L'IMPORTANCE DU COACHING ÉDUCATIF ?<br/><br/>
                                            Le processus du coaching éducatif met l'accent sur la réalisation des objectifs personnels et spécifiques de chaque apprenant. Durant les séances de coaching, les objectifs sont fixés avec l'apprenant de manière à obtenir son engagement et sa motivation sur les actions à entreprendre.<br/><br/>
                                            V- QU'EST-CE QU'UN BON OBJECTIF ?<br/><br/>
                                            On en parle depuis le début mais qu'est-ce qu'un bon objectif réellement ? Cela se situe en de point simple ; un bon objectif doit être : spécifique, mesurable, réaliste, atteignable, formulé positivement et ancré dans le temps.<br/><br/>
                                            VI- COMMENT SE DÉROULE UN PROCESSUS DE COACHING EDUCATIF ?<br/><br/>
                                            Comme énoncé plus haut, chaque séance de coaching avec chaque apprenant est personnelle et spécialement élaborée pour l'apprenant après un temps de suivi. Dans les grandes lignes il faut :<br/><br/>
                                            - comprendre la situation de l'apprenant <br/> 
                                            - définir les options de progression de l'apprenant <br/> 
                                            - fixer les objectifs de l'élève <br/> 
                                            - obtenir son engagement quant aux actions à entreprendre. <br/> 
                                            - accompagner l'élève dans son programme <br/> 
                                            - mesurer les progrès en vue. <br/> 
                                            - reformuler les objectifs si besoin <br/> <br/> 

                                            VII- COMMENT MESURER LES RÉSULTATS D'UN PROGRAMME DE COACHING ÉDUCATIF ? <br/><br/>
                                            La structure éducative CDAB COMPASS garantit les résultats de ses coachings et ces résultats sont avant tout personnels à l'apprenant et liés à ses objectifs spécifiques.<br/><br/>
                                            * Les indicateurs de d’évolution et de progrès <br/> 
                                            - Changement positif d'attitude <br/> 
                                            - Plus grande confiance en soi <br/> 
                                            - Capacité à mieux gérer les devoirs <br/> 
                                            - Communication facile avec les parents <br/> 
                                            - Progrès scolaire<br/><br/>

                                            VIII- PROFIL ADAPTÉ POUR LE COACHING ÉDUCATION<br/><br/>
                                            Contrairement aux subdivisions catégoriques de l'école, chaque profil est adapté au coaching éducatif quelque soit son niveau (primaire, collège, lycée ou postbac). <br/> 
                                            Chaque apprenant est intelligent. Grâce à un suivi de qualité, cela lui permet de progresser et d’avoir l’assurance d’atteindre ses objectifs.

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


export default withStyles(styles)(Coaching);
