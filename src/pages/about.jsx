import React from 'react';
import '../styles/about.css'
import Nav from '../components/nav/nav'

const About = () => {
    return (
        <div className='About'>
            <h4>About Me</h4>
            <img src={'../../me/Head.png'} alt='headshot' style={{width : '80px',display:'inline',borderRadius:"50%"}}></img>
            <Nav
                color = {'rgb(45, 93, 124)'}
                btnColor = {'#f3f0e2'}
                page1 = {['/','Home']}
                page2 = {['/projects','Projects']}
            ></Nav>
               <div className="aboutText" >
                    <h5>Who am I?</h5>
                    <p>
                        I am a front end developer, living in the greater Los Angeles Area. 
                        I currently attend Cal State - Long Beach and am in my final semester as a Computer Information Systems major.
                        I served in the United States Army for four years prior to college. I am extremely detail oriented and process driven. Outside of building websites and coding, 
                        I enjoy hanging out with my rat terrier, Jaime, and pug, Pugh. 
                    </p>
                    <h5>Stack</h5>
                    <p>
                        I am currently utilizing a React and Firebase stack.
                        I am constantly working to expand my skills in these applications and to learn further programs. 
                        If you look through my projects on this site you can see my various skills in action.
                    </p>
                    <h5>Currently Seeking</h5>
                    <p>
                        I am currently seeking a role as a Front End Developer at a small to mid size company. 
                        My ideal role would challenge my already developed skills as well as help me to gain new skills. 
                        I am looking with in the Los Angeles/Orange County area.
                    </p>
                </div> 
                <img src={'../../me/me.png'} alt="me" style={{display:"inline",width:"30vw"}}></img>
        </div>
    )
}

export default About;

