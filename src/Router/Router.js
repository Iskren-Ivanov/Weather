import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from '../Component/Main/Main';
import NextDaysForecast from '../Component/NextDaysForecast/NextDaysForecast';
import ForecastForTheAllDay from '../Component/ForecastForTheAllDay/ForecastForTheAllDay';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/nextDaysForecastIn/:id' component={NextDaysForecast} />
        <Route path='/theForecastIn/:id/:date' component={ForecastForTheAllDay} />
        <Redirect to="/" />
    </Switch>
);

export default Router;