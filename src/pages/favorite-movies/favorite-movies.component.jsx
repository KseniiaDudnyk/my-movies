import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './favorite-movies.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';

const FavoriteMovies = ({ movies }) => (
  <div>
    <Header text='List of Favorite Movies' />

    <div className='card-container'>
      {movies.map((movie, indx) => {
        if (movie.isFavorite) {
          return <MovieCard key={movie.rate + 20 * indx} movie={movie} />;
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

export default connect(mapStateToProps)(FavoriteMovies);
