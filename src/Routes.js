import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SortingVisualizer from './SortingVisualizer';
import AboutMe from './AboutMe';


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
                        path="/"
                        render={() => <AboutMe />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Routes;