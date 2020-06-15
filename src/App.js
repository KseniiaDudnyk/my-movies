import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './components/homepage/homepage.component';
import NavBar from './components/navbar/havbar.component';
import Review from './components/review/review.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/review' component={Review} />
        </Switch>
      </div>
    );
  }
}

export default App;
