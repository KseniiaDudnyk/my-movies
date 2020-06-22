import React from 'react';
import { connect } from 'react-redux';

import './movie-inputs.styles.scss';

import { TextField, Button } from '@material-ui/core';
import {
  addMovieTitle,
  addMovieReviewText,
  addMoviePosterLink,
} from '../../redux/review-inputs/review-inputs.actions';

const MovieInputs = ({
  addMovieTitle,
  addMovieReviewText,
  addMoviePosterLink,
}) => {
  // fileUploadHandler = (event) => {
  //     selectedFile: event.target.files[0],
  // };
  let posterLink = '';

  const handleChangeTitle = (event) => {
    addMovieTitle(event.target.value);
  };

  const handleChangeReview = (event) => {
    addMovieReviewText(event.target.value);
  };

  const handleUploadPoster = () => {
    addMoviePosterLink(posterLink);
  };

  const handlePosterLinkInput = (event) => {
    posterLink = event.target.value;
  };

  return (
    <div>
      <form className='review-form' noValidate autoComplete='off'>
        <TextField
          className='title'
          id='outlined-basic1'
          variant='outlined'
          label='Title'
          color='secondary'
          onChange={handleChangeTitle}
        />
        <TextField
          className='review'
          multiline
          id='outlined-multiline-static'
          label='Review'
          variant='outlined'
          rows={20}
          color='secondary'
          onChange={handleChangeReview}
        />

        <TextField
          className='poster'
          id='outlined-basic2'
          variant='outlined'
          label='Upload poster via Link'
          color='secondary'
          onChange={handlePosterLinkInput}
        />

        <Button
          color='secondary'
          variant='contained'
          onClick={handleUploadPoster}
        >
          Save Poster
        </Button>

        {/* <div className='upload-img'>
          <input
            disabled
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' component='span' disabled>
              Upload
            </Button>
          </label>
        </div> */}
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieTitle: (title) => dispatch(addMovieTitle(title)),
  addMovieReviewText: (review) => dispatch(addMovieReviewText(review)),
  addMoviePosterLink: (link) => dispatch(addMoviePosterLink(link)),
});

export default connect(null, mapDispatchToProps)(MovieInputs);
