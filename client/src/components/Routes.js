import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SortingVisualizer from '../pages/SortingVisualizer/SortingVisualizer';
import AboutMe from '../pages/AboutMe/AboutMe';
import EducationCard from '../pages/Education/EducationCard';
import ExperienceCard from '../pages/Experience/ExperienceCard';


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
                        path="/"
                        render={() => <AboutMe />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Routes;