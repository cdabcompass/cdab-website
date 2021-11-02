import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
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

class Evenements extends Component {
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
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.titles}>
                            <p className={classes.title}>Evenements</p>
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <h3>PARTENAIRES 2021 CDAB</h3>
                            <iframe width="906" height="518" src="https://www.youtube.com/embed/sq5dqYecyLA" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <br/>
                            <h3>REPAS DE NOEL 2020 CDAB COMPASS</h3>
                            <iframe width="876" height="490" src="https://www.youtube.com/embed/CcFIIx-g5-g" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <br/>
                            <h3>ANNONCE REPAS DE NOEL 2020</h3>
                            <iframe width="858" height="442" src="https://www.youtube.com/embed/-fYZlPa2ZM4" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


export default withStyles(styles)(Evenements);
