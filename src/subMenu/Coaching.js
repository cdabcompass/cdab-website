import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Pdf from "../othersfiles/manuel.pdf";
import Grid from "@material-ui/core/Grid";
import FooterBar from "../utils/FooterBar";
import Button from "react-bootstrap/Button";
import translate from "../i18n/messages/translate";
import {IntlProvider} from "../i18n";
import Sidemenu from "../utils/Sidemenu";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    eachCarousel:{
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center"
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
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#fff070",
        color: "black",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
        paddingRight: "25px",
        overflowY: "auto",
    },
    textPlace:{
        margin: "0px auto",
        width: "70%",
        height: "100%",
    },
    aboutUs: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    txtUs:{
        padding: "40px",
        fontSize: 20,
        color: "white"
    },
    videoPres:{
        textAlign: "center",
        height: "100%",
        padding: "10%",
    }
});

class Coaching extends Component {
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
                    <div style={{marginTop: "300px"}}>

                        
                    <div className={classes.aboutUs}>
                            <div style={{marginBottom: "30px"}} className="row">
                                <div style={{marginTop : "22px"}} className="square"></div> <p style =  {{color : '#7c1c18' }} className="expTitle">{translate("Coach_cdab")}</p>
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong>ETUDES : SYSTEME NATIONAL OU INTERNATIONAL</strong><br/><br/>
                                            Nous avons à notre époque, le choix d’étude entre le système national et
                                            international. <br/><br/>
                                            Par le passé, le système national était de niveau équivalent à l’international, et
                                            de nature publique. De nos jours, le système national est scindé en deux parties :
                                            le public et le privé, suite à la croissance accrue du nombre d’apprenants. <br/><br/>
                                            Le système international d’aujourd’hui, joue un rôle auprès des parents ou
                                            tuteurs ayant un projet pour leurs enfants hors cadre local. <br/>
                                            Il s’agit au fait d’un bon investissement pour les parents à moyen et court terme
                                            et un bon tremplin pour la réussite de leur projet d’études pour les enfants.
                                            L’erreur à ne pas commettre est de compromettre l’avenir de son enfant, en
                                            voulant l’intégrer dans un système sans analyse au préalable mais juste parce
                                            que la famille voisine ou un proche en fait autant. <br/><br/>
                                            Il est préférable de choisir un système d’étude adéquat au profil de l’enfant. Les
                                            parents doivent penser en terme de projection d’études. <br/><br/>
                                            Il est libre au parent d’apprécier le fait d’inscrire son enfant dans le système
                                            correspondant au projet d’études de son enfant. Les différentes alternatives
                                            interviennent du primaire ou lycée en passant par le collège par des vases
                                            communicants d’un système à un autre.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                             <strong>STUDIES: NATIONAL OR INTERNATIONAL SYSTEM</strong><br/><br/>
                                            In our time, we have the choice of studying between the national system and
                                            international.<br/><br/>
                                            In the past, the national system was equivalent to the international level, and
                                            of a public nature. Nowadays, the national system is split into two parts:
                                            the public and the private, following the increased growth in the number of learners. <br/> <br/>
                                            Today's international system plays a role with parents or
                                            tutors with a project for their children outside the local framework. <br/>
                                            This is a good investment for parents in the medium and short term
                                            and a good springboard for the success of their children's education project.
                                            The mistake not to make is to jeopardize the future of your child, by
                                            wanting to integrate it into a system without prior analysis but just because
                                            that the neighboring family or a loved one does the same. <br/> <br/>
                                            It is best to choose a study system that is appropriate for the profile of the child. The
                                            parents need to think in terms of education projection. <br/> <br/>
                                            The parent is free to appreciate the fact of registering their child in the system
                                            corresponding to her child's educational plan. The different alternatives
                                            intervene from elementary or high school through middle school through vases
                                            communicating from one system to another.
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                    <div className={classes.videoPres}>
                                       
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/b36rnsBkeaU"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                  <div className={classes.videoPres}>
                                     
                                      <iframe className="videoPresentation"
                                              src="https://www.youtube.com/embed/ZxT95vXlEHw"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen></iframe>
                                  </div>
                                    
                              </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong>SOUTIEN SCOLAIRE OU REPETITION</strong><br/><br/>
                                            L’erreur courante est de choisir un cours de répétition sur la seule base de la
                                            baisse de note dans une discipline scolaire ou universitaire. Nous pensons faire
                                            ainsi un choix judicieux pour nos enfants. Ainsi la question est de savoir l’intérêt
                                            du cours de répétition et l’aide à apporter à nos enfants pour rattraper le retard
                                            cumulé ? <br/>

                                            <strong>La répétition sur le long terme,</strong> c’est-à dire, payer un professeur pour la survie
                                            scolaire de votre enfant toute l’année, n’aide pas du tout ce dernier. L’enfant ou
                                            l’élève ou l’étudiant est censé faire des efforts. Mais force est de remarquer que
                                            la répétition programmée sur toute l’année abrutit, rend paresseux votre enfant.
                                            De ce fait qu’il ne fournit plus aucun effort pour s’en sortir de son retard
                                            scolaire, puisqu’il se dit en lui-même : j’ai un répétiteur à la maison, il
                                            m’expliquera le cours même si je ne suis, ni ne participe au cours. Il devient
                                            fainéant, parce qu’il ne fait plus l’effort de résoudre les équations de lui-même.
                                            Il aura tendance à être dépendant et à attendre que son répétiteur fasse tous les
                                            efforts à sa place. <br/><br/>
                                            De plus il est évident que l’étudiant devient automate. Car il aura l’art de
                                            déverser exactement ce qu’on lui dit mot à mot sans dépenser aucune force
                                            intellect pour comprendre. Cette astuce, ne rend pas intelligent, ni ne permet de
                                            réussir. Votre enfant n’aura aucun esprit de créativité.
                                            Ce qui au contraire est convenable de faire, et qui a des avantages c’est la
                                            répétition à court terme : un ou deux mois de façon cyclique.
                                            La répétition à court terme permet de booster le niveau de l’enfant, en le
                                            permettant de se défendre pour réussir avec toutes les armes en mains. Il s’agit
                                            là d’un apprentissage qui vient compléter le potentiel qu’à votre enfant. Ceci le
                                            rend sûr de lui-même, il devient indépendant et créatif. C’est comme apprendre
                                            à l’enfant toutes les techniques de pêche et le laisser seul au bord de la mer pour
                                            qu’il puisse se nourrir de lui-même. La répétition dans ce cas est instructif et
                                            productif.<br/><br/>
                                            <strong>La répétition par soi-même</strong> est la technique de se lire soi-même. C’est la
                                            méthode de se répéter soi-même. Dans le domaine littéraire par exemple, on
                                            peut se rattraper en faisant beaucoup de lecture et en revoyant les bases de
                                            grammaire, de conjugaison ou de vocabulaire.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong>SCHOOL SUPPORT OR REHEARSAL</strong><br/><br/>
                                            The common mistake is to choose a repetition course on the sole basis of the
                                            drop in grade in a school or university discipline. We think we do
                                            thus a wise choice for our children. So the question is to know the interest
                                            the rehearsal class and helping our children to catch up
                                            cumulative?<br/>

