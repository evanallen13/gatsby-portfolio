import React from "react"
import { Link } from 'gatsby'
import '../styles/index.css'

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1>Evan Allen</h1>
            <div>
                <button className='navBtn'>
                    <Link to='/projects'style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>Projects</Link>
                </button>
                <button className='navBtn'>
                    <Link to='/about'style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>About</Link>
                </button>
                <button className='navBtn'>
                    <Link to='/projects' style={{textDecoration:'none',color: 'rgb(45, 93, 124)'}}>Resume.pdf</Link>
                </button>
            </div>
        </div>
    )
}

export default Homepage;
