import React from 'react';
import './About.css';
import myImage from './myImage.jpg';

function About(props) {
    return (
        <>
            <div className="profile">
                <img src={myImage} alt="Profile" id="pic" />
                <h1>Navaneeth V</h1>
                <h3>MERN Stack Developer</h3>
            </div>
            <p>Aspiring Developer</p>
        </>
    );
}

export default About;