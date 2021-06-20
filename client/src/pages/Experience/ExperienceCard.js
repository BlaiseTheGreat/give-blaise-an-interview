import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './ExperienceCard.css';

class ExperienceCard extends Component {
    render() {
        return (
            <div>
                <div className="ExperienceCard row justify-content-center">
                    <h1 className="display-1">Experience</h1>
                    <div className="col-11 col-lg-5">
                        <div className="ExperienceCard-card card hoverable">
                            <img className="card-img-top" src="https://img.intelligent-aerospace.com/files/base/ebm/ias/image/2020/09/AH_1Z_and_UH_1Y_8_Sept_2020.5f57408442cae.5f5e829bc5a19.png?auto=format&w=720" alt="alt" />
                            <div className="card-body">
                                <h2 className="card-title">Bell Flight</h2>
                                <h4 className="card-subtitle text-muted">Software Engineer I</h4>
                                <h4 className="card-subtitle text-muted">1 Year (Current Job)</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <p>Programming/ troubleshooting a software testing module for 
                                    the <a href="https://www.bellflight.com/products/bell-ah-1z" target="_blank"> AH-1Z</a> and <a href="https://www.bellflight.com/products/bell-uh-1y" target="_blank">UH-1Y</a> helicopter's
                                    flight computers, primarily using 
                                    C#/ Microsoft Access on the back end and LabView 
                                    on the front end. Once completed, new testing module will take total
                                    software/ hardware testing procedure of flight computers from ~2800 man hours to ~300 hours,
                                    allowing software updates to be tested and deployed much faster to existing aircraft
                                    in the field.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 col-lg-5">
                        <div className="ExperienceCard-card card hoverable">
                            <img className="card-img-top" src="https://d3lcr32v2pp4l1.cloudfront.net/Pictures/1024x536/1/5/2/69152_bell-360-invictus_78944.jpg" alt="alt" />
                            <div className="card-body">
                                <h2 className="card-title">Bell Flight</h2>
                                <h4 className="card-subtitle text-muted">Software Engineering Intern</h4>
                                <h4 className="card-subtitle text-muted">3 months</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <p>Developed Matlab scripts to interact with Bell's flight simulation tools,
                                        perform manuevers in flight, and perform numerical analysis on the 
                                        sensor data/ control laws
                                        governing the <a href="https://www.baesystems.com/en-us/definition/what-are-fly-by-wire-systems" target="_blank">fly-by-wire</a> system
                                        on the <a href="https://www.bellflight.com/products/bell-360" target="_blank">Bell 360 Invictus</a>.
                                    </p>
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

export default ExperienceCard;