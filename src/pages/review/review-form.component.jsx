import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './review-form.styles.scss';

import MovieInputs from '../../components/movie-inputs/movie-inputs.component';
import MovieGenres from '../../components/movie-genres/movie-genres.component';
import MovieRate from '../../components/movie-rate/movie-rate.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import Header from '../../components/header/header.component';
import { selectInputsForReview } from '../../redux/review-inputs/review-inputs.selectors';

const ReviewForm = ({ location, reviewInputs }) => {
  let headerText = '';
  let type = location.pathname;

  if (type === '/review') {
    headerText = 'Add your thoughts about just watched movie';
  } else if (type === '/add-to-watch') {
    headerText = 'Add movie to watch in the future';
  }

  console.log(reviewInputs);

  return (
    <div>
      <Header text={headerText} />
      <MovieInputs inputs={reviewInputs} />
      <MovieGenres inputGenres={reviewInputs.movieGenres} />
      {type === '/review' ? <MovieRate /> : null}
      <SubmitButton type={type} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  reviewInputs: selectInputsForReview,
});

export default connect(mapStateToProps)(ReviewForm);
