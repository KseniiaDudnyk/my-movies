import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/homepage/homepage.component';
import NavBar from './components/navbar/havbar.component';
import ReviewForm from './components/review-page/review-form/review-form.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/review' component={ReviewForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
