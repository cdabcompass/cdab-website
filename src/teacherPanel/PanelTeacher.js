import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from "react-bootstrap";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import MenuBar from "../utils/MenuBar";
import {withStyles} from "@material-ui/core";
import axios from "axios";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },

    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: 300,
    },

    containerQuizs: {
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

    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },

    btnMoreInfo: {
        backgroundColor: "rgb(224 224 224 / 95%)",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
        margin: "0 auto",
        display: "block"
    },
});

class PanelTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,


            lastName: "",
            firstName: "",
            schoolType: "",
            schoolName: "",
            schoolGrade: "",
            consultation: "",
            chapterStudy: "",
            studentAbility: "",
            coursesPlace: "",
            startHour: "",
            endHour: "",
            dateDuration: "",
            profDate: "",
            chapterRevise: "",
            studentLevel: "",
            typeWork: "",
            homewordDo: "",
            studentSkills: "",
            finalMarks: "",
            personalMarks: "",
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(e.target.name + " : "+e.target.value);
    };

    handleOpenModal = () => {
        this.setState({openModal: true});
    };

    handleCloseModal = (e) => {
        this.setState({openModal: false});
    };

    submitAnswers = (e) => {
        console.log("send all");

        e.preventDefault();
        let rapport = "<p>Bonjour, </p>" +
            "<h3>RAPPORT DE L'ENSEIGNANT : </h3>" +
            localStorage.getItem("lastName") + " " + localStorage.getItem("firstName") +
            "<br/><br/><strong>Nom et prénom de l'apprenant : </strong>"
            + this.state.lastName + this.state.firstName +
            "<br/><br/><strong>Système éducatif : </strong>" + this.state.schoolType +
            "<br/><br/><strong>Etablissement scolaire : </strong>" + this.state.schoolName +
            "<br/><br/><strong>Niveau d'étude : </strong>" + this.state.schoolGrade +
            "<br/><br/><strong>Chapitres étudiés : </strong>" + this.state.chapterStudy +
            "<br/><br/><strong>Attitude de l'apprenant : </strong>" + this.state.studentAbility +
            "<br/><br/><strong>Lieu de prestation : </strong>" + this.state.coursesPlace +
            "<br/><br/><strong>Date du cours : </strong>" + this.state.consultation +
            "<br/><br/><strong>Heure de début : </strong>" + this.state.startHour +
            "<br/><br/><strong>Heure de fin : </strong>" + this.state.endHour +
            "<br/><br/><strong>Durée : </strong>" + this.state.dateDuration +
            "<br/><br/><strong>Date : </strong>" + this.state.profDate +
            "<br/><br/><strong>Chapitres révisés : </strong>" + this.state.chapterRevise +
            "<br/><br/><strong>Niveau de compréhension de l'élève : </strong>" + this.state.studentLevel +
            "<br/><br/><strong>Préciser le devoir : </strong>" + this.state.typeWork +
            "<br/><br/><strong>Devoir fait : </strong>" + this.state.homewordDo +
            "<br/><br/><strong>Réaction de l'apprenant : </strong>" + this.state.studentSkills +
            "<br/><br/><strong>Note : </strong>" + this.state.finalMarks +
            "<br/><br/><strong>Commentaires : </strong>" + this.state.personalMarks;

        axios.post('/users/mailing', {
            userEmail: "answers-quiz@cdabcompass.com",
            subject: "RAPPORT DE L'ENSEIGNANT",
            attachment: "",
            container: rapport
        })
            .then(res => {
                if (res.status === 200) {
                    alert('Votre rapport à bien été envoyé');
                    window.location = "/"
                } else {
                    alert("Une erreur est survenue, veuillez nous joindre afin de savoir si votre transaction à bien été éffectuée.")
                }
            })
            .catch(err => {
                if (err.response.status === 409) {
                }
            });
    }

    componentDidMount() {
    }

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div className="contAll">
                        <Modal dialogClassName={"ModalContent"}
                               show={this.state.openModal}
                               onHide={this.handleCloseModal}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={classes.containerQuizs}>
                                    <h2>Rapport de consultation</h2>
                                    <form onSubmit={this.submitAnswers}>
                                        <div>
                                            <h2>Cours dispensé</h2>
                                            <TextField
                                                label="Nom de l'élève"
                                                value={this.state.lastName}
                                                name={"lastName"}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                label="Prénom de l'élève"
                                                name={"firstName"}
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                label="Système National ou International (A préciser)"
                                                name={"schoolType"}
                                                value={this.state.schoolType}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                label="Etablissement scolaire"
                                                name={"schoolName"}
                                                value={this.state.schoolName}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                label="Niveau d'etudes"
                                                name={"schoolGrade"}
                                                value={this.state.schoolGrade}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                id="date"
                                                label="Date du cours"
                                                type="date"
                                                value={this.state.consultation}
                                                className={classes.textField}
                                                name={"consultation"}
                                                required={true}
                                                onChange={this.handleChange}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Chapitres étudiés"
                                                name={"chapterStudy"}
                                                value={this.state.chapterStudy}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Attitude de l'apprenant"
                                                name={"studentAbility"}
                                                value={this.state.studentAbility}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Lieu de prestattion"
                                                name={"coursesPlace"}
                                                value={this.state.coursesPlace}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Heure de Début"
                                                name={"startHour"}
                                                value={this.state.startHour}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Heure de Fin"
                                                name={"endHour"}
                                                value={this.state.endHour}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Durée"
                                                name={"dateDuration"}
                                                value={this.state.dateDuration}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <br/><br/>
                                            <h2>Feuille de travail du professeur</h2>
                                            <TextField
                                                id="date"
                                                label="Date"
                                                type="date"
                                                value={this.state.profDate}
                                                className={classes.textField}
                                                name={"profDate"}
                                                required={true}
                                                onChange={this.handleChange}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Chapitres révisés"
                                                name={"chapterRevise"}
                                                value={this.state.chapterRevise}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Niveau de compréhension de l'élève"
                                                name={"studentLevel"}
                                                value={this.state.studentLevel}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Préciser le devoir(épreuve,livre:page)"
                                                name={"typeWork"}
                                                value={this.state.typeWork}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Devoir fait: oui - non"
                                                name={"homewordDo"}
                                                value={this.state.homewordDo}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Réaction de l'apprenant"
                                                name={"studentSkills"}
                                                value={this.state.studentSkills}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Note : (A,B,C,D)"
                                                name={"finalMarks"}
                                                value={this.state.finalMarks}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />
                                            <TextField
                                                multiline={true}
                                                label="Remarques"
                                                name={"personalMarks"}
                                                value={this.state.personalMarks}
                                                onChange={this.handleChange}
                                                type={"text"}
                                                required={true}
                                                className={classes.textField}
                                            />

                                            <p>N.B : </p>
                                            <strong>Niveau de compréhension (A,B,C,D)</strong>
                                            <strong>A:{'>'}16 - B:16~14 - C:14~12: - D:~10</strong>
                                        </div>
                                        <Button type="submit" className={classes.btnQuiz}
                                        >
                                            Envoyer
                                        </Button>
                                    </form>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleCloseModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <div>
                            <h2>Bienvenue&nbsp;
                                {localStorage.getItem("firstName")}&nbsp;
                                {localStorage.getItem("lastName")}
                            </h2>
                            <Button className={classes.btnMoreInfo}
                                    onClick={() => this.handleOpenModal()}
                            >
                                Editer le rapport
                            </Button>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default withStyles(styles)(PanelTeacher);