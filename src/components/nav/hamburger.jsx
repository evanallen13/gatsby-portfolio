import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import './hamburger.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Hamburger = () => {

    //const [open, setOpen] = useState(false);
    let open = true;

    const navOpen = () => {
        if (open) {
            document.getElementById("nav").style.display = 'none'
            document.getElementById("barsIcon").style.color = 'rgba(239, 89, 57, .5)'
            open = !open
        } else {
            document.getElementById("nav").style.display = 'block'
            document.getElementById("barsIcon").style.color = 'rgba(239, 89, 57, 1)'
            open = !open
        }
    }

    return (
        <div className="menu-btn">
            <span onClick={() => navOpen()}>
                <i id='barsIcon' className="fas fa-bars fa-3x"></i>
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

