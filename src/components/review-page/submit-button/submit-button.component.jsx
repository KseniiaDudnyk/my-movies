import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './submit-button.styles.scss';

import { Button } from '@material-ui/core';
import {
  selectMovieRate,
  selectMovieGenres,
} from '../../../redux/review-inputs/review-inputs.selectors';

class SubmitButton extends React.Component {
  currentMovieRate;
  currentMovieGenres;

  submitReview = () => {
    this.currentMovieRate = this.props.movieRate;
    this.currentMovieGenres = this.props.movieGenres;
    console.log(this.currentMovieRate, this.currentMovieGenres);
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
});

export default connect(mapStateToProps)(SubmitButton);
