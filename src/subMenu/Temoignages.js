import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import CardCustom from "../utils/CardCustom";

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

class Temoignages extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/temoignages"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.titles}>
                        <p className={classes.title}>Evenements</p>
                    </div>
                    <br/>
                    <div className='productsEvents'>
                        <CardCustom
                            // icon={<AccountCircleIcon/>}
                            title={"Apprenants"}
                            onclick={()=>{this.moreInfo("/Apprenants")}}
                        />
                        <br/>
                        <br/>
                        <CardCustom
                            // icon={<AccountCircleIcon/>}
                            title={"Parents"}
                            onclick={()=>{this.moreInfo("/Parents")}}
                        />
                        <br/>
                        <br/>
                        <CardCustom
                            // icon={<AccountCircleIcon/>}
                            title={"Educateurs"}
                            onclick={()=>{this.moreInfo("/Educateurs")}}
                        />
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


export default withStyles(styles)(Temoignages);
