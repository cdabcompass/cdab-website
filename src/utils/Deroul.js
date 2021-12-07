import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import '../index.css';
import translate from "../i18n/messages/translate";
import TokenApi from "./TokenApi";




export default function Deroul() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const disconnect = () => {
    TokenApi.logout();
    window.location = "/connexion";
  };

 

  return (
    <div className="responsiveMobile">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}}
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

      >
        {localStorage.getItem("token") !== null && (
           <h6 style =  {{ color : 'black'}}>{translate("connecte_comme")} {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h6>  
        )}
        { localStorage.getItem("token") !== null && (
        <br/>   
        )}
        
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/">{translate("accueil")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/cdab/plus_infos">{translate("QUI_SOMMES_NOUS")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/expertises">{translate("Nos_expertises")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/training">{translate("Training")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/coaching">{translate("Coach_cdab")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/nos_realisations">{translate("Nos_realisations")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/nos_produits_evenements/produits">{translate("Nos_produits")}</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/nos_locaux">{translate("Nos_locaux")}</Button>
        <br/>

        {localStorage.getItem("situation") !== "Parent" && localStorage.getItem("token") !== null &&(
        <Button  
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}  
          href="/quiz/principal_quiz"
           >{translate("PASSER_VOTRE_TEST")}
         </Button> 
        )}

        {localStorage.getItem("situation") === "Parent" && localStorage.getItem("token") !== null &&(
        <Button  
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}   
          href="/quiz/parent1"          
          >{translate("PASSER_VOTRE_TEST")}
        </Button>
        )}
         
        <br/>

          {localStorage.getItem("token") === null && (
           <Button
           style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
           onClick={handleClose}
           href="/connexion">{translate("Login")}</Button>
          )}
 
          <br/>
          {localStorage.getItem("token") === null && (
           <Button
           style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
           onClick={handleClose}
           href="/inscription">{translate("Inscription")}</Button>
          )}

          {localStorage.getItem("token") !== null && (
           <Button
           style =  {{background : '#e59033', color : 'white', borderRadius: 20 }} 
           onClick={disconnect}>{translate("Deconnexion")}</Button>  
          
          )}
 
      </Menu>
     {/* <Sidebar/> */}

    </div>
  );
}
