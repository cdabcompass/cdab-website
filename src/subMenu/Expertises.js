import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ExpertisesComponents from "../utils/ExpertisesComponents";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";
import translate from "../i18n/messages/translate";
import {IntlProvider} from "../i18n";
import Sidemenu from "../utils/Sidemenu";

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
    subTitle: {}
});

class Expertises extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <Sidemenu/>
                <div className={classes.container}>
                    <Helmet>
                        <meta charSet="utf-8"/>
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

                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.titles}>
                            <p className={classes.title}>{translate("NOS_EXPERTISES")}</p>
                            <p className={classes.subTitle}>{translate("Expr_desc")}</p>
                        </div>
                        <ExpertisesComponents/>
                    </div>
                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default withStyles(styles)(Expertises);
