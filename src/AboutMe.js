import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <h1 className="display-1 text-center mt-3 mb-5">About Me</h1>
                <div className="row">
                    <div className="AboutMe col-lg-4 text-center">
                        <h3>Education</h3>
                        <ul>
                            <li><h4>Southern Illinois University of Edwardsville</h4></li>
                            <ul>
                                <li>Bachelor of Science in Mechatronics and Robotics Engineering</li>
                                <li>Mathematics Minor</li>
                                <li>Computer Engineering Minor</li>
                            </ul>
                            <li><h4>Udemy.com (educational courses website)</h4></li>
                            <ul>
                                <li>The Web Developer Bootcamp 2021</li>
                                <li>The Modern React Bootcamp (Hooks, Context, NextJS, Router)</li>
                                <li>JavaScript Algorithms and Data Structures Masterclass</li>
                            </ul>
                            <li><h4>University of Texas at Arlington</h4></li>
                            <ul>
                                <li><h5>Graduate Level:</h5></li>
                                <ul>
                                    <li>Design & Analysis of Algorithms</li>
                                    <li>Data Analysis & Modeling Techniques</li>
                                </ul>
                                <li><h5>Undergraduate Level:</h5></li>
                                <ul>
                                    <li>Algorithms & Data Structures</li>
                                    <li>Operating Systems</li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
                    <div className="AboutMe col-lg-4 text-center">
                        <h3>Experience</h3>
                        <ul>
                            <li><h4>Bell Flight</h4></li>
                            <ul>
                                <li><p> Currently, my work revolves around programming/ troubleshooting
                                    a hardware testing module for the AH-1Z helicopter's flight computers, 
                                    primarily using C#/ Microsoft Access on the back end and LabView on 
                                    the front end. Additionally, I am working on updating the flight 
                                    computers to meet pilots needs as they see fit as the industries 
                                    preferences have changed since the system was 
                                    originally written 18 years ago (embedded systems/ C programming).</p></li>
                            </ul>
                        </ul>
                    </div>
                    <div className="AboutMe col-lg-4 text-center">
                        <h3>Bio</h3>
                        <p>I am looking to shift my career into web based technology and am 
                            actively searching for a Full Stack Engineer or software Engineering role 
                            at a tech company.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;