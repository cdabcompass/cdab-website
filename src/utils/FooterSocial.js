import React, { Component } from 'react'
import { Icon, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));


export default class FooterSocial extends Component {
    render() {
        return (
            <div className="footBar">
                <div className="footer">
                <Grid container spacing={1} justify="flex-end" direction="row">
                <div>
                    <h1> Nous suivre</h1>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                           <Item style =  {{background : '#222222' }}>
                            <Button
                                style =  {{background : '#0669e1', color : 'white', borderRadius: 10 }}
                                href="#"><FacebookIcon/>
                                    facebook
                            </Button>
                           </Item> 
                        </Grid>

                        <Grid item xs={6}>
                           <Item style =  {{background : '#222222' }}>
                            <Button
                                style =  {{background : '#1a8cd8', color : 'white', borderRadius: 10 }}
                                href="#"><TwitterIcon/>
                                    Twitter
                            </Button>
                           </Item> 
                        </Grid>

                        <Grid item xs={6}>
                           <Item style =  {{background : '#222222' }}>
                            <Button
                                style =  {{background : ' #8a3ab9', color : 'white', borderRadius: 10 }}
                                href="#"><InstagramIcon/>
                                    Instagram
                            </Button>
                           </Item> 
                        </Grid>
                    </Grid>
                </div>
                </Grid>
                




                </div>
                


            </div>
        )
    }
}
