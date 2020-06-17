import React from 'react';
import { connect } from 'react-redux';

import './review-input.styles.scss';

import { TextField, Button } from '@material-ui/core';
import {
  addMovieTitle,
  addMovieReview,
} from '../../../redux/review-inputs/review-inputs.actions';

const ReviewInput = ({ addMovieTitle, addMovieReview }) => {
  // fileUploadHandler = (event) => {
  //     selectedFile: event.target.files[0],
  // };

  const handleChangeTitle = (event) => {
    addMovieTitle(event.target.value);
  };

  const handleChangeReview = (event) => {
    addMovieReview(event.target.value);
  };

  return (
    <div>
      <form noValidate autoComplete='off'>
        <TextField
          className='title'
          id='outlined-basic'
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

        <div className='upload-img'>
          <input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' component='span'>
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
});

export default connect(null, mapDispatchToProps)(ReviewInput);
