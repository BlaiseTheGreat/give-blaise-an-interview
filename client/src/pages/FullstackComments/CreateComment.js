import React, { useState, useEffect } from 'react';
import './FullstackComments.css';
import M from 'materialize-css';
import { useHistory } from 'react-router-dom';


const CreateComment = () => {

    const history = useHistory();
    const [body, setBody] = useState("");

    const postDetails = () => {
        fetch('/createcomment', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                body
            })
        }).then(res=> res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: "#ef5350 red lighten-1" });
                } else {
                    M.toast({ html: "created comment successfully", classes: "#66bb6a green lighten-1" })
                    history.push('/fullstackcomments');
                }
            })
    }

    return (
        <div className="create-comment-card card input-field CreateComment hoverable">
            <h2>Create a comment</h2>
            <input
                type="text"
                placeholder="leave a comment"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            />
            <button 
                className="login-btn btn waves-effect waves-light #64b5f6 blue lighten-2"
                onClick={()=>postDetails()}
                >
                Submit
            </button>
        </div>
    );
}

export default CreateComment;