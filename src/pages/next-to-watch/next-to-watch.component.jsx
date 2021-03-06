import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './next-to-watch.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';
import { Grid, CircularProgress } from '@material-ui/core';

const NextToWatch = ({ movies }) => (
  <div>
    <Header text='Movies Next To Watch' />

    <div className='card-container'>
      {movies ? (
        <Grid container justify='center' spacing={2}>
          {movies.map((movie) => {
            if (!movie.isWatched) {
              return (
                <Grid key={movie.id} item sm={6} lg={3}>
                  <MovieCard key={movie.id} movie={movie} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
});

export default connect(mapStateToProps)(NextToWatch);
