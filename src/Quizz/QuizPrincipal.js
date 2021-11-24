import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containerQuizs:{
        width: "85%",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        marginBottom: "10px",
        margin: "auto",
        paddingRight: "5%",
        paddingLeft: "5%"
    },
    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: 300,
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    radio: {
        '&$checked': {
            color: '#ff780a'
        }
    },
    checked: {}
});

class QuizPrincipal extends Component {
    constructor(props){
        super(props);
        this.state = {
            curTime : new Date().toLocaleString(),
            lastName: localStorage.getItem("lastName"),
            firstName: localStorage.getItem("firstName"),
            birthdayCity: "",
            birthday: "",
            gender: "",
            userNumber: localStorage.getItem("number"),
            birthCertificate: "",
            idCard: "",
            passport: "",
            curSisters: "",
            curBrothers: "",
            curBrother1: "",
            curBrother2: "",
            curBrother3: "",
            curSister1: "",
            curSister2: "",
            curSister3: "",
            natureBrothers: "",
            relationShipMif: "",
            fatherAlive: "",
            natureFamily: "",
            fatherStatut: "",
            fatherWork: "",
            fatherNumber: "",
            homStayFather: "",
            relationShipFather: "",
            motherAlive: "",
            motherStatut: "",
            motherWork: "",
            motherNumber: "",
            homStayMother: "",
            relationShipMother: "",
            userCity: localStorage.getItem("country")+" - "+localStorage.getItem("city"),
            foodByDay: "",
            foodTimeInDay: "",
            aboutSexeWithParents: "",
            aboutSexeWithParentsRaison: "",
            boyOrGirlFriends: "",
            boyOrGirlFriendsRaison: "",
            parentsKnowRelationShip: "",
            ageFirstRapport: "",
            waitingSexe: "",
            waitSexeRaison: "",
            lifeSmbWithOrAlone: "",
            joyOfLiving: "",
            spritFighting: "",
            isLikeIt: "",
            notLikeIt: "",
            schoolLevel: "",
            repeatClass: "",
            repeatWichClass: "",
            actualSchool: "",
            raisonActualSchool: "",
            timeComeToSchool: "",
            meanOfTransport: "",
            comeSchoolAlone: "",
            parentHelpToGoSchool: "",
            schoolSystem: "",
            schoolSystemDesc: "",
            moyCE1 : "",
            moyCE2 : "",
            moyCM1 : "",
            moyCM2 : "",
            primarySchool : "",
            schoolSystemCol : "",
            schoolSystemDescCol : "",
            moyCl6 : "",
            moyCl5 : "",
            moyCl4 : "",
            moyCl3 : "",
            collegeSchool : "",
            schoolSystemLyc : "",
            schoolSystemDescLyc : "",
            moy2nd : "",
            moy1ere : "",
            moyTle : "",
            lyceeSchool : "",
            firstSocialMedia: "",
            secSocialMedia: "",
            thrSocialMedia: "",
            timeSocialMedia: "",
            weekTimeSocialMedia: "",
            connectTelSocialMedia: "",
            connectPcSocialMedia: "",
            furSocialMedia: "",
            planedJob: "",
            planedJobRaison: "",
            planedJobBySchool: "",
            planedJobByFamily: "",
            planedJobByFriends: "",
            studyChoice: "",
            studyChoiceRaison: "",
            morningWakeUpTime: "",
            doingBeforeGoToSchool: "",
            nightSleepTime: "",
            doingAfterGoToSchool: "",
            readBooks: "",
            seeTv: "",
            doSport: "",
            talkWith: "",
            outWith : "",
            goTo: "",
            msgUserPay: "",
            principMat1: "",
            principMat2: "",
            principMat3: "",
            principMat4: "",
            principMat5: "",
            principMat6: "",
            principMat7: "",
            principMat8: "",
            principMat9: "",
            principMat10: "",

            comportMat1: "",
            comportMat2: "",
            comportMat3: "",
            comportMat4: "",
            comportMat5: "",
            comportMat6: "",
            comportMat7: "",
            comportMat8: "",


            errBirthday: "",
            nbrDeces:"",
            nbrDecesMere:"",
            fatherWhaNumber:"",
            motherWhaNumber:"",
            departHeur:"",
            retourHeur:"",
            departHeurMere:"",
            retourHeurMere:"",
            famillyFinanceStatut:"",
            autonomieFinanceStatut:"",

            childMarriage:"",
            childOutMarriage:"",
            fiancee:"",
            relationShipWithChild:"",
            relationShipWithoutChild:"",
            singleWithChild:"",
            singleWithoutCHild:"",

            studyLevel:"",
            bacYear:"",
            studyFiliaire:"",
            professionalsExperience:"",
            activitySector:"",
            activitySectorTime:"",
            jobStatut:"",
            activitySectorJobStatut:"",
            activitySectorTimeJobStatut:"",
            actualSituation:"",
            formationChoice:"",
            studentStatut:"",
            univNonGraduateYearAndRaison:"",

            raisonSocialNetwork:"",
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        // console.log(e.target.name + " : "+e.target.value);
    };

    componentDidMount() {
        if(localStorage.getItem("userAccept") === "true"){
            this.setState({msgUserPay: "Cet utilisateur à déjà payé."});
        }else{
            this.setState({msgUserPay: "Cet utilisateur n'as pas encore payé."});
        }
    }

/*           
            "<p>Système d’études au primaire :</p><h3>"+this.state.schoolSystem+"</h3>"+
            "<p>Lequel :</p><h3>"+this.state.schoolSystemDesc+"</h3>"+
            "<p>Moyenne générale en CE1 : </p><h3>"+this.state.moyCE1+"</h3>"+
            "<p>Moyenne générale en CE2 : </p><h3>"+this.state.moyCE2+"</h3>"+
            "<p>Moyenne générale en CM1 : </p><h3>"+this.state.moyCM1+"</h3>"+
            "<p>Moyenne générale en CM2 : </p><h3>"+this.state.moyCM2+"</h3>"+
            "<p>Ecole primaire du passage au collège ou du certificat d’études primaire : </p><h3>"+this.state.primarySchool+"</h3>"+
            "<p>Système d’études au collège : </p><h3>"+this.state.schoolSystemCol+"</h3>"+
            "<p>Lequel :</p><h3>"+this.state.schoolSystemDescCol+"</h3>"+
            "<p>Moyenne générale en 6eme : </p><h3>"+this.state.moyCl6+"</h3>"+
            "<p>Moyenne générale en 5eme : </p><h3>"+this.state.moyCl5+"</h3>"+
            "<p>Moyenne générale en 4eme : </p><h3>"+this.state.moyCl4+"</h3>"+
            "<p>Moyenne générale en 3eme : </p><h3>"+this.state.moyCl3+"</h3>"+
*/

/*"<p>Collège d’obtention du diplôme national du brevet ou brevet d’études du premier cycle : </p><h3>"+this.state.collegeSchool+"</h3>"+ */
            
    submitAnswers = (e) => {
        e.preventDefault();
        let result = "<p style='color: darkred'>Solde : </p><h3>"+this.state.msgUserPay+"</h3>"+
            "<p>Date du jour : </p><h3>"+this.state.curTime+"</h3>"+

            "<p><strong>Identité</strong></p>"+
            
            "<p>Nom : </p><h3>"+this.state.lastName+"</h3>"+
            "<p>Prénom : </p><h3>"+this.state.firstName+"</h3>"+
            "<p>Date et lieu de Naissance : </p><h3>"+this.state.birthday+" - "+this.state.birthdayCity+"</h3>"+
            "<p>Sexe : </p><h3>"+this.state.gender+"</h3>"+
            "<p>Numéro : </p><h3>"+this.state.userNumber+"</h3>"+

            "<p><strong>Pièce d’identité disponible</strong></p>"+

            "<p>Acte de naissance  : </p><h3>"+this.state.birthCertificate+"</h3>"+
            "<p>Carte d'identité : </p><h3>"+this.state.idCard+"</h3>"+
            "<p>Passeport : </p><h3>"+this.state.passport+"</h3>"+

            "<p><strong>Situation Familiale</strong></p>"+

            "<p>Nombre de frères  : </p><h3>"+this.state.curBrothers+"</h3>"+
            "<p>Frère 1  : </p><h3>"+this.state.curBrother1+"</h3>"+
            "<p>Frère 2  : </p><h3>"+this.state.curBrother2+"</h3>"+
            "<p>Frère 3  : </p><h3>"+this.state.curBrother3+"</h3>"+
            "<p>Nombre de soeurs  : </p><h3>"+this.state.curSisters+"</h3>"+
            "<p>Soeur 1  : </p><h3>"+this.state.curSister1+"</h3>"+
            "<p>Soeur 2  : </p><h3>"+this.state.curSister2+"</h3>"+
            "<p>Soeur 3  : </p><h3>"+this.state.curSister3+"</h3>"+
            "<p>Nature des frères et soeurs  : </p><h3>"+this.state.natureBrothers+"</h3>"+
            "<p>Qualité des relations avec les frères et sœurs (0~10) : </p><h3>"+this.state.relationShipMif+"</h3>"+
            "<p>Nature de la famille  : </p><h3>"+this.state.natureFamily+"</h3>"+

            "<p><strong>Père ou tuteur</strong></p>"+

            "<p>Situation du père biologique : </p><h3>"+this.state.fatherAlive+"</h3>"+
            "<p>Nombre d'année passé depuis le décès : </p><h3>"+this.state.nbrDeces+"</h3>"+
            "<p>Statut : </p><h3>"+this.state.fatherStatut+"</h3>"+
            "<p>Profession du père ou du tuteur : </p><h3>"+this.state.fatherWork+"</h3>"+
            "<p>Numéro : </p><h3>"+this.state.fatherNumber+"</h3>"+
            "<p>Numéro whatsapp : </p><h3>"+this.state.fatherWhaNumber+"</h3>"+
            "<p>Il revient à la maison : </p><h3>"+this.state.homStayFather+"</h3>"+
            "<p>Heure de départ : </p><h3>"+this.state.departHeur+"</h3>"+
            "<p>Heure de retour : </p><h3>"+this.state.retourHeur+"</h3>"+
            "<p>Qualité des relations avec le père (0~9) : </p><h3>"+this.state.relationShipFather+"</h3>"+

            "<p><strong>Mère ou tutrice</strong></p>"+

            "<p>Situation de la mère biologique : </p><h3>"+this.state.motherAlive+"</h3>"+
            "<p>Nombre d'année passé depuis le décès : </p><h3>"+this.state.nbrDecesMere+"</h3>"+
            "<p>Statut : </p><h3>"+this.state.motherStatut+"</h3>"+
            "<p>Profession de la mère ou tutrice : </p><h3>"+this.state.motherWork+"</h3>"+
            "<p>Numéro : </p><h3>"+this.state.motherNumber+"</h3>"+
            "<p>Il revient à la maison : </p><h3>"+this.state.homStayMother+"</h3>"+
            "<p>Heure de départ : </p><h3>"+this.state.departHeurMere+"</h3>"+
            "<p>Heure de retour : </p><h3>"+this.state.retourHeurMere+"</h3>"+
            "<p>Qualité des relations avec le mère (0~9) : </p><h3>"+this.state.relationShipMother+"</h3>"+
            "<p>Quartier actuel où j’habite  : </p><h3>"+this.state.userCity+"</h3>"+
            "<p>Je mange combien de fois par jour : </p><h3>"+this.state.foodByDay+"</h3>"+
            "<p>Je mange à quelles heures dans la journée : </p><h3>"+this.state.foodTimeInDay+"</h3>"+
            "<p>Je considère que je viens d’une famille  : </p><h3>"+this.state.famillyFinanceStatut+"</h3>"+

            "<p><strong>Autonomie financière </strong></p>"+

            "<p>Je suis autonome au niveau des finances : </p><h3>"+this.state.autonomieFinanceStatut+"</h3>"+

            "<p><strong>Relation intime</strong></p>"+
            
            "<p>Parles tu d’éducation sexuelle avec les parents : </p><h3>"+this.state.aboutSexeWithParents+"</h3>"+
            "<p>Raison explicative : </p><h3>"+this.state.aboutSexeWithParentsRaison+"</h3>"+

            "<p><strong>Statut marital</strong></p>"+

            "<p>As-tu un(e) petit(e) ami(e) : </p><h3>"+this.state.boyOrGirlFriends+"</h3>"+
            "<p>Raison : </p><h3>"+this.state.boyOrGirlFriendsRaison+"</h3>"+
            "<p>les parents sont au courant de cette relation amoureuse : </p><h3>"+this.state.parentsKnowRelationShip+"</h3>"+
            "<p>J’ai eu ma première relation sexuelle à l’âge de: </p><h3>"+this.state.ageFirstRapport+"</h3>"+
            "<p>Je peux m’abstenir de relation sexuelle : </p><h3>"+this.state.waitingSexe+"</h3>"+
            "<p>Raison : </p><h3>"+this.state.waitSexeRaison+"</h3>"+

            "<p><strong>Cadre Familial</strong></p>"+

            "<p>Je vis actuellement avec : </p><h3>"+this.state.lifeSmbWithOrAlone+"</h3>"+
            "<p>Joie de vivre : </p><h3>"+this.state.joyOfLiving+"</h3>"+
            "<p>Combativité : </p><h3>"+this.state.spritFighting+"</h3>"+

            "<p>Description personnelle de soi :</p>"+

            "<p>Ce que J’aime en général : </p><h3>"+this.state.isLikeIt+"</h3>"+
            "<p>Ce que Je n’aime pas en général :</p><h3>"+this.state.notLikeIt+"</h3>"+

            "<p><strong>Parcours universitaire ou parcours formation professionnelle post bac</strong></p>"+
            
            "<p>Année d’obtention du bac  : </p><h3>"+this.state.bacYear+"</h3>"+
            "<p>Niveau d’études actuel : </p><h3>"+this.state.schoolLevel+"</h3>"+
            "<p>Filière  : </p><h3>"+this.state.studyFiliaire+"</h3>"+
            "<p>Université ou école privée ou formation en cours  : </p><h3>"+this.state.actualSchool+"</h3>"+ 
            "<p>J’ai déjà redoublé un niveau : </p><h3>"+this.state.repeatClass+"</h3>"+
            "<p>Laquelle : </p><h3>"+this.state.repeatWichClass+"</h3>"+
            "<p>Raison du choix de la formation actuelle : </p><h3>"+this.state.formationChoice+"</h3>"+
            "<p>Raison du choix de l’établissement actuel : </p><h3>"+this.state.raisonActualSchool+"</h3>"+
            "<p>Temps de parcours pour venir à l’école : </p><h3>"+this.state.timeComeToSchool+"</h3>"+
            "<p>Moyen de transport pour venir à l’école : </p><h3>"+this.state.meanOfTransport+"</h3>"+
            "<p>Je viens à l’école seul(e): </p><h3>"+this.state.comeSchoolAlone+"</h3>"+
            "<p>Accompagné(e) par :  </p><h3>"+this.state.parentHelpToGoSchool+"</h3>"+

            "<p><strong>Système d’études au lycée</strong></p>"+

            "<p>Système d’études : </p><h3>"+this.state.schoolSystemLyc+"</h3>"+
            "<p>Lequel :</p><h3>"+this.state.schoolSystemDescLyc+"</h3>"+
            "<p>Moyenne générale en 2nd : </p><h3>"+this.state.moy2nd+"</h3>"+
            "<p>Moyenne générale en 1ere : </p><h3>"+this.state.moy1ere+"</h3>"+
            "<p>Moyenne générale en Tle : </p><h3>"+this.state.moyTle+"</h3>"+
            
 
            "<p>Matières principales au Lycée notes</p>"+
            "<table>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Matières - Notes générales</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat1+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat2+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat3+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat4+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat5+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat6+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat7+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat8+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat9+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.principMat10+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+

            "<p>Comportement en fonction des matières</p>"+
            "<p>Les numérotations de 1-7 sont basés sur : </p>"+
            " <ol>" +
            "    <li>Je suis passionné</li>" +
            "    <li>Je suis concentré</li>" +
            "    <li>Je suis intéressé mais ne comprends pas</li>" +
            "    <li>Je suis juste présent</li>" +
            "    <li>Je ne comprends pas</li>" +
            "    <li>Je m’ennuye</li>" +
            "    <li>Cela ne m’intéresse pas</li>" +
            "</ol>"+
            "<table>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Matières - Comportements générales</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat1+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat2+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat3+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat4+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat5+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat6+"</td>\n" +
            "          </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.comportMat7+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+
 
            "<p><strong>Réseaux sociaux</strong></p>"+

            "<p>1er Réseau social le plus utilisée : </p><h3>"+this.state.firstSocialMedia+"</h3>"+
            "<p>2eme Réseau social le plus utilisée : </p><h3>"+this.state.secSocialMedia+"</h3>"+
            "<p>3eme Réseau social le plus utilisée : </p><h3>"+this.state.thrSocialMedia+"</h3>"+
            "<p>4eme Réseau social le plus utilisée : </p><h3>"+this.state.furSocialMedia+"</h3>"+
            "<p>Temps passé sur les réseaux sociaux /jour :</p><h3>"+this.state.timeSocialMedia+"</h3>"+
            "<p>Temps passé sur les réseaux sociaux /semaine :</p><h3>"+this.state.weekTimeSocialMedia+"</h3>"+
            <p>Moyen de conexion :</p>+
            "<p>Mobile :</p><h3>"+this.state.connectTelSocialMedia+"</h3>"+
            "<p>Pc :</p><h3>"+this.state.connectPcSocialMedia+"</h3>"+

            "<p><strong>Perspectives professionnelles</strong></p>"+
            
            "<p>Expérience professionnelle acquise  :</p><h3>"+this.state.professionalsExperience+"</h3>"+
            "<p>Si oui, le secteur d’activité :</p><h3>"+this.state.activitySector+"</h3>"+
            "<p>Nombre de mois :</p><h3>"+this.state.activitySectorTime+"</h3>"+

            "<p>Statut Professionnel Actuel :</p><h3>"+this.state.jobStatut+"</h3>"+
            "<p>Si oui, le secteur d’activité :</p><h3>"+this.state.activitySectorJobStatut+"</h3>"+
            "<p>Nombre de mois :</p><h3>"+this.state.activitySectorTimeJobStatut+"</h3>"+

            "<p>Expliquez en quelques lignes votre situation actuelle :</p><h3>"+this.state.actualSituation+"</h3>"+

            "<p>Métier envisagé plus tard:</p><h3>"+this.state.planedJob+"</h3>"+
            "<p>Raison ou motivations de ce métier envisagé :</p><h3>"+this.state.planedJobRaison+"</h3>"+
            "<p>Le choix est motivé par : </p>"+
            "<p>Les conseils scolaires : </p><h3>"+this.state.planedJobBySchool+"</h3>"+
            "<p>Les conseils de la famille : </p><h3>"+this.state.planedJobByFamily+"</h3>"+
            "<p>Les conseils des amis : </p><h3>"+this.state.planedJobByFriends+"</h3>"+
            "<p>Je veux continuer mes études post-bac : </p><h3>"+this.state.studyChoice+"</h3>"+
            "<p>Raison : </p><h3>"+this.state.studyChoiceRaison+"</h3>"+

            "<p><strong>Maison</strong></p>"+

            "<p>Heure moyenne à laquelle je me réveille le matin chaque jour : </p><h3>"+this.state.morningWakeUpTime+"</h3>"+
            "<p>Ce que je fais le matin en général avant d’aller à l’établissement : </p><h3>"+this.state.doingBeforeGoToSchool+"</h3>"+
            "<p>Heure moyenne à laquelle je me couche le soir chaque jour : </p><h3>"+this.state.nightSleepTime+"</h3>"+
            "<p>Ce que je fais le soir en général après avoir quitté à l’établissement : </p><h3>"+this.state.doingAfterGoToSchool+"</h3>"+
            "<p>J’aime les loisirs suivants:</p>"+
            "<p>Lire ou aller la bibliothèque : </p><h3>"+this.state.readBooks+"</h3>"+
            "<p>Regarder la télévision : </p><h3>"+this.state.seeTv+"</h3>"+
            "<p>Faire du sport : </p><h3>"+this.state.doSport+"</h3>"+
            "<p>Discuter : </p><h3>"+this.state.talkWith+"</h3>"+
            "<p>Sortir : </p><h3>"+this.state.outWith+"</h3>"+
            "<p>Pour aller : </p><h3>"+this.state.goTo+"</h3>"
        ;

        let username = localStorage.getItem('lastName')+" "+localStorage.getItem('firstName');
        axios.post('/users/mailing', {
            userEmail: "answers-quiz@cdabcompass.com",
            // userEmail: "fabricesumsa2000@gmail.com",
            subject: "Questionnaire phase 1 - "+username,
            container: result
        })
            .then(res=>{
                if(res.status === 200){
                    alert("Vos informations ont bien été transmises à cdab");
                    localStorage.setItem("quizFirstStep","true");
                    setTimeout(
                        ()=>{window.location.href="/expertises/profil_etudiant"},
                        1000
                    )
                }
                else{alert("Une erreur est survenue, veuillez reprendre svp!")}
            })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });

