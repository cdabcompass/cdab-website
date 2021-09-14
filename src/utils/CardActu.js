import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const styles = theme => ({
    cardActu:{
        width: "90%",
        cursor: "pointer",
        margin: "0 auto",
        boxShadow: "4px 4px 20px 0px rgb(146 125 250 / 50%)",
        borderRadius: "10px",
        marginBottom: "5px",
        padding: "11px",
    },
    imgActu:{
        height: "150px"
    },
    titleCardActu: {
        marginBottom: "10px",
        marginTop: "30px",
        fontWeight: "bold",
        whiteSpace: "pre-line"
    },
    description: {
        height: "150px",
        textAlign: "justify"
    },
});

class CardActu extends Component {
    render() {
        const {classes,title,description,onclick,image} = this.props;
        return (
            <div>
                <Card onClick={onclick} className={classes.cardActu}>
                    <div>
                        <div className={classes.titleCardActu} variant="h5" component="h2">
                            {title}
                        </div>
                        <div className={classes.description} variant="body2" component="p">
                            {description}
                        </div>
                        <PlayCircleOutlineIcon style={{fill: "#fd7137", fontSize: 30}}/>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CardActu);
