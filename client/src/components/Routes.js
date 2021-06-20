import React, { Component } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import SortingVisualizer from '../pages/SortingVisualizer/SortingVisualizer';
import AboutMe from '../pages/AboutMe/AboutMe';
import EducationCard from '../pages/Education/EducationCard';
import ExperienceCard from '../pages/Experience/ExperienceCard';
import Skills from '../pages/Skills/Skills';
import FullstackComments from '../pages/FullstackComments/FullstackComments';
import Login from '../pages/FullstackComments/Login';
import Signup from '../pages/FullstackComments/Signup';
import CreateComment from '../pages/FullstackComments/CreateComment';
import EditComment from '../pages/FullstackComments/EditComment';



const Routes = () => {


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
                    path='/skills'
                    render={() => <Skills />}
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
                    path='/fullstackcomments/edit/:commentId'
                    render={() => <EditComment />}
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

export default Routes;