        axios.post('/users/update/quizFirstStep', {
            lastName: localStorage.getItem("lastName"),
            firstName: localStorage.getItem("firstName")
        }) .then(res=>{
            if(res.status === 200){
                console.log("firstStep")
            }
            else{console.log("Error set firstStep")}
        })
            .catch(err=>{
                console.log("Error set firstStep")
            });
    };

    render() {
        const {classes} = this.props;
        const {gender,birthCertificate,idCard,passport,curSisters,curBrothers} = this.state;

        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <form onSubmit={this.submitAnswers}>
                            <div className={classes.containerQuizs}>

                                <h3>Identité</h3>
                                <div>
                                    <TextField
                                        label="Date du jour"
                                        value={this.state.curTime}
                                        disabled={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom"
                                        value={this.state.lastName}
                                        name={"lastName"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Prénom"
                                        name={"firstName"}
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Numéro (+indicatif)"
                                        value={this.state.userNumber}
                                        name={"userNumber"}
                                        onChange={this.handleChange}
                                        type={"tel"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name={"birthdayCity"}
                                        value={this.state.birthdayCity}
                                        label={"Lieu de naissance"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        id="date"
                                        label="Date de naissance"
                                        type="date"
                                        value={this.state.birthday}
                                        className={classes.textField}
                                        name={"birthday"}
                                        required={true}
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Sexe</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="gender" name="gender" value={gender} onChange={this.handleChange}>
                                        <FormControlLabel value="F" control={<Radio required={true}
                                                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Feminin" />
                                        <FormControlLabel value="M" control={<Radio required={true}
                                                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Masculin" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Acte de naissance</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="birthCertificate"
                                                name="birthCertificate" value={birthCertificate} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">Carte d’identité</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="idCard"
                                                name="idCard" value={idCard} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">Passeport</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="passport"
                                                name="passport" value={passport} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                </div>
                                <br/>
                            </div>

                            <div className={classes.containerQuizs}>
                                <h3>Situation Familiale</h3>
                                <div>
                                    <TextField
                                        label="Nombre de frères"
                                        value={this.state.curBrothers}
                                        name={"curBrothers"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nombre de soeurs"
                                        value={this.state.curSisters}
                                        name={"curSisters"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Frère-1"
                                        value={this.state.curBrother1}
                                        name={"curBrother1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Frère-2"
                                        value={this.state.curBrother2}
                                        name={"curBrother2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Frère-3"
                                        value={this.state.curBrother3}
                                        name={"curBrother3"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Soeur-1"
                                        value={this.state.curSister1}
                                        name={"curSister1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Soeur-2"
                                        value={this.state.curSister2}
                                        name={"curSister2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom-prenom-numero-Statut-Soeur-3"
                                        value={this.state.curSister3}
                                        name={"curSister3"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <br/>
                                    <FormLabel required={true} component="legend">Nature des frères et soeurs</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                                name="natureBrothers" value={this.state.natureBrothers} onChange={this.handleChange}>
                                        <FormControlLabel value="Biologique" control={<Radio required={true}
                                                                                             classes={{root: classes.radio, checked: classes.checked}}/>} label="Biologique" />
                                        <FormControlLabel value="Adoptifs" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Adoptifs" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec les frères et soeurs (0~10)</p>
                                    <TextField
                                        inputProps={{ min: "0", max: "10", step: "1" }}
                                        placeholder={"8"}
                                        value={this.state.relationShipMif}
                                        name={"relationShipMif"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Nature de la famille</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="natureFamily" value={this.state.natureFamily} onChange={this.handleChange}>
                                        <FormControlLabel value="Monogame" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Monogame" />
                                        {/*<FormControlLabel value="Séparée" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Séparée" />
                                        <FormControlLabel value="Divrocée" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Divrocée" />*/}
                                        <FormControlLabel value="Polygame" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Polygame" />
                                    </RadioGroup>
                                </div>
                                   <br/>                                                       
                                <div>
                                    <FormLabel required={true} component="legend">Situtation du père ou tuteur</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                                name="fatherAlive" value={this.state.fatherAlive} onChange={this.handleChange}>
                                        <FormControlLabel value="Vivant" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="Vivant" />
                                        <FormControlLabel value="Décédé" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="Décédé" />
                                        {/*Depuis ajouté*/}
                                        <p style={{color: "rgba(0, 0, 0, 0.54)"}}>S'il est décédé, Depuis combien d'années ?</p>
                                            <TextField
                                                inputProps={{ min: "0", max: "10", step: "1" }}
                                                placeholder={"3"}
                                                value={this.state.nbrDeces}
                                                name={"nbrDeces"}
                                                onChange={this.handleChange}
                                                type={"number"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <FormLabel component="legend">Statut du père ou tuteur</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="fatherStatut" value={this.state.fatherStatut} onChange={this.handleChange}>
                                        <FormControlLabel value="Salarié" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Salarié" />
                                        <FormControlLabel value="Indépendant" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Indépendant" />
                                        <FormControlLabel value="Entrepreneur" control={<Radio required={true}
                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="Entrepreneur" />
                                        <FormControlLabel value="Retraité" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Retraité" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Profession du père ou du tuteur</p>
                                    <TextField
                                        placeholder={"Médecin"}
                                        value={this.state.fatherWork}
                                        name={"fatherWork"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        value={this.state.fatherNumber}
                                        name={"fatherNumber"}
                                        label="Numéro du père (+indicatif)"
                                        onChange={this.handleChange}
                                        type={"tel"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        value={this.state.fatherWhaNumber}
                                        name={"fatherWhaNumber"}
                                        label="Numéro whatsapp du père (+indicatif)"
                                        onChange={this.handleChange}
                                        type={"tel"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Il revient à la maison : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="homStayFather" value={this.state.homStayFather} onChange={this.handleChange}>
                                                    
                                        <FormControlLabel value="Chaque jour" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Chaque jour" />
                                           <p style={{color: "rgba(0, 0, 0, 0.54)"}}>S'il revient à la maison,</p>
                                                    <TextField
                                                        placeholder={"Heure de départ"}
                                                        value={this.state.departHeur}
                                                        name={"departHeur"}
                                                        onChange={this.handleChange}
                                                        type={"text"}
                                                        required={true}
                                                        className={classes.textField}
                                                    />
                                                    <TextField
                                                        placeholder={"Heure de retour"}
                                                        value={this.state.retourHeur}
                                                        name={"retourHeur"}
                                                        onChange={this.handleChange}
                                                        type={"text"}
                                                        required={true}
                                                        className={classes.textField}
                                                    />
                                                    <br/>                                                   
                                        <FormControlLabel value="Une fois / semaine" control={<Radio required={true}
                                                                                                     classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / semaine" />
                                        <FormControlLabel value="Une fois / mois" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / mois" />
                                        <FormControlLabel value="Une fois / anée" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / année" />
                                    </RadioGroup>
                                    
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec le père ou tuteur (0~10)</p>
                                    <TextField
                                        inputProps={{ min: "0", max: "10", step: "1" }}
                                        placeholder={"8"}
                                        value={this.state.relationShipFather}
                                        name={"relationShipFather"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>



                                <div>
                                    <FormLabel required={true} component="legend">Situtation de la mère ou tutrice</FormLabel>
                                    <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                                name="motherAlive" value={this.state.motherAlive} onChange={this.handleChange}>
                                        <FormControlLabel value="Vivant" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="Vivant" />
                                        <FormControlLabel value="Décédé" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="Décédé" />
                                                <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Si elle est décédé, Depuis combien d'années ?</p>
                                                    <TextField
                                                        inputProps={{ min: "0", max: "10", step: "1" }}
                                                        placeholder={"3"}
                                                        value={this.state.nbrDecesMere}
                                                        name={"nbrDecesMere"}
                                                        onChange={this.handleChange}
                                                        type={"number"}
                                                        required={true}
                                                        className={classes.textField}
                                                    />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <FormLabel component="legend">Statut de la mère ou tutrice</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="motherStatut" value={this.state.motherStatut} onChange={this.handleChange}>
                                        <FormControlLabel value="Salarié" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Salarié" />
                                        <FormControlLabel value="Indépendant" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Indépendant" />
                                        <FormControlLabel value="Entrepreneur" control={<Radio required={true}
                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="Entrepreneur" />
                                        <FormControlLabel value="Retraité" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Retraité" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Profession de la mère ou tutrice</p>
                                    <TextField
                                        placeholder={"Médecin"}
                                        value={this.state.motherWork}
                                        name={"motherWork"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        value={this.state.motherNumber}
                                        name={"motherNumber"}
                                        label="Numéro de la mère (+indicatif)"
                                        onChange={this.handleChange}
                                        type={"tel"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        value={this.state.motherWhaNumber}
                                        name={"motherWhaNumber"}
                                        label="Numéro whatsapp de la mère (+indicatif)"
                                        onChange={this.handleChange}
                                        type={"tel"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <FormLabel component="legend">Elle revient à la maison : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="homStayMother" value={this.state.homStayMother} onChange={this.handleChange}>
                                        <FormControlLabel value="Chaque jour" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Chaque jour" />
                                                <p style={{color: "rgba(0, 0, 0, 0.54)"}}>S'il revient à la maison,</p>
                                                    <TextField
                                                        placeholder={"Heure de départ"}
                                                        value={this.state.departHeurMere}
                                                        name={"departHeurMere"}
                                                        onChange={this.handleChange}
                                                        type={"text"}
                                                        required={true}
                                                        className={classes.textField}
                                                    />
                                                    <TextField
                                                        placeholder={"Heure de retour"}
                                                        value={this.state.retourHeurMere}
                                                        name={"retourHeurMere"}
                                                        onChange={this.handleChange}
                                                        type={"text"}
                                                        required={true}
                                                        className={classes.textField}
                                                    />
                                                    <br/>    
                                        <FormControlLabel value="Une fois / semaine" control={<Radio required={true}
                                                                                                     classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / semaine" />
                                        <FormControlLabel value="Une fois / mois" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / mois" />
                                        <FormControlLabel value="Une fois / anée" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / année" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec la mère ou tutrice (0~10)</p>
                                    <TextField
                                        inputProps={{ min: "0", max: "10", step: "1" }}
                                        placeholder={"8"}
                                        value={this.state.relationShipMother}
                                        name={"relationShipMother"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Lieu d’habitation actuel</p>
                                    <TextField
                                        value={this.state.userCity}
                                        name={"userCity"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nombre de fois de repas dans la journée :"
                                        inputProps={{ min: "0",step: "1" }}
                                        value={this.state.foodByDay}
                                        name={"foodByDay"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Horaires de repas dans la journée : "
                                        value={this.state.foodTimeInDay}
                                        name={"foodTimeInDay"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                {/*Ajout de la situation aisé*/}                                                             
                                <div>
                                    <FormLabel component="legend">Je considère que je viens d’une famille</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="famillyFinanceStatut" value={this.state.famillyFinanceStatut} onChange={this.handleChange}>
                                        <FormControlLabel value="Aisée" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Aisée" />
                                        <FormControlLabel value="Moyenne" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Moyenne" />
                                        <FormControlLabel value="Modeteste" control={<Radio required={true}
                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="Modeteste" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel component="legend">Je suis autonome au niveau des finances</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="autonomieFinanceStatut" value={this.state.autonomieFinanceStatut} onChange={this.handleChange}>
                                        <FormControlLabel value="Totalement" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Totalement" />
                                        <FormControlLabel value="Partiellement" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Partiellement" />
                                        <FormControlLabel value="Pas du tout" control={<Radio required={true}
                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="Pas du tout" />
                                    </RadioGroup>
                                </div>
                            </div>

                            {(localStorage.getItem("situation") !== "Primaire") &&
                            (localStorage.getItem("situation") !== "College")
                            && (
                                <div className={classes.containerQuizs}>
                                    <div>
                                        <h3>Relation Intime</h3><br/>
                                        <div>
                                            <FormLabel required={true} component="legend">Parles tu d’éducation sexuelle avec les parents : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="aboutSexeWithParents" value={this.state.aboutSexeWithParents} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>
                                            <TextField
                                                placeholder={"Raison ... ?"}
                                                value={this.state.aboutSexeWithParentsRaison}
                                                name={"aboutSexeWithParentsRaison"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                        <div>
                                        <FormLabel required={true} component="legend">Mariée avec enfants : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="childMarriage" value={this.state.childMarriage} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">Mariée sans enfants : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="childOutMarriage" value={this.state.childOutMarriage} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">Fiancée : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="fiancee" value={this.state.fiancee} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">En couple (concubinage) avec enfant : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="relationShipWithChild" value={this.state.relationShipWithChild} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">En couple (concubinage) sans enfant : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="relationShipWithoutChild" value={this.state.relationShipWithoutChild} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">Célibataire avec enfant : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="singleWithChild" value={this.state.singleWithChild} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            <FormLabel required={true} component="legend">Célibataire sans enfant : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="singleWithoutCHild" value={this.state.singleWithoutCHild} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>

                                            
                                        </div>
                                        <div>
                                            <FormLabel required={true} component="legend">As-tu un(e) petit(e) ami(e) : </FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="boyOrGirlFriends" value={this.state.boyOrGirlFriends} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>
                                            <TextField
                                                placeholder={"Raison ... ?"}
                                                value={this.state.boyOrGirlFriendsRaison}
                                                name={"boyOrGirlFriendsRaison"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            {this.state.boyOrGirlFriends === "Oui" && (
                                                <div>
                                                    <FormLabel required={true} component="legend">les parents sont-ils au courant de cette relation ?</FormLabel>
                                                    <RadioGroup style={{display: "block"}}
                                                                name="parentsKnowRelationShip" value={this.state.parentsKnowRelationShip} onChange={this.handleChange}>
                                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                                    </RadioGroup>
                                                </div>
                                            )}
                                            <br/>
                                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>A à laquelle vous avez eu votre premier rapport (0~100)</p>
                                            <TextField
                                                placeholder={"25"}
                                                inputProps={{ min: "0", max: "100", step: "1" }}
                                                value={this.state.ageFirstRapport}
                                                name={"ageFirstRapport"}
                                                onChange={this.handleChange}
                                                type={"number"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <div>
                                                <FormLabel required={true} component="legend">Je peux m’abstenir de relation sexuelle :</FormLabel>
                                                <RadioGroup style={{display: "block"}}
                                                            name="waitingSexe" value={this.state.waitingSexe} onChange={this.handleChange}>
                                                    <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                    <FormControlLabel value="Non" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                                </RadioGroup>
                                            </div>
                                            <TextField
                                                placeholder={"Raison ... ?"}
                                                value={this.state.waitSexeRaison}
                                                name={"waitSexeRaison"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={classes.containerQuizs}>
                                <h3>Cadre et Relation Familiale</h3><br/>
                                <div>
                                    <FormLabel required={true} component="legend">Je vis actuellement avec : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="lifeSmbWithOrAlone" value={this.state.lifeSmbWithOrAlone} onChange={this.handleChange}>
                                        <FormControlLabel value="Mes deux parents" control={<Radio required={true}
                                                                                                   classes={{root: classes.radio, checked: classes.checked}}/>} label="Mes deux parents" />
                                        <FormControlLabel value="Père uniquement" control={<Radio required={true}
                                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Père ou Mère uniquement" />
                                        <FormControlLabel value="Oncle ou Tante paternel" control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Oncle ou Tante paternel" />
                                        <FormControlLabel value="Oncle ou Tante maternel" control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Oncle ou Tante maternel" />
                                        <FormControlLabel value="Tuteur ou Tutrice" control={<Radio required={true}
                                                                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tuteur ou Tutrice" />
                                        <FormControlLabel value="Grand Père" control={<Radio required={true}
                                                                                             classes={{root: classes.radio, checked: classes.checked}}/>} label="Grand Père" />
                                        <FormControlLabel value="Grand Mère" control={<Radio required={true}
                                                                                             classes={{root: classes.radio, checked: classes.checked}}/>} label="Grand Mère" />
                                        <FormControlLabel value="à l'internat" control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="à l'internat" />
                                        <FormControlLabel value="Seul(e) " control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Seul(e)" />
                                        <FormControlLabel value="En couple" control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="En couple" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Joie de vivre (0~9)</p>
                                    <TextField
                                        inputProps={{ min: "0", max: "9", step: "1" }}
                                        placeholder={"7"}
                                        value={this.state.joyOfLiving}
                                        name={"joyOfLiving"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Combativité (0~9)</p>
                                    <TextField
                                        inputProps={{ min: "0", max: "9", step: "1" }}
                                        placeholder={"7"}
                                        value={this.state.spritFighting}
                                        name={"spritFighting"}
                                        onChange={this.handleChange}
                                        type={"number"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>De façon général : </p>
                                    <TextField
                                        label="Ce que j'aime"
                                        value={this.state.isLikeIt}
                                        name={"isLikeIt"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Ce que je n'aime pas"
                                        value={this.state.notLikeIt}
                                        name={"notLikeIt"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                            </div>

                            <div className={classes.containerQuizs}>
                                <h3>Parcours universitaire ou parcours formation professionnelle post bac</h3>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Parcours Scolaire : </p>
                                    <FormLabel required={true} component="legend">Niveau d'étude actuel ?</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                        name="studyLevel" value={this.state.studyLevel} onChange={this.handleChange}>
                                                <FormControlLabel value="Primaire" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Primaire" />
                                                <FormControlLabel value="Collège" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Collège" />
                                                <FormControlLabel value="Lycée" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Lycée" />
                                                <FormControlLabel value="Post-Bac" control={<Radio required={true}
                                                                                              classes={{root: classes.radio, checked: classes.checked}}/>} label="Post-Bac" />
                                                
                                            
                                            </RadioGroup>
                                </div>
                                        {this.state.studyLevel === "Post-Bac" && (
                                            <div>
                                                <TextField
                                                    label ="Année d'obtention du Bac"
                                                    placeholder={"2014"}
                                                    value={this.state.bacYear}
                                                    name={"bacYear"}
                                                    onChange={this.handleChange}
                                                    type={"number"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                                <TextField
                                                    label="Niveau d'étude"
                                                    placeholder={"Bac"}
                                                    value={this.state.schoolLevel}
                                                    name={"schoolLevel"}
                                                    onChange={this.handleChange}
                                                    type={"text"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                                <TextField
                                                    label="Filiaire"
                                                    placeholder={"Informatique"}
                                                    value={this.state.studyFiliaire}
                                                    name={"studyFiliaire"}
                                                    onChange={this.handleChange}
                                                    type={"text"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                                 
                                                <TextField
                                                    label="Raison du choix de la formation actuelle"
                                                    placeholder={""}
                                                    value={this.state.formationChoice}
                                                    name={"formationChoice"}
                                                    onChange={this.handleChange}
                                                    type={"text"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                               
                                                <FormLabel required={true} component="legend">Êtes-vous encore étudiant en activité : </FormLabel>
                                                <RadioGroup style={{display: "block"}}
                                                            name="studentStatut" value={this.state.studentStatut} onChange={this.handleChange}>
                                                    <FormControlLabel value="diplômé" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="diplômé" />
                                                    <FormControlLabel value="non diplômé" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="non diplômé" />
                                                </RadioGroup>
                                                {this.state.studentStatut === "diplômé" && (<div>
                                                    <TextField
                                                    label ="Année d'obtention du diplôme universitaire"
                                                    placeholder={"2014"}
                                                    value={this.state.univGraduateYear}
                                                    name={"univGraduateYear"}
                                                    onChange={this.handleChange}
                                                    type={"number"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                                </div>)}
                                                {this.state.studentStatut === "non diplômé" && (<div>
                                                    <TextField
                                                    label ="Année d’arrêt des études et raisons"
                                                    placeholder={"2014"}
                                                    value={this.state.univNonGraduateYearAndRaison}
                                                    name={"univNonGraduateYearAndRaison"}
                                                    onChange={this.handleChange}
                                                    type={"text"}
                                                    required={true}
                                                    className={classes.textField}
                                                />
                                                </div>)}
                                                
                                            </div>
                                        )}                                    
                                <FormLabel required={true} component="legend">J'ai déjà redoublé une classe : </FormLabel>
                                <RadioGroup style={{display: "block"}}
                                            name="repeatClass" value={this.state.repeatClass} onChange={this.handleChange}>
                                    <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                    <FormControlLabel value="Non" control={<Radio required={true}
                                                                                  classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                </RadioGroup>
                                {this.state.repeatClass === "Oui" &&(
                                    <div>
                                        <TextField
                                            label="Laquelle"
                                            value={this.state.repeatWichClass}
                                            name={"repeatWichClass"}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                )}
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Nom et lieu de l’établissement de formation actuelle :</p>
                                    <TextField
                                        label="Ecole International St. Jean"
                                        value={this.state.actualSchool}
                                        name={"actualSchool"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Raison du choix de l'établissement"
                                        value={this.state.raisonActualSchool}
                                        name={"raisonActualSchool"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Temps de parcours pour venir à l’école : "
                                        value={this.state.timeComeToSchool}
                                        name={"timeComeToSchool"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Moyen de transport pour aller à l'école : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="meanOfTransport" value={this.state.meanOfTransport} onChange={this.handleChange}>
                                        <FormControlLabel value="A pied" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="A pied" />
                                        <FormControlLabel value="Vélo" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Vélo" />
                                        <FormControlLabel value="Moto" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Moto" />
                                        <FormControlLabel value="Voiture" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Voiture" />
                                        <FormControlLabel value="Taxi" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Taxi" />
                                        <FormControlLabel value="Bus" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Bus" />
                                        <FormControlLabel value="Tramway" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Tramway" />
                                        <FormControlLabel value="Métro" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Métro" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Je viens à l'école seul(e) : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="comeSchoolAlone" value={this.state.comeSchoolAlone} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    {this.state.comeSchoolAlone === "Non" &&(
                                        <div>
                                            <TextField
                                                label="Accompagné par ?"
                                                value={this.state.parentHelpToGoSchool}
                                                name={"parentHelpToGoSchool"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    )
                                    }
                                </div>

{/*}
                                <div>
                                    <FormLabel required={true} component="legend">Système d’études au primaire : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="schoolSystem" value={this.state.schoolSystem} onChange={this.handleChange}>
                                        <FormControlLabel value="National" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                        <FormControlLabel value="International" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                                    </RadioGroup>
                                    {this.state.schoolSystem === "International" &&(
                                        <div>
                                            <TextField
                                                label="Quel système?"
                                                value={this.state.schoolSystemDesc}
                                                name={"schoolSystemDesc"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale CE1-CE2 : </p>
                                    <TextField
                                        label="16.78"
                                        value={this.state.moyCE1}
                                        name={"moyCE1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="16.78"
                                        value={this.state.moyCE2}
                                        name={"moyCE2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale CM1-CM2 : </p>
                                    <TextField
                                        label="16.78"
                                        value={this.state.moyCM1}
                                        name={"moyCM1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="16.78"
                                        value={this.state.moyCM2}
                                        name={"moyCM2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Ecole primaire de l'obtention du certificat : </p>
                                    <TextField
                                        label="Ets primaire"
                                        value={this.state.primarySchool}
                                        name={"primarySchool"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">Système d’études au collège : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="schoolSystemCol" value={this.state.schoolSystemCol} onChange={this.handleChange}>
                                        <FormControlLabel value="National" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                        <FormControlLabel value="International" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                                    </RadioGroup>
                                    {this.state.schoolSystemCol === "International" &&(
                                        <div>
                                            <TextField
                                                label="Quel système?"
                                                value={this.state.schoolSystemDescCol}
                                                name={"schoolSystemDescCol"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 6ème-5ème : </p>
                                    <TextField
                                        label="Moyenne générale 6ème"
                                        value={this.state.moyCl6}
                                        name={"moyCl6"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Moyenne générale 5ème"
                                        value={this.state.moyCl5}
                                        name={"moyCl5"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 4ème-3ème : </p>
                                    <TextField
                                        label="Moyenne générale 4ème"
                                        value={this.state.moyCl4}
                                        name={"moyCl4"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Moyenne générale 3ème"
                                        value={this.state.moyCl3}
                                        name={"moyCl3"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div><br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Collège de l'obtention du brevet : </p>
                                    <TextField
                                        label="Ets collège"
                                        name={"collegeSchool"}
                                        value={this.state.collegeSchool}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
*/}


                                {localStorage.getItem("situation") !== "College" &&
                                <div>
                                    <FormLabel required={true} component="legend">Système d’études au lycée : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="schoolSystemLyc" value={this.state.schoolSystemLyc} onChange={this.handleChange}>
                                        <FormControlLabel value="National" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                        <FormControlLabel value="International" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                                    </RadioGroup>
                                    {this.state.schoolSystemLyc === "International" &&(
                                        <div>
                                            <TextField
                                                label="Quel système?"
                                                value={this.state.schoolSystemDescLyc}
                                                name={"schoolSystemDescLyc"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    )}
                                </div>
                                    }
                                <div><br/>
                                    <p style={{color: "black"}}>Matières principales et leurs moyennes : </p>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Ecrivez la matière et sa moyenne générale </p>
                                    <TextField
                                        label="Nom de la matière - Moyenne générale (Ex : Maths-15)"
                                        value={this.state.principMat1}
                                        name={"principMat1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat2}
                                        name={"principMat2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat3}
                                        name={"principMat3"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat4}
                                        name={"principMat4"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat5}
                                        name={"principMat5"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat6}
                                        name={"principMat6"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat7}
                                        name={"principMat7"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat8}
                                        name={"principMat8"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat9}
                                        name={"principMat9"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                    <TextField
                                        label="Nom de la matière - Moyenne générale"
                                        value={this.state.principMat10}
                                        name={"principMat10"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                        />
                                </div>

                                   
                                <div><br/>
                                    <p style={{color: "black"}}>Comment je me comporte en classe: </p>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Ecrivez la matière et choisissez la manière dont vous vous comportez entre ses options </p>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>
                                        <ol>
                                            <li>Je suis passionné</li>
                                            <li>Je suis concentré</li>
                                            <li>Je suis intéressé mais ne comprends pas</li>
                                            <li>Je suis juste présent</li>
                                            <li>Je ne comprends pas</li>
                                            <li>Je m’ennuye</li>
                                            <li>Cela ne m’intéresse pas</li>
                                        </ol>
                                    </p>
                                    <TextField
                                        label="Nom de la matière - Note (1~7) "
                                        placeholder="(Maths - 2)"
                                        value={this.state.comportMat1}
                                        name={"comportMat1"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat2}
                                        name={"comportMat2"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat3}
                                        name={"comportMat3"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat4}
                                        name={"comportMat4"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat5}
                                        name={"comportMat5"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat6}
                                        name={"comportMat6"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat7}
                                        name={"comportMat7"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Nom de la matière - Note (1~7)"
                                        value={this.state.comportMat8}
                                        name={"comportMat8"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />


                                </div>


                                {localStorage.getItem("situation") !== "College" &&

                                <div>
                                    <div><br/>
                                        <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 2nd-1ère-Tle : </p>
                                        <TextField
                                            label="16.78"
                                            value={this.state.moy2nd}
                                            name={"moy2nd"}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="16.78"
                                            value={this.state.moy1ere}
                                            name={"moy1ere"}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                        <TextField
                                            label="16.78"
                                            value={this.state.moyTle}
                                            name={"moyTle"}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>

                                    <div><br/>
                                        <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Lycée de l'obtention du brevet : </p>
                                        <TextField
                                            label="Ets lycée"
                                            name={"lyceeSchool"}
                                            value={this.state.lyceeSchool}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                </div>
                                }


                                <div>
                                    <FormLabel required={true} component="legend">1ere Réseau social le plus utilisée : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="firstSocialMedia" value={this.state.firstSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Facebook" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                        <FormControlLabel value="Whatsapp" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                        <FormControlLabel value="Youtube" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                        <FormControlLabel value="Twitter" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                        <FormControlLabel value="Instagram" control={<Radio required={true}
                                                                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                        <FormControlLabel value="Skype" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                        <FormControlLabel value="Snap" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                        <FormControlLabel value="tik-tok" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                                    </RadioGroup>

                                    <FormLabel required={true} component="legend">Raison d'utilisation de ce réseau: </FormLabel><br/>
                                    <FormLabel required={true} component="legend"> discuter avec les membres de la famille : lien de parenté :  </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="raisonSocialNetwork" value={this.state.raisonSocialNetwork} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>

                                    <FormLabel required={true} component="legend"> discuter avec les membres de la famille : lien de parenté :  </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="raisonSocialNetwork" value={this.state.raisonSocialNetwork} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>

                                    <FormLabel required={true} component="legend"> discuter avec ses amis d’enfance, d’école, du quartier</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="raisonSocialNetwork" value={this.state.raisonSocialNetwork} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>

                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">2eme Réseau social le plus utilisée : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="secSocialMedia" value={this.state.secSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Facebook" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                        <FormControlLabel value="Whatsapp" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                        <FormControlLabel value="Youtube" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                        <FormControlLabel value="Twitter" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                        <FormControlLabel value="Instagram" control={<Radio required={true}
                                                                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                        <FormControlLabel value="Skype" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                        <FormControlLabel value="Snap" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                        <FormControlLabel value="tik-tok" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                                    </RadioGroup>
                                </div>



                                <div>
                                    <FormLabel required={true} component="legend">3eme Réseau social le plus utilisée : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="thrSocialMedia" value={this.state.thrSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Facebook" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                        <FormControlLabel value="Whatsapp" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                        <FormControlLabel value="Youtube" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                        <FormControlLabel value="Twitter" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                        <FormControlLabel value="Instagram" control={<Radio required={true}
                                                                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                        <FormControlLabel value="Skype" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                        <FormControlLabel value="Snap" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                        <FormControlLabel value="tik-tok" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                                    </RadioGroup>
                                </div>


                                <div>
                                    <FormLabel required={true} component="legend">4eme Réseau social le plus utilisée : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="furSocialMedia" value={this.state.furSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Facebook" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                        <FormControlLabel value="Whatsapp" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                        <FormControlLabel value="Youtube" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                        <FormControlLabel value="Twitter" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                        <FormControlLabel value="Instagram" control={<Radio required={true}
                                                                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                        <FormControlLabel value="Skype" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                        <FormControlLabel value="Snap" control={<Radio required={true}
                                                                                       classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                        <FormControlLabel value="tik-tok" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">Temps moyen passé sur les réseaux sociaux/jours : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="timeSocialMedia" value={this.state.timeSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="15 min" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="15 min" />
                                        <FormControlLabel value="30 min" control={<Radio required={true}
                                                                                         classes={{root: classes.radio, checked: classes.checked}}/>} label="30 min" />
                                        <FormControlLabel value="+1h" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="+1h" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel required={true} component="legend">Temps moyen passé sur les réseaux sociaux/semaine : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="weekTimeSocialMedia" value={this.state.weekTimeSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="< 2 fois" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="< 2 fois" />
                                        <FormControlLabel value="< 4fois" control={<Radio required={true}
                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="< 4fois " />
                                        <FormControlLabel value="> 4 fois" control={<Radio required={true}
                                                                                           classes={{root: classes.radio, checked: classes.checked}}/>} label="> 4 fois" />
                                    </RadioGroup>
                                </div>

                                <div>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyens de connexion aux réseaux sociaux : </p>
                                    <FormLabel required={true} component="legend">Mobile </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="connectTelSocialMedia" value={this.state.connectTelSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>

                                    <FormLabel required={true} component="legend">Ordinateur</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="connectPcSocialMedia" value={this.state.connectPcSocialMedia} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                </div>
                            </div>

                            <div className={classes.containerQuizs}>
                                <h3>Perspectives professionnelles</h3>
                                <div>
                                    <RadioGroup style={{display: "block"}}
                                                name="professionalsExperience" value={this.state.professionalsExperience} onChange={this.handleChange}>Expérience professionnelle acquise 
                                       <br/> <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    {this.state.professionalsExperience === "Oui" &&(
                                        <div>
                                        <TextField
                                        label="secteur d’activités"
                                        placeholder="le commerce, la logistique, la restauration..."
                                        name={"activitySector"}
                                        value={this.state.activitySector}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        /> 
                                        <TextField
                                        label="Nombre de mois"
                                        placeholder="8"
                                        name={"activitySectorTime"}
                                        value={this.state.activitySectorTime}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        /> 
                                        <RadioGroup style={{display: "block"}}
                                                    name="jobStatut" value={this.state.jobStatut} onChange={this.handleChange}>Statut Professionnel Actuel  
                                        <br/> <FormControlLabel value="En stage" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="En stage" />
                                            <FormControlLabel value="En contrat de travail " control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="En contrat de travail " />
                                            <FormControlLabel value="En intérim " control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="En intérim" />
                                            <FormControlLabel value="A la maison" control={<Radio required={true}
                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="A la maison" />
                                        </RadioGroup>
                                        <div>
                                        <TextField
                                        label="secteur d’activités"
                                        placeholder="le commerce, la logistique, la restauration..."
                                        name={"activitySectorJobStatut"}
                                        value={this.state.activitySectorJobStatut}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        /> 
                                        <TextField
                                        label="Nombre de mois"
                                        placeholder="8"
                                        name={"activitySectorTimeJobStatut"}
                                        value={this.state.activitySectorTimeJobStatut}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                        /> 
                                        </div>

                                        </div>
                                    )}

                                   
                                    <br/>
                                    <TextField
                                        label="Expliquez en quelques lignes votre situation actuelle"
                                        name={"actualSituation"}
                                        value={this.state.actualSituation}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Métier envisagé : </p>
                                    <TextField
                                        label="Médécin"
                                        name={"planedJob"}
                                        value={this.state.planedJob}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Raisons de ce choix"
                                        name={"planedJobRaison"}
                                        value={this.state.planedJobRaison}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Le choix est motivé par :</p>
                                    <FormLabel required={true} component="legend">Les conseils scolaires : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="planedJobBySchool" value={this.state.planedJobBySchool} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup><br/>
                                    <FormLabel required={true} component="legend">Les conseils de la famille : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="planedJobByFamily" value={this.state.planedJobByFamily} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup><br/>
                                    <FormLabel required={true} component="legend">Les conseils des ami(e)s : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="planedJobByFriends" value={this.state.planedJobByFriends} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                </div>
                                <div>
                                    <FormLabel required={true} component="legend">Je veux continuer mes études post-bac :</FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="studyChoice" value={this.state.studyChoice} onChange={this.handleChange}>
                                        <FormControlLabel value="au niveau national" control={<Radio required={true}
                                                                                                     classes={{root: classes.radio, checked: classes.checked}}/>} label="au niveau national" />
                                        <FormControlLabel value="au niveau international" control={<Radio required={true}
                                                                                                          classes={{root: classes.radio, checked: classes.checked}}/>} label="au niveau international" />
                                    </RadioGroup>
                                    {this.state.studyChoice === "au niveau international" && (
                                        <div>
                                            <TextField
                                                label="Raisons de ce choix"
                                                name={"studyChoiceRaison"}
                                                value={this.state.studyChoiceRaison}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={classes.containerQuizs}>
                                <h3>Maison</h3>
                                <div>
                                    <TextField
                                        label="Heure de réveil matinal"
                                        name={"morningWakeUpTime"}
                                        value={this.state.morningWakeUpTime}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Ce que je fais le matin avant les cours"
                                        name={"doingBeforeGoToSchool"}
                                        value={this.state.doingBeforeGoToSchool}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Heure de pour aller au lit"
                                        name={"nightSleepTime"}
                                        value={this.state.nightSleepTime}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Ce que je fais le soir après les cours"
                                        name={"doingAfterGoToSchool"}
                                        value={this.state.doingAfterGoToSchool}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={true}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>J’aime les loisirs suivants : </p>
                                    <FormLabel required={true} component="legend">Lire ou aller à la bibliothèque : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="readBooks" value={this.state.readBooks} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    <FormLabel required={true} component="legend">Regarder la télévision : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="seeTv" value={this.state.seeTv} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    <FormLabel required={true} component="legend">Faire du sport : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="doSport" value={this.state.doSport} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio required={true}
                                                                                      classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    <FormLabel required={true} component="legend">Discuter : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="talkWith" value={this.state.talkWith} onChange={this.handleChange}>
                                        <FormControlLabel value="avec les ami(e)s du quartier" control={<Radio required={true}
                                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les ami(e)s du quartier" />
                                        <FormControlLabel value="avec les camarades de l’école " control={<Radio required={true}
                                                                                                                 classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les camarades de l’école" />
                                        <FormControlLabel value="avec les membres de la famille" control={<Radio required={true}
                                                                                                                 classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les membres de la famille" />
                                        <FormControlLabel value="ou rester à la maison" control={<Radio required={true}
                                                                                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="ou rester à la maison" />
                                    </RadioGroup>
                                    <FormLabel required={true} component="legend">Sortir : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="outWith" value={this.state.outWith} onChange={this.handleChange}>
                                        <FormControlLabel value="avec les ami(e)s du quartier" control={<Radio required={true}
                                                                                                               classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les ami(e)s du quartier" />
                                        <FormControlLabel value="avec les camarades de l’école " control={<Radio required={true}
                                                                                                                 classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les camarades de l’école" />
                                        <FormControlLabel value="avec les membres de la famille" control={<Radio required={true}
                                                                                                                 classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les membres de la famille" />
                                    </RadioGroup>
                                    <div>
                                        <TextField
                                            label="Pour aller (à la plage, en ville, faire la fête, ou ailleurs )"
                                            name={"goTo"}
                                            value={this.state.goTo}
                                            onChange={this.handleChange}
                                            type={"text"}
                                            required={true}
                                            className={classes.textField}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div style={{textAlign: "center", margin: "30px"}}>
                                <Button type="submit" className={classes.btnQuiz}
                                >
                                    Envoyer
                                </Button>
                            </div>
                        </form>

                    </div>
                    <div>
                        <FooterBar/>
                    </div>

                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(QuizPrincipal);
