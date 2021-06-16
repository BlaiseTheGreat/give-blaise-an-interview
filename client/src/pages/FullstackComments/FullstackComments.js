import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './FullstackComments.css';

class FullstackComments extends Component {

    render() {
        return (
            <div className="FullstackComments">

                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><span>M</span>ongoDB <span>E</span>xpress <span>R</span>eact <span>N</span>ode comment section</h5>
                        <p class="card-text">This sub-project makes use of the full MERN stack. MongoDB cloud atlas hosts the data,
                        Express and Node.js are used to provide the server/ API, and React.js is used as the front end.</p>
                        {/* <p class="card-text">Sign</p> */}
                        <a href="#" class="btn btn-primary">Create comment</a>
                        <Link to="fullstackcomments/login" class="btn btn-primary">Log in</Link>
                        <a href="#" class="btn btn-primary">Log out</a>
                        <Link to="fullstackcomments/signup" class="btn btn-primary">Sign up</Link>

                    </div>
                    <div class="card-footer text-muted">
                        <p>Sign up and leave a comment! Full CRUD abilities of data from a custom RESTful API!</p>
                        <p>Let me know what you liked, didn't like, or what I could improve on before you'd consider me for a job! :)</p>
                        
                    </div>
                </div>


                <div className="card mb-4 home-card">
                    <h5 className="card-title">Blaise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bell Flight</h6>
                    <hr/>
                    <p className="card-text">Hi so basically this rules and i wanna give you a job</p>
                    <hr/>
                    <div>
                        <a href="#" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
                <div className="card mb-4 home-card">
                    <h5 className="card-title">Blaise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bell Flight</h6>
                    <hr/>
                    <p className="card-text">Hi so basically this rules and i wanna give you a job</p>
                    <hr/>                    <div>
                        <a href="#" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
                <div className="card mb-4 home-card">
                    <h5 className="card-title">Blaise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bell Flight</h6>
                    <hr/>
                    <p className="card-text">Hi so basically this rules and i wanna give you a job</p>
                    <hr/>
                    <div>
                        <a href="#" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullstackComments;