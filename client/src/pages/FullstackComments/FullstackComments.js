import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './FullstackComments.css';
import axios from 'axios';

class FullstackComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user")),
            comments: [],
            openEditForm: []
        }
    }


    componentDidMount() {
        this.getComments();
    }

    async getComments() {
        let res = await axios.get('/allcomments', {
            headers: {
                "Content-Type": "application/json"
            }
        });
        // console.log(res.data.comments.length);
        let editArrayState = [];
        for(let i = 0; i < res.data.comments.length; i++) {
            editArrayState.push(false);
        }
        this.setState({
            comments: res.data.comments,
            openEditForm: editArrayState
        })
    }


    async deleteComment(commentId) {
        await fetch(`/${commentId}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
        this.getComments();
    }

    // async updateComment(commentId) {
    //     await fetch(`/${commentId}`, {
    //         method: 'put',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + localStorage.getItem("jwt")
    //         }
    //     })
    //     this.getComments();
    // }

    // openEditForm(commentId){

    // }

    

    render() {
        const commentNavButtons = this.state.user ?
            <div className="loggedInButtons">
                <span className="welcome">Welcome, <span className="name">{this.state.user.username}</span>! </span>
                <Link to="fullstackcomments/createcomment" className="btn btn-primary">Create comment</Link>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("jwt");
                        this.setState({
                            user: null
                        });
                    }}
                >
                    log out
                </button>
            </div>
            :
            <div className="loggedOutButtons">
                <Link to="fullstackcomments/login" className="btn btn-primary">Log in</Link>
                <Link to="fullstackcomments/signup" className="btn btn-primary">Sign up</Link>
            </div>









        return (
            <div className="FullstackComments">

                <div className="card text-center hoverable">
                    <div className="card-body">
                        <h5 className="card-title"><span className="MERN">M</span>ongoDB <span className="MERN">E</span>xpress <span className="MERN">R</span>eact <span className="MERN">N</span>ode comment section</h5>
                        <p className="card-text">This sub-project makes use of the full MERN stack. MongoDB cloud atlas hosts the data,
                            Express and Node.js are used to provide the server/ API, and React.js is used as the front end.</p>

                        {commentNavButtons}


                    </div>
                    <div className="card-footer text-muted">
                        <p>Sign up and leave a comment! Full CRUD abilities of data from a custom RESTful API!</p>
                        <p>Let me know what you liked, didn't like, or what I could improve on before you'd consider me for a job! :)</p>

                    </div>
                </div>





                <div className="Comments">
                    {this.state.comments.slice(0).reverse().map(c => (
                        <div key={c._id} className="card mb-4 home-card hoverable">
                            <h5 className="card-title">{c.postedBy.username}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{c.postedBy.company}</h6>

                            <p className="card-text">{c.body}</p>
                            <div>
                                {this.state.user && this.state.user._id === c.postedBy._id ?
                                <div className="card-footer text-muted">
                                    <button 
                                        className="btn btn-info"
                                        >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={()=>this.deleteComment(c._id)}
                                        >
                                        Delete
                                    </button>
                                </div>
                                    :
                                    ""
                                }
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FullstackComments;