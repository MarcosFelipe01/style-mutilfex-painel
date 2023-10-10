import React from "react";
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'router';

import AuthOrApp from "./AuthOrApp";
import NavBar from '../components/layout/NavBar'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={false}>
            <IndexRoute component={false} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)