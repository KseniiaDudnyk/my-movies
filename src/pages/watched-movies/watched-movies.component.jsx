import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './watched-movies.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';

const WatchedMovies = ({ movies }) => (
  <div>
    <Header text='Watched Movies List' />

    <div className='card-container'>
      {movies.map((movie) => {
        if (movie.isWatched) {
          return <MovieCard key={movie.id} movie={movie} />;
        } else {
          return null;
        }
      })}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
});

export default connect(mapStateToProps)(WatchedMovies);
