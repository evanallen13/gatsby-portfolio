import React from 'react';
import '../styles/about.css'
import Nav from '../components/nav/nav'
import head from '../../static/me/head.png'
import army from '../../static/me/army.jpg'

const About = () => {
    return (
        <div className='About'>
            <h4>About Me</h4>
            <img src={head} alt='headshot' style={{width : '80px',display:'inline',borderRadius:"50%"}}></img>
            <Nav
                color = {'rgb(45, 93, 124)'}
                btnColor = {'#f3f0e2'}
                page1 = {['/','Home']}
                page2 = {['/projects','Projects']}
            ></Nav>
               <div className="aboutText" >
                    <h5>Who am I?</h5>
                    <p>
                    I am a front end developer living in the Los Angeles area. I attending my 
                    last semester of my Computer Information Systems degree at CSULB. 
                    </p>
                    <p>
                    I am looking for employment as a fullstack developer
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dolor iusto repellendus omnis unde soluta reiciendis, porro, dolore id magnam tempora quae officiis nam eveniet delectus perferendis cum in sint.
                    </p>
                </div> 
                <img className="image"src={army} alt='me'></img>
        </div>
    )
}

export default About;
