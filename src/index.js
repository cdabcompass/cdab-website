import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
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
import QuizPrincipal from "./Quizz/QuizPrincipal";
import QuizParent1 from "./Quizz/QuizParent1";
import QuizParent2 from "./Quizz/QuizParent2";
import QuizPrimaire from "./Quizz/QuizPrimaire";
import PaymentView from "./utils/PaymentView";
import Products from "./subMenu/Products";
import EbookPayView from "./utils/EbookPayView";
import Actu4 from "./article/Actu4";

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

                <Route exact path="/training" component={Training}/>
                <Route exact path="/training/formations" component={Formations}/>
                <Route exact path="/training/stages" component={Intership}/>
                <Route exact path="/training/conseils" component={Advices}/>
                <Route exact path="/training/nos_offres" component={Offers}/>

                <Route exact path="/coaching" component={Coaching}/>

                <Route exact path="/nos_locaux" component={Offices}/>

                <Route exact path="/nos_products" component={Products}/>

                <Route exact path="/nos_realisations" component={Achievements}/>
                <Route exact path="/nos_realisations/companyVisits" component={CompanyVisits}/>
                <Route exact path="/nos_realisations/testimonials" component={Testimonials}/>
                <Route exact path="/nos_realisations/activityRepport" component={ActivityReport}/>

                <Route exact path="/actu/1" component={Actu1}/>
                <Route exact path="/actu/2" component={Actu2}/>
                <Route exact path="/actu/3" component={Actu3}/>
                <Route exact path="/actu/4" component={Actu4}/>


                <PrivateRoute exact path="/quiz/principal_quiz" component={QuizPrincipal}/>
                <PrivateRoute exact path="/quiz/post_bac" component={Quiz1}/>
                <PrivateRoute exact path="/quiz/primaire" component={QuizPrimaire}/>
                <PrivateRoute exact path="/quiz/parent1" component={QuizParent1}/>
                <PrivateRoute exact path="/quiz/parent2" component={QuizParent2}/>

                <PrivateRoute exact path="/pay/profil_etudiant" component={PaymentView}/>

                <PrivateRoute exact path="/pay/eBook" component={EbookPayView}/>

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
