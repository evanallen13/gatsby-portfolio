import React from "react"
import Nav from '../components/nav/nav'
import '../styles/index.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'; 

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1>Evan Allen</h1>
            <Nav
                btnColor = {'#f3f0e2'}
                color = {'#2e364f'}
                page1 = {['/about','About']}
                page2 = {['/projects','Projects']}
            ></Nav>
            <div className="contact">
                <a href='https://github.com/evanallen13' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-github-square fa-4x" style={{color: '#ef5939'}}></i>
                </a>
                <a href='tel:7142642562' target='_blank' rel="noopener noreferrer">
                    <i class="fas fa-phone-square-alt fa-4x" style={{color: '#ef5939'}}></i>
                </a>
                <a href='mailto:evanallen13@gmail.com' target='_blank' rel="noopener noreferrer">
                    <i class="fas fa-envelope-square fa-4x" style={{color: '#ef5939'}}></i>
                </a>
                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-4x" style={{color: '#ef5939'}}></i>   
                </a>
            </div>
        </div>
    )
}

export default Homepage;
