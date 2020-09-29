import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ExpertisesComponents from "../utils/ExpertisesComponents";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";

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
    subTitle:{

    }
});

class Expertises extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CDAB COMPASS</title>
                    <meta
                        name="CDAB COMPASS"
                        content="Déterminer le profil de
                                l’apprenant, la base pour
                                développer son potentiel et
                                explorer ses talents.
                                Profil de l’enfant
                                Attention - Représentation
                                Évocation -Image mentale
                                "
                    />
                </Helmet>

                <div >
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.titles}>
                        <p className={classes.title}>NOS EXPERTISES</p>
                        <p className={classes.subTitle}>Nous vous accompagnons durant chacun de ces processus</p>
                    </div>
                    <ExpertisesComponents/>
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Expertises);
