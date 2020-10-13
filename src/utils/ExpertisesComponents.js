import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import CardCustom from "./CardCustom";
import {Col, Container, Row} from "react-bootstrap";

const styles = theme => ({
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
    },
});

class ExpertisesComponents extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/expertises"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{width: "100%"}}>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<FindInPageIcon/>}
                            title={"Profil"}
                            description={"La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.\n" +
                            "En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement."}
                            onclick={()=>{this.moreInfo("/profil_etudiant")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<SchoolIcon/>}
                            title={"Projet d’étude national \n ou international"}
                            description={"Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de" +
                            "notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants. "}
                            onclick={()=>{this.moreInfo("/projet_etude")}}
                        />
                    </Col>
                </Row>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<AccountCircleIcon/>}
                            title={"Potentiel"}
                            description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                            "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
                            onclick={()=>{this.moreInfo("/potential")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<MenuBookIcon/>}
                            title={"Professionnel"}
                            description={"Beaucoup sont ceux qui n’ont pas de projet professionnel, qui se lancent dans une carrière\n" +
                            "juste parce que leurs parents veulent qu’ils exercent ce métier."}
                            onclick={()=>{this.moreInfo("/professional")}}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withStyles(styles)(ExpertisesComponents);
