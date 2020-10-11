import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import {Col, Modal, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import CardCustom from "../utils/CardCustom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
        flex: 1
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    ModalContent:{
        width: "700px",
        marginTop: '10%',
        marginBottom: '10%',
        maxWidth: "50% !important"
    },
    snackRoot: {
        backgroundColor: "red",
        color: "white"
    },
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
    },
});

class Offers extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    handleOpenModal = (e) =>{
        this.setState({openModal: true});
    };

    handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({openAlert:false});
    };

    downloadPdf = () => {
        if(localStorage.getItem("token") !== null){
            window.open("https://drive.google.com/file/d/13bjpRDDE6JhkVeve4482op9ZfGFX9cQa/view?usp=sharing");
        }else{
            this.setState({openAlert:true});
        }
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/expertises"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>
                    <div className="cardArticleWhite">
                        <div className={classes.videoArt}>
                            <iframe className={classes.videoClass} width="1280" height="725" src="https://www.youtube.com/embed/8zsxbPR5hCo" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={classes.textArt}>
                            <div style={{margin: "0 auto", width: "70%"}}>
                                Il n’est jamais trop tard de saisir l’opportunité de franchir un nouveau pas. Tous les enfants peuvent réussir. <br/>
                                Avec un profil bien établi, le projet d’études est bien ficelé. Ainsi la porte est ouverte pour franchir un nouveau palier. <br/>
                                C’est un investissement en soi. Un investissement requiert un retour positif. Avec CDAB COMPASS, les portes vous sont ouvertes pour aller vers de nouveaux horizons.
                                Tout est possible à celui qui a la foi. Ainsi nous vous offrons cette opportunité pour aller de l’avant, pour éclaircir votre horizon et pour réaliser votre rêve avec transparence, sérénité et confiance.
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div style={{textAlign: "center"}}>
                        <Button onClick={this.handleOpenModal} className={classes.btnQuiz} >
                            Protocole d'accord de recherche d'université
                        </Button>
                    </div>
                    <br/>

                    <Row className={classes.cards}>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<AccountCircleIcon/>}
                                title={"Accompagnement et orientation scolaire"}
                                description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                                "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
                                onclick={()=>{this.moreInfo("/orientation_scolaire")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<AccountBalanceWalletIcon/>}
                                title={"Caution étudiante à l’étranger"}
                                description={"Dans le souci de propulser le projet d’étude des apprenants ou parents de CDABCOMPASS, " +
                                "la société éducative offre une caution bancaire aux apprenants désireux de faire leurs études à l’étranger" +
                                " par exemple en France."}
                                onclick={()=>{this.moreInfo("/caution_etudiantes")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<MenuBookIcon/>}
                                title={"Soutien scolaire - Répétition"}
                                description={"Suivant les différentes caractéristiques de l’apprenant, un soutien scolaire à court (deux mois maximum) ou " +
                                "moyen terme (mois alternatif) est mis en place. Il permet de travailler l’autonomie de ce dernier. Ce soutien scolaire " +
                                "(encore appelée répétition) est libre et au rythme convenu avec la famille."}
                                onclick={()=>{this.moreInfo("/soutien_scolaire")}}
                            />
                        </Col>
                    </Row>

                    <Modal dialogClassName ={'ModalContent'} show={this.state.openModal} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                Telecharger
                            </Button>
                        </Modal.Header>
                        <Modal.Body>
                            <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1WZsJwarYy_xrsf_1Xb96esX7DqotM_Cb"} alt=""/>
                            <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1SCtzi7ZxuuuApUMtEqjAAvAMtD18jNzd"} alt=""/>
                         </Modal.Body>
                        <Modal.Footer>
                            <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                Telecharger
                            </Button>
                            <Button variant="secondary" onClick={this.handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={this.state.openAlert}
                        autoHideDuration={7000}
                        onClose={this.handleCloseAlert}
                        message="Veuillez tout d'abord vous connecter ou créer un compte !"
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                        ContentProps={{
                            classes: {
                                root: classes.snackRoot
                            }
                        }}
                    />

                </div>

                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Offers);
