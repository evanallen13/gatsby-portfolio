import React from "react"
import Nav from '../components/nav/nav'
import '../styles/index.css'

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
                    <img src="/header/github.png" alt="github"></img>
                </a>
                <a href='tel:7142642562' target='_blank' rel="noopener noreferrer">
                    <img src="/header/call.png" alt="call"></img>
                </a>
                <a href='mailto:evanallen13@gmail.com' target='_blank' rel="noopener noreferrer">
                    <img src="/header/gmail.png" alt="email"></img>
                </a>
            </div>
        </div>
    )
}

export default Homepage;
