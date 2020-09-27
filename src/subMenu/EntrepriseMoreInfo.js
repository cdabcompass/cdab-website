//EntrepriseMoreInfo
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import MenuBar from "../utils/MenuBar";
import FooterBar from "../utils/FooterBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containDetails: {
        display: "flex",
        flexDirection: "row",
        marginTop: "100px"
    }
});

class EntrepriseMoreInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div>
                    <div className="contAll">
                        <h1>QUI SOMMES NOUS ?</h1>
                        <div className={classes.containDetails}>
                            <div style={{textAlign: "justify"}}>
                                <div>
                                    La structure éducative CDAB COMPASS, spécialisée dans l’accompagnement et l’orientation des
                                    apprenants sur tous les plans scolaire, universitaire et même professionnel, aide les apprenants à
                                    renforcer leur niveau et à s’orienter pour atteindre leur objectif professionnel. En effet, elle
                                    détermine et constitue le socle des apprenants vers un monde professionnel adéquat. En la matière,
                                    elle est dotée d’une expérience de plus de dix ans (10 ans) ayant fait ses preuves en France, au
                                    Sénégal, en Côte d’Ivoire et au Togo. La vision de la structure est de permettre à chaque apprenant
                                    d’avoir un parcours méthodique de son avenir professionnel. Cela via le projet d’études qui lui
                                    permet d’être autonome et responsable.
                                </div>
                                <br/>
                                <div>
                                    <ul>
                                        <li>
                                            Notre objectif est de permettre à vos enfants de facto nos apprenants d’optimiser leurs
                                            potentiels, excéder leurs capacités dans une approche personnalisée. Cela leur permet
                                            ensuite d’affronter sereinement la vie scolaire aujourd’hui et l’univers étudiant qui en suit
                                            et le monde professionnel de demain.
                                        </li>
                                        <li>
                                            Notre succès, nous vient du sérieux avec lequel nous accompagnons nos apprenants en se
                                            basant sur le projet d’études élaboré. Par conséquent les notions d’autonomie et de
                                            responsabilité leur sont progressivement dispensées.
                                        </li>
                                        <li>
                                            La personnalité de l’apprenant est un élément clé dans lequel les facteurs suivants sont
                                            pris en considération l’écoute, la concentration, l’encadrement, l’intérêt, l’aptitude, les
                                            valeurs.
                                        </li>
                                    </ul>
                                </div>
                                <br/>
                                <div>
                                    Dans la dynamique d’atteindre l’objectif professionnel, une équipe composée d’accompagnateurs,
                                    de formateurs, de répétiteurs ou professeurs de soutien scolaire, de psychologues et d’éducateurs,
                                    est mise à disposition de l’apprenant. Afin d’atteindre cet objectif, la structure éducative CDAB
                                    COMPASS se base sur les trois points comme le projet d’accompagnement scolaire et
                                    universitaire, un accompagnement sur mesure permettant l’écoute, la concentration,
                                    l’encadrement, la rapidité à acquérir, l’autonomie et la responsabilité. Ces points permettent aux
                                    familles et aux apprenants de s’épanouir et de se projeter avec assurance dans l’avenir.
                                </div>
                                <br/>
                                <div>
                                    Somme toute, notre expertise démontrée dans le milieu de l’éducation, fait de CDAB COMPASS
                                    la référence. Une référence nationale et internationale au travers de résultats qui sont obtenus avec
                                    rigueur, efficacité et pragmatisme.
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(EntrepriseMoreInfo);
