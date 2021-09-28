import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col } from 'reactstrap';

const Project = ({projects}) => {
    
    return (
        <div className="d-flex flex-wrap space-between">
        {projects.map((project) => (
            <Card className="project-card col-md-4 col-lg-3 col-12" key={project.name}>
                <CardImg src={require(`../../assets/Projects/${project.imgPath}`).default} alt={`Image of the app ${project.name}`} />
                <CardImgOverlay>
                    <CardTitle tag="h3"><a href={project.hostUrl}>{project.name}</a></CardTitle>
                        <CardText>
                            <a href={project.gitUrl}>GitHub</a>
                        </CardText>
                </CardImgOverlay>
            </Card>
        ))}
        </div>
    );
};

export default Project;