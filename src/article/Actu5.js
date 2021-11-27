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
        marginLeft: "260px",
        marginRight: "260px",
        marginTop: "25px"
    }
});

class Actu4 extends Component {
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
                        <ActuCustom
                            title={"Le profil de l’apprenant, une nécessité pour votre enfant."}
                            description={["Nous n’apprenons pas tous de la même manière. Notre personnalité et "+
                            "notre entourage ont un impact direct sur nos façons d’appréhender, d’apprendre et d’assimiler les choses. Ainsi, connaître le profil pédagogique de son enfant est impératif dans le processus de réussite de son cursus scolaire.\n\n"
                            ,<strong>Par profil de l’apprenant, l’on entend l’ensemble des éléments qui caractérisent le mode de fonctionnement cognitif d’un individu, et le cheminement qu’il effectue pour comprendre et intégrer des connaissances.</strong>,
                            "\n\nLa structure CDAB COMPASS, spécialisée dans l’orientation et dans l’accompagnement éducatif, met à la disposition de tous, une méthode qui vise à faire découvrir aux parents et aux enfants, leur profil à travers une série de questionnaires. \n\n" +
                            "Un apprenant, lorsqu’il connaît son profil pédagogique, n’a plus de difficulté à assimiler rapidement un cours, ni à réviser un examen. Ses parents ont  moins de difficultés à le motiver et l’aider dans son cursus scolaire. \n\n" +
                            "Tout cela parce que ",<strong>grâce à son profil, l’on connaît désormais, ses capacités, ses aptitudes, ses talents naturels, ses objectifs et ses motivations.</strong>,
                            "\n\nDe ce fait, connaître son profil d’apprenant augmente considérablement les chances d’une réussite scolaire. " ,<a target="_blank" href={"https://www.facebook.com/454141181441870/posts/1753123228210319/?app=fbl"}>Des inquiétudes sur la série ou la filière à choisir</a>, " sont ainsi évitées. \n\n " +
                            "Cela permet également aux parents et aux enseignants, de savoir quelle méthode de travail et stratégie mettre en place pour accompagner l’enfant dans ses études. \n\n"
                            ,<strong>Pour finir, sachez qu’il existe en général, trois (3) grands profils de l’apprenant.</strong>, "En premier lieu, il y a les apprenants visuels qui ont besoin de voir pour mieux comprendre. \n\n" +
                            "Ces genres d’enfants sont plus à l’aise avec ce qui est schémas, images ou lectures. \n\n" +
                            "Ensuite, les apprenants auditifs. Ceux-ci apprennent grâce à l’écoute. Plus ils réécoutent un mot, plus ils le mémorisent facilement. Et enfin, les apprenants kinesthésiques ; \n\n" +
                            "ce profil d’apprenants a besoin de toucher et manipuler les objets pour apprendre. \n\n" +
                            "Lorsque vous réussissez à déterminer le profil de votre enfant, vous pouvez développer au maximum ses capacités dès le bas âge. \n\n" +
                            "Pour déterminer le profil de son enfant, faites-lui passer le test en cliquant sur ce lien : ",
                            <a target="_blank" href={"https://www.cdabcompass.com/connexion"}>Se connecter</a>
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


export default withStyles(styles)(Actu4);
