import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    titles: {
        marginBottom: "100px",
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
});

class StudentProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px",marginLeft: "200px",marginRight: "200px"}}>

                        <div className={classes.titles}>
                            <p className={classes.title}>RAPPORT D'ACTIVITÉ</p>
                        </div>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2016 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1Dg4ptHf2h7mulvi8NVGh0Ea-YRy21VoV/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2016 2-Rapport CDAB RAPPORT TRIMESTRIEL T2
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/17m_Z_4VV5aspf2jFMT7jgoklqwrHcmM_/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2016 3-Rapport CDAB RAPPORT TRIMESTRIEL T3
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/16DaW-Cxe6XiqktGk9tgjA6PsItiYNCoO/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2016 4-Rapport CDAB RAPPORT TRIMESTRIEL T4
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1_mtPJfP7kLbW1lQypAq2OuqdCdzk4bTS/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2017 2-Rapport CDAB RAPPORT TRIMESTRIEL T2
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1qdtbsBi2hvAX7jGKfhXktNYfUsKOu8A7/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2017 3-Rapport CDAB RAPPORT TRIMESTRIEL T3
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1Loesg4kDwDLkk0rdjD3m_A4VjhJ_GU0S/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2017 4-Rapport CDAB RAPPORT TRIMESTRIEL T4
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1QEyhTAWuBFKX3ek_kwufp3R0w7u2PbX0/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2018 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/17_PpPRlylSxSAYXbAknrJlqqEver4K4p/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    2019 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a target="_blank" href={"https://drive.google.com/file/d/1BBEeHETzw_b1-QYNOac2J7OkdYcgHyIp/view?usp=sharing"}>Voir le contenu</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(StudentProfil);
