import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EducationCard.css';

class EducationCard extends Component {
    render() {
        return (
            <div className="EducationCard">
                <h1 className="display-1">Education</h1>
                <div className="EducationCard row justify-content-center">
                    <div className="col-11 col-lg-4">
                        <div className="EducationCard-card card hoverable">
                            <img className="card-img-top" src='https://www.siue.edu/news/2021/02/img/SIUE-campus-web.jpg' alt="SIUe Logo" />
                            <div className="card-body">
                                <h2 className="card-title">Southern Illinois Univeristy of Edwardsville</h2>
                                <h4 className="card-subtitle text-muted">3.5 GPA</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Mechatronics and Robotics Engineering, Bachelor of Science 
                                </li>
                                <li className="list-group-item">
                                    Mathematics Minor
                                </li>
                                <li className="list-group-item">
                                    Computer Engineering Minor
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4">
                        <div className="EducationCard-card card hoverable">
                            <img className="card-img-top" src='https://teach.udemy.com/wp-content/uploads/2016/02/og-default.png' alt="SIUe Logo" />
                            <div className="card-body">
                                <h2 className="card-title">Udemy.com (educational courses website)</h2>
                                <h4 className="card-subtitle text-muted">2021</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    The Web Developer Bootcamp 2021
                                </li>
                                <li className="list-group-item">
                                    The Modern React Bootcamp (Hooks, Context, NextJS, Router)
                                </li>
                                <li className="list-group-item">
                                    JavaScript Algorithms and Data Structures Masterclass
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4">
                        <div className="EducationCard-card card hoverable ">
                            <img className="card-img-top" src='https://cdn.web.uta.edu/-/media/project/website/news/releases/2020/09/tower---reverse-angle.ashx?revision=af79b89f-1f16-47a6-b8f3-91940ab85d3b' alt="SIUe Logo" />
                            <div className="card-body">
                                <h2 className="card-title">University of Texas at Arlington</h2>
                                <h4 className="card-subtitle text-muted">3.75 GPA</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Design & Analysis of Algorithms (Graduate Level)
                                </li>
                                <li className="list-group-item">
                                    Data Analysis & Modeling Techniques (Graduate Level)
                                </li>
                                <li className="list-group-item">
                                    Algorithms & Data Structures (Undergraduate Level)
                                </li>
                                <li className="list-group-item">
                                    Operating Systems (Undergraduate Level)
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

export default EducationCard;