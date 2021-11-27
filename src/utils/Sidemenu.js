import React from 'react'

import Button from "react-bootstrap/Button";
import translate from "../i18n/messages/translate";
import Grid from "@material-ui/core/Grid";
import '../index.css';

function Sidemenu(){
  return(
    <div style = {{position: 'absolute', zIndex: '10', opacity: '0.85', width : '200px', height: '380px',background : '#FFC300'  , marginTop: '110px', marginLeft: '50px', alignText: 'center'}} className="responsiveMenu">
        <Grid style =  {{}}   container   direction="column">

        <Button style = {{border: '1px solid white',background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/cdab/plus_infos"><strong>{translate("QUI_SOMMES_NOUS")}</strong></Button>
        <hr style = {{border: '1px solid white', width : '160px'}}/>
        <Button style = {{border: '1px solid white',background : '#FFC300', textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_produits_evenements/produits"><strong>{translate("Nos_produits")}</strong></Button>
        <hr style = {{border: '1px solid white', width : '160px'}}/>
        <Button style = {{border: '1px solid white',background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_produits_evenements/evenements"><strong>{translate("Nos_evenements")}</strong></Button>
        <hr style = {{border: '1px solid white', width : '160px'}}/>
        
        <Button style = {{border: '1px solid white', background : '#FFC300',textTransform: 'none', fontSize: '16px',  margin: '10px', color : 'white'}} href="/nos_locaux"><strong>{translate("Nos_locaux")}</strong></Button>
          
        </Grid>
    </div>
  );
}

export default Sidemenu;