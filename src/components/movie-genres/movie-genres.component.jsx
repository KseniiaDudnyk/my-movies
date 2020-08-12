import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './movie-genres.styles.scss';

import {
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  CircularProgress
} from '@material-ui/core';

import { addMovieGenre } from '../../redux/review-inputs/review-inputs.actions';
import { selectMoviesGenres } from '../../redux/movies-data/movies-data.selectors';

const MovieGenres = ({ addMovieGenre, genresArr }) => {
  const [state] = React.useState({ ...genresArr });

  const selectedGenres = [];

  const handleChange = (event) => {
    let name = event.target.name;
    let checked = event.target.checked;

    if (!checked) {
      let indexOfGenreToRemove = selectedGenres.indexOf(name);

      selectedGenres.splice(indexOfGenreToRemove, 1);
    } else {
      selectedGenres.push(name);
    }
    addMovieGenre(selectedGenres);
  };

  return (
    <div className='checkboxes-container'>
      <FormLabel component='legend'>Select movie genres *</FormLabel>
      <FormGroup row style={{ justifyContent: 'space-between' }}>
        {genresArr ? (
          genresArr.map((genre) => (
            <FormControlLabel
              key={genre.id}
              control={
                <Checkbox
                  checked={state.genre}
                  onChange={handleChange}
                  name={genre.name}
                />
              }
              label={genre.name}
            />
          ))
        ) : (
          <CircularProgress className='spinner' />
        )}
      </FormGroup>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  genresArr: selectMoviesGenres,
});

const mapDispatchToProps = (dispatch) => ({
  addMovieGenre: (genre) => dispatch(addMovieGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieGenres);
