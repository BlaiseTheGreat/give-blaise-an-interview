import React, { useState, useEffect } from 'react';
import './FullstackComments.css';
import M from 'materialize-css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const EditComment = () => {

    const history = useHistory();
    const [body, setBody] = useState();
    const { commentId } = useParams();


    useEffect(() => {
        fetch(`/${commentId}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                const jsonData = data;
                setBody(jsonData.comment.body);
            })
    }, [commentId])

    const UpdateComment = () => {
        console.log("updating data");

    }

    return (
        <div className="create-comment-card card input-field CreateComment hoverable">
            <h2>Edit your comment</h2>
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button
                className="login-btn btn waves-effect waves-light #64b5f6 blue lighten-2"
                onClick={() => UpdateComment()}
            >
                Submit
            </button>
        </div>
    );
}

export default EditComment;