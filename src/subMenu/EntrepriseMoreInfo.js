//EntrepriseMoreInfo
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containDetails: {
        display: "flex",
        flexDirection: "row",
        marginTop: "100px"
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
                    </div>
                    <div>
                        <div className="contAll">
                            <h1>QUI SOMMES NOUS ?</h1>
                            <div className={classes.containDetails}>
                                {localStorage.getItem("locale_lg")==="fr-fr" && (
                                    <div style={{textAlign: "justify"}}>
                                        <div>
                                            CDAB COMPASS est une structure éducative détectant le profil de l’apprenant. De ce fait,
                                            cher parent, connaitre le profil de l’enfant vous aide :
                                        </div>
                                        <br/>
                                        <div>
                                            <ul>
                                                <li><strong>sur la personnalité à</strong> à détecter son potentiel et ses talents, le rendre autonome, le
                                                    rendre responsable,</li>
                                                <li><strong>sur le plan scolaire à</strong> l’aider à étudier et s’organiser, l’aider à travailler seul, l’aider à
                                                    avoir la méthodologie de travail,</li>
                                                <li><strong>sur le plan de la confiance à</strong> l’aider à établir une bonne communication en famille,
                                                    l’aider à avoir confiance en lui, l’aider à définir ses priorités,</li>
                                                <li><strong>sur l’avenir professionnel à</strong> l’aider à se projeter dans l’avenir, l’aider à élaborer son
                                                    projet d’études, l’aider à choisir les différents métiers possibles correspondant.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div>
                                            Ainsi, CDAB COMPASS œuvre dans l'accompagnement éducatif et surtout formatif des
                                            apprenants afin de créer pour eux un cadre de compétence et de les permettre de gérer leurs
                                            potentiels, leurs autonomies et leurs responsabilités dans leurs formations et surtout dans leurs
                                            parcours professionnel d'avenir par un projet d’études bien ficelé.
                                        </div><br/>
                                        <div>
                                            CDAB COMPASS propose des solutions, et une expertise de qualité qui répond à des
                                            situations sociales et assure le développement, le renforcement ou le maintien de compétences
                                            utilisables par les apprenants dans leurs activités scolaires, universitaires et professionnelles.
                                        </div><br/>
                                        <div>
                                            Dans sa mission de permettre aux apprenants d'optimiser leurs potentiels et d'excéder leurs
                                            capacités, CDAB COMPASS propose une ingénierie de formation répondant à la demande du
                                            besoin afin de permettre à tout apprenant d'avoir un parcours méthodologique de son avenir
                                            professionnel.
                                        </div><br/>
                                        <div>
                                            Par ailleurs, dans la résolution de rendre la formation des apprenants plus efficace, CDAB
                                            COMPASS met à disposition un cadre réflexif et technique. Ce dispositif répond à la
                                            problématique de la formation en analysant le besoin, celui d'un accompagnement qui repose
                                            essentiellement sur le profil de l'apprenant.
                                        </div><br/>
                                        <div>
                                            Aussi, CDAB COMPASS mène une évaluation des ressources et des contraintes liées à
                                            l'autonomisation de l'apprenant et de le responsabiliser.
                                        </div>
                                        <br/>
                                        <div>
                                            Il s’agit d’un ensemble de démarches méthodologiques et d'accompagnement qui comprend :
                                            <ul>
                                                <li>l’analyse de la demande de besoin spécifique à chaque apprenant,</li>
                                                <li>la détection du profil de l'apprenant</li>
                                                <li>la mise en place d'un dispositif d’accompagnement (les accompagnateurs ou formateurs, le
                                                    cadre, la pédagogie) menant à l’autonomie et à la responsabilité,</li>
                                                <li>la définition des objectifs personnels, scolaires, et professionnels</li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div>
                                            Telle est l'approche que CDAB COMPASS emploie en se basant sur la compétence comme
                                            un moteur de la performance.
                                        </div><br/>
                                        <div>
                                            La structure CDAB COMPASS a donc à sa disposition, des enseignants, psychologues
                                            accompagnateurs, formateurs scolaires, un personnel administratif bien dans ses
                                            manifestations avec expertise. Un cadre accueillant et propice à l'éducation où règne
                                            confiance entre apprenants et le dispositif général. Elle passe également par une étude
                                            méticuleuse du profil de chaque apprenant et élabore un projet de formation personnalisé
                                            répondant à son besoin de compétences.
                                        </div><br/>
                                        <div>
                                            Au-delà de toute attente, CDAB COMPASS agit avec soin dans la réalisation de sa mission.
                                            Dans ses accompagnements, elle offre également des opportunités de stages d'expérience aux
                                            apprenants. Elle suit l'apprenant et l'aide à s'autonomiser et à être responsable. De plus, elle
                                            permet à l'apprenant de pouvoir se positionner à fin d'être au mieux dans ses performances
                                            comme le veut le marché de l'emploi et de bien conduire son propre plan professionnel.
                                        </div><br/>
                                        <div>
                                            Notons donc que, la mission de CDAB COMPASS n'est pas seulement une réalisation de
                                            formation de l'apprenant mais elle a un objectif au-delà des attentes immédiates. D'abord elle
                                            mène une post- réflexion sur la situation de formation de l'apprenant, ensuite dans l'attente
                                            d'assurer l'épanouissement professionnel dans l'avenir de l'apprenant, et surtout une formation
                                            qui répond aux demandes du besoin de l'emploi.
                                        </div><br/>
                                        <div>
                                            La compétence dont jouit CDAB COMPASS se rattache à son expertise et son expérience. Il
                                            a déjà fait ses preuves auprès de plusieurs familles, et dans plusieurs établissements du niveau
                                            primaire, collège lycée, et post bac au Togo dans les secteurs public et privé, en Côte d’Ivoire
                                            dans les établissements scolaires catholiques dont l'un en est le complexe maternelle-primaire-
                                            collège Nôtre Dame des Apôtres à Abidjan, où les apprenants depuis le CE2 en troisième
                                            bénéficient de son expertise par exemple, et en France auprès de plusieurs parents d’élèves.
                                        </div><br/>
                                        <div>
                                            CDAB COMPASS a également une vision large et l’objectif plus grand d'exercer et de venir à
                                            la participation des parents dans plus d'un pays comme au Sénégal, au Bénin et en République
                                            Démocratique du Congo, en Afrique et dans le monde.
                                        </div><br/>
                                    </div>
                                )}
                                {localStorage.getItem("locale_lg")==="en-us" && (
                                    <div style={{textAlign: "justify"}}>
                                        <div>
                                            CDAB COMPASS is an educational structure detecting the profile of the learner. Thereby,
                                            dear parent, knowing the child's profile helps you:
                                        </div>
                                        <br/>
                                        <div>
                                            <ul>
                                                <li><strong>on the personality to</strong>to detect their potential and talents, make them autonomous,
                                                    make responsible,</li>
                                                <li><strong>academically to</strong> help him study and organize himself, help him work alone, help him
                                                    have the work methodology,</li>
                                                <li><strong>in terms of confidence in</strong> help him establish good communication with his family,
                                                    help him have self-confidence, help him define his priorities,</li>
                                                <li><strong>on the professional future at</strong> help him plan for the future, help him develop his
                                                    study project, help him choose the various possible trades corresponding. </li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div>
                                            Thus, CDAB COMPASS works in the educational and especially training support of
                                            learners in order to create a framework of competence for them and enable them to manage their
                                            potential, their autonomy and their responsibilities in their training and especially in their
                                            professional career of the future through a well-structured study project.
                                        </div><br/>
                                        <div>
                                            CDAB COMPASS offers solutions and quality expertise that responds to
                                            social situations and ensures the development, reinforcement or maintenance of skills
                                            usable by learners in their school, university and professional activities.
                                        </div><br/>
                                        <div>
                                            In its mission to enable learners to optimize their potential and exceed their
                                            capacities, CDAB COMPASS offers training engineering responding to the demand of the
                                            need in order to allow any learner to have a methodological course of his future
                                            professional.
                                        </div><br/>
                                        <div>
                                            In addition, in the resolution to make the training of learners more effective, CDAB
                                            COMPASS provides a reflective and technical framework. This device meets the
                                            problematic of training by analyzing the need for support based on
                                            mainly on the profile of the learner.
                                        </div><br/>
                                        <div>
                                            Also, CDAB COMPASS is carrying out an assessment of the resources and constraints related to
                                            learner empowerment and empowerment.
                                        </div>
                                        <br/>
                                        <div>
                                            This is a set of methodological and support approaches which includes:<ul>
                                            <li>the analysis of the specific needs of each learner,</li>
                                            <li>the detection of the learner's profile</li>
                                            <li>the establishment of a support system (guides or trainers, the
                                                framework, pedagogy) leading to autonomy and responsibility,</li>
                                            <li>the definition of personal, academic, and professional goals</li>
                                        </ul>
                                        </div>
                                        <br/>
                                        <div>
                                            This is the approach that CDAB COMPASS employs based on competence as
                                            an engine of performance.
                                        </div><br/>
                                        <div>
                                            The CDAB COMPASS structure therefore has at its disposal, teachers, psychologists
                                            guides, school trainers, administrative staff well within their
                                            events with expertise. A welcoming and conducive to education where reigns
                                            trust between learners and the general system. It also goes through a study
                                            meticulous profile of each learner and develops a personalized training plan
                                            meeting his need for skills.
                                        </div><br/>
                                        <div>
                                            Beyond all expectations, CDAB COMPASS acts with care in the achievement of its mission.
                                            In its support, it also offers opportunities for experience internships to
                                            learners. It follows the learner and helps him to empower himself and be responsible. In addition, she
                                            allows the learner to be able to position himself in order to be at best in his performances
                                            as the job market wants and to conduct your own professional plan.</div><br/>
                                        <div>
                                            Let us therefore note that the mission of CDAB COMPASS is not only an achievement of
                                            learner training but it has an objective beyond immediate expectations. First she
                                            conducts a post-reflection on the learner's training situation, then waiting
                                            to ensure the professional development in the future of the learner, and especially a training
                                            that responds to the demands of the job need.
                                        </div><br/>
                                        <div>
                                            The competence enjoyed by CDAB COMPASS is linked to its expertise and experience. He
                                            has already proven itself in several families, and in several establishments of the
                                            elementary, middle and high school, and post bac in Togo in the public and private sectors, in Côte d'Ivoire
                                            in Catholic schools, one of which is the nursery-primary complex
                                            Collège Notre Dame des Apôtres in Abidjan, where learners from CE2 in third
                                            benefit from its expertise, for example, and in France with several parents of students.</div><br/>
                                        <div>
                                            CDAB COMPASS also has a broad vision and the larger objective of exercising and coming to
                                            the participation of parents in more than one country such as Senegal, Benin and the Republic
                                            Democratic of the Congo, Africa and the world.
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
