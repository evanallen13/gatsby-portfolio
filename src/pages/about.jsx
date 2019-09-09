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
                page1 = {['/','Home']}
                page2 = {['/projects','Projects']}
            ></Nav>
            <div className="about">
                <p style={{marginTop: '10px'}}>
                I am a front end developer living in the Los Angeles area. I attending my 
                last semester of my Computer Information Systems degree at CSULB. 
                </p>
                <p style={{marginTop: '10px'}}>
                I am looking for employment as a fullstack developer
                </p>
                <p style={{marginTop: '10px',marginBottom: '0', paddingBottom:'50px'}}>
                </p>
            </div>
        </div>
    )
}

export default About;
