import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GiveBlaiseAnInterview</a>
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
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;