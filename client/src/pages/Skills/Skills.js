import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

class Skills extends Component {

    render() {
        return (
            <div className="Skills">
                <h1 className="display-1">Skills</h1>
                <div className="SkillsCard row justify-content-center">
                    <div className="col-11 col-lg-4">
                        <div className="SkillsCard-card card hoverable">
                            <img className="card-img-top" src='https://cdn.osxdaily.com/wp-content/uploads/2014/08/mac-setup-integrations-developer-610x366.jpg' alt="SIUe Logo" />
                            <div className="card-body">
                                <h2 className="card-title">Current skills/ tools</h2>
                                {/* <h4 className="card-subtitle text-muted">3.5 GPA</h4> */}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    React
                                </li>
                                <li className="list-group-item">
                                    JavaScript
                                </li>
                                <li className="list-group-item">
                                    Node
                                </li>
                                <li className="list-group-item">
                                    Express
                                </li>
                                <li className="list-group-item">
                                    MongoDB
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4">
                        <div className="SkillsCard-card card hoverable">
                            <img className="card-img-top" src='http://trinirobotics.com/wp-content/uploads/2019/08/arduino-robot.jpg' alt="SIUe Logo" />
                            <div className="card-body">
                                <h2 className="card-title">Previous experience with</h2>
                                {/* <h4 className="card-subtitle text-muted">2021</h4> */}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Java
                                </li>
                                <li className="list-group-item">
                                    Python
                                </li>
                                <li className="list-group-item">
                                    C/C++
                                </li>
                                <li className="list-group-item">
                                    C#
                                </li>
                                <li className="list-group-item">
                                    MATLAB
                                </li>
                                <li className="list-group-item">
                                    Arduino/ Raspberry Pi Sensors and Actuators
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link to="/" className="btn btn-info">Go Back</Link>
            </div>
        );
    }
}

export default Skills;