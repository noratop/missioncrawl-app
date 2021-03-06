import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import Adventures from './components/Adventures';
import Login from './components/Login';
//import DisplayAdventures from './components/DisplayAdventures';
import SignUp from './components/SignUp';
import CreateAdventure from './components/CreateAdventure';
//import Adventure from './components/Adventure';
import AdventureDetails from './components/AdventureDetails';
//import Navbar from './components/Navbar';
import FindAdventure from './components/FindAdventure';
import CompleteAdventures from './components/CompleteAdventures';
import CurrentAdventures from './components/CurrentAdventures';
import InProgressAdventure from './components/InProgressAdventure';
import StepDetails from './components/StepDetails';
import Completed from './components/completed';



var routes = (
    <Router history={createHistory()}>
    <Route path="login" component={Login}/>
    <Route path="signup" component={SignUp}/>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="findadventure" component={FindAdventure}/>
            <Route path="currentadventures" component={CurrentAdventures}/>
            <Route path="currentadventures/:missionId" component={StepDetails}/>
            <Route path="adventures" component={Adventures}/>
            <Route path="completedadventures" component={CompleteAdventures}/>
            <Route path="newadventure" component={CreateAdventure}/>
            <Route path="adventuredetails" component={AdventureDetails}/>
            <Route path="inprogress" component={InProgressAdventure}/>
            <Route path="completed" component={Completed}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));



