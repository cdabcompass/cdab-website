import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import CardCustom from "../utils/CardCustom";
import translate from "../i18n/messages/translate";
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

class ProductsEvents extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/nos_produits_evenements"+path;
    };

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
                            <p className={classes.title}>{translate("Nos_produits_Nos_evenements")}</p>
                        </div>
                        <br/>
                        {localStorage.getItem("locale_lg")==="fr-fr" &&(
                            <div className='productsEvents'>
                                <CardCustom
                                    // icon={<AccountCircleIcon/>}
                                    title={"Produits"}
                                    onclick={()=>{this.moreInfo("/produits")}}
                                />
                                <br/>
                                <br/>
                                <CardCustom
                                    // icon={<AccountCircleIcon/>}
                                    title={"Evenements"}
                                    onclick={()=>{this.moreInfo("/evenements")}}
                                />
                            </div>
                        )}
                        {localStorage.getItem("locale_lg")==="en-us" &&(
                            <div className='productsEvents'>
                                <CardCustom
                                    // icon={<AccountCircleIcon/>}
                                    title={"Products"}
                                    onclick={()=>{this.moreInfo("/produits")}}
                                />
                                <br/>
                                <br/>
                                <CardCustom
                                    // icon={<AccountCircleIcon/>}
                                    title={"Events"}
                                    onclick={()=>{this.moreInfo("/evenements")}}
                                />
                            </div>
                        )}
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


export default withStyles(styles)(ProductsEvents);
