import React from 'react';
import './FullstackComments.css';

const CreateComment = () => {


    return (
        <div className="create-comment-card card input-field CreateComment hoverable">
            <h2>Create a comment</h2>
            <input 
                type="text"
                placeholder="leave a comment"
            />
            <button className="login-btn btn waves-effect waves-light #64b5f6 blue lighten-2">
                    Submit
            </button>
        </div>
    );
}

export default CreateComment;