import React from 'react';
import './FullstackComments.css';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="Login mycard">
            <div className="card auth-card input-field hoverable">
                <h2>Login</h2>
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
                    Login
                </button>
                <h4>
                    <Link 
                        className="redirect-link" 
                        to="/fullstackcomments/signup">
                            Don't have an account?
                        </Link>
                </h4>
            </div>
        </div>
    );
}

export default Login;