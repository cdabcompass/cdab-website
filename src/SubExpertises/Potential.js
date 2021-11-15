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

class Potential extends Component {
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
                            Orientation scolaire en afrique et en europe
                            Education scolaire en europe et en afrique
                            Detection de profil de l'apprenant
                            Potentiel des enfants
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
                                image={<img className={classes.profilImage}  src={require("../assets/potential.jpg")} alt=""/>}
                                title={"Le Potentiel"}/>)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/potential.jpg")} alt=""/>}
                                title={"The potential"}/>)}
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
                                            Selon l’article Réflexion sur la notion de potentiel, le potentiel est défini comme étant
                                            « la volonté et la possibilité de la personne de se mettre en évolution ou en projection pour
                                            résoudre des problèmes nouveaux et/ou des situations de plus en plus complexes » ou encore
                                            « ensemble de dispositions personnelles encore incomplètement exploitées qui peuvent
                                            permettre à une personne d’évoluer ou de s’orienter vers de nouvelles responsabilités,
                                            missions à court ou moyen terme ». <br/><br/>
                                            Le potentiel d’une personne s’évalue au travers des performances ou résultats et selon un
                                            contexte bien précis. <br/><br/>
                                            Le potentiel contient la motivation, les facultés d’apprentissage, les qualités relationnelles et
                                            les ressources mobilisables. <br/><br/>
                                            <strong>Comment déceler le potentiel de l’enfant ?</strong>
                                            <br/>
                                            Il faut être attentif à trois points pour y repérer des indices de potentiel au niveau de
                                            l’apprenant :
                                            <br/>
                                            <ul>
                                                <li>Le savoir : l’acquisition des connaissances</li>
                                                <li>Le vouloir : la motivation, l’initiative et l’envie d’apprendre</li>
                                                <li>Le pouvoir : les capacités et les mobilités intellectuelles</li>
                                            </ul>
                                            Chaque enfant a son potentiel. C’est pour cela qu’il faut connaître le potentiel de son enfant
                                            afin de mieux préparer son avenir scolaire, universitaire et professionnel.
                                            <br/><br/>
                                            A CDAB COMPASS, nous vous aidons à déceler le(s) potentiel(s) caché(s) de l’enfant. Après
                                            avoir détecté le profil de l’apprenant, la structure éducative l’aide à acquérir la méthodologie
                                            et l’organisation. Ainsi, il saura s’organiser, être autonome, avoir confiance en soi, définir ses
                                            priorités, être responsable, etc.
                                        </p>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <p style = {{fontSize: "20px", textAlign: "justify"}}>
                                            According to the article Reflection on the notion of potential, potential is defined as
                                            "The will and the possibility of the person to evolve or project in order to
                                            solve new problems and / or increasingly complex situations ”or
                                            "Set of personal dispositions still incompletely exploited which can
                                            allow a person to evolve or move towards new responsibilities,
                                            short or medium term assignments ”. <br/> <br/>
                                            The potential of a person is assessed through performance or results and according to a
                                            specific context. <br/> <br/>
                                            Potential contains motivation, learning skills, interpersonal skills and
                                            the resources that can be mobilized. <br/> <br/>
                                            <strong> How to detect the potential of the child? </strong>
                                            <br/>
                                            You have to pay attention to three points to identify signs of potential at the level of
                                            the learner:
                                            <br/>
                                            <ul>
                                                <li> Knowledge: the acquisition of knowledge </li>
                                                <li> Wanting it: motivation, initiative and the desire to learn </li>
                                                <li> Power: intellectual capacities and mobility </li>
                                            </ul>
                                            Every child has their potential. This is why you need to know your child's potential
                                            in order to better prepare for his school, university and professional future.
                                            <br/> <br/>
                                            At CDAB COMPASS, we help you identify the child's hidden potential (s). After
                                            have detected the profile of the learner, the educational structure helps him to acquire the methodology
                                            and organization. Thus, he will be able to organize himself, be autonomous, have self-confidence, define his
                                            priorities, being responsible, etc.
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


export default withStyles(styles)(Potential);
