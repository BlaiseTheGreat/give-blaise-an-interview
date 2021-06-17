import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SortingVisualizer from '../pages/SortingVisualizer/SortingVisualizer';
import AboutMe from '../pages/AboutMe/AboutMe';
import EducationCard from '../pages/Education/EducationCard';
import ExperienceCard from '../pages/Experience/ExperienceCard';
import FullstackComments from '../pages/FullstackComments/FullstackComments';
import Login from '../pages/FullstackComments/Login';
import Signup from '../pages/FullstackComments/Signup';
import CreateComment from '../pages/FullstackComments/CreateComment';

class Routes extends Component {
    render() {
        return (
            <div className="Routes">
                <Switch>
                    <Route 
                        exact
                        path='/sortingvisualizer'
                        render={() => <SortingVisualizer />}
                    />
                    <Route
                        exact
                        path='/education'
                        render={() => <EducationCard />}
                    />
                    <Route
                        exact
                        path='/experience'
                        render={() => <ExperienceCard />}
                    />
                    <Route
                        exact
                        path='/fullstackcomments'
                        render={() => <FullstackComments />}
                    />
                    <Route
                        exact
                        path='/fullstackcomments/login'
                        render={() => <Login />}
                    />
                    <Route
                        exact
                        path='/fullstackcomments/signup'
                        render={() => <Signup />}
                    />
                    <Route
                        exact
                        path='/fullstackcomments/createcomment'
                        render={() => <CreateComment />}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => <AboutMe />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Routes;