import React, { useState, useEffect } from 'react';
import './FullstackComments.css';
import M from 'materialize-css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const EditComment = () => {

    const history = useHistory();
    const [body, setBody] = useState();
    const { commentId } = useParams();
    const user = localStorage.getItem("user");
    const jsonUser = JSON.parse(user);
    const username = jsonUser.username;


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
        fetch(`/${commentId}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                body
            })
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data);
            M.toast({html: "Comment updated!", classes:"#81c784 green lighten-2"});
            history.push('/fullstackcomments');
        });

    }

    return (
        <div className="create-comment-card card input-field CreateComment hoverable">
            <h2>Edit your comment, <span className="edit-username">{username}</span></h2>
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <div>
            <Link
                className="btn btn-danger"
                to={`/fullstackcomments`} >
                go back
            </Link>
            <button
                className="btn btn-info"
                onClick={() => UpdateComment()}
            >
                Submit changes
            </button>
            </div>
        </div>
    );
}

export default EditComment;