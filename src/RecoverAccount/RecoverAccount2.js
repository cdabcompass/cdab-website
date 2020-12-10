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

class RecoverAccount2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            errCode: "",
            errPassword: "",
            code: "",
            password: "",
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/users/recoverAccount/2',{
            email: localStorage.getItem("userMail"),
            confirmationCode: this.state.code,
            password: this.state.password
        })
            .then(res=>{
                if(res.status === 200){
                    alert("Vous pouvez vous connecter avec votre nouveau mot de passe");
                    window.location.href = "/connexion"
                }
            })
            .catch(err=>{
                if(err.response.status === 401){
                    alert("Vérifiez votre addresse mail");
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
                        Vous recevrez un code sur cette addresse mail pour changer votre mot de passe.
                    </div>
                    <div className={classes.contain}>
                        <form onSubmit={this.handleSubmit}>
                            <InputCustom
                                name={"code"}
                                value={this.state.code}
                                placeholder="Code"
                                errorText={this.state.errCode}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                            />
                            <InputCustom
                                name={"password"}
                                value={this.state.password}
                                placeholder="Nouveau mot de passe"
                                errorText={this.state.errPassword}
                                onChange={this.handleChange}
                                type={"password"}
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


export default withStyles(styles)(RecoverAccount2);
