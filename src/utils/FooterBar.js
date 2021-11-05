import React, {Component} from 'react';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import {withStyles} from "@material-ui/core";
import FooterAddress from './FooterAddress';
import FooterSocial from './FooterSocial'
  

class FooterBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false
        }
    }

    render() {
        return (
            <div className="footBar">
              <div className="footer">
                <FooterAddress />
                <FooterSocial/>
              </div>
            </div>
         
        );
    }
}

export default FooterBar;
