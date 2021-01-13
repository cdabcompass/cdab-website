import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";

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

class Educateurs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.titles}>
                        <p className={classes.title}>Témoignages</p>
                    </div>
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <iframe width="876" height="490" src="https://www.youtube.com/embed/q6GArTQ_cbo" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <br/><br/>
                        <iframe width="858" height="483" src="https://www.youtube.com/embed/QEAOzuKMeyM" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <br/><br/>
                        <iframe width="858" height="483" src="https://www.youtube.com/embed/kvP5TiwUVq8" frameBorder="0"
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
        );
    }
}


export default withStyles(styles)(Educateurs);
