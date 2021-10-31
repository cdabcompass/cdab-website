import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Paper, MenuList, MenuItem } from '@mui/material';
import Sidebar from './Sidebar';

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
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}}
        onClick={handleClick}
      >
        CDAB
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
          href="/nos_produits"
        >Nos produits</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/nos_realisations"
        >Nos realisations</Button>
        <br/>
        <Button
          style = {{textTransform: 'none', backgroundColor :'white',  fontSize: '16px',  color : 'black'}}
          onClick={handleClose}
          href="/nos_locaux"
        >Nos locaux</Button>
        <br/>
      </Menu>

     {/* <Sidebar/> */}

    </div>
  );
}
