import React from 'react'
import { Link } from 'gatsby'

const Nav = (props) => 
    <div>
        <button className='navBtn' 
            style={{backgroundColor : props.btnColor}}>
            <Link to='/projects'style={{textDecoration:'none',color: props.color}}>Projects</Link>
        </button>
        <button className='navBtn' style={{backgroundColor : props.btnColor}}>
            <Link to='/about'style={{textDecoration:'none',color: props.color}}>About</Link>
        </button>
        <button className='navBtn' style={{backgroundColor : props.btnColor}}>
            <a href='resume.pdf' download="Evan_Allen_Resume" style={{textDecoration:'none',color: props.color}}>Resume.pdf</a>
        </button>
    </div>


export default Nav;