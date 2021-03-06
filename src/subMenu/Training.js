import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import CardCustom from "../utils/CardCustom";
import SchoolIcon from '@material-ui/icons/School';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import translate from "../i18n/messages/translate";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
    },
    titles: {
        marginBottom: "100px",
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
});

class Training extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/training"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.titles}>
                            <p className={classes.title}>{translate("Training")}</p>
                        </div>
                        <Row className={classes.cards}>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<SchoolIcon/>}
                                        title={"Formation"}
                                        description={"La formation peut se définir du point de vu général comme étant un apprentissage de\n" +
                                        "                        connaissances et de méthodes de travail mais aussi d’une expérimentation nouvelle dans divers\n" +
                                        "                        domaines. Elle permet l’adaptation à un autre cadre, le développement du potentiel d’un individu\n" +
                                        "                        à un autre."}
                                        onclick={()=>{this.moreInfo("/formations")}}
                                    />
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<SchoolIcon/>}
                                        title={"Training"}
                                        description={"The training can be defined from a general point of view as being an apprenticeship of\n" +
                                        "knowledge and working methods but also new experimentation in various\n" +
                                        "areas. It allows adaptation to another framework, the development of an individual's potential\n" +
                                        "to another."}
                                        onclick={()=>{this.moreInfo("/formations")}}
                                    />
                                )}
                            </Col>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<HomeWorkIcon/>}
                                        title={"Stage"}
                                        description={"La plupart du temps, les étudiants en fin de cycle sont orientés vers des stages dans le but de leur " +
                                        "permettre de découvrir le monde du travail, de mettre en pratique leurs connaissances et acquérir une expérience" +
                                        " professionnelle."}
                                        onclick={()=>{this.moreInfo("/stages")}}
                                    />)}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<HomeWorkIcon/>}
                                        title={"Traineeship"}
                                        description={"Most of the time, students at the end of their cycle are oriented towards internships with the aim of their" +
                                        "allow them to discover the world of work, to put their knowledge into practice and gain experience" +
                                        "professional."}
                                        onclick={()=>{this.moreInfo("/stages")}}
                                    />)}
                            </Col>
                        </Row>
                        <Row className={classes.cards}>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<ReceiptIcon/>}
                                        title={"Conseils - CV - Lettre de motivation"}
                                        description={"Le CV (curriculum vitae) est un formel de recrutement très courant. Il présente une bonne proportion " +
                                        "entre le temps passé à le lire et la quantité/qualité d’informations que nous apprenons d’un candidat. Le CV permet d’avoir les mêmes informations " +
                                        "pertinentes pendant un court temps de lecture.\n"}
                                        onclick={()=>{this.moreInfo("/conseils")}}
                                    />
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<ReceiptIcon/>}
                                        title={"Advice - CV - Cover letter"}
                                        description={"The CV (curriculum vitae) is a very common form of recruitment. It has a good proportion" +
                                        "\n" +
                                        "between the time spent reading it and the amount / quality of information we learn from a candidate. The CV allows you to have the same information " +
                                        "relevant for a short reading time.\n"}
                                        onclick={()=>{this.moreInfo("/conseils")}}
                                    />
                                )}
                            </Col>
                            <Col xs={12} md={6} lg={5}>
                                {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                    <CardCustom
                                        icon={<BusinessCenterIcon/>}
                                        title={"Nos offres"}
                                        description={"\n" +
                                        " Il n’est jamais trop tard de saisir l’opportunité de franchir un nouveau pas. " +
                                        "Tous les enfants peuvent réussir. Avec un profil bien établi, le projet d’études est bien ficelé." +
                                        " Ainsi la porte est ouverte pour franchir un nouveau palier."}
                                        onclick={()=>{this.moreInfo("/nos_offres")}}
                                    />)}
                                {localStorage.getItem("locale_lg")==="en-us" &&(
                                    <CardCustom
                                        icon={<BusinessCenterIcon/>}
                                        title={"Our offers"}
                                        description={"It’s never too late to seize the opportunity to take another step forward." +
                                        "All children can be successful. With a well-established profile, the school plan is well put together." +
                                        "So the door is open to take a new level."}
                                        onclick={()=>{this.moreInfo("/nos_offres")}}
                                    />
                                )}
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(Training);
