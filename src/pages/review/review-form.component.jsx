import React from 'react';

import './review-form.styles.scss';

import MovieInputs from '../../components/movie-inputs/movie-inputs.component';
import MovieGenres from '../../components/movie-genres/movie-genres.component';
import MovieRate from '../../components/movie-rate/movie-rate.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import Header from '../../components/header/header.component';

const ReviewForm = ({ location }) => {
  let headerText = '';
  let type = location.pathname;

  if (type === '/review') {
    headerText = 'Add your thoughts about just watched movie';
  } else if (type === '/add-to-watch') {
    headerText = 'Add movie to watch in the future';
  }

  return (
    <div>
      <Header text={headerText} />
      <MovieInputs />
      <MovieGenres />
      {type === '/review' ? <MovieRate /> : null}
      <SubmitButton type={type} />
    </div>
  );
};

export default ReviewForm;
