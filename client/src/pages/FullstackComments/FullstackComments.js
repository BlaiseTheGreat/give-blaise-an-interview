import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './FullstackComments.css';
import axios from 'axios';

class FullstackComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user")),
            comments: []
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
        // console.log(res.data.comments[0]);
        this.setState({
            comments: res.data.comments
        })
    }

    render() {
        const commentNavButtons = this.state.user ?
            <div className="loggedInButtons">
                <span>Welcome, {this.state.user.username}! </span>
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

                <div class="card text-center hoverable">
                    <div class="card-body">
                        <h5 class="card-title"><span>M</span>ongoDB <span>E</span>xpress <span>R</span>eact <span>N</span>ode comment section</h5>
                        <p class="card-text">This sub-project makes use of the full MERN stack. MongoDB cloud atlas hosts the data,
                            Express and Node.js are used to provide the server/ API, and React.js is used as the front end.</p>

                        {commentNavButtons}


                    </div>
                    <div class="card-footer text-muted">
                        <p>Sign up and leave a comment! Full CRUD abilities of data from a custom RESTful API!</p>
                        <p>Let me know what you liked, didn't like, or what I could improve on before you'd consider me for a job! :)</p>

                    </div>
                </div>





                <div className="Comments">
                    {this.state.comments.map(c => (
                        <div key={c._id} className="card mb-4 home-card hoverable">
                            <h5 className="card-title">{c.postedBy.username}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{c.postedBy.company}</h6>
                            <p className="card-text">{c.body}</p>
                            <hr />
                            <div>
                                <a href="#" class="btn btn-info">Edit</a>
                                <a href="#" class="btn btn-danger">Delete</a>
                            </div>
                        </div>
                    ))}
                </div>








                {/* <div className="card mb-4 home-card hoverable">
                    <h5 className="card-title">Blaise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bell Flight</h6>
                    <hr />
                    <p className="card-text">Hi so basically this rules and i wanna give you a job</p>
                    <hr />
                    <div>
                        <a href="#" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default FullstackComments;