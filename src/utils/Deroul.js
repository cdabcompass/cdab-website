import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Paper, MenuList, MenuItem } from '@mui/material';
import Sidebar from './Sidebar';
import '../index.css';
import translate from "../i18n/messages/translate";
import {
  IconFlagUS,
  IconFlagFR
} from 'material-ui-flags';
import {LOCALES,IntlProvider} from "../i18n";
import IconButton from '@material-ui/core/IconButton';

export default function Deroul() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/connexion">{translate("Connexion")}</Button>
        <br/>
 
      </Menu>

     {/* <Sidebar/> */}

    </div>
  );
}
