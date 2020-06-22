import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './submit-button.styles.scss';

import { Button } from '@material-ui/core';

import SimpleDialog from '../simple-dialog/simple-dialog.component';

import {
  selectMovieRate,
  selectMovieGenres,
  selectMovieTitle,
  selectMovieReview,
  selectMoviePosterLink,
  selectIsMovieFavorite,
} from '../../redux/review-inputs/review-inputs.selectors';
import { resetReviewInputReducerData } from '../../redux/review-inputs/review-inputs.actions';
import { addMovieReview } from '../../redux/movies-data/movies-data.actions';

const SubmitButton = ({
  history,
  movieRate,
  movieGenres,
  movieTitle,
  movieReview,
  moviePosterLink,
  addMovieReview,
  resetReviewInputReducerData,
  isMovieFavorite,
  type,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const redirect = () => {
    if (type === '/review') {
      history.push('/watched');
    } else if (type === '/add-to-watch') {
      history.push('/next-to-watch');
    }
  };

  const submitMovie = () => {
    let genresArr = movieGenres.map((genre) => Object.keys(genre));

    let currentMovieTitle = movieTitle;
    let currentMovieReview = movieReview;
    let currentMovieGenres = genresArr.flat();
    let currentMovieRate = movieRate;
    let currentMoviePosterLink = moviePosterLink;
    let currentIsMovieFavorite = isMovieFavorite;
    let currentIsWatched;

    if (type === '/review') {
      currentIsWatched = true;
    } else if (type === '/add-to-watch') {
      currentIsWatched = false;
    }

    if (
      !currentMovieTitle ||
      !currentMovieReview ||
      currentMovieGenres.length === 0
    ) {
      setOpen(true);
    } else {
      addMovieReview({
        title: currentMovieTitle,
        review: currentMovieReview,
        genres: currentMovieGenres,
        rate: currentMovieRate,
        posterUrl: currentMoviePosterLink,
        isReviewTextHidden: true,
        isFavorite: currentIsMovieFavorite,
        isWatched: currentIsWatched,
      });
      resetReviewInputReducerData();
      redirect();
    }
  };

  return (
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitMovie}>
        Save Movie
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        message='Please fill review form'
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieReview: (review) => dispatch(addMovieReview(review)),
  resetReviewInputReducerData: () => dispatch(resetReviewInputReducerData()),
});

const mapStateToProps = createStructuredSelector({
  movieRate: selectMovieRate,
  movieGenres: selectMovieGenres,
  movieTitle: selectMovieTitle,
  movieReview: selectMovieReview,
  moviePosterLink: selectMoviePosterLink,
  isMovieFavorite: selectIsMovieFavorite,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
);
