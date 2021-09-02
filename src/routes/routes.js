import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { history } from '../history';
import PrivateRoute from './PrivateRoutes';


import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import trabalhe from '../pages/TrabalheConosco';

export default function Routes(){
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/trabalhe" component={trabalhe} />
            </Switch>
        </BrowserRouter>
    )
}


