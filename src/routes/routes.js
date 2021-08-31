import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { history } from '../history';
import PrivateRoute from './PrivateRoutes';


import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function Routes(){
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}


