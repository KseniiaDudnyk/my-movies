import React from 'react';
import { connect } from 'react-redux';

import './movie-inputs.styles.scss';

import { TextField } from '@material-ui/core';
import {
  addMovieTitle,
  addMovieReviewText,
  addMoviePosterLink,
} from '../../redux/review-inputs/review-inputs.actions';

class MovieInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posterLinkFormatErr: false,
      errorMsg: ''
    }
  }
  
  render() {
    const {
      addMovieTitle,
      addMovieReviewText,
      addMoviePosterLink,
    } = this.props;    

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

    const handlePosterLinkInput = (event) => {
      posterLink = event.target.value;

      const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(posterLink)) {
        this.setState({
          posterLinkFormatErr: true,
          errorMsg: 'Please, enter valid http poster URL'
        })
      } else {
        addMoviePosterLink(posterLink);
        this.setState({
          posterLinkFormatErr: false,
          errorMsg: 'Valid URL'
        })
      }
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
            rows={15}
            color='secondary'
            onChange={handleChangeReview}
          />

          <TextField
            error={this.state.posterLinkFormatErr}
            helperText={this.state.errorMsg}
            className='poster'
            id='outlined-basic2'
            variant='outlined'
            label='Upload poster via Link'
            color='secondary'
            onChange={handlePosterLinkInput}
          />

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovieTitle: (title) => dispatch(addMovieTitle(title)),
  addMovieReviewText: (review) => dispatch(addMovieReviewText(review)),
  addMoviePosterLink: (link) => dispatch(addMoviePosterLink(link)),
});

export default connect(null, mapDispatchToProps)(MovieInputs);
