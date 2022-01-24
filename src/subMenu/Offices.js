import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";
import Sidemenu from "../utils/Sidemenu";
import translate from "../i18n/messages/translate";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
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
    drapeau:{
        width: "95px",
        height: "60px",
        marginBottom: "10px"
    },
    offices:{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    },
    locaux:{
        width: "400px",
        height: "400px"
    },
    loc:{
        marginBottom: "20px",
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px"
    },
    expertises: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "50px",
        paddingBottom: "50px",

    },
});

class Office extends Component {
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
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.expertises} style={{marginBottom: "100px"}}>
                             
                             <div style={{marginBottom: "-70px"}} className="row">
                                 <div style={{marginTop : "22px"}} className="square"></div> <p style =  {{color : '#7c1c18' }} className="expTitle">{translate("noslocaux")}</p>   
                             </div>
                         </div>
  
                        <div className={classes.offices} style={{width: "100%",background : '#fec601', opacity :'0.8'}}>
                            <div >
                                <div >
                                    <img title={"France"} className="drapeau"  src={require("../assets/fr.png")} alt=""/>
                                    <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>France</h3>
                                    <img title={"France"} className="drapeau"  src={require("../assets/fr.png")} alt=""/>
                                    <Row className={classes.loc}>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"France"} className="locaux"  src={require("../assets/L15.png")} alt=""/>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"France"} className="locaux"  src={require("../assets/Ll3.jpg")} alt=""/>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"France"} className="locaux"  src={require("../assets/Ll4.jpeg")} alt=""/>
                                        </Col>
                                    </Row>
                                </div>
                                <br/><br/>
                                <div >
                                    <img title={"Sénégal"} className="drapeau"  src={require("../assets/sn.png")} alt=""/>
                                    <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Sénégal</h3>
                                    <img title={"Sénégal"} className="drapeau"  src={require("../assets/sn.png")} alt=""/>
                                    <Row className={classes.loc}>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"Sénégal"} className="locaux"  src={require("../assets/Sn1.JPG")} alt=""/>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"Sénégal"} className="locaux"  src={require("../assets/Sn2.jpg")} alt=""/>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <img title={"Sénégal"} className="locaux"  src={require("../assets/Sn4.jpg")} alt=""/>
                                        </Col>
                                    </Row>
                                </div>
                                <br/><br/>
                                <img title={"Côte d'ivoire"} className="drapeau"  src={require("../assets/ci.png")} alt=""/>
                                <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Côte d'ivoire</h3>
                                <img title={"Côte d'ivoire"} className="drapeau" src={require("../assets/ci.png")} alt=""/>
                                <Row className={classes.loc}>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/Ci1.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/Ci2.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Côte d'ivoire"} className="locaux"  src={require("../assets/Ci4.jpg")} alt=""/>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <img title={"Togo"} className="drapeau"  src={require("../assets/tg.png")} alt=""/>
                                <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Togo</h3>
                                <img title={"Togo"} className="drapeau"  src={require("../assets/tg.png")} alt=""/>
                                <Row className={classes.loc}>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Togo"} className="locaux" src={require("../assets/Tg1.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Togo"} className="locaux"  src={require("../assets/Tg2.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <img title={"Togo"} className="locaux"  src={require("../assets/Tg4.jpg")} alt=""/>
                                    </Col>
                                </Row>
                            </div>
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


export default withStyles(styles)(Office);