                                            <strong>Long-term repetition,</strong> that is, paying a teacher for survival
                                            your child’s school all year round, doesn’t help at all. The child or
                                            the pupil or student is expected to make an effort. But it is clear that
                                            the planned repetition throughout the year stupefies and lazy your child.
                                            As a result, he no longer makes any effort to cope with his delay
                                            school, since he says to himself: I have a tutor at home, he
                                            Explain the course to me even if I am not taking or participating in the course. He becomes
                                            lazy, because he no longer makes the effort to solve the equations on his own.
                                            He will tend to be dependent and wait for his tutor to do all the
                                            efforts in its place.<br/><br/>
                                            Moreover, it is obvious that the student becomes an automaton. Because he will have the art of
                                            pour out exactly what is said to him word for word without expending any force
                                            intellect to understand. This trick does not make you intelligent, nor does it allow you to
                                            succeed. Your child will have no spirit of creativity.
                                            What, on the contrary, is appropriate to do, and which has advantages, is
                                            short-term repetition: one or two months cyclically.
                                            Short-term repetition helps boost the child's level, by
                                            allowing you to defend yourself to succeed with all the weapons in your hands. It's about
                                            this is learning that complements your child's potential. This the
                                            makes sure of himself, he becomes independent and creative. It's like learning
                                            all fishing techniques for the child and leave him alone by the sea to
                                            that he can feed himself. The repetition in this case is informative and
                                            productive.<br/><br/>
                                            <strong>The repetition by oneself</strong>
                                            is the technique of reading yourself. It's here
                                            method of repeating oneself. In the literary field, for example, we
                                            can make up for it by doing a lot of reading and reviewing the basics of
                                            grammar, conjugation or vocabulary.
                                        </Grid>
                                    )}
                                </div>
                                
                                
                            </div>
                            
                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                           <strong>LE JOB ETUDIANT- LE STAGE ETUDIANT- ENTREPRENARIAT</strong><br/><br/>
                                            Le job étudiant a souvent mauvaise presse : moins de temps pour les études,
                                            sous payé, etc. <br/><br/>
                                            Mais quel est l’aspect positif du job étudiant ? Bon nombre d’étudiants doivent
                                            par la force des choses, cumuler leurs études avec un job. Pas toujours adéquat,
                                            le job étudiant présente de grands avantages. <br/><br/>
                                            Le <strong>job étudiant</strong> permet d’améliorer la compétence de l’étudiant qui le pratique.
                                            Il est également une ligne supplémentaire sur ton CV ; il permet aussi de se
                                            confronter très tôt au monde du travail, nouer des relations fructueuses. Le job
                                            étudiant permet même à l’étudiant de mieux gérer son temps, d’avoir une
                                            meilleure productivité, avoir un œil global et de connaissance sur la gestion de
                                            son projet. L’étudiant développe un mental d’acier, devient autonome
                                            financièrement. Ceci emmène l’étudiant presque à la fin de sa formation à la
                                            recherche d’un stage. <br/><br/>
                                            Le <strong>stage en entreprise,</strong> est un atout nous permettant de prendre une longueur
                                            d’avance, il nous aide à découvrir dans un sens plus large notre futur métier, à
                                            obtenir une confirmation, développer des compétences, se constituer un réseau
                                            professionnel, gagner en confiance de soi. Le stage n’est pas toujours rémunéré
                                            Mais il permet entre autre d’acquérir la connaissance sur le terrain. Il est
                                            recommandé de se faire suivre par une structure en orientation scolaire et
                                            universitaire si on semble perdu. En quoi consiste l’entreprenariat ? <br/><br/>
                                            A la fin de leurs études certains étudiants semblent apeurés à la recherche d’un
                                            emploi correspondant à leur diplôme. Que faire à cette période ? Restez chez
                                            soi ? Il est convenable de faire un sondage dans le but de connaître si notre
                                            domaine est encore d’actualité. <br/><br/>
                                            Cherchez si possible une source de revenu en prenant des initiatives. Ainsi, une
                                            des solutions est l’entreprenariat. <br/><br/>
                                            <strong>L’entreprenariat</strong> est un dispositif, accessible à tous les jeunes quel que soit
                                            leur niveau de qualification. Commencez : vous serez accompagné et guidé.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong>STUDENT JOB- STUDENT INTERNSHIP- ENTREPRENEURSHIP</strong><br/><br/>
                                            The student job often gets bad press: less time for studies,
                                            underpaid, etc. <br/><br/>
                                            But what is the positive aspect of the student job? Many students must
                                            by necessity, combine their studies with a job. Not always adequate,
                                            the student job has great advantages.<br/><br/>
                                            The <strong>student job </strong> improves the skills of the student who practices it.
                                            There is also an additional line on your CV; it also allows you to
                                            get to know the world of work very early on, forge fruitful relationships. The job
                                            student even allows the student to better manage his time, to have a
                                            better productivity, have a global eye and knowledge on the management of
                                            his project. The student develops a steel mind, becomes autonomous
                                            financially. This takes the student almost at the end of his training to the
                                            looking for an internship.<br/><br/>
                                            The <strong>intership,</strong> is an asset allowing us to take a length
                                            in advance, it helps us to discover in a broader sense our future profession, to
                                            obtain confirmation, develop skills, build a network
                                            professional, gain self-confidence. The internship is not always paid
                                            But it allows, among other things, to acquire knowledge in the field. It is
                                            recommended to be followed by a school guidance structure and
                                            university if we seem lost. What is entrepreneurship? <br/><br/>
                                            At the end of their studies some students seem afraid to look for a
                                            job corresponding to their diploma. What to do during this period? Stay at
                                            self? It is appropriate to conduct a survey in order to find out whether our
                                            area is still relevant today.<br/><br/>
                                            If possible, seek a source of income by taking initiatives. So a
                                            of solutions is entrepreneurship.<br/><br/>
                                            <strong>Entrepreneurship</strong> is a device, accessible to all young people regardless of
                                            their level of qualification. Start: you will be accompanied and guided.
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                    <div className={classes.videoPres}>
                                       
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/GXcG5wlyJgA"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                  <div className={classes.videoPres}>
                                     
                                      <iframe className="videoPresentation"
                                              src="https://www.youtube.com/embed/FxAZXKgaUAg"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen></iframe>
                                  </div>
                                    
                              </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong>LA SANTE DANS LA VIE DE L’APPRENANT</strong><br/><br/>
                                            Il est bon à l’étudiant ou l’élève de réussir dans ses études. Aussi la santé
                                            mentale et la capacité y contribuent. Il faut avant tout avoir la santé. Tomber
                                            malade toutes fois serait un handicap à la réussite de nos enfants. Cela ne leur
                                            permettra pas de progresser dans la poursuite de leurs études. Quelles sont alors
                                            les mesures à prendre ? Comment prévenir ses différentes crises de santé lors
                                            des études ? Surtout dans les milieux où les médecins sont rares.
                                            Le choix des études de santé n’est pas un parcours facile. Néanmoins, le profil
                                            de l’apprenant est un facteur inhérent pour la réussite dans le domaine de la
                                            médecine. <br/><br/>
                                            Malgré l’exigence de la médecine, en raison de sa durée d’étude allant de sept
                                            (7) à douze ans (12ans) au total, on s’en sort avec une bonne organisation et une
                                            bonne abnégation. <br/><br/>
                                            Il est vivement conseillé d’avoir dans chaque famille un médecin traitant. Il
                                            coordonne l’ensemble des soins reçus par son patient. Le médecin traitant sera
                                            également chargé d’orienter si nécessaire vers un médecin
                                            spécialiste « correspondant » ou un service hospitalier. Il a pour rôle également
                                            de centraliser les informations : résultats d’examens, traitements. Il dispose ainsi
                                            d’une vision globale de l’état de santé de son patient. <br/><br/>
                                            Ce choix permettra donc à la famille de connaître l’état de santé de chacun de
                                            ses membres bien avant que le pire soit annoncé par manque de prévention.
                                            La santé est aussi utile au niveau de la bouche. Un dentiste par exemple est un
                                            garant de la santé de la bouche. Un étudiant atteint d’une infection dentaire ou
                                            abcès dans la bouche ou ayant une fracture dentaire, ou encore une tumeur
                                            buccale…ne pourra plus suivre normalement ses cours, à cause de la douleur. Et
                                            c’est à ce moment il courra vers un dentiste. Sa santé devient en ce moment un
                                            facteur gênant pour ses études. <br/><br/>
                                            En ce qui concerne les règles ou menstruations douloureuses ou difficiles
                                            appelées dysménorrhées, dont souffrent bon nombre de filles, la solution n’est
                                            pas évidente, puisqu’elle est normale. Par contre, cette douleur peut être apaisée

                                            www.cdabcompass.com
                                            par l’utilisation des antidouleurs, Toutes fois il est conseillé de voir son médecin
                                            traitant au moins une semaine avant l’arrivée de la menstruation.
                                            La prévention est mieux que la guérison en second plan.
                                            Les méthodes de préventions les plus recommandées sont entre autres :
                                            l’hygiène, bien s’hydrater, faire du sport ; au moins trente minutes de marche
                                            rapide chaque jour et éviter également les boissons sucrées. Le curcuma est
                                            aussi recommandé pour ses vertus immenses. <br/><br/>
                                            Des alternatives nous sont également offertes en vue de la prévention. C’est le
                                            cas par exemple de l’utilisation régulière des cuirs dents, deux fois par jours en
                                            raison de deux (2h) de temps à chaque brossage ; ou l’utilisation des brosses à
                                            dents.
                                            Il est possible d’envoyer l’apprenant à l’étranger en ses périodes de crise du
                                            COVID19. Si toutes les mesures de sécurités sont respectées, les parents n’ont
                                            aucune raison de douter. Permettez donc à votre enfant de poursuivre ses études
                                            et ne pas perdre une année.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            <strong> HEALTH IN THE LEARNER'S LIFE </strong> <br/> <br/>
                                            It is good for the student or pupil to be successful in their studies. Also health
                                            mental and ability contribute. It is above all necessary to have health. Fall
                                            sick anytime would be a handicap to the success of our children. This does not
                                            will not allow progress in the pursuit of their studies. What are then
                                            the measures to be taken? How to prevent your various health crises during
                                            studies ? Especially in settings where doctors are scarce.
                                            Choosing health studies is not an easy journey. Nevertheless, the profile
                                            of the learner is an inherent factor for success in the field of
                                            medicine. <br/> <br/>
                                            Despite the requirement of medicine, due to its study duration ranging from seven
                                            (7) at twelve years old (12 years old) in total, we are doing with good organization and
                                            good self-sacrifice. <br/> <br/>
                                            It is strongly recommended to have an attending physician in each family. He
                                            coordinates all the care received by his patient. The attending physician will be
                                            also responsible for referring if necessary to a doctor
                                            "corresponding" specialist or hospital service. Its role is also
                                            to centralize information: examination results, treatments. He thus has
                                            of a global vision of the state of health of his patient. <br/> <br/>
                                            This choice will therefore allow the family to know the state of health of each of
                                            its members long before the worst is announced for lack of prevention.
                                            Health is also useful at the level of the mouth. A dentist, for example, is a
                                            guarantor of the health of the mouth. A student with a dental infection or
                                            abscess in the mouth or having a tooth fracture, or a tumor
                                            buccal… will no longer be able to follow its classes normally, because of the pain. And
                                            that's when he'll run to a dentist. His health is now becoming a
                                            inconvenient factor for his studies. <br/> <br/>
                                            For painful or difficult periods or periods
                                            called dysmenorrhea, which affects many girls, the solution is not
                                            not obvious, since it is normal. On the other hand, this pain can be soothed

                                            www.cdabcompass.com
                                            by the use of painkillers, Anytime it is advisable to see your doctor
                                            treating at least one week before your period.
                                            Prevention is better than a secondary cure.
                                            The most recommended prevention methods are among others:
                                            hygiene, hydrate well, play sports; at least thirty minutes of walking
                                            fast every day and also avoid sugary drinks. Turmeric is
                                            also recommended for its immense virtues. <br/> <br/>
                                            Alternatives are also offered to us for prevention. It's the
                                            case for example of the regular use of tooth leathers, twice a day in
                                            two (2h) of time for each brushing; or the use of brushes
                                            teeth.
                                            It is possible to send the learner abroad in times of crisis in
                                            COVID19. If all safety measures are respected, parents do not have
                                            no reason to doubt. So allow your child to continue his studies
                                            and not waste a year.
                                        </Grid>
                                    )}
                                </div>
                                
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                             Etudiants, élèves, parents à la recherche de la bonne langue étrangère à
                                            apprendre qui servira ? Trois critères de choix nous sont proposés.
                                            <br/><br/>
                                            Toutefois un quatrième survint compte-tenu de l’ordre social ou culturel ou pour
                                            plus de connaissances.
                                            <br/><br/>
                                            Savoir la raison d’apprendre une nouvelle langue est primordiale. Il est donc
                                            nécessaire d’établir un objectif. Notre premier critère est donc <strong>l’objectif</strong>. Il est
                                            personnel à chacun de nous. L’objectif peut être d’ordre professionnel ou
                                            personnel.
                                            <br/><br/>
                                            Le deuxième critère est défini à base de nos <strong>pays limitrophes</strong>.
                                            <br/><br/>
                                            L’apprentissage des langues des pays à proximité, nous permet, une circulation
                                            aisée, allant même dans le domaine commercial.
                                            <br/><br/>
                                            Quant au troisième critère, il est en rapport avec l'<strong>actualité</strong>. Quelle est la langue
                                            internationale de nos jours ? La langue des affaires, du commerce, des
                                            différentes organisations ?
                                            <br/><br/>
                                            En ce vingt et un nième siècle, la langue internationale fleurissante est l’anglais.
                                            Sa maîtrise permet d’avoir les bonnes informations partout dans le monde.
                                            <br/><br/>
                                            C’est un honneur d’assimiler plusieurs langues (trois, quatre, voir, cinq,
                                            pourquoi pas six ?).
                                            <br/><br/>
                                            Le quatrième critère nous amène à des <strong>valeurs culturelles et ou d’histoire</strong>.
                                            Ainsi, les langues anciennes comme le grec, l’hébreu et le latin peuvent être
                                            étudiés par exemple.
                                            <br/><br/>
                                            L’apprentissage des langues, nous ouvre les portes. Il crée la confiance et
                                            l’ouverture vers de nouveaux horizons.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            Students, pupils, parents looking for the right foreign language to
                                            learn who will serve? Three selection criteria are offered to us.
                                            <br/> <br/>
                                            However a fourth arose due to the social or cultural order or for
                                            more knowledge.
                                            <br/> <br/>
                                            Knowing the reason for learning a new language is essential. It is therefore
                                            necessary to set a goal. Our first criterion is therefore <strong> the objective </strong>. It is
                                            personal to each of us. The goal can be professional or
                                            staff.
                                            <br/> <br/>
                                            The second criterion is defined on the basis of our <strong> neighboring countries </strong>.
                                            <br/> <br/>
                                            Learning the languages ​​of nearby countries allows us to circulate
                                            easy, even in the commercial field.
                                            <br/> <br/>
                                            As for the third criterion, it relates to <strong> topicality </strong>. What is the language
                                            international nowadays? The language of business, commerce,
                                            different organizations?
                                            <br/> <br/>
                                            In the twenty-first century, the flourishing international language is English.
                                            Its mastery allows you to have the right information anywhere in the world.
                                            <br/> <br/>
                                            It is an honor to assimilate several languages ​​(three, four, see, five,
                                            why not six?).
                                            <br/> <br/>
                                            The fourth criterion brings us to <strong> cultural and / or historical values ​​</strong>.
                                            Thus, ancient languages ​​like Greek, Hebrew, and Latin can be
                                            studied for example.
                                            <br/> <br/>
                                            Learning languages ​​opens doors for us. It creates trust and
                                            opening up to new horizons.
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                    <div className={classes.videoPres}>
                                       
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/4kfMLdqgMZA"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                  <div className={classes.videoPres}>
                                     
                                      <iframe className="videoPresentation"
                                              src="https://www.youtube.com/embed/XqQcTnM_Sfo"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen></iframe>
                                  </div>
                                    
                              </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            L’échec est toujours dur à encaisser mais il peut aussi permettre de réajuster ses projets et de
                                            rebondir. Alors, comment faire de l’échec un tremplin et non un naufrage ? comment
                                            retrouver sa confiance en soi et sa motivation ? <br/>
                                            L’échec est une situation très difficile qui nous emplit de négativité. Mais il faut adopter la
                                            bonne attitude pour lui faire face : <br/>
                                            - Attention à la perte de l’estime de soi, <br/>
                                            - Analyser l’échec pour mieux le digérer, <br/>
                                            - En tirer les bons enseignements, <br/>
                                            - Ne pas rester seul, <br/>
                                            - Construire un nouveau projet, <br/>
                                            - Elargir son horizon, s’ouvrir à de nouveaux projets, <br/>
                                            - Se fixer de petits objectifs de réussite, être agile. <br/>
                                            <br/><br/>
                                            Face à l’échec, il ne faut pas baisser les bras mais au contraire se ressaisir, apprendre de cet
                                            échec et chercher à tenter de nouvelles approches. Certains des esprits les plus brillants n&#39;ont
                                            pas seulement toléré l'échec, ils l'ont encouragé : <br/><br/>
                                            <ul>
                                                <li>
                                                    « L'échec est une option ici. Si les choses n'échouent pas, c'est que vous n'êtes pas assez
                                                    innovant. » - <strong>Elon Musk</strong>
                                                </li>
                                                <li>
                                                    « Il est bon de célébrer le succès, mais il est plus important de tenir compte des leçons
                                                    de l’échec. » - <strong>Bill Gates</strong>
                                                </li>
                                                <li>
                                                    « Vous devez être prêt à agir. Vous devez être prêt à vous planter complètement, sinon,
                                                    vous n'irez pas très loin. » - <strong>Steve Jobs.</strong>
                                                </li>
                                            </ul>
                                            <br/>
                                            Sources :
                                            <link href={""}/>
                                            https://www.reussirmavie.net/Comment-rebondir-apres-un-echec_a953.html
                                            https://www.wrike.com/fr/blog/comment-vaincre-la-peur-de-lechec-et-adopter-un-etat-desprit-axe-
                                            sur-la-croissance/
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            Failure is always hard to take, but it can also allow you to readjust your plans and
                                            bounce. So how do you make failure a springboard and not a shipwreck? How? 'Or' What
                                            regain self-confidence and motivation? <br/>
                                            Failure is a very difficult situation that fills us with negativity. But we must adopt the
                                            good attitude to face him: <br/>
                                            - Watch out for the loss of self-esteem, <br/>
                                            - Analyze the failure to better digest it, <br/>
                                            - Learn from it, <br/>
                                            - Don't be alone, <br/>
                                            - Build a new project, <br/>
                                            - Broaden your horizon, open up to new projects, <br/>
                                            - Set small goals for success, be agile. <br/>
                                            <br/> <br/>
                                            When faced with failure, we must not give up but, on the contrary, pull ourselves together, learn from this
                                            failure and seek to try new approaches. Some of the brightest minds have
                                            not only tolerated failure, they encouraged it: <br/> <br/>
                                            <ul>
                                                <li>
                                                    “Failure is an option here. If things don't fail, you are not enough
                                                    innovative. "- <strong> Elon Musk </strong>
                                                </li>
                                                <li>
                                                    "It's good to celebrate success, but it's more important to heed the lessons
                                                    of failure. "- <strong> Bill Gates </strong>
                                                </li>
                                                <li>
                                                    “You have to be ready to act. You must be prepared to crash completely, otherwise,
                                                    you won't get very far. "- <strong> Steve Jobs. </strong>
                                                </li>
                                            </ul>
                                            <br/>
                                            Sources:
                                            <link href = {""} />
                                            https://www.reussirmavie.net/Comment-rebondir-apres-un-echec_a953.html
                                            https://www.wrike.com/fr/blog/comment-vaincre-la-peur-de-lechec-et-adopter-un-etat-desprit-axe-
                                            over-growth /
                                        </Grid>
                                    )}
                                </div>
                                
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            Être facile n’est pas tâche facile, et cela s’apprend. Un vrai parent, c’est pouvoir éduquer,
                                            accompagner dans sa réussite, cependant on distingue aussi de faux parents : ils ne
                                            connaissent pas la personnalité de l’enfant, ne communiquent pas avec lui et ne restent pas à
                                            l’écoute de l’enfant.
                                            D’après le livre de Claire Leduc, Le parent entraîneur, des Éditions logiques, il y aurait 5
                                            types de parents : parent absent, parent débonnaire, parent entraîneur (objectif à atteindre),
                                            parent autoritaire, parent abusif. <br/><br/>
                                            <ul>
                                                <li>
                                                    <strong>Le parent absent : </strong>C’est le parent qui ne s’intéresse pas au développement de son
                                                    enfant et qui n’investit pas dans l’éducation, ne prend pas le temps de communiquer
                                                    avec l’enfant et n’est préoccupé que par lui-même.
                                                </li>
                                                <br/>
                                                <li>
                                                    <strong>Le parent débonnaire : </strong>Le parent est préoccupé du développement de son enfant. Il
                                                    donne les soins à son enfant sans toutefois le contraindre. Ce type de parent laisse
                                                    l’enfant prendre ses propres décisions et faire ses expériences.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent entraîneur : </strong>Le parent est préoccupé par l’éducation de ses enfants au
                                                    même titre que ses propres activités (travail, relation de couple, relations sociales). Il y
                                                    a la communication, on s’écoute.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent autoritaire : </strong>les enfants doivent obéir aux règles, pas de place à la
                                                    personnalité de l’enfant, goûts, différences.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent abusif : </strong>type de parent qui ignore totalement les besoins de l’enfant, les
                                                    problèmes des parents sont prédominants, la communication est déficiente, la violence
                                                    et l’abus sont présents et dont les enfants sont les premières victimes.
                                                </li>
                                            </ul>
                                            <br/>
                                            Tout parent doit faire de son possible pour être un bon parent, rester à l’écoute de ce dernier et
                                            l’accompagner dans sa vision pour la réalisation de ses rêves.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            Being easy isn't easy, and you can learn it. A real parent is being able to educate,
                                            support in its success, however, there are also false parents: they do not
                                            do not know the child's personality, do not communicate with him and do not stay
                                            listening to the child.
                                            According to Claire Leduc's book, The Coaching Parent, from Logical Editions, there would be 5
                                            types of parents: absent parent, easygoing parent, coach parent (objective to be achieved),
                                            authoritarian parent, abusive parent. <br/> <br/>
                                            <ul>
                                                <li>
                                                    <strong> The absent parent: </strong> This is the parent who is not interested in the development of his
                                                    child and who does not invest in education, does not take the time to communicate
                                                    with the child and is only concerned about himself.
                                                </li>
                                                <br/>
                                                <li>
                                                    <strong> The good-natured parent: </strong> The parent is concerned about the development of his child. He
                                                    cares for his child without forcing him. This type of parent leaves
                                                    the child makes his own decisions and experiences.
                                                </li> <br/>
                                                <li>
                                                    <strong> The Coaching Parent: </strong> The parent is concerned about the education of their children in
                                                    as well as his own activities (work, couple relationship, social relations). There is
                                                    in communication, we listen to each other.
                                                </li> <br/>
                                                <li>
                                                    <strong> The authoritative parent: </strong> children should obey the rules, no room for
                                                    child's personality, tastes, differences.
                                                </li> <br/>
                                                <li>
                                                    <strong> The abusive parent: </strong> type of parent who totally ignores the needs of the child, the
                                                    parents' problems predominate, communication is poor, violence
                                                    and abuse are present and of which children are the primary victims.
                                                </li>
                                            </ul>
                                            <br/>
                                            Every parent should do their best to be a good parent, to listen to the latter and
                                            support him in his vision for the realization of his dreams.
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                    <div className={classes.videoPres}>
                                       
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/5e61LL-dsG4"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                  <div className={classes.videoPres}>
                                     
                                      <iframe className="videoPresentation"
                                              src="https://www.youtube.com/embed/gHN6RKhCXTk"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen></iframe>
                                  </div>
                                    
                              </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            COMMENT RECONNAITRE ET SURMONTER LES DIFFICULTES
                                            SCOLAIRES <br/><br/>
                                            Le chemin pour réussir son cursus scolaire est semé d’embuches. Ces difficultés peuvent
                                            freiner les objectifs fixés. Pour se faire il faut reconnaître et surmonter ses problèmes. Il existe
                                            plusieurs moyens : <br/><br/>
                                            <ul>
                                                <li>
                                                    Identifier clairement le but souhaité : au lieu de se focaliser sur ce qui ne va pas, il
                                                    faut plutôt définir précisément et clairement ce qu’on veut, visualiser clairement le
                                                    résultat souhaité et le ressentir comme déjà acquis.
                                                </li><br/>
                                                <li>
                                                    Repérer et changer la pensée qui empêche la progression : il ne faut surtout pas
                                                    perdre confiance en soi et laisser place au désespoir, la dépression, le découragement,
                                                    bien au contraire se rebooster, faire le plein de courage, se dire des choses positives.
                                                </li><br/>
                                                <li>
                                                    Trouver une nouvelle solution pour passer à l’action : Continuer de faire la même
                                                    chose conduira toujours au même résultat, il faut donc chercher à chercher ce qui ne
                                                    va pas et essayer de nouvelles techniques d’approche.
                                                </li>
                                            </ul>
                                            <br/>
                                            Face aux difficultés, il ne faut pas se laisser aller par le découragement. En revanche il faut
                                            développer et entretenir sa confiance en soi, ses talents, ses capacités, essayer de nouvelles
                                            méthodes, savoir entretenir un état d’esprit positif et dynamique pour mieux rebondir.
                                            Il faut traiter les difficultés comme un défi à surmonter.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            HOW TO RECOGNIZE AND OVERCOME DIFFICULTIES
                                            SCHOOLS <br/> <br/>
                                            The road to success in school is strewn with pitfalls. These difficulties can
                                            slow down the objectives set. To do so, you have to recognize and overcome your problems. It exists
                                            several ways: <br/> <br/>
                                            <ul>
                                                <li>
                                                    Clearly identify the desired goal: instead of focusing on what is wrong, it
                                                    rather, you have to define precisely and clearly what you want, clearly visualize the
                                                    desired result and feel it as already acquired.
                                                </li> <br/>
                                                <li>
                                                    Identify and change the thought that prevents progress: it is important not to
                                                    lose self-confidence and give way to despair, depression, discouragement,
                                                    on the contrary, to re-boost, to fill up with courage, to say positive things to each other.
                                                </li> <br/>
                                                <li>
                                                    Find a new solution to take action: Continue to do the same
                                                    thing will always lead to the same result, so we must seek to find what does not
                                                    not go and try new approach techniques.
                                                </li>
                                            </ul>
                                            <br/>
                                            When faced with difficulties, we must not let ourselves go by discouragement. On the other hand it is necessary
                                            develop and maintain self-confidence, talents, abilities, try new
                                            methods, knowing how to maintain a positive and dynamic state of mind to better bounce back.
                                            Difficulties must be treated as a challenge to be overcome.
                                        </Grid>
                                    )}
                                </div>
                                
                                
                            </div>

                            <div style =  {{background : '#a14627' }} className="textAboutUs" className="row" >
                                {/*<Grid item xs={1}></Grid>*/}
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {localStorage.getItem("locale_lg")==="fr-fr" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            Pour briller dans l’univers professionnel, il faut se fixer des objectifs.
                                            Néanmoins, plusieurs raisons peuvent nous empêcher d’atteindre ses objectifs : la
                                            procrastination, les contraintes de santé, une mauvaise appréciation du projet en lui-même, et
                                            bien d’autres… <br/><br/>
                                            Mener à bien ses objectifs professionnels nécessite l’élaboration de méthodes. Seulement
                                            toutes les méthodes ne se valent pas, il faut donc trouver celle qui nous convient, la bonne
                                            méthode. <br/><br/>
                                            La méthode SMART : <br/><br/>
                                            <strong>S pour spécifique : </strong>la première des choses à faire est de définir clairement l’objectif à
                                            atteindre. Il doit être clair, précis et bien détaillé
                                            <br/><br/>
                                            <strong>M comme mesurable : </strong>on doit pouvoir évaluer la progression de l’objectif
                                            <br/><br/>
                                            <strong>A comme accessible : </strong>l’objectif doit être accessible, pour cela il faut commencer par atteindre
                                            un objectif plus simple.
                                            <br/><br/>
                                            <strong>R comme réaliste : </strong>Chaque objectif ou sous-objectif doit être réaliste, atteignable, sérieux.
                                            <br/><br/>
                                            <strong>T comme temporel : </strong>l’objectif doit être mené selon un calendrier temporel bien précis.
                                        </Grid>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" && (
                                        <Grid alignItems={"center"}   className={classes.txtUs}>
                                            To shine in the professional world, you have to set goals.
                                            However, several reasons may prevent us from achieving its goals:
                                            procrastination, health constraints, poor appreciation of the project itself, and
                                            many others ... <br/> <br/>
                                            Achieving professional goals requires the development of methods. Only
                                            not all methods are equal, so we have to find the one that suits us, the right one
                                            method. <br/> <br/>
                                            The SMART method: <br/> <br/>
                                            <strong> S for specific: </strong> the first thing to do is to clearly define the objective to
                                            achieve. It must be clear, precise and well detailed
                                            <br/> <br/>
                                            <strong> M as measurable: </strong> we must be able to assess the progress of the objective
                                            <br/> <br/>
                                            <strong> As accessible: </strong> the objective must be accessible, for this we must start by achieving
                                            a simpler goal.
                                            <br/> <br/>
                                            <strong> R as realistic: </strong> Each objective or sub-objective must be realistic, achievable, serious.
                                            <br/> <br/>
                                            <strong> T for time: </strong> the objective must be achieved according to a specific time schedule.
                                        </Grid>
                                    )}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                  
                                    <div className={classes.videoPres}>
                                       
                                        <iframe className="videoPresentation"
                                                src="https://www.youtube.com/embed/Wfnk6oGXyj0"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                      
                                </div>
                                
                            </div>

                    </div>
                        {/* 
                        <div className="coach-cdab-container">

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/b36rnsBkeaU"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>

                                            <strong>ETUDES : SYSTEME NATIONAL OU INTERNATIONAL</strong><br/><br/>
                                            Nous avons à notre époque, le choix d’étude entre le système national et
                                            international. <br/><br/>
                                            Par le passé, le système national était de niveau équivalent à l’international, et
                                            de nature publique. De nos jours, le système national est scindé en deux parties :
                                            le public et le privé, suite à la croissance accrue du nombre d’apprenants. <br/><br/>
                                            Le système international d’aujourd’hui, joue un rôle auprès des parents ou
                                            tuteurs ayant un projet pour leurs enfants hors cadre local. <br/>
                                            Il s’agit au fait d’un bon investissement pour les parents à moyen et court terme
                                            et un bon tremplin pour la réussite de leur projet d’études pour les enfants.
                                            L’erreur à ne pas commettre est de compromettre l’avenir de son enfant, en
                                            voulant l’intégrer dans un système sans analyse au préalable mais juste parce
                                            que la famille voisine ou un proche en fait autant. <br/><br/>
                                            Il est préférable de choisir un système d’étude adéquat au profil de l’enfant. Les
                                            parents doivent penser en terme de projection d’études. <br/><br/>
                                            Il est libre au parent d’apprécier le fait d’inscrire son enfant dans le système
                                            correspondant au projet d’études de son enfant. Les différentes alternatives
                                            interviennent du primaire ou lycée en passant par le collège par des vases
                                            communicants d’un système à un autre.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className={classes.textPlace}>

                                            <strong>STUDIES: NATIONAL OR INTERNATIONAL SYSTEM</strong><br/><br/>
                                            In our time, we have the choice of studying between the national system and
                                            international.<br/><br/>
                                            In the past, the national system was equivalent to the international level, and
                                            of a public nature. Nowadays, the national system is split into two parts:
                                            the public and the private, following the increased growth in the number of learners. <br/> <br/>
                                            Today's international system plays a role with parents or
                                            tutors with a project for their children outside the local framework. <br/>
                                            This is a good investment for parents in the medium and short term
                                            and a good springboard for the success of their children's education project.
                                            The mistake not to make is to jeopardize the future of your child, by
                                            wanting to integrate it into a system without prior analysis but just because
                                            that the neighboring family or a loved one does the same. <br/> <br/>
                                            It is best to choose a study system that is appropriate for the profile of the child. The
                                            parents need to think in terms of education projection. <br/> <br/>
                                            The parent is free to appreciate the fact of registering their child in the system
                                            corresponding to her child's educational plan. The different alternatives
                                            intervene from elementary or high school through middle school through vases
                                            communicating from one system to another.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} src="https://www.youtube.com/embed/ZxT95vXlEHw"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            <strong>SOUTIEN SCOLAIRE OU REPETITION</strong><br/><br/>
                                            L’erreur courante est de choisir un cours de répétition sur la seule base de la
                                            baisse de note dans une discipline scolaire ou universitaire. Nous pensons faire
                                            ainsi un choix judicieux pour nos enfants. Ainsi la question est de savoir l’intérêt
                                            du cours de répétition et l’aide à apporter à nos enfants pour rattraper le retard
                                            cumulé ? <br/>

                                            <strong>La répétition sur le long terme,</strong> c’est-à dire, payer un professeur pour la survie
                                            scolaire de votre enfant toute l’année, n’aide pas du tout ce dernier. L’enfant ou
                                            l’élève ou l’étudiant est censé faire des efforts. Mais force est de remarquer que
                                            la répétition programmée sur toute l’année abrutit, rend paresseux votre enfant.
                                            De ce fait qu’il ne fournit plus aucun effort pour s’en sortir de son retard
                                            scolaire, puisqu’il se dit en lui-même : j’ai un répétiteur à la maison, il
                                            m’expliquera le cours même si je ne suis, ni ne participe au cours. Il devient
                                            fainéant, parce qu’il ne fait plus l’effort de résoudre les équations de lui-même.
                                            Il aura tendance à être dépendant et à attendre que son répétiteur fasse tous les
                                            efforts à sa place. <br/><br/>
                                            De plus il est évident que l’étudiant devient automate. Car il aura l’art de
                                            déverser exactement ce qu’on lui dit mot à mot sans dépenser aucune force
                                            intellect pour comprendre. Cette astuce, ne rend pas intelligent, ni ne permet de
                                            réussir. Votre enfant n’aura aucun esprit de créativité.
                                            Ce qui au contraire est convenable de faire, et qui a des avantages c’est la
                                            répétition à court terme : un ou deux mois de façon cyclique.
                                            La répétition à court terme permet de booster le niveau de l’enfant, en le
                                            permettant de se défendre pour réussir avec toutes les armes en mains. Il s’agit
                                            là d’un apprentissage qui vient compléter le potentiel qu’à votre enfant. Ceci le
                                            rend sûr de lui-même, il devient indépendant et créatif. C’est comme apprendre
                                            à l’enfant toutes les techniques de pêche et le laisser seul au bord de la mer pour
                                            qu’il puisse se nourrir de lui-même. La répétition dans ce cas est instructif et
                                            productif.<br/><br/>
                                            <strong>La répétition par soi-même</strong> est la technique de se lire soi-même. C’est la
                                            méthode de se répéter soi-même. Dans le domaine littéraire par exemple, on
                                            peut se rattraper en faisant beaucoup de lecture et en revoyant les bases de
                                            grammaire, de conjugaison ou de vocabulaire.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className={classes.textPlace}>
                                            <strong>SCHOOL SUPPORT OR REHEARSAL</strong><br/><br/>
                                            The common mistake is to choose a repetition course on the sole basis of the
                                            drop in grade in a school or university discipline. We think we do
                                            thus a wise choice for our children. So the question is to know the interest
                                            the rehearsal class and helping our children to catch up
                                            cumulative?<br/>

                                            <strong>Long-term repetition,</strong> that is, paying a teacher for survival
                                            your child’s school all year round, doesn’t help at all. The child or
                                            the pupil or student is expected to make an effort. But it is clear that
                                            the planned repetition throughout the year stupefies and lazy your child.
                                            As a result, he no longer makes any effort to cope with his delay
                                            school, since he says to himself: I have a tutor at home, he
                                            Explain the course to me even if I am not taking or participating in the course. He becomes
                                            lazy, because he no longer makes the effort to solve the equations on his own.
                                            He will tend to be dependent and wait for his tutor to do all the
                                            efforts in its place.<br/><br/>
                                            Moreover, it is obvious that the student becomes an automaton. Because he will have the art of
                                            pour out exactly what is said to him word for word without expending any force
                                            intellect to understand. This trick does not make you intelligent, nor does it allow you to
                                            succeed. Your child will have no spirit of creativity.
                                            What, on the contrary, is appropriate to do, and which has advantages, is
                                            short-term repetition: one or two months cyclically.
                                            Short-term repetition helps boost the child's level, by
                                            allowing you to defend yourself to succeed with all the weapons in your hands. It's about
                                            this is learning that complements your child's potential. This the
                                            makes sure of himself, he becomes independent and creative. It's like learning
                                            all fishing techniques for the child and leave him alone by the sea to
                                            that he can feed himself. The repetition in this case is informative and
                                            productive.<br/><br/>
                                            <strong>The repetition by oneself</strong>
                                            is the technique of reading yourself. It's here
                                            method of repeating oneself. In the literary field, for example, we
                                            can make up for it by doing a lot of reading and reviewing the basics of
                                            grammar, conjugation or vocabulary.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/GXcG5wlyJgA"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            <strong>LE JOB ETUDIANT- LE STAGE ETUDIANT- ENTREPRENARIAT</strong><br/><br/>
                                            Le job étudiant a souvent mauvaise presse : moins de temps pour les études,
                                            sous payé, etc. <br/><br/>
                                            Mais quel est l’aspect positif du job étudiant ? Bon nombre d’étudiants doivent
                                            par la force des choses, cumuler leurs études avec un job. Pas toujours adéquat,
                                            le job étudiant présente de grands avantages. <br/><br/>
                                            Le <strong>job étudiant</strong> permet d’améliorer la compétence de l’étudiant qui le pratique.
                                            Il est également une ligne supplémentaire sur ton CV ; il permet aussi de se
                                            confronter très tôt au monde du travail, nouer des relations fructueuses. Le job
                                            étudiant permet même à l’étudiant de mieux gérer son temps, d’avoir une
                                            meilleure productivité, avoir un œil global et de connaissance sur la gestion de
                                            son projet. L’étudiant développe un mental d’acier, devient autonome
                                            financièrement. Ceci emmène l’étudiant presque à la fin de sa formation à la
                                            recherche d’un stage. <br/><br/>
                                            Le <strong>stage en entreprise,</strong> est un atout nous permettant de prendre une longueur
                                            d’avance, il nous aide à découvrir dans un sens plus large notre futur métier, à
                                            obtenir une confirmation, développer des compétences, se constituer un réseau
                                            professionnel, gagner en confiance de soi. Le stage n’est pas toujours rémunéré
                                            Mais il permet entre autre d’acquérir la connaissance sur le terrain. Il est
                                            recommandé de se faire suivre par une structure en orientation scolaire et
                                            universitaire si on semble perdu. En quoi consiste l’entreprenariat ? <br/><br/>
                                            A la fin de leurs études certains étudiants semblent apeurés à la recherche d’un
                                            emploi correspondant à leur diplôme. Que faire à cette période ? Restez chez
                                            soi ? Il est convenable de faire un sondage dans le but de connaître si notre
                                            domaine est encore d’actualité. <br/><br/>
                                            Cherchez si possible une source de revenu en prenant des initiatives. Ainsi, une
                                            des solutions est l’entreprenariat. <br/><br/>
                                            <strong>L’entreprenariat</strong> est un dispositif, accessible à tous les jeunes quel que soit
                                            leur niveau de qualification. Commencez : vous serez accompagné et guidé.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className={classes.textPlace}>
                                            <strong>STUDENT JOB- STUDENT INTERNSHIP- ENTREPRENEURSHIP</strong><br/><br/>
                                            The student job often gets bad press: less time for studies,
                                            underpaid, etc. <br/><br/>
                                            But what is the positive aspect of the student job? Many students must
                                            by necessity, combine their studies with a job. Not always adequate,
                                            the student job has great advantages.<br/><br/>
                                            The <strong>student job </strong> improves the skills of the student who practices it.
                                            There is also an additional line on your CV; it also allows you to
                                            get to know the world of work very early on, forge fruitful relationships. The job
                                            student even allows the student to better manage his time, to have a
                                            better productivity, have a global eye and knowledge on the management of
                                            his project. The student develops a steel mind, becomes autonomous
                                            financially. This takes the student almost at the end of his training to the
                                            looking for an internship.<br/><br/>
                                            The <strong>intership,</strong> is an asset allowing us to take a length
                                            in advance, it helps us to discover in a broader sense our future profession, to
                                            obtain confirmation, develop skills, build a network
                                            professional, gain self-confidence. The internship is not always paid
                                            But it allows, among other things, to acquire knowledge in the field. It is
                                            recommended to be followed by a school guidance structure and
                                            university if we seem lost. What is entrepreneurship? <br/><br/>
                                            At the end of their studies some students seem afraid to look for a
                                            job corresponding to their diploma. What to do during this period? Stay at
                                            self? It is appropriate to conduct a survey in order to find out whether our
                                            area is still relevant today.<br/><br/>
                                            If possible, seek a source of income by taking initiatives. So a
                                            of solutions is entrepreneurship.<br/><br/>
                                            <strong>Entrepreneurship</strong> is a device, accessible to all young people regardless of
                                            their level of qualification. Start: you will be accompanied and guided.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/FxAZXKgaUAg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>

                                <div className={classes.textArt}>
                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            <strong>LA SANTE DANS LA VIE DE L’APPRENANT</strong><br/><br/>
                                            Il est bon à l’étudiant ou l’élève de réussir dans ses études. Aussi la santé
                                            mentale et la capacité y contribuent. Il faut avant tout avoir la santé. Tomber
                                            malade toutes fois serait un handicap à la réussite de nos enfants. Cela ne leur
                                            permettra pas de progresser dans la poursuite de leurs études. Quelles sont alors
                                            les mesures à prendre ? Comment prévenir ses différentes crises de santé lors
                                            des études ? Surtout dans les milieux où les médecins sont rares.
                                            Le choix des études de santé n’est pas un parcours facile. Néanmoins, le profil
                                            de l’apprenant est un facteur inhérent pour la réussite dans le domaine de la
                                            médecine. <br/><br/>
                                            Malgré l’exigence de la médecine, en raison de sa durée d’étude allant de sept
                                            (7) à douze ans (12ans) au total, on s’en sort avec une bonne organisation et une
                                            bonne abnégation. <br/><br/>
                                            Il est vivement conseillé d’avoir dans chaque famille un médecin traitant. Il
                                            coordonne l’ensemble des soins reçus par son patient. Le médecin traitant sera
                                            également chargé d’orienter si nécessaire vers un médecin
                                            spécialiste « correspondant » ou un service hospitalier. Il a pour rôle également
                                            de centraliser les informations : résultats d’examens, traitements. Il dispose ainsi
                                            d’une vision globale de l’état de santé de son patient. <br/><br/>
                                            Ce choix permettra donc à la famille de connaître l’état de santé de chacun de
                                            ses membres bien avant que le pire soit annoncé par manque de prévention.
                                            La santé est aussi utile au niveau de la bouche. Un dentiste par exemple est un
                                            garant de la santé de la bouche. Un étudiant atteint d’une infection dentaire ou
                                            abcès dans la bouche ou ayant une fracture dentaire, ou encore une tumeur
                                            buccale…ne pourra plus suivre normalement ses cours, à cause de la douleur. Et
                                            c’est à ce moment il courra vers un dentiste. Sa santé devient en ce moment un
                                            facteur gênant pour ses études. <br/><br/>
                                            En ce qui concerne les règles ou menstruations douloureuses ou difficiles
                                            appelées dysménorrhées, dont souffrent bon nombre de filles, la solution n’est
                                            pas évidente, puisqu’elle est normale. Par contre, cette douleur peut être apaisée

                                            www.cdabcompass.com
                                            par l’utilisation des antidouleurs, Toutes fois il est conseillé de voir son médecin
                                            traitant au moins une semaine avant l’arrivée de la menstruation.
                                            La prévention est mieux que la guérison en second plan.
                                            Les méthodes de préventions les plus recommandées sont entre autres :
                                            l’hygiène, bien s’hydrater, faire du sport ; au moins trente minutes de marche
                                            rapide chaque jour et éviter également les boissons sucrées. Le curcuma est
                                            aussi recommandé pour ses vertus immenses. <br/><br/>
                                            Des alternatives nous sont également offertes en vue de la prévention. C’est le
                                            cas par exemple de l’utilisation régulière des cuirs dents, deux fois par jours en
                                            raison de deux (2h) de temps à chaque brossage ; ou l’utilisation des brosses à
                                            dents.
                                            Il est possible d’envoyer l’apprenant à l’étranger en ses périodes de crise du
                                            COVID19. Si toutes les mesures de sécurités sont respectées, les parents n’ont
                                            aucune raison de douter. Permettez donc à votre enfant de poursuivre ses études
                                            et ne pas perdre une année.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className = {classes.textPlace}>
                                            <strong> HEALTH IN THE LEARNER'S LIFE </strong> <br/> <br/>
                                            It is good for the student or pupil to be successful in their studies. Also health
                                            mental and ability contribute. It is above all necessary to have health. Fall
                                            sick anytime would be a handicap to the success of our children. This does not
                                            will not allow progress in the pursuit of their studies. What are then
                                            the measures to be taken? How to prevent your various health crises during
                                            studies ? Especially in settings where doctors are scarce.
                                            Choosing health studies is not an easy journey. Nevertheless, the profile
                                            of the learner is an inherent factor for success in the field of
                                            medicine. <br/> <br/>
                                            Despite the requirement of medicine, due to its study duration ranging from seven
                                            (7) at twelve years old (12 years old) in total, we are doing with good organization and
                                            good self-sacrifice. <br/> <br/>
                                            It is strongly recommended to have an attending physician in each family. He
                                            coordinates all the care received by his patient. The attending physician will be
                                            also responsible for referring if necessary to a doctor
                                            "corresponding" specialist or hospital service. Its role is also
                                            to centralize information: examination results, treatments. He thus has
                                            of a global vision of the state of health of his patient. <br/> <br/>
                                            This choice will therefore allow the family to know the state of health of each of
                                            its members long before the worst is announced for lack of prevention.
                                            Health is also useful at the level of the mouth. A dentist, for example, is a
                                            guarantor of the health of the mouth. A student with a dental infection or
                                            abscess in the mouth or having a tooth fracture, or a tumor
                                            buccal… will no longer be able to follow its classes normally, because of the pain. And
                                            that's when he'll run to a dentist. His health is now becoming a
                                            inconvenient factor for his studies. <br/> <br/>
                                            For painful or difficult periods or periods
                                            called dysmenorrhea, which affects many girls, the solution is not
                                            not obvious, since it is normal. On the other hand, this pain can be soothed

                                            www.cdabcompass.com
                                            by the use of painkillers, Anytime it is advisable to see your doctor
                                            treating at least one week before your period.
                                            Prevention is better than a secondary cure.
                                            The most recommended prevention methods are among others:
                                            hygiene, hydrate well, play sports; at least thirty minutes of walking
                                            fast every day and also avoid sugary drinks. Turmeric is
                                            also recommended for its immense virtues. <br/> <br/>
                                            Alternatives are also offered to us for prevention. It's the
                                            case for example of the regular use of tooth leathers, twice a day in
                                            two (2h) of time for each brushing; or the use of brushes
                                            teeth.
                                            It is possible to send the learner abroad in times of crisis in
                                            COVID19. If all safety measures are respected, parents do not have
                                            no reason to doubt. So allow your child to continue his studies
                                            and not waste a year.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} src="https://www.youtube.com/embed/4kfMLdqgMZA"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>

                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            Etudiants, élèves, parents à la recherche de la bonne langue étrangère à
                                            apprendre qui servira ? Trois critères de choix nous sont proposés.
                                            <br/><br/>
                                            Toutefois un quatrième survint compte-tenu de l’ordre social ou culturel ou pour
                                            plus de connaissances.
                                            <br/><br/>
                                            Savoir la raison d’apprendre une nouvelle langue est primordiale. Il est donc
                                            nécessaire d’établir un objectif. Notre premier critère est donc <strong>l’objectif</strong>. Il est
                                            personnel à chacun de nous. L’objectif peut être d’ordre professionnel ou
                                            personnel.
                                            <br/><br/>
                                            Le deuxième critère est défini à base de nos <strong>pays limitrophes</strong>.
                                            <br/><br/>
                                            L’apprentissage des langues des pays à proximité, nous permet, une circulation
                                            aisée, allant même dans le domaine commercial.
                                            <br/><br/>
                                            Quant au troisième critère, il est en rapport avec l'<strong>actualité</strong>. Quelle est la langue
                                            internationale de nos jours ? La langue des affaires, du commerce, des
                                            différentes organisations ?
                                            <br/><br/>
                                            En ce vingt et un nième siècle, la langue internationale fleurissante est l’anglais.
                                            Sa maîtrise permet d’avoir les bonnes informations partout dans le monde.
                                            <br/><br/>
                                            C’est un honneur d’assimiler plusieurs langues (trois, quatre, voir, cinq,
                                            pourquoi pas six ?).
                                            <br/><br/>
                                            Le quatrième critère nous amène à des <strong>valeurs culturelles et ou d’histoire</strong>.
                                            Ainsi, les langues anciennes comme le grec, l’hébreu et le latin peuvent être
                                            étudiés par exemple.
                                            <br/><br/>
                                            L’apprentissage des langues, nous ouvre les portes. Il crée la confiance et
                                            l’ouverture vers de nouveaux horizons.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className = {classes.textPlace}>
                                            Students, pupils, parents looking for the right foreign language to
                                            learn who will serve? Three selection criteria are offered to us.
                                            <br/> <br/>
                                            However a fourth arose due to the social or cultural order or for
                                            more knowledge.
                                            <br/> <br/>
                                            Knowing the reason for learning a new language is essential. It is therefore
                                            necessary to set a goal. Our first criterion is therefore <strong> the objective </strong>. It is
                                            personal to each of us. The goal can be professional or
                                            staff.
                                            <br/> <br/>
                                            The second criterion is defined on the basis of our <strong> neighboring countries </strong>.
                                            <br/> <br/>
                                            Learning the languages ​​of nearby countries allows us to circulate
                                            easy, even in the commercial field.
                                            <br/> <br/>
                                            As for the third criterion, it relates to <strong> topicality </strong>. What is the language
                                            international nowadays? The language of business, commerce,
                                            different organizations?
                                            <br/> <br/>
                                            In the twenty-first century, the flourishing international language is English.
                                            Its mastery allows you to have the right information anywhere in the world.
                                            <br/> <br/>
                                            It is an honor to assimilate several languages ​​(three, four, see, five,
                                            why not six?).
                                            <br/> <br/>
                                            The fourth criterion brings us to <strong> cultural and / or historical values ​​</strong>.
                                            Thus, ancient languages ​​like Greek, Hebrew, and Latin can be
                                            studied for example.
                                            <br/> <br/>
                                            Learning languages ​​opens doors for us. It creates trust and
                                            opening up to new horizons.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} src="https://www.youtube.com/embed/XqQcTnM_Sfo"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>

                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            L’échec est toujours dur à encaisser mais il peut aussi permettre de réajuster ses projets et de
                                            rebondir. Alors, comment faire de l’échec un tremplin et non un naufrage ? comment
                                            retrouver sa confiance en soi et sa motivation ? <br/>
                                            L’échec est une situation très difficile qui nous emplit de négativité. Mais il faut adopter la
                                            bonne attitude pour lui faire face : <br/>
                                            - Attention à la perte de l’estime de soi, <br/>
                                            - Analyser l’échec pour mieux le digérer, <br/>
                                            - En tirer les bons enseignements, <br/>
                                            - Ne pas rester seul, <br/>
                                            - Construire un nouveau projet, <br/>
                                            - Elargir son horizon, s’ouvrir à de nouveaux projets, <br/>
                                            - Se fixer de petits objectifs de réussite, être agile. <br/>
                                            <br/><br/>
                                            Face à l’échec, il ne faut pas baisser les bras mais au contraire se ressaisir, apprendre de cet
                                            échec et chercher à tenter de nouvelles approches. Certains des esprits les plus brillants n&#39;ont
                                            pas seulement toléré l'échec, ils l'ont encouragé : <br/><br/>
                                            <ul>
                                                <li>
                                                    « L'échec est une option ici. Si les choses n'échouent pas, c'est que vous n'êtes pas assez
                                                    innovant. » - <strong>Elon Musk</strong>
                                                </li>
                                                <li>
                                                    « Il est bon de célébrer le succès, mais il est plus important de tenir compte des leçons
                                                    de l’échec. » - <strong>Bill Gates</strong>
                                                </li>
                                                <li>
                                                    « Vous devez être prêt à agir. Vous devez être prêt à vous planter complètement, sinon,
                                                    vous n'irez pas très loin. » - <strong>Steve Jobs.</strong>
                                                </li>
                                            </ul>
                                            <br/>
                                            Sources :
                                            <link href={""}/>
                                            https://www.reussirmavie.net/Comment-rebondir-apres-un-echec_a953.html
                                            https://www.wrike.com/fr/blog/comment-vaincre-la-peur-de-lechec-et-adopter-un-etat-desprit-axe-
                                            sur-la-croissance/
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className = {classes.textPlace}>
                                            Failure is always hard to take, but it can also allow you to readjust your plans and
                                            bounce. So how do you make failure a springboard and not a shipwreck? How? 'Or' What
                                            regain self-confidence and motivation? <br/>
                                            Failure is a very difficult situation that fills us with negativity. But we must adopt the
                                            good attitude to face him: <br/>
                                            - Watch out for the loss of self-esteem, <br/>
                                            - Analyze the failure to better digest it, <br/>
                                            - Learn from it, <br/>
                                            - Don't be alone, <br/>
                                            - Build a new project, <br/>
                                            - Broaden your horizon, open up to new projects, <br/>
                                            - Set small goals for success, be agile. <br/>
                                            <br/> <br/>
                                            When faced with failure, we must not give up but, on the contrary, pull ourselves together, learn from this
                                            failure and seek to try new approaches. Some of the brightest minds have
                                            not only tolerated failure, they encouraged it: <br/> <br/>
                                            <ul>
                                                <li>
                                                    “Failure is an option here. If things don't fail, you are not enough
                                                    innovative. "- <strong> Elon Musk </strong>
                                                </li>
                                                <li>
                                                    "It's good to celebrate success, but it's more important to heed the lessons
                                                    of failure. "- <strong> Bill Gates </strong>
                                                </li>
                                                <li>
                                                    “You have to be ready to act. You must be prepared to crash completely, otherwise,
                                                    you won't get very far. "- <strong> Steve Jobs. </strong>
                                                </li>
                                            </ul>
                                            <br/>
                                            Sources:
                                            <link href = {""} />
                                            https://www.reussirmavie.net/Comment-rebondir-apres-un-echec_a953.html
                                            https://www.wrike.com/fr/blog/comment-vaincre-la-peur-de-lechec-et-adopter-un-etat-desprit-axe-
                                            over-growth /
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/5e61LL-dsG4"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>

                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            Être facile n’est pas tâche facile, et cela s’apprend. Un vrai parent, c’est pouvoir éduquer,
                                            accompagner dans sa réussite, cependant on distingue aussi de faux parents : ils ne
                                            connaissent pas la personnalité de l’enfant, ne communiquent pas avec lui et ne restent pas à
                                            l’écoute de l’enfant.
                                            D’après le livre de Claire Leduc, Le parent entraîneur, des Éditions logiques, il y aurait 5
                                            types de parents : parent absent, parent débonnaire, parent entraîneur (objectif à atteindre),
                                            parent autoritaire, parent abusif. <br/><br/>
                                            <ul>
                                                <li>
                                                    <strong>Le parent absent : </strong>C’est le parent qui ne s’intéresse pas au développement de son
                                                    enfant et qui n’investit pas dans l’éducation, ne prend pas le temps de communiquer
                                                    avec l’enfant et n’est préoccupé que par lui-même.
                                                </li>
                                                <br/>
                                                <li>
                                                    <strong>Le parent débonnaire : </strong>Le parent est préoccupé du développement de son enfant. Il
                                                    donne les soins à son enfant sans toutefois le contraindre. Ce type de parent laisse
                                                    l’enfant prendre ses propres décisions et faire ses expériences.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent entraîneur : </strong>Le parent est préoccupé par l’éducation de ses enfants au
                                                    même titre que ses propres activités (travail, relation de couple, relations sociales). Il y
                                                    a la communication, on s’écoute.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent autoritaire : </strong>les enfants doivent obéir aux règles, pas de place à la
                                                    personnalité de l’enfant, goûts, différences.
                                                </li><br/>
                                                <li>
                                                    <strong>Le parent abusif : </strong>type de parent qui ignore totalement les besoins de l’enfant, les
                                                    problèmes des parents sont prédominants, la communication est déficiente, la violence
                                                    et l’abus sont présents et dont les enfants sont les premières victimes.
                                                </li>
                                            </ul>
                                            <br/>
                                            Tout parent doit faire de son possible pour être un bon parent, rester à l’écoute de ce dernier et
                                            l’accompagner dans sa vision pour la réalisation de ses rêves.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className = {classes.textPlace}>
                                            Being easy isn't easy, and you can learn it. A real parent is being able to educate,
                                            support in its success, however, there are also false parents: they do not
                                            do not know the child's personality, do not communicate with him and do not stay
                                            listening to the child.
                                            According to Claire Leduc's book, The Coaching Parent, from Logical Editions, there would be 5
                                            types of parents: absent parent, easygoing parent, coach parent (objective to be achieved),
                                            authoritarian parent, abusive parent. <br/> <br/>
                                            <ul>
                                                <li>
                                                    <strong> The absent parent: </strong> This is the parent who is not interested in the development of his
                                                    child and who does not invest in education, does not take the time to communicate
                                                    with the child and is only concerned about himself.
                                                </li>
                                                <br/>
                                                <li>
                                                    <strong> The good-natured parent: </strong> The parent is concerned about the development of his child. He
                                                    cares for his child without forcing him. This type of parent leaves
                                                    the child makes his own decisions and experiences.
                                                </li> <br/>
                                                <li>
                                                    <strong> The Coaching Parent: </strong> The parent is concerned about the education of their children in
                                                    as well as his own activities (work, couple relationship, social relations). There is
                                                    in communication, we listen to each other.
                                                </li> <br/>
                                                <li>
                                                    <strong> The authoritative parent: </strong> children should obey the rules, no room for
                                                    child's personality, tastes, differences.
                                                </li> <br/>
                                                <li>
                                                    <strong> The abusive parent: </strong> type of parent who totally ignores the needs of the child, the
                                                    parents' problems predominate, communication is poor, violence
                                                    and abuse are present and of which children are the primary victims.
                                                </li>
                                            </ul>
                                            <br/>
                                            Every parent should do their best to be a good parent, to listen to the latter and
                                            support him in his vision for the realization of his dreams.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/gHN6RKhCXTk"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>

                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div style={{margin: "0 auto", width: "70%"}}>
                                            COMMENT RECONNAITRE ET SURMONTER LES DIFFICULTES
                                            SCOLAIRES <br/><br/>
                                            Le chemin pour réussir son cursus scolaire est semé d’embuches. Ces difficultés peuvent
                                            freiner les objectifs fixés. Pour se faire il faut reconnaître et surmonter ses problèmes. Il existe
                                            plusieurs moyens : <br/><br/>
                                            <ul>
                                                <li>
                                                    Identifier clairement le but souhaité : au lieu de se focaliser sur ce qui ne va pas, il
                                                    faut plutôt définir précisément et clairement ce qu’on veut, visualiser clairement le
                                                    résultat souhaité et le ressentir comme déjà acquis.
                                                </li><br/>
                                                <li>
                                                    Repérer et changer la pensée qui empêche la progression : il ne faut surtout pas
                                                    perdre confiance en soi et laisser place au désespoir, la dépression, le découragement,
                                                    bien au contraire se rebooster, faire le plein de courage, se dire des choses positives.
                                                </li><br/>
                                                <li>
                                                    Trouver une nouvelle solution pour passer à l’action : Continuer de faire la même
                                                    chose conduira toujours au même résultat, il faut donc chercher à chercher ce qui ne
                                                    va pas et essayer de nouvelles techniques d’approche.
                                                </li>
                                            </ul>
                                            <br/>
                                            Face aux difficultés, il ne faut pas se laisser aller par le découragement. En revanche il faut
                                            développer et entretenir sa confiance en soi, ses talents, ses capacités, essayer de nouvelles
                                            méthodes, savoir entretenir un état d’esprit positif et dynamique pour mieux rebondir.
                                            Il faut traiter les difficultés comme un défi à surmonter.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div style = {{margin: "0 auto", width: "70%"}}>
                                            HOW TO RECOGNIZE AND OVERCOME DIFFICULTIES
                                            SCHOOLS <br/> <br/>
                                            The road to success in school is strewn with pitfalls. These difficulties can
                                            slow down the objectives set. To do so, you have to recognize and overcome your problems. It exists
                                            several ways: <br/> <br/>
                                            <ul>
                                                <li>
                                                    Clearly identify the desired goal: instead of focusing on what is wrong, it
                                                    rather, you have to define precisely and clearly what you want, clearly visualize the
                                                    desired result and feel it as already acquired.
                                                </li> <br/>
                                                <li>
                                                    Identify and change the thought that prevents progress: it is important not to
                                                    lose self-confidence and give way to despair, depression, discouragement,
                                                    on the contrary, to re-boost, to fill up with courage, to say positive things to each other.
                                                </li> <br/>
                                                <li>
                                                    Find a new solution to take action: Continue to do the same
                                                    thing will always lead to the same result, so we must seek to find what does not
                                                    not go and try new approach techniques.
                                                </li>
                                            </ul>
                                            <br/>
                                            When faced with difficulties, we must not let ourselves go by discouragement. On the other hand it is necessary
                                            develop and maintain self-confidence, talents, abilities, try new
                                            methods, knowing how to maintain a positive and dynamic state of mind to better bounce back.
                                            Difficulties must be treated as a challenge to be overcome.
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="cardArticle">
                                <div className={classes.videoArt}>
                                    <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/Wfnk6oGXyj0"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className={classes.textArt}>

                                    {localStorage.getItem("locale_lg")==="fr-fr" &&(
                                        <div className={classes.textPlace}>
                                            Pour briller dans l’univers professionnel, il faut se fixer des objectifs.
                                            Néanmoins, plusieurs raisons peuvent nous empêcher d’atteindre ses objectifs : la
                                            procrastination, les contraintes de santé, une mauvaise appréciation du projet en lui-même, et
                                            bien d’autres… <br/><br/>
                                            Mener à bien ses objectifs professionnels nécessite l’élaboration de méthodes. Seulement
                                            toutes les méthodes ne se valent pas, il faut donc trouver celle qui nous convient, la bonne
                                            méthode. <br/><br/>
                                            La méthode SMART : <br/><br/>
                                            <strong>S pour spécifique : </strong>la première des choses à faire est de définir clairement l’objectif à
                                            atteindre. Il doit être clair, précis et bien détaillé
                                            <br/><br/>
                                            <strong>M comme mesurable : </strong>on doit pouvoir évaluer la progression de l’objectif
                                            <br/><br/>
                                            <strong>A comme accessible : </strong>l’objectif doit être accessible, pour cela il faut commencer par atteindre
                                            un objectif plus simple.
                                            <br/><br/>
                                            <strong>R comme réaliste : </strong>Chaque objectif ou sous-objectif doit être réaliste, atteignable, sérieux.
                                            <br/><br/>
                                            <strong>T comme temporel : </strong>l’objectif doit être mené selon un calendrier temporel bien précis.
                                        </div>
                                    )}
                                    {localStorage.getItem("locale_lg")==="en-us" &&(
                                        <div className = {classes.textPlace}>
                                            To shine in the professional world, you have to set goals.
                                            However, several reasons may prevent us from achieving its goals:
                                            procrastination, health constraints, poor appreciation of the project itself, and
                                            many others ... <br/> <br/>
                                            Achieving professional goals requires the development of methods. Only
                                            not all methods are equal, so we have to find the one that suits us, the right one
                                            method. <br/> <br/>
                                            The SMART method: <br/> <br/>
                                            <strong> S for specific: </strong> the first thing to do is to clearly define the objective to
                                            achieve. It must be clear, precise and well detailed
                                            <br/> <br/>
                                            <strong> M as measurable: </strong> we must be able to assess the progress of the objective
                                            <br/> <br/>
                                            <strong> As accessible: </strong> the objective must be accessible, for this we must start by achieving
                                            a simpler goal.
                                            <br/> <br/>
                                            <strong> R as realistic: </strong> Each objective or sub-objective must be realistic, achievable, serious.
                                            <br/> <br/>
                                            <strong> T for time: </strong> the objective must be achieved according to a specific time schedule.
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
*/}
                        <div style={{textAlign: "center"}}>
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=1281746191">
                                <img className={classes.eachCarousel}  src={require("../assets/fb-logo.png")} alt=""/>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCsZN6pawvA84e5Km0553qyw">
                                <img className={classes.eachCarousel}  src={require("../assets/yb-logo.png")} alt=""/>
                            </a>
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


export default withStyles(styles)(Coaching);
