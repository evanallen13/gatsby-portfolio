import React from 'react'
import { Link } from 'gatsby'

const Nav = (props) => 
    <div>
        <Link to='/'style={{textDecoration:'none'}}>
            <button className='navBtn' 
                style={{backgroundColor : props.btnColor,color: props.color}}>
                Home
            </button>
        </Link>
        <Link to='/projects'style={{textDecoration:'none'}}>
            <button className='navBtn' 
                style={{backgroundColor : props.btnColor,color: props.color}}>
                Project
            </button>
        </Link>

        <button className='navBtn' style={{backgroundColor : props.btnColor}}>
            <Link to='/about'style={{textDecoration:'none',color: props.color}}>About</Link>
        </button>
        <button className='navBtn' style={{backgroundColor : props.btnColor}}>
            <a href='resume.pdf' download="Evan_Allen_Resume" style={{textDecoration:'none',color: props.color}}>Resume.pdf</a>
        </button>
    </div>


export default Nav;