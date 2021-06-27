import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pdf from './Resume.pdf';
import './Navbar.css';




class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">giveBlaiseAnInterview</NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav #navbar"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/">About Me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/sortingvisualizer">Sorting Visualizer</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/fullstackcomments">RESTful API</NavLink>
                                </li>

                            </ul>

                            <div className="Navbar-buttons">
                                <a className="resume" href="https://www.linkedin.com/in/blaise-willoughby-081368156/" without rel="noopener noreferrer" target="_blank">
                                    <button className="btn btn-success" trailingIcon="picture_as_pdf" label="Resume">
                                        LinkedIn
                                    </button>
                                </a>
                                <a className="resume" href="https://github.com/BlaiseTheGreat" without rel="noopener noreferrer" target="_blank">
                                    <button className="btn btn-success" trailingIcon="picture_as_pdf" label="Resume">
                                        Github
                                    </button>
                                </a>
                                <a className="resume" href={Pdf} without rel="noopener noreferrer" target="_blank">
                                    <button className="btn btn-success" trailingIcon="picture_as_pdf" label="Resume">
                                        View Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>


                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        );
    }
}
export default Navbar;