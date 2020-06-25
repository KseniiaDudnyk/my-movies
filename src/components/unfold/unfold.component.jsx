import React from 'react';
import { connect } from 'react-redux';

import './unfold.styles.scss';

import { Typography } from '@material-ui/core';
import { toggleReviewTextHidden } from '../../redux/movies-data/movies-data.actions';

const Unfold = ({ isHidden, movie, toggleReviewTextHidden }) => (
  <div className='review-text'>
    {isHidden ? (
      <div>
        <Typography variant='body2' color='textSecondary' component='p'>
          {movie.review.slice(0, 100)}
          <span
            className='toggle-text'
            onClick={() => {
              toggleReviewTextHidden(movie.id);
            }}
          >
            more
          </span>
        </Typography>
      </div>
    ) : (
      <div className='review-text'>
        <Typography variant='body2' color='textSecondary' component='p'>
          {movie.review}
          <span
            className='toggle-text'
            onClick={() => toggleReviewTextHidden(movie.id)}
          >
            less
          </span>
        </Typography>
      </div>
    )}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleReviewTextHidden: (movieId) =>
    dispatch(toggleReviewTextHidden(movieId)),
});

export default connect(null, mapDispatchToProps)(Unfold);
