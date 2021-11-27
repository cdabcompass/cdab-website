import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {withStyles} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon, Button, Grid } from '@mui/material';


const styles = theme => ({
    adminColor: {
        cursor: 'pointer',
        color: '#ffeb3b',
        fontWeight: 'bold'
    }
});

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

class FooterBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem("firstName") === "admin"
        && localStorage.getItem("lastName") === "admin"){
            this.setState({
                isAdmin: true
            })
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="footBar">
                <div className="footer">

                    <div className="siegeSocial">
                    <h5 className="footerTitle"> </h5>
                        <Button
                            style =  {{background : '#0669e1', color : 'white', borderRadius: 10 }}
                            href="https://www.facebook.com/CedricCoachCdab"><FacebookIcon/>
                                facebook
                        </Button>
                       
                    </div>
                    <div className="siegeSocial">
                    <h5 className="footerTitle"> </h5>
                        <Button
                            style =  {{background : '#1a8cd8', color : 'white', borderRadius: 10 }}
                            href="https://twitter.com/cdabcompass"><TwitterIcon/>
                                Twitter
                        </Button>
                       
                    </div>
                    <div className="siegeSocial">
                     <h5 className="footerTitle"> </h5>
                        <Button
                            style =  {{background : ' #8a3ab9', color : 'white', borderRadius: 10 }}
                            href="https://www.instagram.com/cdab.compass/"><InstagramIcon/>
                                Instagram
                        </Button>
                       
                    </div>
                    {/*  
                    <div className="siegeSocial">
                        <h5 className="footerTitle">SIEGE SOCIAL</h5>
                        <p>
                            1, Place de la Gare<br/>
                            59000 Lille<br/>
                            +33 (0) 3 59 82 54 92<br/>+33 (0) 6 71 33 37 06
                        </p>
                    </div>
                    <div className="siegeSocial">
                        <h5 className="footerTitle">CÔTE D'IVOIRE</h5>
                        <p>
                            Abidjan XL Plateau Centre<br/>
                            Avenue Dr. CROZET, Immeuble XL,<br/>
                            6ème & 7 ème  étages, Plateau Abidjan,<br/>
                            01 BP 2785 Abidjan 01, Cote d’Ivoire<br/>
                            +225 84 94 89 25
                        </p>
                    </div>
                    <div className="siegeSocial">
                        <h5 className="footerTitle">SENEGAL</h5>
                        <p>
                            1st Floor SIA Building, Route de Ngor<br/>
                            Les Almadies, Dakar<br/>
                            14790<br/>
                            +221 777 52 53 01
                        </p>
                    </div>
                    <div className="siegeSocial">
                        <h5 className="footerTitle">TOGO</h5>
                        <p>
                            Derrière la Polyclinique Saint Joseph,<br/>
                            Quartier Hédzranawoé<br/>
                            +228 91 38 49 12<br/>+228 96 35 53 07
                        </p>
                    </div>
                */}
                    <div className="siegeSocial">
                        <h5 className="footerTitle">Contact</h5>
                        <p>
                            contact@cdabcompass.com
                        </p>
                        {this.state.isAdmin && (
                            <div className={classes.adminColor}
                                onClick={()=>{window.location.href = '/panelAdmin'}}>
                                Gestions des utilisateurs
                            </div>
                        )}
                        {localStorage.getItem("situation")==="IntervenantCdab" && (
                            <div className={classes.adminColor}
                                 onClick={()=>{window.location.href = '/teacherPanel'}}>
                                Rapport
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FooterBar);
