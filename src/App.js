import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/navbar/havbar.component';
import ReviewForm from './pages/review/review-form.component';

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
