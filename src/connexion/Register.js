import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import InputCustom from "../utils/InputCustom";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FooterBar from "../utils/FooterBar";
import Helmet from "react-helmet";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    signUp: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        // height: "700px"
    },
    formControl: {
        marginBottom: "10px",
        width: "100%"
    },
    selectBorder: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E58F1E !important'
        },
        color: "black"
    }
});

class Register extends Component {
    constructor(props){
        super(props);
        var today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ' ' +today.getHours() + ':' + today.getMinutes();

        this.state = {
            
            currentDateTime: date,

            errLastName: "",
            errFirstName: "",
            errEmail: "",
            errPassword: "",
            errConPassword: "",
            errNumber: "",
            errCountry: "",
            errCity: "",
            errSituation: "",
            errContinent: "",

            lastName: "",
            firstName: "",
            email: "",
            password: "",
            confirmPassword: "",
            number: "",
            country: "",
            city: "",
            situation: "",
            continent: ""
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            this.setState({errConPassword: "Vérifiez l'écriture de votre mot de passe"});
            alert("date "+this.state.currentDateTime);
        }else{
            axios.post('/users/inscription', {
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                email: this.state.email,
                password: this.state.password,
                number: this.state.number,
                country: this.state.country,
                city: this.state.city,
                situation: this.state.situation,
                continent: this.state.continent,
                DateRegistration: this.state.currentDateTime
            })
                .then(res => {
                    console.log("data" + JSON.stringify(res.data));
                    console.log("statusCode" + res.status);
                    console.log("statusCode" + res.data.status);

                    if(res.status === 200){
                        alert("Vous pouvez vous connecter!!!");
                        //localStorage.setItem("token",res.data.token);
                        setTimeout(
                            ()=>{window.location.href="/connexion"},
                            1000
                        )
                    }
                    // window.location = "/signIn"
                })
                .catch(err => {
                    if (err.response.status === 409){
                        alert("Ce compte existe déjà");
                        console.log("+ Ce compte existe déjà");
                    }
                    else if (err.response.status === 412){
                        alert("Adresse invalide");
                        console.log("+ Adresse invalide");
                    }
                    else if (err.response.status === 500){
                        alert("Internal erreur");
                        console.log("Internal erreur");
                    }else{
                        alert("Veuillez reprendre");
                        window.location.reload();
                    }
                })
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta
                            name="CDAB COMPASS"
                            content="CDAB COMPASS est une structure
                                éducative élaborant le profil de
                                l’apprenant. Du profil de l’apprenant,
                                tout se clarifie à l’horizon: le potentiel à
                                optimiser, le projet d’études à élaborer,
                                le monde professionnel à apprivoiser
                                selon le marché. A CDAB COMPASS,
                                nous détectons vos talents et les
                                mettons en valeur pour
                                assurer votre avenir!"
                        />
                    </Helmet>

                    <div>
                        <MenuBar/>
                    </div>
                    <div style={{marginTop: "200px"}}>
                        <div className={classes.signUp}>
                            <form onSubmit={this.handleSubmit}>
                                <InputCustom
                                    name={"lastName"}
                                    value={this.state.lastName}
                                    placeholder="Nom"
                                    errorText={this.state.errLastName}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"firstName"}
                                    value={this.state.firstName}
                                    placeholder="Prénom"
                                    errorText={this.state.errFirstName}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"email"}
                                    value={this.state.email}
                                    placeholder="Example@mail.com"
                                    errorText={this.state.errEmail}
                                    onChange={this.handleChange}
                                    type={"email"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"number"}
                                    value={this.state.number}
                                    placeholder="(+33) 605157614"
                                    errorText={this.state.errNumber}
                                    onChange={this.handleChange}
                                    type={"tel"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"country"}
                                    value={this.state.country}
                                    placeholder="Pays"
                                    errorText={this.state.errCountry}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"city"}
                                    value={this.state.city}
                                    placeholder="Ville"
                                    errorText={this.state.errCity}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={true}
                                />
                                <FormControl variant="outlined" className="formControl">
                                    <InputLabel htmlFor="outlined-age-native-simple">Continent</InputLabel>
                                    <Select
                                        native
                                        value={this.state.continent}
                                        onChange={this.handleChange}
                                        label="continent"
                                        inputProps={{
                                            name: 'continent',
                                            id: 'outlined-age-native-simple',
                                        }}
                                        className={classes.selectBorder}
                                        required={true}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"Afrique"}>Afrique</option>
                                        <option value={"Europe"}>Europe</option>
                                        <option value={"Asie"}>Asie</option>
                                        <option value={"Amerique"}>Amérique</option>
                                        <option value={"Oceanie"}>Océanie</option>
                                    </Select>
                                </FormControl>
                                <br/>
                                <FormControl variant="outlined" className="formControl">
                                    <InputLabel htmlFor="outlined-age-native-simple">Situation</InputLabel>
                                    <Select
                                        native
                                        value={this.state.situation}
                                        onChange={this.handleChange}
                                        label="situation"
                                        inputProps={{
                                            name: 'situation',
                                            id: 'outlined-age-native-simple',
                                        }}
                                        className={classes.selectBorder}
                                        required={true}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"Primaire"}>Primaire</option>
                                        <option value={"College"}>Collège</option>
                                        <option value={"Lycee"}>Lycée</option>
                                        <option value={"PostBac"}>Post-bac</option>
                                        <option value={"Parent"}>Parent</option>
                                        <option value={"IntervenantCdab"}>Prof-a-cdab</option>
                                    </Select>
                                </FormControl>
                                <br/>
                                <InputCustom
                                    name={"password"}
                                    value={this.state.password}
                                    placeholder="Mot de passe"
                                    errorText={this.state.errPassword}
                                    onChange={this.handleChange}
                                    type={"password"}
                                    required={true}
                                />
                                <InputCustom
                                    name={"confirmPassword"}
                                    value={this.state.confirmPassword}
                                    placeholder="Confirme mot de passe"
                                    errorText={this.state.errConPassword}
                                    onChange={this.handleChange}
                                    type={"password"}
                                    required={true}
                                />
                                <br/>
                                <Button type="submit" variant="contained">Créer mon compte</Button>
                                <br/><br/>
                                <p>Vous avez déjà un compte ? <a style={{color: "#FF5722"}} href="/connexion">Connectez-vous</a></p>
                            </form>
                        </div>
                    </div>

                    <div>
                        <FooterBar/>
                    </div>
                </div>
            </IntlProvider>

        );
    }
}


export default withStyles(styles)(Register);
