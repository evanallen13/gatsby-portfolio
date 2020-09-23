import React from "react"
import Nav from '../components/nav/nav'
import Hamburger from '../components/nav/hamburger'
import Footer from '../components/footer/footer'
import '../styles/index.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'; 

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1>Evan Allen</h1>
            {/* <Nav
                btnColor = {'#f3f0e2'}
                color = {'#2e364f'}
                page1 = {['/about','About']}
                page2 = {['/projects','Projects']}
            ></Nav> */}
            <Hamburger></Hamburger>

            <Footer></Footer>
        </div>
    )
}

export default Homepage;
