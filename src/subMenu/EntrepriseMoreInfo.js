//EntrepriseMoreInfo
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Col, Modal, Row} from "react-bootstrap";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";
import translate from "../i18n/messages/translate";
import Sidemenu from "../utils/Sidemenu";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containDetails: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E58F1E",
        color: "white"
    }
});

class EntrepriseMoreInfo extends Component {
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
                        <MenuBar/>
                        <Sidemenu/>
                    </div>
                    <div>
                        <div className="contSome">
                            <div style={{marginBottom: "30px"}} >
                                <div style={{marginTop : "22px"}} className="square"></div> <h1 style =  {{color : '#7c1c18', marginBottom : "30px" }}>{translate("QUI_SOMMES_NOUS")}</h1>
                            </div>
                            
                            <div style =  {{background : '#a14627', paddingLeft: "250px", paddingRight: "250px", paddingTop : "50px" }}  className="row"   className={classes.containDetails}>
                                {localStorage.getItem("locale_lg")==="fr-fr" && (
                                    <div style={{textAlign: "justify"}}>
                                        <div>
                                          CDAB Compass est une structure éducative qui vous aide à détecter  le profil d'un  apprenant donné. Elle vous aide à  révéler  de façon précise et concise  le meilleur  de votre enfant, non seulement  sur sa vie éducative,  mais aussi professionnelle.  Sur ce ,cher parent , CDAD compass s'engage à vos côtés  à  connaître  le profil de votre enfant et à y apporter des solutions  qui vous aide :
                                        </div>
                                        <br/>
                                        <div>
                                            <ul>
                                                <li><strong>sur la personnalité à</strong>  faire ressortir son potentiel et ses talents ,le rendre autonome ,le rendre responsable,</li>
                                                <li><strong>sur le plan scolaire à</strong> l'aider a étudier et s'organiser ,l'aider à travailler seul, l'aider à avoir la méthodologie de travail,</li>
                                                <li><strong>sur le plan de la confiance à</strong> l'aider à établir une bonne communication en famille ,l'aider à avoir confiance en lui ,l'aider à définir ses priorités,</li>
                                                <li><strong>sur l’avenir professionnel à</strong> l'aider à se projeter dans l'avenir ,l'aider à élaborer son projet d’études et choisir les différents métiers possibles correspondant.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div>
                                        Grâce à la détection du profil de votre enfant ,cela nous permettra de lui trouver son parcours adapté afin qu'il réalise son projet d’étude ou professionnel. La réussite du projet d’études peut se faire par :
                                        </div><br/>
                                        <div>
                                            <ul>
                                                <li> Une poursuite des études au niveau national dans les institutions appropriées</li>
                                                <li> Une poursuite des études au niveau international : En France, en Belgique, en Italie, au Canada, aux États-Unis et au Sénégal</li>
                                                <li> Une bonne remise à niveau pour une méthodologie de travail personnalisée</li>
                                                <li> Une immersion professionnelle par un stage ou une alternance ou un emploi</li>
                                            </ul>
                                        </div><br/>
                                         
                                        <br/>
                                         
                                    </div>
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" && (
                                    <div style={{textAlign: "justify"}}>
                                        <div>
                                        CDAB Compass is an educational facility that helps you to detect the profile of a given learner. It is our duty to assist you to accurately detect the best hidden gift or talent of your child, not only in terms of education but also in terms of profession. 
And so dear parent, CDAD Compass devoted to your course is poised to knowing what your child is made up with and providing solutions that will help you in terms of:

                                        </div>
                                        <br/>
                                        <div>
                                            <ul>
                                                <li><strong>Personality -</strong> to unearth his/her potential and talent so as to make him/her self-reliant and responsible,</li>
                                                <li><strong>Academic -</strong> to help him/her to study and organize himself, to help him/her work on his own and get him/her to be familiar with work methodology,</li>
                                                <li><strong>Confidence -</strong> helping him to establish good communication within the family setting, to develop self-confidence and define his/her priorities,</li>
                                                <li><strong>Future career -</strong> helping him/her foresee the future, develop his/her education plan and select the various possible corresponding professions. </li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div>
                                        Thanks to the scan test result of your child, we are able to discover his/her suitable path leading to his/her education or professional plan. The success of the plan can be achieved by:
                                        </div><br/>
                                        <div>
                                            <ul>
                                                <li>Continuing his/her education at the appropriate national institutions </li>
                                                <li>Continuing his/her education at the international level such as France, Belgium, Italy, Canada, the United States and Senegal</li>
                                                <li>An upgrade for a customized work methodology</li>
                                                <li>Professional immersion through an internship or a replacement or a job</li>
                                                <li>Continuing his/her professional plan in Germany</li>
                                            </ul>
                                        </div><br/>
                                         
                                    </div>
                                )}
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


export default withStyles(styles)(EntrepriseMoreInfo);
