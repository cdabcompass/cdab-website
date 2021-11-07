import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

function FooterAddress(props) {
    return (
        <div>
                  
                  <div className="footBar">
                    <div className="footer">
                    <Grid container spacing={1} justify="flex-end" direction="row">
                        
                        <div>
                        <h1>Adresses</h1>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Item style =  {{background : '#222222' }}>
                                    <div className="siegeSocial">
                                        <h5 className="footerTitle">FRANCE (SIEGE SOCIAL)</h5>
                                        <p>
                                            1, Place de la Gare<br/>
                                            59000 Lille<br/>
                                            +33 (0) 3 59 82 54 92<br/>+33 (0) 6 71 33 37 06
                                        </p>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item style =  {{background : '#222222' }}>
                                    <div className="siegeSocial">
                                        <h5 className="footerTitle">CÔTE D'IVOIRE</h5>
                                        <p>
                                        Abidjan XL Plateau Centre<br/>
                                        Avenue Dr. CROZET, Immeuble XL,<br/>
                                        6ème & 7 ème  étages, Plateau Abidjan,<br/>
                                        01 BP 2785 Abidjan 01, Cote d’Ivoire +225 84 94 89 25<br/>
                                        
                                        </p>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item style =  {{background : '#222222' }}>
                                    <div className="siegeSocial">
                                        <h5 className="footerTitle">SENEGAL</h5>
                                        <p>
                                        1st Floor SIA Building, Route de Ngor<br/>
                                        Les Almadies, Dakar<br/>
                                        14790<br/>
                                        +221 777 52 53 01
                                        </p>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item style =  {{background : '#222222' }}>
                                    <div className="siegeSocial">
                                        <h5 className="footerTitle">TOGO</h5>
                                        <p>
                                        Derrière la Polyclinique Saint Joseph,<br/>
                                        Quartier Hédzranawoé<br/>
                                        +228 91 38 49 12<br/>+228 96 35 53 07
                                        </p>
                                    </div>
                                </Item>
                            </Grid>
                            
                        </Grid>
    
                        </div>
    
                    </Grid>
                    </div>      
                </div>

        </div>
    )
}

FooterAddress.propTypes = {

}

export default FooterAddress

