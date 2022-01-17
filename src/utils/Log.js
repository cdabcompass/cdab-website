import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import {LOCALES,IntlProvider} from "../../src/i18n";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  logo:{
      width: "186px",
      height: "100px",
  },
  imglogo:{
      // width: 100,
      height: 100,
      cursor: "pointer"
  },
}));

function Home() {
    window.location = "/";
    console.log("le home page");
};

export default function Log() {

  const classes = useStyles();



  return (
    <div className={classes.root}>
    <div className="logo">
        <img className={classes.imglogo} onclick="Home()" src={require("../assets/logocdab.png")} alt=""/>
        
    </div>
    </div>
  );
}
