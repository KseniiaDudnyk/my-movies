import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './watched-movies.styles.scss';

import { selectMovies } from '../../redux/movies-data/movies-data.selectors';
import MovieCard from '../../components/movie-card/movie-card.component';
import Header from '../../components/header/header.component';

const WatchedMovies = ({ reviews }) => (
  <div>
    <Header text='Watched Movies List' />
    <div className='card-container'>
      {reviews.map((review) => {
        if (review.isWatched) {
          return (
            <MovieCard
              key={review.id}
              movie={review}
              isWatched={review.isWatched}
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
  reviews: selectMovies,
});

export default connect(mapStateToProps)(WatchedMovies);
