import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import './hamburger.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Hamburger = () => {

    //const [open, setOpen] = useState(false);
    let open = true;

    const navOpen = () =>{
        if(open){
            document.getElementById("nav").style.display = 'none'
            open = !open
        }else{
            document.getElementById("nav").style.display = 'block'
            open = !open
        }
    }

    return (
        <div className="menu-btn">
            <span onClick={() => navOpen()}>
                {
                    !open ?
                        <i id='timesIcon' className="fas fa-times fa-4x"></i> :
                        <i id='barsIcon' className="fas fa-bars fa-4x"></i>
                }
            </span>
            <div id="nav">
                <ul>
                    <li>
                        <Link className="Link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>

            {/* {
                open ?
                    <ul>
                        <li>
                            <Link className="Link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="Link" to="/projects">Projects</Link>
                        </li>
                    </ul> :
                    <div></div>
            } */}
        </div>
    )
}

export default Hamburger;

