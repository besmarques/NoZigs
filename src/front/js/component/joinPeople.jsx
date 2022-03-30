import React from "react";
import MyCard from "./card.jsx";
import CardImg1 from "../../img/CardImg1.png";
import CardImg2 from "../../img/CardImg2.png";
import CardImg3 from "../../img/CardImg3.png";
import CardImg4 from "../../img/CardImg4.png";
import CardImg5 from "../../img/CardImg5.png";
import CardImg6 from "../../img/CardImg6.png";
import CardImg7 from "../../img/CardImg7.png";

const JoinPeople = () => {

    return (
        <>
        <div className="jnow-description d-flex flex-column align-items-center">
            <p className="text-center">
                Join 10,000+ people already saving time while exploring
            </p>
        </div>

        <br></br>

        <div>
            <div class="row row-cols-auto justify-content-md-center">
                <div class="col"><MyCard name="Megan Sims" linkname="Vahid Kanani" img={CardImg1}/></div>
                <div class="col"><MyCard name="Ryan Fox" linkname="Italo Melo" img={CardImg2}/></div>
                <div class="col"><MyCard name="Mason Phillips" linkname="Gustavo Leighton" img={CardImg3}/></div>
                <div class="col col-md-auto"><MyCard name="Zoe Silva" linkname="Polina Kovaleva" img={CardImg4} /></div>
                <div class="col"><MyCard name="Amanda Carr" linkname="Tyler Nix" img={CardImg5}/></div>
                <div class="col"><MyCard name="Harley White" linkname="Andrey Z." img={CardImg6}/></div>
                <div class="col"><MyCard name="Amelie Cooper" linkname="Artem Podrez" img={CardImg7}/></div>
            </div>
        </div>
        </>

    );
};

export default JoinPeople;