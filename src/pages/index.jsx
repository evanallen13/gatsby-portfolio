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
            ></Nav>
            {/* <div>
                <button className='navBtn'>
                    <Link to='/projects'style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>Projects</Link>
                </button>
                <button className='navBtn'>
                    <Link to='/about'style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>About</Link>
                </button>
                <button className='navBtn'>
                    <a href='resume.pdf' download="Evan_Allen_Resume" style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>Resume.pdf</a>
                </button>
            </div> */}
        </div>
    )
}

export default Homepage;
