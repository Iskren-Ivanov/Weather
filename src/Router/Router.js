import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from '../Component/Main/Main';
import FiveDaysForecast from '../Component/FiveDaysForecast/FiveDaysForecast';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/fiveDaysForecast" component={FiveDaysForecast} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Router;