import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Expertises from "./subMenu/Expertises";
import StudentProfil from "./SubExpertises/StudentProfil";
import ScolarOrientation from "./SubExpertises/ScolarOrientation";
import SchoolProject from "./SubExpertises/SchoolProject";
import Tutoring from "./SubExpertises/Tutoring";
import StudentDeposit from "./SubExpertises/StudentDeposit";
import StudentHousing from "./SubExpertises/StudentHousing";
import Register from "./connexion/Register";
import Login from "./connexion/Login";
import Actu1 from "./article/Actu1";
import Actu2 from "./article/Actu2";
import Actu3 from "./article/Actu3";
import Actu4 from "./article/Actu4";
import Actu5 from "./article/Actu5";
import Actu6 from "./article/Actu6";
import Actu7 from "./article/Actu7";
import Actu8 from "./article/Actu8";
import Actu9 from "./article/Actu9";
import Training from "./subMenu/Training";
import Formations from "./SubTraining/Formations";
import Intership from "./SubTraining/Intership";
import Advices from "./SubTraining/Advices";
import Offers from "./SubTraining/Offers";
import Coaching from "./subMenu/Coaching";
import Offices from "./subMenu/Offices";
import Achievements from "./subMenu/Achievements";
import CompanyVisits from "./SubAchievements/CompanyVisits";
import Quiz1 from "./Quizz/Quiz";
import Testimonials from "./SubAchievements/Testimonials";
import {PrivateRoute} from "./utils/PrivateRoute";
import ActivityReport from "./SubAchievements/ActivityReport";
import QuizBilanProInitial from "./Quizz/QuizBilanProInitial";
import QuizProfessionnel from "./Quizz/QuizProfessionnel";
import QuizPrincipal from "./Quizz/QuizPrincipal";
import QuizParent1 from "./Quizz/QuizParent1";
import QuizParent2 from "./Quizz/QuizParent2";
import QuizPrimaire from "./Quizz/QuizPrimaire";
import PaymentView from "./utils/PaymentView";
import Products from "./subMenu/Products";
import EbookPayView from "./utils/EbookPayView";
import PanelAdmin from "./adminAccess/PanelAdmin";
import RecoverAccount1 from "./RecoverAccount/RecoverAccount1";
import RecoverAccount2 from "./RecoverAccount/RecoverAccount2";
import EntrepriseMoreInfo from "./subMenu/EntrepriseMoreInfo";
import Potential from "./SubExpertises/Potential";
import Professional from "./SubExpertises/Professional";
import PanelTeacher from "./teacherPanel/PanelTeacher";
import ProductsEvents from "./subMenu/ProductsEvents";
import Evenements from "./subMenu/Evenements";
import Temoignages from "./subMenu/Temoignages";
import Educateurs from "./SubTemoignages/Educateurs";
import Parents from "./SubTemoignages/Parents";
import Apprenants from "./SubTemoignages/Apprenants";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>

                <Route path="/inscription" component={Register}/>
                <Route path="/connexion" component={Login}/>

                <Route exact path="/expertises" component={Expertises}/>
                <Route exact path="/expertises/profil_etudiant" component={StudentProfil}/>
                <Route exact path="/expertises/orientation_scolaire" component={ScolarOrientation}/>
                <Route exact path="/expertises/projet_etude" component={SchoolProject}/>
                <Route exact path="/expertises/soutien_scolaire" component={Tutoring}/>
                <Route exact path="/expertises/caution_etudiantes" component={StudentDeposit}/>
                <Route exact path="/expertises/logement_etudiant" component={StudentHousing}/>
                <Route exact path="/expertises/potential" component={Potential}/>
                <Route exact path="/expertises/professional" component={Professional}/>

                <Route exact path="/training" component={Training}/>
                <Route exact path="/training/formations" component={Formations}/>
                <Route exact path="/training/stages" component={Intership}/>
                <Route exact path="/training/conseils" component={Advices}/>
                <Route exact path="/training/nos_offres" component={Offers}/>

                <Route exact path="/coaching" component={Coaching}/>

                <Route exact path="/nos_locaux" component={Offices}/>

                <Route exact path="/nos_produits" component={ProductsEvents}/>
                <Route exact path="/nos_produits_evenements/produits" component={Products}/>
                <Route exact path="/nos_produits_evenements/evenements" component={Evenements}/>

                <Route exact path="/nos_realisations" component={Achievements}/>
                <Route exact path="/nos_realisations/companyVisits" component={CompanyVisits}/>
                <Route exact path="/nos_realisations/testimonials" component={Testimonials}/>
                <Route exact path="/nos_realisations/activityRepport" component={ActivityReport}/>

                <Route exact path="/actu/1" component={Actu1}/>
                <Route exact path="/actu/2" component={Actu2}/>
                <Route exact path="/actu/3" component={Actu3}/>
                <Route exact path="/actu/4" component={Actu4}/>
                <Route exact path="/actu/5" component={Actu5}/>
                <Route exact path="/actu/6" component={Actu6}/>
                <Route exact path="/actu/7" component={Actu7}/>
                <Route exact path="/actu/8" component={Actu8}/>
                <Route exact path="/actu/9" component={Actu9}/>

                <Route exact path="/cdab/plus_infos" component={EntrepriseMoreInfo}/>

                <Route exact path="/recuperation/compte/1" component={RecoverAccount1}/>
                <Route exact path="/recuperation/compte/2" component={RecoverAccount2}/>

                <Route exact path="/temoignages" component={Temoignages}/>
                <Route exact path="/temoignages/educateurs" component={Educateurs}/>
                <Route exact path="/temoignages/parents" component={Parents}/>
                <Route exact path="/temoignages/apprenants" component={Apprenants}/>

                <PrivateRoute exact path="/quiz/bilan_pro_initial" component={QuizBilanProInitial}/>
                <PrivateRoute exact path="/quiz/principal_quiz" component={QuizPrincipal}/>
                <PrivateRoute exact path="/quiz/professionnel_quiz" component={QuizProfessionnel}/>
                <PrivateRoute exact path="/quiz/post_bac" component={Quiz1}/>
                <PrivateRoute exact path="/quiz/primaire" component={QuizPrimaire}/>
                <PrivateRoute exact path="/quiz/parent1" component={QuizParent1}/>
                <PrivateRoute exact path="/quiz/parent2" component={QuizParent2}/>

                <PrivateRoute exact path="/pay/profil_etudiant" component={PaymentView}/>

                <PrivateRoute exact path="/pay/eBook" component={EbookPayView}/>

                <PrivateRoute exact path="/panelAdmin" component={PanelAdmin}/>

                <PrivateRoute exact path="/teacherPanel" component={PanelTeacher}/>


                <Route exact path="*" component={App}/>

            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
