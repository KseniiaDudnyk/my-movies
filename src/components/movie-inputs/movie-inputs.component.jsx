import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./movie-inputs.styles.scss";

import { TextField } from "@material-ui/core";
import {
  addMovieTitle,
  addMovieReviewText,
  addMoviePosterLink,
} from "../../redux/review-inputs/review-inputs.actions";
import { selectInputsForReview } from "../../redux/review-inputs/review-inputs.selectors";

const MovieInputs = ({
  addMovieTitle,
  addMovieReviewText,
  addMoviePosterLink,
  inputs
}) => {
  const [posterLinkFormatErr, setPosterLinkFormatErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // fileUploadHandler = (event) => {
  //     selectedFile: event.target.files[0],
  // };

  const handleChangeTitle = (event) => {
    addMovieTitle(event.target.value);
  };

  const handleChangeReview = (event) => {
    addMovieReviewText(event.target.value);
  };

  const handlePosterLinkInput = (event) => {
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!-]))?/;
    if (!regex.test(event.target.value)) {
      setPosterLinkFormatErr(true);
      setErrorMsg("Please, enter valid http poster URL");
    } else {
      addMoviePosterLink(event.target.value);
      setPosterLinkFormatErr(false);
      setErrorMsg("");
    }
  };

  return (
    <div>
      <form className="review-form" noValidate autoComplete="off">
        <TextField
          className="title"
          id="outlined-basic1"
          variant="outlined"
          label="Title"
          color="secondary"
          onChange={handleChangeTitle}
          value={inputs.movieTitle}
          required
        />

        <TextField
          className="review"
          multiline
          id="outlined-multiline-static"
          label="Review"
          variant="outlined"
          rows={15}
          color="secondary"
          onChange={handleChangeReview}
          value={inputs.movieReview}
          required
        />

        <TextField
          error={posterLinkFormatErr}
          helperText={errorMsg}
          className="poster"
          id="outlined-basic2"
          variant="outlined"
          label="Upload poster via Link"
          color="secondary"
          onChange={handlePosterLinkInput}
          value={inputs.moviePosterLink}
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
};

const mapDispatchToProps = (dispatch) => ({
  addMovieTitle: (title) => dispatch(addMovieTitle(title)),
  addMovieReviewText: (review) => dispatch(addMovieReviewText(review)),
  addMoviePosterLink: (link) => dispatch(addMoviePosterLink(link)),
});

const mapStateToProps = createStructuredSelector({
  inputs: selectInputsForReview,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInputs);
