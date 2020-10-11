import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";

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
                </div>
                <div style={{marginTop: "100px",marginBottom: "100px"}}>
                    <DetailsPageBanner
                        image={<img className={classes.profilImage}  src={require("../assets/P7.jpg")} alt=""/>}
                        title={"Le Potentiel"}/>
                    <div className={classes.subContext}>
                        <div className="subContainer">
                            <div style={{flex: 1}}>
                                <iframe width="" height="186" src="https://www.youtube.com/embed/dByOdhtnPi0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Potential);
