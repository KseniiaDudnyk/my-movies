import React from 'react';

import './review-input.styles.scss';

import { TextField, Button } from '@material-ui/core';

class ReviewInput extends React.Component {
  state = {
    selectedFile: null,
  };

  fileUploadHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete='off'>
          <TextField
            className='title'
            id='outlined-basic'
            variant='outlined'
            label='Title'
          />
          <TextField
            className='review'
            multiline
            id='outlined-multiline-static'
            label='Review'
            variant='outlined'
            rows={20}
          />

          <div className='upload-img'>
            <input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              onChange={this.fileUploadHandler}
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
  }
}

export default ReviewInput;
