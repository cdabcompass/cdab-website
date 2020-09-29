import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import {Modal} from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";

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
    profilImage:{
        width: "100%",
        height: "500px",
        filter: "blur(2px)",
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
    }
});

class StudentDeposit extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
            openAlert: false,
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
            window.open("https://drive.google.com/uc?export=view&id=19aIha7RnkX4JeQ4ZF1hdtc-accf5hbEF","_blank");
        }else{
            //alert("Veuillez tout d'abord créer un compte ou vous connecter!");
            this.setState({openAlert:true});
            // window.location.href = '/connexion';
        }
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Helmet>
                    <meta
                        name="CDAB COMPASS"
                        content="
                            Un bon collaborateur
                            s’organise à l’avance afin
                            d’être présent à l’heure fixée.
                            Face aux imprévus, il préfère
                            venir à l’avance, quitte à
                            devoir attendre.
                            #Afrique #Enfant #Europe #Education #Meilleur
                            "
                    />
                </Helmet>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "100px",marginBottom: "100px"}}>
                    <DetailsPageBanner
                        image={<img className={classes.profilImage}  src={require("../assets/P15.jpg")} alt=""/>}
                        title={"Caution Etudiante à l'étranger"}/>
                    <div className={classes.subContext}>
                        <div className="subContainer">
                            <div style={{flex: 1}}>
                                <iframe width="" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    Dans le souci de propulser le projet d’étude des apprenants ou parents de CDABCOMPASS,
                                    la société éducative offre une caution bancaire aux apprenants désireux de faire leurs études
                                    à l’étranger par exemple en France. En effet, il a été constaté que beaucoup d’apprenants ont
                                    des difficultés à obtenir la caution pour continuer la procédure de visa dont la caution bancaire
                                    constitue un des points cruciaux. Ainsi, nous les offrons la possibilité de surmonter cette difficulté.
                                    CDAB COMPASS France dont le professionnalisme n’est plus à démontrer vous assure cette expertise d’une qualité
                                    sans précédent et vous invite à se confier à lui dans la transparence, l’efficacité et la fidélité.
                                </p>
                            </div>
                        </div>
                        <Button className={classes.btnQuiz}  onClick={this.handleOpenModal}>
                            Contrat de caution bancaire
                        </Button>
                        <Modal dialogClassName ={'ModalContent'} show={this.state.openModal} onHide={this.handleCloseModal}>
                            <Modal.Header closeButton>
                                <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                    Telecharger
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1Mdn7TdO16TOrJ1I1pE4fLqLzCAOqto17"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1Hz9bFKp1vC_FYnaWR59bjzfEeW8uu45C"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1VLruWYl95UMaSorMuA3rqiC4C9Bqbmdo"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1VrZg9eMccnXRJDevileBMwyHUW6vnLO_"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1kt_zeyz78FLbz88lKg0IMgc5y2jxRCZ3"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1gjs2WmHgXP6bCg90AqHXjr5cpYEJ3u4U"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=19NykBpZ6g73f7kNyA56IY_3MOeF8hkbs"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1_IXxf2yL2hWw_XqQS2p5NxR0ju46sNRt"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1wjHzgJAV5t0PvPzeUWE6hVX5XC6RBNQH"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1GdSJtXmyiFOXNaZp7XMGsLsyydj39XDZ"} alt=""/>
                                <img style={{width: "100%"}}  src={"https://drive.google.com/uc?export=view&id=1kUxGdJySrRNJaxK3uDS_xyMRWJ273beX"} alt=""/>
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
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentDeposit);
