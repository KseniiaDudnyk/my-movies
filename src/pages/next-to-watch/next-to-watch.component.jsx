import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './next-to-watch.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';

const NextToWatch = ({ movies }) => (
  <div>
    <Header text='Movies Next To Watch' />

    <div className='card-container'>
      {movies.map((movie) => {
        if (!movie.isWatched) {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatched={movie.isWatched}
            />
          );
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

export default connect(mapStateToProps)(NextToWatch);
