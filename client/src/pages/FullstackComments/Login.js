import React, { useState } from 'react';
import './FullstackComments.css';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Login = () => {

    const history = useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email", classes:"#ef5350 red lighten-1"});
            return; 
        }
        fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                password,
                email,
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html: data.error, classes:"#ef5350 red lighten-1"});
            } else {
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                M.toast({html: "Signed in successfully!", classes:"#81c784 green lighten-2"});
                history.push('/fullstackcomments');
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="Login mycard">
            <div className="card auth-card input-field hoverable">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                {/* <button className="btn btn-success login-btn"> */}
                <button 
                    className="login-btn btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={()=>PostData()}  
                    >
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