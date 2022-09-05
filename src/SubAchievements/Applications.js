import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    locaux:{
        // width: "400px",
        height: "400px"
    },
    loc:{
        marginBottom: "50px",
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
        marginTop:"50px"
    },
});

class Applications extends Component {
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
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <h1 style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}}>Nos Applications</h1>
                        <Row className={classes.loc}>
                            <Col xs={12} md={6} lg={4}>
                                <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/cdab_logo2.png")} alt=""/>
                                <h4 style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}}>Logement Etudiant et Caution Bancaire</h4>
                                <br/><br/>
                                <a href='https://play.google.com/store/apps/details?id=com.geniustech.cdabcoaching' style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}} >Télécharger</a>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/ic_launcher-playstore.png")} alt=""/>
                                <h4 style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}}>Cdab Coaching</h4>
                                <br/><br/>
                                <a href='https://play.google.com/store/apps/details?id=com.geniustech.cdab' style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}} >Télécharger</a>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/gilove.png")} alt=""/>
                                <h4 style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}}>Grace in Love</h4>
                                <br/><br/>
                                <a href='https://play.google.com/store/apps/details?id=com.geniustech.graceinlove' style={{display: "inline",marginLeft:"20px",marginRight:"20px", marginBottom:"20px"}} >Télécharger</a>
                            </Col>
                        </Row>
                        
                    </div>
                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default withStyles(styles)(Applications);
