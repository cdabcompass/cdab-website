import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import TouchAppIcon from '@material-ui/icons/TouchApp';

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
        height: "100%",
        width: "100%"
    },
    titleCardActu: {
        marginBottom: "10px",
        marginTop: "30px",
        fontWeight: "bold",
        whiteSpace: "pre-line"
    },
    description: {
        //height: "150px",
        textAlign: "justify"
    },
    readMore: {
        boxShadow: "4px 4px 20px 0px rgb(212 212 212 / 31%)",
        width: "150px",
        padding: "5px",
        borderRadius: "5px",
        '&:hover':{
            boxShadow: "4px 4px 20px 0px rgb(226 157 31 / 31%)",
        }
    },
});

class CardActu extends Component {
    render() {
        const {classes,title,description,onclick,image} = this.props;
        return (
            <div>
                <Card onClick={onclick} className={classes.cardActu}>
                    <div>
                        <div style={{width: "200px", height: "250px"}}>
                            <img className={classes.imgActu}
                                src={image}
                            />
                        </div>
                        <div className={classes.titleCardActu} variant="h5" component="h2">
                            {title}
                        </div>
                        <div className={classes.description} variant="body2" component="p">
                            {description}
                        </div>
                        <div className={classes.readMore}>
                            Read More <TouchAppIcon style={{fill: "#fd7137", fontSize: 30}}/>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CardActu);
