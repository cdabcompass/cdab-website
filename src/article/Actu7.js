import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";
import Helmet from "react-helmet";
import Sidemenu from "../utils/Sidemenu";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    table:{
        borderCollapse: "initial",
        border: "1px solid",
        margin: "0 auto",
    },
    td:{
        border: "1px solid",
        padding: "5px",
    },
    contain:{
        textAlign: "initial",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "25px"
    }
});

class Actu7 extends Component {
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
                    <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>CDAB COMPASS</title>
                        <meta
                            name="CDAB COMPASS"
                            content="Profil, apprenant, profil de l'apprenant, réussite scolaire"
                        />
                    </Helmet>
                        <MenuBar/>
                        <Sidemenu/>
                    </div>
                    <div>
                      <img className="eachCarousel"  src={require("../assets/actu7.jpg")} alt=""/>
                    </div>
                    <div className={classes.contain}>
                        <ActuCustom
                            title={"Séance d'information de CDAB Compass à Atakpame."}
                            description={["A La recherche de plus en plus de meilleurs résultats et d’excellence chez "+
                            "les apprenants et dans les écoles africaines, la structure CDAB Compass garde toujours sa vision qui est celle d’accompagner ces derniers dans leurs parcours scolaire et leur insertion dans le monde professionnel. Sur ce, la structure CDAB Compass étend désormais ses branches jusqu’à l’intérieur du pays."+
                            "\n\nAyant pour objectif d’accompagner et d’assister les apprenants dans leur parcours, la structure CDAB Compass a boosté et bonifié le niveau des apprenants du collège Notre Dame d’Afrique et l’institut sacré cœur de Jésus tout en stimulant leur confiance en eux. En liesse, ces apprenants ont été instruits sur la définition  et les contours inspirant de l’identité professionnelle  au cours de la première séance de la structure CDAB Compass à Atakpamé.\n\n" +
                            "Une séance qui commença par une brève présentation de la structure CDAB Compass, de ses services et de ses produits par le responsable Monsieur Cédric D’ALMEIDA BENINGOH. Au rendez-vous des séries de questions réponses ,permettant d’apporter plus d’éclaircissement sur l’importance de la détection du profil et de l’identité professionnelle afin de mieux s’orienter sur le parcours désiré. A cette séance  les apprenants ont découvert leur identité professionnelle pouvant les aider dans leurs cursus et orientations  scolaires pour un avenir radieux." +
                            "\n\nA la fin de cet entretien, éclairés, ces apprenants sont confiants et prêt a relever leur défis scolaire pour un futur brillant à travers l’accompagnement de CDAB Compass.\n\n " 
                            
                        ]}
                        />
                    </div>
                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(Actu7);
