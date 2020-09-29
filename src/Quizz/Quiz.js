import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import QuizData from "./QuizData";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import axios from 'axios';
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containerQuizs:{
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        marginBottom: "10px"
    },
    questions: {
        width: "200px",
        border: "1px solid",
        padding: "12px",
        textAlign: "center",
        marginBottom: "15px",
        margin: "0 auto"
    },
    questionSelected: {
        width: "200px",
        border: "1px solid",
        padding: "12px",
        textAlign: "center",
        backgroundColor: "#ffc10773",
        marginBottom: "15px",
        margin: "0 auto"
    },
    optionDiv: {
        cursor: "pointer"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: 0,
            score: 0,
            disabled: true,
            userType: "",
            typeT : 0,
            typeR : 0,
            typeI : 0,
            typeC : 0,
            typeA : 0,
            typeM : 0,

            typeQ1T : 0,
            typeQ1R : 0,
            typeQ1I : 0,
            typeQ1C : 0,
            typeQ1A : 0,
            typeQ1M : 0,

            typeQ2T : 0,
            typeQ2R : 0,
            typeQ2I : 0,
            typeQ2C : 0,
            typeQ2A : 0,
            typeQ2M : 0,

            typeQ3T : 0,
            typeQ3R : 0,
            typeQ3I : 0,
            typeQ3C : 0,
            typeQ3A : 0,
            typeQ3M : 0,

            typeQ4T : 0,
            typeQ4R : 0,
            typeQ4I : 0,
            typeQ4C : 0,
            typeQ4A : 0,
            typeQ4M : 0,

            dreamJob1 : '',
            dreamJob2 : '',
            dreamJob3 : '',
            dreamJob4 : '',
            dreamJob5 : '',
            personName: []
        };
    }

    loadQuiz = () =>{
        const {currentIndex} = this.state;
        this.setState(()=>{
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer,
                type: QuizData[currentIndex].type
            }
        })
    };

    sendResult = (e) => {
        e.preventDefault();
        let result = "<h3> Nom : "+localStorage.getItem('lastName')+"</h3>" +
            "<h4> Prénom : "+localStorage.getItem('firstName')+"</h4>" +
            "<h5> Email : "+localStorage.getItem('email')+"</h5>" +
            "<h5> Numéro : "+localStorage.getItem('number')+"</h5>" +
            "<br/>" +
            "<p>Q1 résultats</p>" +
            "<table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Nbre T</td>\n" +
            "            <td style='border: 1px solid'>Nbre R</td>\n" +
            "            <td style='border: 1px solid'>Nbre I</td>\n" +
            "            <td style='border: 1px solid'>Nbre C</td>\n" +
            "            <td style='border: 1px solid'>Nbre A</td>\n" +
            "            <td style='border: 1px solid'>Nbre M</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1T+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1R+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1I+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1C+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1A+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ1M+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+
            "<br/>" +
            "<p>Q2 résultats</p>" +
            "<table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Nbre T</td>\n" +
            "            <td style='border: 1px solid'>Nbre R</td>\n" +
            "            <td style='border: 1px solid'>Nbre I</td>\n" +
            "            <td style='border: 1px solid'>Nbre C</td>\n" +
            "            <td style='border: 1px solid'>Nbre A</td>\n" +
            "            <td style='border: 1px solid'>Nbre M</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2T+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2R+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2I+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2C+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2A+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ2M+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+
            "<br/>" +
            "<br/>" +
            "<p>Q3 résultats</p>" +
            "<table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Nbre T</td>\n" +
            "            <td style='border: 1px solid'>Nbre R</td>\n" +
            "            <td style='border: 1px solid'>Nbre I</td>\n" +
            "            <td style='border: 1px solid'>Nbre C</td>\n" +
            "            <td style='border: 1px solid'>Nbre A</td>\n" +
            "            <td style='border: 1px solid'>Nbre M</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3T+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3R+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3I+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3C+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3A+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ3M+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+
            "<br/>" +
            "<br/>" +
            "<p>Q4 résultats</p>" +
            "<table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Nbre T</td>\n" +
            "            <td style='border: 1px solid'>Nbre R</td>\n" +
            "            <td style='border: 1px solid'>Nbre I</td>\n" +
            "            <td style='border: 1px solid'>Nbre C</td>\n" +
            "            <td style='border: 1px solid'>Nbre A</td>\n" +
            "            <td style='border: 1px solid'>Nbre M</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4T+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4R+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4I+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4C+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4A+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeQ4M+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>"+
            "<br/>" +
            "<p>Tableau final</p>" +
            "<table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>Nbre T</td>\n" +
            "            <td style='border: 1px solid'>Nbre R</td>\n" +
            "            <td style='border: 1px solid'>Nbre I</td>\n" +
            "            <td style='border: 1px solid'>Nbre C</td>\n" +
            "            <td style='border: 1px solid'>Nbre A</td>\n" +
            "            <td style='border: 1px solid'>Nbre M</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeT+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeR+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeI+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeC+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeA+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.typeM+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>";

        // alert(`totaux-Q1 : ${this.state.typeQ1T} : ${this.state.typeQ1R} :
        // ${this.state.typeQ1I} : ${this.state.typeQ1C} : ${this.state.typeQ1A}:
        // ${this.state.typeQ1M}`);
        //
        // alert(`totaux-Q2 : ${this.state.typeQ2T} : ${this.state.typeQ2R} :
        // ${this.state.typeQ2I} : ${this.state.typeQ2C} : ${this.state.typeQ2A}:
        // ${this.state.typeQ2M}`);
        //
        // alert(`totaux-Q3 : ${this.state.typeQ3T} : ${this.state.typeQ3R} :
        // ${this.state.typeQ3I} : ${this.state.typeQ3C} : ${this.state.typeQ3A}:
        // ${this.state.typeQ3M}`);
        //
        // alert(`totaux-Q4 : ${this.state.typeQ4T} : ${this.state.typeQ4R} :
        // ${this.state.typeQ4I} : ${this.state.typeQ4C} : ${this.state.typeQ4A}:
        // ${this.state.typeQ4M}`);
        //
        // alert(`totaux-Q ${this.state.typeT} : ${this.state.typeR} :
        // ${this.state.typeI} : ${this.state.typeC} : ${this.state.typeA}:
        // ${this.state.typeM}`);

        let username = localStorage.getItem('lastName')+" "+localStorage.getItem('firstName');
        axios.post("/users/mailing", {
            userEmail: "answers-quiz@cdabcompass.com",
            subject: "Questionnaire phase 2 - "+username,
            container: result
        }).then(res=>{
            console.log(res.data.text);
            if(res.status === 200){
                alert("Vos informations ont bien été transmises");
                setTimeout(
                    ()=>{window.location.href="/expertises/profil_etudiant"},
                    1000
                )
            }
        })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });

        axios.post('/users/update/quizSecondStep', {
            lastName: localStorage.getItem("lastName"),
            firstName: localStorage.getItem("firstName")
        }) .then(res=>{
            if(res.status === 200){
                console.log("secondStep")
            }
            else{console.log("Error set secondStep")}
        })
            .catch(err=>{
                console.log("Error set secondStep")
            });
    };

    sameValues = (arr) => {
        return arr.every((v,i,a)=>v===a[0]);
    };

    typeGroup = (val) => {
        // alert("step2");
        if(val === "C1"){
            val = "RCM"
        }else if(val === "C2" || val === "C6" || val === "C31"
            || val === "C35" || val === "C37"){
            val = "CAM"
        }else if(val === "C3" || val === "C4" || val === "C5"
            || val === "C10" || val === "C19" || val === "C21"
            || val === "C22" || val === "C26" || val === "C33"
            || val === "C40" || val === "C44" || val === "C50"
        ){
            val = "TCA"
        }else if(val === "C7" || val === "C12" || val === "C27"
            || val === "C36" || val === "C47"|| val === "C48"){
            val = "TRC"
        }else if(val === "C8" || val === "C14" || val === "C43"){
            val = "TIC"
        }else if(val === "C9" || val === "C17" || val === "C25"
            || val === "C39" || val === "C41" || val === "C45" || val === "C51"){
            val = "ICA"
        }else if(val === "C11"){
            val = "TCM"
        }else if(val === "C13" || val === "C18" || val === "C24"){
            val = "TIA"
        }else if(val === "C20" || val === "C23" || val === "C28"){
            val = "TRA"
        }else if(val === "C30"){
            val = "RIC"
        }else if(val === "C15" || val === "C38" || val === "C32"){
            val = "RCA"
        }else if(val === "C46"){
            val = "TIM"
        }
        // alert("val"+val);
        this.groupTypeVal(val);
    };

    groupTypeVal = (groupType) =>{
        // alert("step3");
        // const {typeT,typeR,typeI,typeC,typeA,typeM,} = this.state;

        // alert("grpTyp : "+groupType);
        if(groupType === "TRI"){
            this.setState({
                typeT: ++this.state.typeT,
                typeR: ++this.state.typeR,
                typeI: ++this.state.typeI
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4R: ++this.state.typeQ4R,
                typeQ4I: ++this.state.typeQ4I
            })
        }else if(groupType === "TRC"){
            this.setState({
                typeT: ++this.state.typeT,
                typeR: ++this.state.typeR,
                typeC: ++this.state.typeC
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4R: ++this.state.typeQ4R,
                typeQ4C: ++this.state.typeQ4C
            })
        }else if(groupType === "TRA"){
            this.setState({
                typeT: ++this.state.typeT,
                typeR: ++this.state.typeR,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4R: ++this.state.typeQ4R,
                typeQ4A: ++this.state.typeQ4A
            });
        }else if(groupType === "TRM"){
            this.setState({
                typeT: ++this.state.typeT,
                typeR: ++this.state.typeR,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4R: ++this.state.typeQ4R,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "TIC"){
            this.setState({
                typeT: ++this.state.typeT,
                typeI: ++this.state.typeI,
                typeC: ++this.state.typeC
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4C: ++this.state.typeQ4C
            })
        }else if(groupType === "TIA"){
            this.setState({
                typeT: ++this.state.typeT,
                typeI: ++this.state.typeI,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4A: ++this.state.typeQ4A
            })
        }else if(groupType === "TIM"){
            this.setState({
                typeT: ++this.state.typeT,
                typeI: ++this.state.typeI,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "TCA"){
            this.setState({
                typeT: ++this.state.typeT,
                typeC: ++this.state.typeC,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4A: ++this.state.typeQ4A
            })
        }else if(groupType === "TCM"){
            this.setState({
                typeT: ++this.state.typeT,
                typeC: ++this.state.typeC,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4T: ++this.state.typeQ4T,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4M: ++this.state.typeQ4M
            })
        }
        else if(groupType === "RIC"){
            this.setState({
                typeR: ++this.state.typeR,
                typeI: ++this.state.typeI,
                typeC: ++this.state.typeC
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4C: ++this.state.typeQ4C
            })
        }else if(groupType === "RIA"){
            this.setState({
                typeR: ++this.state.typeR,
                typeI: ++this.state.typeI,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4A: ++this.state.typeQ4A
            })
        }else if(groupType === "RIM"){
            this.setState({
                typeR: ++this.state.typeR,
                typeI: ++this.state.typeI,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4I: ++this.state.typeQ4I,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "RCA"){
            this.setState({
                typeR: ++this.state.typeR,
                typeC: ++this.state.typeC,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4A: ++this.state.typeQ4A
            })
        }else if(groupType === "RCM"){
            this.setState({
                typeR: ++this.state.typeR,
                typeC: ++this.state.typeC,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4M: ++this.state.typeQ4M
            });
        }else if(groupType === "RAM"){
            this.setState({
                typeR: ++this.state.typeR,
                typeA: ++this.state.typeA,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4R: ++this.state.typeQ4R,
                typeQ4A: ++this.state.typeQ4A,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "ICA"){
            this.setState({
                typeI: ++this.state.typeI,
                typeC: ++this.state.typeC,
                typeA: ++this.state.typeA
            });
            this.setState({
                typeQ4I: ++this.state.typeQ4I,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4A: ++this.state.typeQ4A
            })
        }else if(groupType === "ICM"){
            this.setState({
                typeI: ++this.state.typeI,
                typeC: ++this.state.typeC,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4I: ++this.state.typeQ4I,
                typeQ4C: ++this.state.typeQ4C,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "IAM"){
            this.setState({
                typeI: ++this.state.typeI,
                typeA: ++this.state.typeA,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4I: ++this.state.typeQ4I,
                typeQ4A: ++this.state.typeQ4A,
                typeQ4M: ++this.state.typeQ4M
            })
        }else if(groupType === "CAM"){
            this.setState({
                typeC: ++this.state.typeC,
                typeA: ++this.state.typeA,
                typeM: ++this.state.typeM
            });
            this.setState({
                typeQ4C: ++this.state.typeQ4C,
                typeQ4A: ++this.state.typeQ4A,
                typeQ4M: ++this.state.typeQ4M
            })
        }

        // alert(`finaux ${this.state.typeT} : ${this.state.typeR} : ${this.state.typeI} : ${this.state.typeC} : ${this.state.typeA}: ${this.state.typeM}`);

    };

    finishHandler = (e) =>{
        const {userAnswer,answer,score,quizEnd,userType,
            typeT,typeR,typeI,typeC,typeA,typeM,personName,
            dreamJob1,dreamJob2,dreamJob3,dreamJob4,dreamJob5
        } = this.state;
        this.setState({ personName: [...this.state.personName, ...[dreamJob1,dreamJob2,dreamJob3,dreamJob4,dreamJob5] ] });

        // this.setState({personName: this.state.personName.concat(dreamJob1)});
        // this.setState({personName: this.state.personName.concat(dreamJob2)});
        // alert("dreamJob1 : "+dreamJob1);
        // alert("step1 : "+this.state.personName);
        for(let i = 0; i<personName.length; i++){
            this.typeGroup(personName[i]);
            // this.groupTypeVal(groupType);
        }

        this.setState({
            quizEnd: 1
        });


        // alert("quizEnd: "+quizEnd);

        //this.test()
        if(this.state.quizEnd !== 0){
            // let x = this.sameValues(personName);
            // let y = this.dreamChoice();
            // console.log("xx : "+x+" yy : "+y);
            if(this.sameValues(personName)===false && this.dreamChoice()){
                this.sendResult(e);
            }else{
                this.setState({
                    personName: [],
                    quizEnd: 0
                });
                alert("Veuillez sélectionner 5 métiers différents");
            }
        }
    };

    dreamChoice = () => {
        const {dreamJob1,dreamJob2,dreamJob3,dreamJob4,dreamJob5} = this.state;
        if(dreamJob1 !== "" && dreamJob2 !== "" && dreamJob3 !== ""
            && dreamJob4 !== "" && dreamJob5 !== ""){
            return true
        }else {return false}
    };

    nextQuestionHandler = () => {
        const {userAnswer,answer,score,userType,
            typeT,typeR,typeI,typeC,typeA,typeM,
            typeQ1T,typeQ1R,typeQ1I,typeQ1C,typeQ1A,typeQ1M,
            typeQ2T,typeQ2R,typeQ2I,typeQ2C,typeQ2A,typeQ2M,
            typeQ3T,typeQ3R,typeQ3I,typeQ3C,typeQ3A,typeQ3M,
        } = this.state;

        if(userType === "T"){this.setState({typeT: typeT+1});
        }else if(userType === "R"){this.setState({typeR: typeR+1});
        }else if(userType === "I"){this.setState({typeI: typeI+1});
        }else if(userType === "C"){this.setState({typeC: typeC+1});
        }else if(userType === "A"){this.setState({typeA: typeA+1});
        }else if(userType === "M"){this.setState({typeM: typeM+1});
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,
            disabled: true
        });

        // console.log("curIndex : "+this.state.currentIndex);
        // console.log("userType : "+userType);

        if ((this.state.currentIndex >= 0) && (this.state.currentIndex <= 28)) {
            // console.log("yiiiiii");
            if(userType === "T"){this.setState({typeQ1T: typeQ1T+1});
            }else if(userType === "R"){this.setState({typeQ1R: typeQ1R+1});
            }else if(userType === "I"){this.setState({typeQ1I: typeQ1I+1});
            }else if(userType === "C"){this.setState({typeQ1C: typeQ1C+1});
            }else if(userType === "A"){this.setState({typeQ1A: typeQ1A+1});
            }else if(userType === "M"){this.setState({typeQ1M: typeQ1M+1});
            }
        } else if ((this.state.currentIndex >= 29) && (this.state.currentIndex <= 88)) {
            // alert("wooooo");
            if(userType === "T"){this.setState({typeQ2T: typeQ2T+1});
            }else if(userType === "R"){this.setState({typeQ2R: typeQ2R+1});
            }else if(userType === "I"){this.setState({typeQ2I: typeQ2I+1});
            }else if(userType === "C"){this.setState({typeQ2C: typeQ2C+1});
            }else if(userType === "A"){this.setState({typeQ2A: typeQ2A+1});
            }else if(userType === "M"){this.setState({typeQ2M: typeQ2M+1});
            }
        } else if ((this.state.currentIndex >= 89) && (this.state.currentIndex <= 138)) {
            if(userType === "T"){this.setState({typeQ3T: typeQ3T+1});
            }else if(userType === "R"){this.setState({typeQ3R: typeQ3R+1});
            }else if(userType === "I"){this.setState({typeQ3I: typeQ3I+1});
            }else if(userType === "C"){this.setState({typeQ3C: typeQ3C+1});
            }else if(userType === "A"){this.setState({typeQ3A: typeQ3A+1});
            }else if(userType === "M"){this.setState({typeQ3M: typeQ3M+1});
            }
        }

        console.log(
            "userAnswer : "+userAnswer+
            " answer : "+answer+
            " score : "+score+
            " type : "+userType
        );
    };

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = (answer,userType) => {
        // alert("as : "+answer+ " userType : "+userType);
        this.setState({
            userAnswer: answer,
            userType: userType,
            disabled: false
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {currentIndex} = this.state;
        if(this.state.currentIndex != prevState.currentIndex){
            this.setState(()=>{
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer,
                    type: QuizData[currentIndex].type
                }
            })
        }
    }

    handlerChangeDream1 = (e) =>{
        const {dreamJob1} = this.state;
        this.setState({dreamJob1: e.target.value});
        this.setState({
            disabled: false
        });

        console.log("dream1 : "+this.state.dreamJob1);

        // if(!personName.includes(dreamJob1)){
        //     this.setState(prevState => ({
        //         personName: [...prevState.personName, dreamJob1]
        //     }));
        // }else{
        //     alert("vous avez déjà choisi ce metier");
        // }

        //alert("dreamJob1 : "+e.target.value);
    };

    handlerChangeDream2 = (e) =>{
        const {dreamJob2} = this.state;
        this.setState({dreamJob2: e.target.value});
        this.setState({
            disabled: false
        });

        console.log("dream2 : "+this.state.dreamJob2);
    };

    handlerChangeDream3 = (e) =>{
        const {dreamJob3} = this.state;
        this.setState({dreamJob3: e.target.value});
        this.setState({
            disabled: false
        });
    };

    handlerChangeDream4 = (e) =>{
        const {dreamJob4} = this.state;
        this.setState({dreamJob4: e.target.value});
        this.setState({
            disabled: false
        });
    };

    handlerChangeDream5 = (e) =>{
        const {dreamJob5} = this.state;
        this.setState({dreamJob5: e.target.value});
        this.setState({
            disabled: false
        });
    };

    render() {
        const {classes} = this.props;
        const {question,options,currentIndex,userAnswer,quizEnd,type} = this.state;

        return (
            <div className={classes.container}>
                <Helmet>
                    <meta
                        name="CDAB COMPASS"
                        content="
                            Questionnaire enfant
                            Tests logiques et detection de profil
                            #Afrique #Formations #Reconvertion #Professionel
                            "
                    />
                </Helmet>

                <div>
                    <MenuBar/>
                </div>
                {/*ok*/}
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>

                    <div className={classes.containerQuizs}>
                        <h1 style={{color: "#b36233"}}>Questionnaire</h1>
                        <h3>{question}</h3>
                        <span>Question {currentIndex+1} / {QuizData.length}</span>
                        {currentIndex < 138 &&
                            options.map((option,index) =>
                                <div key={option.id} className={this.state.userAnswer === option? classes.questionSelected : classes.questions}
                                     onClick={()=> this.checkAnswer(option,type[index])}
                                >
                                    <div className={classes.optionDiv}>{option}</div>
                                </div>
                            )
                        }

                        {currentIndex >= 138 &&
                            <div>
                                <InputLabel id="demo-simple-select-label">Choisissez 5 métiers de vos rêves</InputLabel>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Métier 1</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.dreamJob1}
                                        onChange={this.handlerChangeDream1}
                                    >
                                        {options.map((option,index) => (
                                            <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Métier 2</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.dreamJob2}
                                        onChange={this.handlerChangeDream2}
                                    >
                                        {options.map((option,index) => (
                                            <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Métier 3</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.dreamJob3}
                                        onChange={this.handlerChangeDream3}
                                    >
                                        {options.map((option,index) => (
                                            <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Métier 4</InputLabel>
                                    <Select
                                        value={this.state.dreamJob4}
                                        onChange={this.handlerChangeDream4}
                                    >
                                        {options.map((option,index) => (
                                            <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Métier 5</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.dreamJob5}
                                        onChange={this.handlerChangeDream5}
                                    >
                                        {options.map((option,index) => (
                                            <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        }

                        {currentIndex < QuizData.length - 1 &&
                        <Button variant="contained" disabled={this.state.disabled}
                                onClick={this.nextQuestionHandler}
                        >
                            Suivante
                        </Button>
                        }

                        {currentIndex === QuizData.length - 1 &&
                        <div>
                            {this.state.quizEnd === 0 &&(
                                <Button variant="contained" disabled={this.state.disabled}
                                        onClick={this.finishHandler}
                                >
                                    Suivante
                                </Button>
                            )}
                            {this.state.quizEnd === 1 &&(
                                <Button variant="contained" disabled={this.state.disabled}
                                        onClick={this.finishHandler}
                                >
                                    Envoyer mon formulaire
                                </Button>
                            )}
                        </div>
                        }

                    </div>
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Quiz);
