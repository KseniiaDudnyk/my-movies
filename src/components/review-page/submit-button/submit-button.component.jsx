import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './submit-button.styles.scss';

import { Button, DialogTitle, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  selectMovieRate,
  selectMovieGenres,
  selectMovieTitle,
  selectMovieReview,
  selectMoviePosterLink,
} from '../../../redux/review-inputs/review-inputs.selectors';
import { resetReviewInputReducerData } from '../../../redux/review-inputs/review-inputs.actions';
import { addMovieReviewData } from '../../../redux/reviews-data/reviews-data.actions';

const SimpleDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>
        Please fill review form
      </DialogTitle>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const SubmitButton = ({
  history,
  movieRate,
  movieGenres,
  movieTitle,
  movieReview,
  moviePosterLink,
  addMovieReviewData,
  resetReviewInputReducerData,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const submitReview = () => {
    let genresArr = movieGenres.map((genre) => Object.keys(genre));

    let currentMovieTitle = movieTitle;
    let currentMovieReview = movieReview;
    let currentMovieGenres = genresArr.flat();
    let currentMovieRate = movieRate;
    let currentMoviePosterLink = moviePosterLink;

    if (
      !currentMovieTitle ||
      !currentMovieReview ||
      currentMovieGenres.length === 0
    ) {
      setOpen(true);
    } else {
      addMovieReviewData({
        title: currentMovieTitle,
        review: currentMovieReview,
        genres: currentMovieGenres,
        rate: currentMovieRate,
        posterUrl: currentMoviePosterLink,
      });

      resetReviewInputReducerData();
      history.push('/');
    }
  };

  return (
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitReview}>
        Save Review
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieReviewData: (review) => dispatch(addMovieReviewData(review)),
  resetReviewInputReducerData: () => dispatch(resetReviewInputReducerData()),
});

const mapStateToProps = createStructuredSelector({
  movieRate: selectMovieRate,
  movieGenres: selectMovieGenres,
  movieTitle: selectMovieTitle,
  movieReview: selectMovieReview,
  moviePosterLink: selectMoviePosterLink,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
);
