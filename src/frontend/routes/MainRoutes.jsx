import React from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../components/Player';
import NotFound from '../containers/NotFound';

import { Route, Switch } from 'react-router-dom';

const MainRoutes = () => (
    <Switch>
        <Route exact path="/play/:id" component={Player} />

        <Route>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Route>
    </Switch>
);

export default MainRoutes;
