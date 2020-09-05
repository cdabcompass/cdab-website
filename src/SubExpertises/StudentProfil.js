import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import FooterBar from "../utils/FooterBar";

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
    btnQuizPayment: {
        backgroundColor: "#bd2d13",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
        color: "white",
    },
    profilImage:{
        width: "100%",
        height: "500px",
        filter: "blur(2px)",
    },

});

class StudentProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            afterPayment: false,
            specificTest: false,
        };
    }

    componentDidMount() {
        if(localStorage.getItem("token") !== null){
            this.setState({auth: true})
        }
        if(localStorage.getItem("userAccept") === "true"
            && localStorage.getItem("quizFirstStep") === "true"){
            this.setState({afterPayment: true})
        }
        if(localStorage.getItem("quizSecondStep") === "false"){
            this.setState({specificTest: true})
        }
        //alert("auth : "+this.state.auth + " token : "+localStorage.getItem("token"))
    }

    firstTest = () =>{
        if(localStorage.getItem("token") !== null){
            window.location.href = '/principal_quiz';
        }else{
            alert("Veuillez tout d'abord créer un compte ou vous connecter!");
            window.location.href = '/connexion';
        }
    };

    specificPath = (path) =>{
        if(localStorage.getItem("token") !== null){
            window.location.href = "/quiz"+path;
        }else{
            alert("Veuillez tout d'abord créer un compte ou vous connecter!");
            window.location.href = '/connexion';
        }
    };

    doPayment = () =>{
        window.location.href = '/pay/profil_etudiant';
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "100px",marginBottom: "100px"}}>
                    <DetailsPageBanner
                        image={<img className={classes.profilImage} src={require("../assets/P1.JPG")} alt=""/>}
                        title={"Détection du profil de l'apprenant"}/>
                    <div className={classes.subContext}>
                        <div className="subContainer">
                            <div style={{flex: 1}}>
                                <iframe width="" height="186" src="https://www.youtube.com/embed/wdEhQ2xPVOQ"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.
                                    En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement.
                                    Ainsi l’équipe CDAB COMPASS  procède à faire remplir des questionnaires tant à l’enfant qu’au parent.
                                    L’objectif visé par ces questionnaires, est de connaitre l’enfant et comprendre la relation qui existe entre
                                    l’enfant et son entourage (parents, tuteur, fratrie, amis…) bref saisir la quintessence de la personnalité de l’enfant
                                    et de son univers pour mieux le définir.
                                    Cette phase est cruciale et il est important que les parents et l’enfant répondent aux questions de la manière la plus sérieuse et véridique.
                                    Ainsi on pourra connaitre l’enfant en déterminant ses capacités, ses talents, ses aptitudes, ses objectifs professionnels, le bilan de son vécu,
                                    sa personnalité, ses centres d’intérêts, ses motivations et ses valeurs.

                                    <br/><br/>Un autre aspect de cette phase de détection de profil conduit à déterminer le profil de l’enfant afin de savoir quelles capacités et aptitudes à améliorer afin de profiler son parcours.
                                    L’accompagnateur ou l’éducateur reçoit la famille pour discuter et savoir le besoin de l’enfant et du parent. Il donne le résultat de son analyse. Il fait connaitre à la famille les talents, les points forts de l’enfant et les points à améliorer pour atteindre l’objectif ultime la réussite professionnelle de l’enfant. Il donne des conseils si nécessaires sur la possibilité d’offrir d’autres opportunités à l’enfant.
                                    Il est à notifier que la phase détection de profil est obligatoire.

                                </p>
                            </div>
                        </div>
                        {localStorage.getItem("token") === null &&
                            <div>
                                <Button className={classes.btnQuiz}
                                        onClick={() => this.specificPath("/principal_quiz")}
                                        disabled={this.state.afterPayment}
                                >
                                    Passer le test général
                                </Button>
                                <br/><br/><br/>
                                <Button className={classes.btnQuizPayment}
                                        onClick={() => this.specificPath("/pay")}
                                >
                                    Procéder au paiement
                                </Button>
                            </div>
                        }<br/>
                        {localStorage.getItem("situation") !== "Parent" &&(
                            <div>
                                {localStorage.getItem("quizFirstStep") === "false" &&(
                                    <div>
                                        <Button className={classes.btnQuiz}
                                                onClick={() => this.specificPath("/principal_quiz")}
                                                disabled={this.state.afterPayment}
                                        >
                                            Passer le test général
                                        </Button>
                                    </div>
                                )}
                                {(localStorage.getItem("userAccept") === "true" &&
                                    localStorage.getItem("quizSecondStep") === "false"
                                ) && (
                                    <div>
                                        {localStorage.getItem("situation") !== "Primaire" && (
                                            <Button className={classes.btnQuiz}
                                                    onClick={() => this.specificPath("/post_bac")}
                                                    // disabled={this.state.specificTest}
                                            >
                                                Passer le test spécifique
                                            </Button>
                                        )}
                                        {localStorage.getItem("situation") === "Primaire" && (
                                            <Button className={classes.btnQuiz}
                                                    onClick={() => this.specificPath("/primaire")}
                                                    // disabled={this.state.specificTest}
                                            >
                                                Passer le test spécifique
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        {localStorage.getItem("situation") === "Parent" &&(
                            <div>
                                {localStorage.getItem("quizFirstStep") === "false" &&(
                                    <div>
                                        <Button className={classes.btnQuiz}
                                                onClick={() => this.specificPath("/parent1")}
                                                disabled={this.state.afterPayment}
                                        >
                                            Passer le test général
                                        </Button>
                                    </div>
                                )}
                                {(localStorage.getItem("userAccept") === "true" &&
                                    localStorage.getItem("quizSecondStep") === "false"
                                ) && (
                                    <div>
                                        <Button className={classes.btnQuiz}
                                                onClick={() => this.specificPath("/parent2")}
                                                // disabled={this.state.specificTest}
                                        >
                                            Passer le test spécifique
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                        <br/>
                        <div>
                            {localStorage.getItem("token") !== null &&
                                <Button className={classes.btnQuizPayment}
                                        onClick={this.doPayment}
                                >
                                    Procéder au paiement
                                </Button>
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentProfil);
