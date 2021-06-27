import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <h1 className="display-1 text-center mt-3 mb-5">About Me</h1>
                <div className="row">
                    <div className="About col-lg-4 text-center">
                        <Link to="/education">
                            <img src="https://www.siue.edu/news/2021/02/img/SIUE-campus-web.jpg" alt="SIUe Logo" />
                        </Link>
                        <h3 className="mt-3">
                            <Link
                                className="underline"
                                to="/education"
                            >
                                Education
                            </Link>
                        </h3>
                    </div>
                    <div className="About col-lg-4 text-center">
                        <Link to="/experience">
                            <img src="https://img.intelligent-aerospace.com/files/base/ebm/ias/image/2020/09/AH_1Z_and_UH_1Y_8_Sept_2020.5f57408442cae.5f5e829bc5a19.png?auto=format&w=720" alt="SIUe Logo" />
                        </Link>
                        <h3 className="mt-3">
                            <Link
                                className="underline"
                                to="/experience"
                            >
                                Experience
                            </Link>
                        </h3>
                    </div>
                    <div className="About col-lg-4 text-center">
                        <Link to="/skills">
                            <img src="https://i.pinimg.com/originals/81/67/5d/81675d64568fe89b7fa2320a205aa64d.jpg" alt="SIUe Logo" />
                        </Link>
                        <h3 className="mt-3">
                            <Link
                                className="underline"
                                to="/skills"
                            >
                                Skills
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 text-center">
                    <img className="headshot" src={process.env.PUBLIC_URL + '/badgePhoto.jpg'} alt="logo" />
                        <h3 className="mt-3">
                            <Link
                                className="underline"
                                to="/experience"
                            >
                                Blaise Willoughby
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;