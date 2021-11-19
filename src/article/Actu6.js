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

class Actu6 extends Component {
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
                    <div className={classes.contain}>
                        <ActuCustom
                            title={"La détection de profil : CDAB COMPASS s'y engage aussi à Accra au Ghana."}
                            description={["Dans le but d’aider les apprenants et les responsables des écoles à mieux "+
                            "développer leurs méthodes et à investir beaucoup plus dans l’avenir professionnelle des apprenants, la structure CDAB Compass dépose désormais aussi ses valises au GHANA à Accra."+
                            "\n\nLa structure CDAB Compass chargé de l’orientation et du suivi du parcours des apprenants jusqu’à leurs insertions professionnelles s’engage de nouveaux aux côtés des apprenants d’autre rive anglophone pour la culture de l’excellence dans les écoles Africaine à travers la détection du profil.\n\n" +
                            "Il est donc question de faire inculquer et faire bénéficier cette méthode d’apprentissage aux apprenants et au corps professoral des pays anglophones pour le développement et l’excellence des établissements scolaires en Afrique. " +
                            "\n\nSur ce, la structure CDAB Compass se propose d’accompagner les apprenants de ces différentes écoles ghanéennes pour les projeter dans l’avenir, les rendre éveillés et autonomes dans leurs projets scolaires, en les aidant à trouver ou en les inscrivant dans les meilleures écoles nationales ou internationales afin de les garantir un avenir sur et professionnel à l’aide d’une approche groupée et personnalisée.\n\n " +
                            "Au total, plus de 500 apprenants de différents établissements scolaires ont adhéré au projet de la détection de profil de la structure CDAB Compass et ont été bonifier et inspirer pour la confiance en soi. \n\n"
                         
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


export default withStyles(styles)(Actu6);
