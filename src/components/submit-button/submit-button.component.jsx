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
  let id;

  const [open, setOpen] = React.useState(false);

  const redirect = () => {
    if (type === '/review') {
      history.push('/watched');
    } else if (type === '/add-to-watch') {
      history.push('/next-to-watch');
    }
  };

  const createId = () => {
    return (id = `0000${movieTitle}`);
  };

  const submitMovie = () => {
    let currentIsWatched;
    createId();

    if (type === '/review') {
      currentIsWatched = true;
    } else if (type === '/add-to-watch') {
      currentIsWatched = false;
    }

    if (
      !movieTitle ||
      !movieReview ||
      movieGenres.length === 0
    ) {
      setOpen(true);
    } else {
      movieGenres.forEach(genre => genre.isSelected = true);
      
      addMovieReview({
        id: id,
        title: movieTitle,
        review: movieReview,
        genres: movieGenres,
        rate: movieRate,
        posterUrl: moviePosterLink,
        isReviewTextHidden: true,
        isFavorite: isMovieFavorite,
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
        onClose={() => setOpen(false)}
        message='Please fill the form'
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
