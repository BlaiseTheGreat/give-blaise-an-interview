import React from 'react';
import './FullstackComments.css';
import { Link } from 'react-router-dom';


const Signup = () => {

    return (
        <div className="Sign up mycard">
            <div className="card auth-card input-field">
                <h2>Sign up</h2>
                <input
                    type="text"
                    placeholder="name"
                />
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="text"
                    placeholder="password"
                />
                {/* <button className="btn btn-success login-btn"> */}
                <button className="login-btn btn waves-effect waves-light #64b5f6 blue lighten-2">
                    Sign up
                </button>
                <h4>
                    <Link 
                        className="redirect-link" 
                        to="/fullstackcomments/login">
                            Already have an account?
                    </Link>
                </h4>

            </div>
        </div>
    );
}

export default Signup;