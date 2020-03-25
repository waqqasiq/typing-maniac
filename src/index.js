import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import GameOver from './gameover'
import Start from './start'

import * as serviceWorker from './serviceWorker';
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";



const Routing = (
    <Router>
        <Route exact path="/" component={Start}/>
        {/*<Route path="/home" component={Home}/>*/}
        <Route path="/gameover" component={GameOver}/>
        <Route path="/play" component={Home}/>
        {/*<Route path="/ad-report-dashboard" component={DigitalAds}/>*/}
        {/*<Route path="/ad-report-campaign" component={CampaignAds}/>*/}
        {/*<Route path="/ad-report-hourly" component={HourlyCampaign}/>*/}

    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
