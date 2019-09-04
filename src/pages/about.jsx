import React from 'react';
import '../styles/about.css'
import Nav from '../components/nav/nav'

const About = () => {
    return (
        <div className='About'>
            <h4>About Me</h4>
            <Nav
                btnColor = {'rgb(45, 93, 124)'}
                color = {'#f3f0e2'}
            ></Nav>
            <div className="about">
                <p style={{marginTop: '10px'}}>I am a full stack developer living in the Los Angeles area.
                    Currently I am finishing up my last semester at CSULB for my Computer Information Systems degree.
                </p>
                <p>
                    I am lookin for postions
                </p>
            </div>
        </div>
    )
}

export default About;
