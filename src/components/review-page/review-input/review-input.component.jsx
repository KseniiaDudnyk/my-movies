import React from 'react';
import { connect } from 'react-redux';

import './review-input.styles.scss';

import { TextField, Button } from '@material-ui/core';
import {
  addMovieTitle,
  addMovieReview,
  addMoviePosterLink,
} from '../../../redux/review-inputs/review-inputs.actions';

const ReviewInput = ({ addMovieTitle, addMovieReview, addMoviePosterLink }) => {
  // fileUploadHandler = (event) => {
  //     selectedFile: event.target.files[0],
  // };
  let posterLink = '';

  const handleChangeTitle = (event) => {
    addMovieTitle(event.target.value);
  };

  const handleChangeReview = (event) => {
    addMovieReview(event.target.value);
  };

  const handleUploadPoster = () => {
    addMoviePosterLink(posterLink);
  };

  const handlePosterLinkInput = (event) => {
    posterLink = event.target.value;
  };

  return (
    <div>
      <form noValidate autoComplete='off'>
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
          className='poster-upload-btn'
          variant='contained'
          onClick={handleUploadPoster}
        >
          Upload
        </Button>

        <div className='upload-img'>
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
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieTitle: (title) => dispatch(addMovieTitle(title)),
  addMovieReview: (review) => dispatch(addMovieReview(review)),
  addMoviePosterLink: (link) => dispatch(addMoviePosterLink(link)),
});

export default connect(null, mapDispatchToProps)(ReviewInput);
