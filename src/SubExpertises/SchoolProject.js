import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";
import translate from "../i18n/messages/translate";
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

class SchoolProject extends Component {
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
                            - Elaborer un projet
                            d’études pragmatique
                            - Evaluer les différentes
                            opportunités
                            d’universités ou écoles
                            ou formations
                            - Cultiver l’esprit
                            d’excellence et de
                            progrès.
                            #Afrique #Europe #Education
                            "
                        />
                    </Helmet>

                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "100px",marginBottom: "100px"}}>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/P7.jpg")} alt=""/>}
                                title={"Le projet d'étude national ou internationnel"}/>)}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <DetailsPageBanner
                                image={<img className={classes.profilImage}  src={require("../assets/P7.jpg")} alt=""/>}
                                title={"The national or international study project"}/>
                        )}
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
                                            CDAB COMPASS accompagne les apprenants dans l’élaboration de leurs projets d’études qui constituent pour eux un
                                            élément vital dans leur vie professionnelle. Ainsi est proposé à l’apprenant une panoplie de choix.
                                            Ces choix portent sur la filière, l’université adhérée, l’endroit idéal pour l’étude (pays), les informations
                                            à connaitre et voire les contacts à avoir. Tous ces choix sont faits principalement par l’apprenant sur conseils.
                                            Par ailleurs, la structure peut également assister les familles qui ne viennent que pour bénéficier des prestations
                                            liées à l’expertise du projet d’étude.
                                        </p>)}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <p style={{fontSize: "20px",textAlign:"justify"}}>
                                            CDAB COMPASS supports learners in the development of their study projects which constitute for them a
                                            vital element in their professional life. In this way, the learner is offered a variety of choices.
                                            These choices relate to the course, the affiliated university, the ideal place for the study (country), the information
                                            to know and even the contacts to have. All of these choices are made primarily by the learner on advice.
                                            In addition, the structure can also assist families who come only to benefit from the services.
                                            related to the expertise of the study project.
                                        </p>)}
                                </div>
                            </div>
                            <Button onClick={()=>{window.location.href = "/expertises/profil_etudiant"}} className={classes.btnQuiz} >
                                {translate("Passer_le_test_general")}
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


export default withStyles(styles)(SchoolProject);
