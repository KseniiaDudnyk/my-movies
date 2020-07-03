import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './watched-movies.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';
import { Grid } from '@material-ui/core';

const WatchedMovies = ({ movies }) => (
  <div>
    <Header text='Watched Movies List' />

    <div className='card-container'>
      <Grid container justify='center' spacing={2}>
        {movies.map((movie) => {
          if (movie.isWatched) {
            return (
              <Grid key={movie.id} item sm={6} lg={2}>
                <MovieCard key={movie.id} movie={movie} />
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
});

export default connect(mapStateToProps)(WatchedMovies);
