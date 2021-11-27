import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';

import TokenApi from "./TokenApi";
import ReactGA from "react-ga";
import {
    IconFlagUS,
    IconFlagFR
} from 'material-ui-flags';
import translate from "../i18n/messages/translate";
import {LOCALES,IntlProvider} from "../i18n";
import { Toolbar } from '@material-ui/core';


// On va créer des fonctions contnenant les textes



class Translate extends Component {
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

handleClose = (e) => {
  this.setState({
      anchor: null,
  })
};

changeLangue = (lg) =>{
    localStorage.setItem("locale_lg",lg);
    console.log("test test test "+localStorage.getItem("locale_lg"));
   
    this.setState({locale: localStorage.getItem("locale_lg") });
}

    render() {
        return (
            <div>
            <div>
                <IntlProvider>
                    {/*Ici seront inscrit tout le contenu */}
                </IntlProvider>
            </div>



            <div >
                <Toolbar>
                <IconButton onClick={()=>this.changeLangue(LOCALES.FRENCH)}><IconFlagFR /></IconButton>
                <IconButton onClick={()=>this.changeLangue(LOCALES.ENGLISH)}><IconFlagUS /></IconButton>
                </Toolbar>
            </div>
            </div>
        )
    }
}

export default Translate
