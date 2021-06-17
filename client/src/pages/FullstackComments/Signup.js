import React, {useState } from 'react';
import './FullstackComments.css';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';


const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email", classes:"#ef5350 red lighten-1"});
            return; 
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username:name,
                password,
                email,
                company
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#ef5350 red lighten-1"});
            } else {
                M.toast({html: data.message, classes:"#81c784 green lighten-2"});
                history.push('/fullstackcomments/login');
            }
        })
    }

    return (
        <div className="Sign up mycard">
            <div className="card auth-card input-field hoverable">
                <h2>Sign up</h2>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="company"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                />
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