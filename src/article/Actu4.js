import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";
import {IntlProvider} from "../i18n";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    table:{
        borderCollapse: "initial",
        border: "1px solid",
        margin: "0 auto",
    },
    td:{
        border: "1px solid",
        padding: "5px",
    },
    contain:{
        textAlign: "initial",
        marginLeft: "250px",
        marginRight: "250px",
        marginTop: "25px"
    }
});

class Actu4 extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <IntlProvider locale={localStorage.getItem("locale_lg")}>
                <div className={classes.container}>
                    <div>
                        <MenuBar/>
                    </div>
                    <div>
                        <ActuCustom
                            title={"Proclamation des résultats des examens de fin d’année : les taux de réussite une preuve du\n" +
                            "faible niveau scolaire des élèves."}
                            description={"Le ministère de l'éducation nationale, de l'enseignement technique et de la formation" +
                            "professionnelle a rendu public les résultats des examens scolaires session 2020 : " +
                            "\n\n- le BEPC : Brevet d';Etude du Premier Cycle le 28 juillet\n" +
                            "- le Baccalauréat le 14 août.\n" +
                            "\n\nConcernant le brevet, le taux de réussite est de 53,17% contre 57,31% l';an dernier. Pour le" +
                            "baccalauréat, le taux de réussite enregistré est de 40,08% contre 41,23% en 2019.On constate" +
                            "une baisse du taux de réussite. \n Certainement, cela est due à la crise sanitaire de Covid-19. Elle a" +
                            "occasionné un arrêt des cours sur environ deux mois. Beaucoup d’écoles n’ont pas su anticipé" +
                            "l’utilisation des nouvelles technologies de communication, par exemple les cours en ligne ou les" +
                            "visuels.\n" +
                            "Ce tableau récapitulatif du taux de réussite aux examens du BEPC et du Baccalauréat en Côte" +
                            "d’Ivoire cinq ans en arrière."}
                        />

                        <table className={classes.table}>
                            <tr>
                                <td className={classes.td}>Années/Taux de réussite</td>
                                <td className={classes.td}>2015</td>
                                <td className={classes.td}>2016</td>
                                <td className={classes.td}>2017</td>
                                <td className={classes.td}>2018</td>
                                <td className={classes.td}>2019</td>
                                <td className={classes.td}>2020</td>
                            </tr>
                            <tr>
                                <td className={classes.td}>BEPC</td>
                                <td className={classes.td}>58,62%</td>
                                <td className={classes.td}>59 ,11%</td>
                                <td className={classes.td}>60,08%</td>
                                <td className={classes.td}>60,14%</td>
                                <td className={classes.td}>57,31%</td>
                                <td className={classes.td}>53,17%</td>
                            </tr>
                            <tr>
                                <td className={classes.td}>BAC</td>
                                <td className={classes.td}>39,66%</td>
                                <td className={classes.td}>42,38%</td>
                                <td className={classes.td}>44,97%</td>
                                <td className={classes.td}>46,09%</td>
                                <td className={classes.td}>41,23%</td>
                                <td className={classes.td}>40,08%</td>
                            </tr>
                        </table>

                        <div className="contain">
                            Autrefois, l'obtention du baccalauréat était perçue en Côte d'Ivoire comme étant la consécration
                            des études secondaires et le début des études supérieures. Son obtention conférait à la personne
                            un statut d’élite, de personne responsable aux valeurs morales intègres. Aujourd’hui fort est de
                            constater le pas pris par des voies inappropriées comme le manque d’assiduité, de régularité dans
                            le travail conduisant à la tricherie, à la paresse, à la négligence.
                            Le système éducatif est confronté donc à cette forme d’attitude des apprenants, encouragée
                            parfois malheureusement par l’entourage de ces derniers. <br/><br/>
                            D'un autre côté, le manque de formation et de préparation du personnel éducatif par exemple les
                            enseignants adéquats, induit parfois à des erreurs dans l’élaboration des épreuves au niveau des
                            examens. <br/><br/>
                            Néanmoins les choses peuvent s'améliorer par une prise de conscience personnelle, ou collective
                            au niveau des différents acteurs en commençant par les élèves. <br/>
                            A cet effet, des structures pour aider les élèves existent. On peut citer ainsi CDAB COMPASS,
                            structure d'accompagnement en éducation. Leur expertise est un catalyseur permettant aux
                            parents et aux apprenants de parvenir à des résultats probants. Les apprenants seront ainsi
                            meilleurs avec un projet d’études et une vision professionnelle bien élaborés et pragmatiques.
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


export default withStyles(styles)(Actu4);
