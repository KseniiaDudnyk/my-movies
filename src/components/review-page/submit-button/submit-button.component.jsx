import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './submit-button.styles.scss';

import { Button } from '@material-ui/core';
import {
  selectMovieRate,
  selectMovieGenres,
  selectMovieTitle,
  selectMovieReview,
  selectMoviePosterLink,
} from '../../../redux/review-inputs/review-inputs.selectors';

class SubmitButton extends React.Component {
  currentMovieRate;
  currentMovieGenres;
  currentMovieTitle;
  currentMovieReview;
  currentMoviePosterLink;

  submitReview = () => {
    this.currentMovieRate = this.props.movieRate;
    this.currentMovieGenres = this.props.movieGenres;
    this.currentMovieTitle = this.props.movieTitle;
    this.currentMovieReview = this.props.movieReview;
    this.currentMoviePosterLink = this.props.moviePosterLink;
  };

  render() {
    return (
      <div className='submit-btn'>
        <Button
          variant='contained'
          component='span'
          onClick={this.submitReview}
        >
          Save Review
        </Button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  movieRate: selectMovieRate,
  movieGenres: selectMovieGenres,
  movieTitle: selectMovieTitle,
  movieReview: selectMovieReview,
  moviePosterLink: selectMoviePosterLink,
});

export default connect(mapStateToProps)(SubmitButton);
