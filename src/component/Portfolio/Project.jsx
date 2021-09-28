import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col } from 'reactstrap';

const Project = ({projects}) => {
    
    return (
        <div className="d-flex flex-wrap space-between">
        {projects.map((project) => (
            <Card className="project-card col-md-4 col-lg-3 col-12" key={projects.name}>
                <CardImg key={projects.name} width="100%" src={require(`../../assets/Projects/${project.imgPath}`).default} alt={`Image of the app ${project.name}`} />
                <CardImgOverlay>
                    <CardTitle key={projects.name} tag="h5">{project.name}</CardTitle>
                        <CardText key={projects.name}>
                            <a href={project.gitUrl}>GitHub</a>
                        </CardText>
                        {project.hostUrl && (
                            <CardText key={projects.name}>
                                <a href={project.hostUrl}>Site</a>
                            </CardText>
                        )}
                </CardImgOverlay>
            </Card>
        ))}
        </div>
    );
};

export default Project;