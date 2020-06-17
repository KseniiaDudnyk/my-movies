import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './submit-button.styles.scss';

import { Button } from '@material-ui/core';
import {
  selectMovieRate,
  selectMovieGenres,
  selectMovieTitle,
  selectMovieReview,
  selectMoviePosterLink,
} from '../../../redux/review-inputs/review-inputs.selectors';

const SubmitButton = ({
  history,
  movieRate,
  movieGenres,
  movieTitle,
  movieReview,
  moviePosterLink,
}) => {
  const submitReview = () => {
    let currentMovieRate = movieRate;
    let currentMovieGenres = movieGenres;
    let currentMovieTitle = movieTitle;
    let currentMovieReview = movieReview;
    let currentMoviePosterLink = moviePosterLink;
    history.push('/');
  };

  return (
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitReview}>
        Save Review
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movieRate: selectMovieRate,
  movieGenres: selectMovieGenres,
  movieTitle: selectMovieTitle,
  movieReview: selectMovieReview,
  moviePosterLink: selectMoviePosterLink,
});

export default withRouter(connect(mapStateToProps)(SubmitButton));
