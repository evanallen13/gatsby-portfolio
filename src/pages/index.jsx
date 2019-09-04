import React from "react"
import Nav from '../components/nav/nav'
import '../styles/index.css'

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1>Evan Allen</h1>
            <Nav
                btnColor = {'#f3f0e2'}
                color = {'rgb(45, 93, 124)'}
                page1 = {['/about','About']}
                page2 = {['/projects','Projects']}
            ></Nav>
            <div className="contact">
                <a href='https://github.com/evanallen13' target='_blank'>
                    <img src="/header/github.png"></img>
                </a>
                <a href='tel:7142642562' target='_blank'>
                    <img src="/header/call.png"></img>
                </a>
                <a href='mailto:evanallen13@gmail.com' target='_blank'>
                    <img src="/header/gmail.png"></img>
                </a>
            </div>
        </div>
    )
}

export default Homepage;
