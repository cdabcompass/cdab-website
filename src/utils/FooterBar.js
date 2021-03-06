import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    adminColor: {
        cursor: 'pointer',
        color: '#ffeb3b',
        fontWeight: 'bold'
    }
});

class FooterBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem("email") === "admin@cdabcompass.com"
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
