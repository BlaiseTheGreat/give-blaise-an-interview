import React, { useState, useEffect } from 'react';
import './FullstackComments.css';
import M from 'materialize-css';
import { useHistory, useParams } from 'react-router-dom';


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
                // const comment = JSON.parse(data);
                // console.log(jsonData);
                // console.log(jsonData.comment);
                // console.log(jsonData.comment.body);
                
                setBody(jsonData.comment.body);
                // console.log({body});
                // console.log(comment);
            })
    }, [commentId])

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
                onClick={() => console.log("dummy method")}
            >
                Submit
            </button>
        </div>
    );
}

export default EditComment;