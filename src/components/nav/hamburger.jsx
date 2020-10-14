import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import './hamburger.css'


const Hamburger = () => {
    return (
        <div>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

                <nav className="navbar navbar-expand-sm navbar-toggleable-sm  mb-3">
                    <div className="container">
                        <button id='navBtn' className="navbar-toggler mr-auto ml-auto" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars fa-2x" style={{ color: '#ef5939' }}></i>
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
        </div>
    )
}

export default Hamburger;

