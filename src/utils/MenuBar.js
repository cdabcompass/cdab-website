import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {withStyles} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import TokenApi from "./TokenApi";
import ReactGA from "react-ga";
import Helmet from "react-helmet";

const styles = theme => ({
    logo:{
        width: "186px",
        height: "100px",
    },
    imglogo:{
        // width: 100,
        height: 100,
        cursor: "pointer"
    },
    apbar: {
        flexGrow: 1,
        backgroundColor: "#000",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#EDBA2D",
        cursor: "pointer",
        textAlign: "start"
    },
    btnMenu: {
        color: "white",
        '&:hover': {
            // textDecoration: 'underline',
            color: "#E58F1E"
        },
    },
    btnSubMenu: {
        color: "black",
        '&:hover': {
            // textDecoration: 'underline',
            color: "#E58F1E"
        },
    },
});

class MenuBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchor: false,
            auth: false,
        };
    }

    componentDidMount() {
        ReactGA.initialize('UA-179270106-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        // console.log("route : "+window.location.pathname + window.location.search)

        if(localStorage.getItem("token") !== null){
            this.setState({auth: true})
        }
        //alert("auth : "+this.state.auth + " token : "+localStorage.getItem("token"))
    }

    handleMenu = (e) => {
        this.setState({
            anchor: e.currentTarget,
        });
    };

    handleClose = (e) => {
      this.setState({
          anchor: null,
      })
    };

    disconnect = () => {
        TokenApi.logout();
        window.location = "/connexion";
    };

    homePage = () => {
        window.location = "/";
    };
    render() {
        const {classes} = this.props;
        return (
            <AppBar className="apbar">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CDAB COMPASS</title>
                </Helmet>

                <Toolbar className="dv-toolbar">
                    <div className="logo">
                        <img onClick={this.homePage} className={classes.imglogo} src={require("../assets/logo.png")} alt=""/>
                    </div>
                    <Typography onClick={this.homePage} variant="h4" className="title">
                        Qui sommes-nous
                    </Typography>
                    <Button className={classes.btnMenu} href="/expertises" color="inherit">Nos expertises</Button>
                    <Button className={classes.btnMenu} href="/training" color="inherit">Training</Button>
                    <Button className={classes.btnMenu} href="/coaching" color="inherit">Coach-cdab</Button>
                    <Button className={classes.btnMenu} href="/nos_produits" color="inherit">Nos produits/Nos evenements</Button>
                    <Button className={classes.btnMenu} href="/nos_realisations" color="inherit">Nos réalisations</Button>
                    <Button className={classes.btnMenu} href="/nos_locaux" color="inherit">Nos locaux</Button>
                    {this.state.auth && (

                        <Button className={classes.btnMenu} onClick={this.disconnect}>Déconnexion</Button>)}
                    {!this.state.auth && (
                        <Button className={classes.btnMenu}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                        >
                            Connexion-Inscription
                        </Button>)}
                    <Popover
                        id="simple-menu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorEl={this.state.anchor}
                        // keepMounted
                        open={Boolean(this.state.anchor)}
                        onClose={this.handleClose}
                    >
                        {!this.state.auth &&(
                            <div>
                                <Button className={classes.btnSubMenu} style={{display: "block",width:"100%"}} href="/connexion">Connexion</Button>
                                <Button className={classes.btnSubMenu} href="/inscription">Inscription</Button>
                            </div>
                        )}
                    </Popover>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MenuBar);
