import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./movie-genres.styles.scss";

import {
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";

import {
  addMovieGenre,
  removeMovieGenre,
} from "../../redux/review-inputs/review-inputs.actions";
import { selectMovieGenres } from "../../redux/review-inputs/review-inputs.selectors";
import { selectMoviesGenres } from "../../redux/movies-data/movies-data.selectors";

const MovieGenres = ({
  addMovieGenre,
  genresArr,
  inputGenres,
  removeMovieGenre,
}) => {
  const [genreCheck, setGenreCheck] = useState({ ...genresArr });

  const handleChange = (event) => {
    let genreId = event.target.value;
    let checked = event.target.checked;
    let selectedGenre;

    genresArr.forEach((genre) => {
      if (genre.id === genreId) {
        genre.isSelected = checked;
        selectedGenre = genre;
      }
    });
    setGenreCheck({ ...genresArr });

    if (!checked) {
      let indexOfGenreToRemove = inputGenres.indexOf(selectedGenre);
      inputGenres.splice(indexOfGenreToRemove, 1);
      removeMovieGenre(inputGenres);
    } else {
      addMovieGenre(selectedGenre);
    }
  };

  return (
    <div className="checkboxes-container">
      <FormLabel component="legend">Select movie genres *</FormLabel>
      <FormGroup row style={{ justifyContent: "space-between" }}>
        {genresArr ? (
          genresArr.map((genre) => (
            <FormControlLabel
              key={genre.id}
              control={
                <Checkbox
                  checked={genreCheck.genre}
                  onChange={handleChange}
                  name={genre.name}
                  value={genre.id}
                />
              }
              label={genre.name}
            />
          ))
        ) : (
          <CircularProgress className="spinner" />
        )}
      </FormGroup>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  genresArr: selectMoviesGenres,
  inputGenres: selectMovieGenres,
});

const mapDispatchToProps = (dispatch) => ({
  addMovieGenre: (genreId) => dispatch(addMovieGenre(genreId)),
  removeMovieGenre: (genreId) => dispatch(removeMovieGenre(genreId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieGenres);
