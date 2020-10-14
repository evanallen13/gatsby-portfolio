import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import './hamburger.css'
import '../../../node_modules/bootstrap'

const Hamburger = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm  mb-3">
            <div className="container">
                <button id='navBtn' className="navbar-toggler mr-auto ml-auto" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars fa-2x" style={{color: '#ef5939'}}></i>   
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link className="Link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="Link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="Link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Hamburger;

