import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import axios from 'axios';
import InputCustom from "../utils/InputCustom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    contain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "20px"
    },
});

class RecoverAccount1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            errEmail: "",
            email: "",
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/users/recoverAccount/1',{
            email: this.state.email,
        })
            .then(res=>{
                if(res.status === 200){
                    localStorage.setItem("userMail",this.state.email);
                    window.location.href = "/recuperation/compte/2"
                }else{
                    alert(res.data.text);
                }
            })
            .catch(err=>{
                if(err.response.status === 401){
                    console.log("Err = "+err.response.data.text)
                    alert(err.response.data.text);
                }else{
                    alert("Erreur"+err)
                }
            })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>
                    <div className={classes.title}>
                        Vous recevrez une code sur cette addresse mail pour changer votre mot de passe.
                    </div>
                    <div className={classes.contain}>
                        <form onSubmit={this.handleSubmit}>
                            <InputCustom
                                name={"email"}
                                value={this.state.email}
                                placeholder="Example@mail.com"
                                errorText={this.state.errEmail}
                                onChange={this.handleChange}
                                type={"email"}
                                required={true}
                            />
                            <Button type="submit" variant="contained">Valider</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(RecoverAccount1);
