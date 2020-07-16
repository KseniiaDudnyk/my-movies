import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import NavBar from './pages/navbar/havbar.component';
import ReviewForm from './pages/review/review-form.component';
import WatchedMovies from './pages/watched-movies/watched-movies.component';
import NextToWatch from './pages/next-to-watch/next-to-watch.component';
import FavoriteMovies from './pages/favorite-movies/favorite-movies.component.jsx';
import UserProfile from './pages/user-profile/user-profile.component';
import SignInUpForm from './pages/sign-in-up-form/sign-in-up-form.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { getCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import {
  getMovies,
  getMovieGenres,
} from './redux/movies-data/movies-data.actions';
import { moviesDataBase, genresArr } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { getCurrentUser, getMovies, getMovieGenres } = this.props;

    getMovies(moviesDataBase);

    getMovieGenres(genresArr);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          getCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        getCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/sign-in'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInUpForm />
            }
          />
          <Route exact path='/review' component={ReviewForm} />
          <Route path='/watched' component={WatchedMovies} />
          <Route path='/next-to-watch' component={NextToWatch} />
          <Route path='/add-to-watch' component={ReviewForm} />
          <Route path='/favorite' component={FavoriteMovies} />
          <Route path='/profile' component={UserProfile} />

          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (user) => dispatch(getCurrentUser(user)),
  getMovies: (movies) => dispatch(getMovies(movies)),
  getMovieGenres: (genres) => dispatch(getMovieGenres(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
