import React from 'react';

const About = (props) => {
    return (
        <div>
            <h3>About Me</h3>
            <img src={require('../../assets/About/Biopic.png').default} alt="Picture of Ryely with dog Cash on lap" className="biopic" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero sapiente itaque quas in dolorum consequatur saepe explicabo cupiditate voluptatibus debitis sed ipsum consectetur, dolorem, aliquid velit voluptate alias minima?</p>
        </div>
    );
};

export default About;