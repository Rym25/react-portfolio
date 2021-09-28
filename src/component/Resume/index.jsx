import React from "react";

const Resume = () => {

    return (
        <div className='section'>
            <h1>Resume</h1>
            <span>Download My Resume: </span><a href={require("../../assets/Resume/Resume.txt").default} download>Resume</a>
            <br></br>
            <br></br>
            <h5>Front-End Proficiency</h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Reactstrap</li>
            </ul>
            <br></br>
            <h5>Back-End Proficiency</h5>
            <ul>
                <li>MySQL</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Node.js</li>
            </ul>

        </div>
        
    )
}

export default Resume;