import React from 'react'
import { Link } from 'gatsby'
import Resume from '../../../static/Resume.pdf'

const Nav = (props) => 
    <div>
        <Link to={props.page1[0]}style={{textDecoration:'none'}}>
            <button className='navBtn' 
                style={{backgroundColor : props.btnColor,color: props.color}}>
                {props.page1[1]}
            </button>
        </Link>
        <Link to={props.page2[0]}style={{textDecoration:'none'}}>
            <button className='navBtn' 
                style={{backgroundColor : props.btnColor,color: props.color}}>
                {props.page2[1]}
            </button>
        </Link>
        <button className='navBtn' style={{backgroundColor : props.btnColor}}>
            <a href={Resume} download="Evan_Allen_Resume" style={{textDecoration:'none',color: props.color}}>Resume.pdf</a>
        </button>
    </div>


export default Nav;
