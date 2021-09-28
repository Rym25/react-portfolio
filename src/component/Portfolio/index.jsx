import React, { useState } from "react";
import Project from "./Project";

const Portfolio = () => {

    const projects = [
        {name:'Quixotic Quizzes', imgPath:'quixotic.jpg', gitUrl:'https://github.com/peterjinchristiansen/Quixotic', hostUrl:'https://secure-oasis-07613.herokuapp.com/'},
        {name:'Random of the Day', imgPath:'RofD.png', gitUrl:'https://github.com/cactido/project-1', hostUrl:'https://cactido.github.io/project-1/index.html?='},
        {name:'Regex Tutorial', imgPath:'Regex-Tutorial.jpg', gitUrl:'https://gist.github.com/Rym25/df7fe30455914ca4f38dfb7101c5dd28', hostUrl:'https://gist.github.com/Rym25/df7fe30455914ca4f38dfb7101c5dd28'},
        {name:'Weather Dashboard', imgPath:'Weather-Dashboard.jpg', gitUrl:'https://github.com/Rym25/Weather-Dashboard', hostUrl:'https://rym25.github.io/Weather-Dashboard/'},
        {name:'Password Generatot', imgPath:'Password-Generator.jpg', gitUrl:'https://github.com/Rym25/Password-Generator', hostUrl:'https://rym25.github.io/Password-Generator/'},
        {name:'Note Taker', imgPath:'Note-Taker.jpg', gitUrl:'https://github.com/Rym25/Note-Taker', hostUrl:' https://peaceful-reef-11603.herokuapp.com/'},
    ]

    return (
        <div className="section">
            <h1>Portfolio</h1>
            <Project projects = {projects}></Project>
        </div>
    )
}

export default Portfolio;