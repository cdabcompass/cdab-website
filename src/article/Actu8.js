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
                    <div className={classes.contain}>
                        <ActuCustom
                            title={"CDAB Compass à Kpalimé au Collège Protestant d'AGOME-KPALIME."}
                            description={["Dans sa vision d’accompagner et d‘orienter les apprenants sur tous les plans : "+
                            "scolaire, universitaire et même professionnel, la structure CDAB Compass ne se lasse d’apporter son accompagnement et son suivi, même jusqu’aux coins reculés. Ne voulant pas se limiter dans la capitale, elle poursuit sa mission dans la ville de Kpalimé."+
                            "\n\nAinsi donc, pour permettre aux apprenants de se connaitre et de connaitre leur métier envisagé, un entretien a été fait avec ces derniers sur le  thème  « Quelle est ton identité professionnelle » ?\n\n" +
                            "Ceci dit, les apprenants ont été entretenu et amené  à connaître leurs identités professionnelles. Cette phase a ainsi beaucoup aider ces derniers sur ce qu’est une identité professionnelle et comment reconnaître son identité professionnelle afin de savoir de quelle  manière s’y prendre pour réussir sa future vie professionnelle. Cette séance a pris fin avec l’inscription des apprenants intéressés par cet accompagnement pour une nouvelle prochaine séance de travail." +
                            "\n\nEn définitive, Nombreux des  d’apprenants  au cours de cette séance, se sentent  confiants et prêts pour la prochaine section de travail avec CDAB Compass à Atakpamé.\n\n " 
                            
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
