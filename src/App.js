import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/navbar/havbar.component';
import ReviewForm from './pages/review/review-form.component';
import WatchedMovies from './pages/watched-movies/watched-movies.component';
import NextToWatch from './pages/next-to-watch/next-to-watch.component';
import FavoriteMovies from './pages/favorite-movies/favorite-movies.component.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/review' component={ReviewForm} />
          <Route path='/watched' component={WatchedMovies} />
          <Route path='/next-to-watch' component={NextToWatch} />
          <Route path='/add-to-watch' component={ReviewForm} />
          <Route path='/favorite' component={FavoriteMovies} />

          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    );
  }
}

export default App;
