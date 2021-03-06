import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";
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

class Tutoring extends Component {
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
                            La caution bancaire pour
                            vous aider à asseoir le projet
                            d’études financièrement et un
                            bon logement étudiant pour
                            se tenir au chaud pour
                            concrétiser le dit
                            projet d’études.
                            #Afrique #Europe #Caution Bancaire #Voyage
                            "
                        />
                    </Helmet>

                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "100px",marginBottom: "100px"}}>
                        <DetailsPageBanner
                            image={<img className={classes.profilImage} src={require("../assets/soutien.png")} alt=""/>}
                            title={"Soutien scolaire (répétition)"}/>
                        <div className={classes.subContext}>
                            <div className="subContainer">
                                <div style={{flex: 1}}>
                                    <iframe height="303" src="https://www.youtube.com/embed/q6GArTQ_cbo"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div style={{flex: 1}}>
                                    <p style={{fontSize: "20px",textAlign:"justify"}}>
                                        Suivant les différentes caractéristiques de l’apprenant, un soutien scolaire à court
                                        (deux mois maximum) ou moyen terme (mois alternatif) est mis en place. Il permet de travailler
                                        l’autonomie de ce dernier. Ce soutien scolaire (encore appelée répétition) est libre et au rythme convenu avec la famille.
                                    </p>
                                </div>
                            </div>
                            <Button onClick={()=>{window.location.href = "/expertises/profil_etudiant"}} className={classes.btnQuiz} >
                                Passer le test
                            </Button>
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

export default withStyles(styles)(Tutoring);
