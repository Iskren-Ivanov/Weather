import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from '../Component/Main/Main';
import FiveDaysForecast from '../Component/FiveDaysForecast/FiveDaysForecast';
import ForecastForTheAllDay from '../Component/ForecastForTheAllDay/ForecastForTheAllDay';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/fiveDaysForecast' component={FiveDaysForecast} />
        <Route path='/theForecastIn/:id' component={ForecastForTheAllDay} />
        <Redirect to="/" />
    </Switch>
);

export default Router;