import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Log from './Log';
import Deroul from './Deroul';
import './Comp.css';
import '../index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TokenApi from "./TokenApi";
import ReactGA from "react-ga";
import {
    IconFlagUS,
    IconFlagFR
} from 'material-ui-flags';
import translate from "../i18n/messages/translate";
import {LOCALES,IntlProvider} from "../i18n";

import Translate from './Translate';

const styles = theme => ({
  
  apbar: {
      flexGrow: 1,

  },
  Menu: {
       
    "@media (max-width: 746px)": {
        visibility: "hidden"
    }
  },
    
    MenuMobile: {
       
      "@media (max-width: 746px)": {
          visibility: "visible"
      }
    },
});



class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        anchor: false,
        auth: false,
        openModal: false,
        locale: LOCALES.FRENCH
    };
}

componentDidMount() {
    ReactGA.initialize('UA-179270106-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log("route : "+window.location.pathname + window.location.search)

    if(localStorage.getItem("token") !== null){
        this.setState({auth: true})
    }
    if(localStorage.getItem("locale_lg")===null ||
        localStorage.getItem("locale_lg")===undefined){
        this.changeLangue(this.state.locale);
    }else {
        this.changeLangue(localStorage.getItem("locale_lg"));
    }
    //alert("auth : "+this.state.auth + " token : "+localStorage.getItem("token"))
}

handleMenu = (e) => {
    this.setState({
        anchor: e.currentTarget,
    });
};

specificPath = (path) =>{
  if(localStorage.getItem("token") !== null){
      window.location.href = "/quiz"+path;
  }else{
      alert("Veuillez tout d'abord créer un compte ou vous connecter!");
      window.location.href = '/connexion';
  }
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

changeLangue = (lg) =>{
    localStorage.setItem("locale_lg",lg);
    console.log("test test test "+localStorage.getItem("locale_lg"));
   
    this.setState({locale: localStorage.getItem("locale_lg") });
}

 
  render() {
    
    return (
      <div>
      <IntlProvider locale={this.state.locale}>
      <AppBar style =  {{background : '#7c1c18', height: "100px"}} elevation={0} >
        <Toolbar>
          <Button href="/"> <Log/> </Button>

          <Grid container alignItems="flex-start" justify="center" direction="row" className="responsiveMenu"  >

          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/">{translate("accueil")}</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/expertises">{translate("Nos_expertises")}</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/training">{translate("Training")}</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/coaching">{translate("Coach_cdab")}</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/nos_realisations">{translate("Nos_realisations")}</Button>
          { localStorage.getItem("situation") !== "Parent" && (
            <Button  
            style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}}
            
            onClick={() => this.specificPath("/principal_quiz")}
            >{translate("PASSER_VOTRE_TEST")}
            </Button>
            )}
            { localStorage.getItem("situation") === "Parent" && (
            <Button  
            style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}}
                    
                    onClick={() => this.specificPath("/parent1")}
            >{translate("PASSER_VOTRE_TEST")}
            </Button>
          )}
          </Grid>

          <Button className="responsiveMenu" style =  {{background : '#e59033', color : 'white', borderRadius: 20 }} href="/connexion"><AccountCircleIcon/>{translate("Connexion")}</Button>  
          <IconButton className="responsiveMenu"  onClick={()=>this.changeLangue(LOCALES.FRENCH)}><IconFlagFR /></IconButton>
          <IconButton className="responsiveMenu"  onClick={()=>this.changeLangue(LOCALES.ENGLISH)}><IconFlagUS /></IconButton>
           
          <Deroul/>

        </Toolbar>
      </AppBar>
      </IntlProvider>
    </div>
    )
  }
}


export default Header
