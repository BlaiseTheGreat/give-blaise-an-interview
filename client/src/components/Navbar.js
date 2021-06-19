import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pdf from './Resume.pdf';
import './Navbar.css';




class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">giveBlaiseAnInterview</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
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
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/fullstackcomments/login">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/fullstackcomments/signup">Sign up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/fullstackcomments/createcomment">Create Comment</NavLink>
                            </li>
                        </ul>
                        {/* <form class="resume d-flex">
                            <button class="resume btn btn-success">View Resume</button>
                        </form> */}
                        <a className="resume" href={Pdf} without rel="noopener noreferrer" target="_blank">
                            <button className="btn btn-success"trailingIcon="picture_as_pdf" label="Resume">
                                View Resume
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;