import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Log from './Log';
import Deroul from './Deroul';
import './Comp.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    IconFlagUS,
    IconFlagFR
} from 'material-ui-flags';

const styles = themes => ({
  apbar: {
      flexGrow: 1,

  },

})


function Header() {
  return (
    <div >
      <AppBar style =  {{background : '#000000' }} elevation={0} >
        <Toolbar >
          <Button href="/"> <Log/> </Button>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Deroul/>
            <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/expertises">Nos expertises</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/training">Training</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="/coaching">Coach cdab</Button>
          <Button style = {{textTransform: 'none', fontSize: '16px',  color : 'white'}} href="#">Contact</Button>
          <Button style =  {{background : '#e59033', color : 'white' }} href="/connexion">Connexion  <AccountCircleIcon/> </Button>
          {/*<Button style =  {{background : '#5c120f', color : 'white' }}> <AddCircleIcon/> </Button>*/}

          </Grid>
          <IconButton><IconFlagFR /></IconButton>
          <IconButton><IconFlagUS /></IconButton>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
