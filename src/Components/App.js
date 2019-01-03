import React, { Component } from 'react';
import DashboardForm from './dasboardForm';
import CrudeOil from './crudeOil';
import Coal from './coal';
import Sugar from './sugar';
import Grains from './grains';

// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={DashboardForm} />
          <Route exact path={'/crudeOil'} component={CrudeOil} />
          <Route exact path={'/coal'} component={Coal} />
          <Route exact path={'/grain'} component={Grains} />
          <Route exact path={'/sugar'} component={Sugar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
