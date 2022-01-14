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

class Actu9 extends Component {
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
                      <img className="eachCarousel"  src={require("../assets/actu9.jpg")} alt=""/>
                    </div>
                    <div className={classes.contain}>
                        <ActuCustom
                            title={"Comment bien choisir son université à l’étranger ?"}
                            description={["Fuyant les tristes réalités des universités locales, bon nombre d’étudiants préfèrent "+
                            "poursuivre leurs cursus dans des universités étrangères. Comme destination, ces derniers choisissent l’Europe, les Etats-Unis ou encore le Canada et parfois même la Russie. Quelle université choisir pour quel cursus ? Comment choisir une université qui augmente vos chances d’employabilité une fois les études terminées ?  CDAB Compass partage avec vous ses conseils sur le sujet."+
                            "\n\n1-	Choisir l’université au lieu du pays \n\n" +
                            "Quand vient le moment de choisir une université étrangère, beaucoup commettent l’erreur de faire le choix en mettant en exergue le pays plutôt que les universités. Il est vrai que le choix du pays n’est pas négligeable puisqu’il faut prendre en compte des paramètres tels que la langue, la culture et le climat entre autres. Mais il faut surtout se baser en premier lieu sur l’université, les programmes offerts par cette dernière, sa renommée." +
                            "\n\n2-	La vie sur le Campus Universitaire \n\n " +
                            "Au-delà des cours et des professeurs, un aspect primordial à prendre au sérieux dans le choix de son université est la vie sur le Campus. Quelles activités sont menées sur le Campus ? comment se déroule la vie associative ? Les réponses à ces questions doivent motiver ou non dans le choix de sa future université. " +
                            "\n\n3-	L’Offre de formation  \n\n " +
                            "Une chose est de choisir une filière, un autre est de connaître l’offre de formation proposée. Pour ce, il s’avère indispensable d’aller à la quête du programme de formation, de questionner d’anciens étudiants en vue d’être mieux aguerri. " +
                            "\n\nVous l’aurez compris, choisir une université étrangère pour y poursuivre ses études est loin d’être une tâche aisée et devrait pour cela même être confié à des professionnels. C’est la raison d’être de CDAB Compass qui vous accompagne de façon méthodique et professionnelle dans le choix de vos universités étrangères. Que ce soit pour des études en Belgique, en France ou en Italie, CDAB Compass est le choix idéal. \n\n " +
                            "Mots Clés : Université à l’étranger, études à l’étranger, CDAB Compass " 
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


export default withStyles(styles)(Actu9);
