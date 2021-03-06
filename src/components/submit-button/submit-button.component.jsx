import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './submit-button.styles.scss';

import { Button } from '@material-ui/core';

import SimpleDialog from '../simple-dialog/simple-dialog.component';

import { selectInputsForReview } from '../../redux/review-inputs/review-inputs.selectors';
import { resetReviewInputReducerData } from '../../redux/review-inputs/review-inputs.actions';
import {
  addMovieReview,
  leaveReview,
} from '../../redux/movies-data/movies-data.actions';

const SubmitButton = ({
  history,
  addMovieReview,
  resetReviewInputReducerData,
  reviewInputs,
  leaveReview,
  type,
}) => {
  const {
    id,
    movieRate,
    movieGenres,
    movieTitle,
    movieReview,
    moviePosterLink,
  } = reviewInputs;

  const [openDialog, setOpenDialog] = useState(false);

  const redirect = () => {
    if (type === '/review') {
      history.push('/watched');
    } else if (type === '/add-to-watch') {
      history.push('/next-to-watch');
    }
  };

  const createId = () => {
    return `0000${movieTitle}`;
  };

  const defineWatchedStatus = () => {
    if (type === '/review') {
      return true;
    } else if (type === '/add-to-watch') {
      return false;
    }
  };

  //todo add check foe empty review and title with id
  const createNewReview = () => {
    if (!movieTitle || !movieReview || movieGenres.length === 0) {
      setOpenDialog(true);
    } else {
      movieGenres.forEach((genre) => (genre.isSelected = true));

      addMovieReview({
        id: createId(),
        title: movieTitle,
        review: movieReview,
        genres: movieGenres,
        rate: movieRate,
        posterUrl: moviePosterLink,
        isReviewTextHidden: true,
        isWatched: defineWatchedStatus(),
      });
    }
  };

  const addReviewToNextToWatched = () => {
    leaveReview({
      id: id,
      genres:movieGenres,
      review: movieReview,
      rate: movieRate,
    });
  };

  const submitMovie = () => {
    createId();
    defineWatchedStatus();

    if (id) {
      addReviewToNextToWatched();
    } else {
      createNewReview();
    }

    resetReviewInputReducerData();
    redirect();
  };

  return (
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitMovie}>
        Save Movie
      </Button>
      <SimpleDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        message='Please fill the form'
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieReview: (review) => dispatch(addMovieReview(review)),
  leaveReview: (reviewUpdates) => dispatch(leaveReview(reviewUpdates)),
  resetReviewInputReducerData: () => dispatch(resetReviewInputReducerData()),
});

const mapStateToProps = createStructuredSelector({
  reviewInputs: selectInputsForReview,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
);
