import React from 'react';
import { connect } from 'react-redux';

import './movie-genres.styles.scss';

import {
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@material-ui/core';

import { addMovieGenre } from '../../redux/review-inputs/review-inputs.actions';

const MovieGenres = ({ addMovieGenre }) => {
  const genres = [
    'comedy',
    'horror',
    'drama',
    'action',
    'detective',
    'adventure',
    'crime',
    'historical',
    'sci-fi',
    'war',
    'disaster',
    'fantasy',
    'LGBT',
    'cartoon',
    'thriller',
    'mystery',
  ];

  const generate = () => {
    let someMap = new Map();

    genres.map((genre) => {
      return someMap.set(genre, false);
    });
    return Object.fromEntries(someMap.entries());
  };

  const obj = generate();

  const [state] = React.useState({ ...obj });

  const selectedGenres = [];

  const handleChange = (event) => {
    let name = event.target.name;
    let checked = event.target.checked;

    if (!checked) {
      let index = selectedGenres
        .map((genre) => {
          return genre[name];
        })
        .indexOf(true);

      selectedGenres.splice(index, 1);
    } else {
      selectedGenres.push({ [name]: checked });
    }

    addMovieGenre(selectedGenres);
  };

  return (
    <div className='checkboxes-container'>
      <FormLabel component='legend'>Select movie genres</FormLabel>
      <FormGroup row>
        {genres.map((genre) => (
          <FormControlLabel
            key={genre}
            control={
              <Checkbox
                checked={state.genre}
                onChange={handleChange}
                name={genre}
              />
            }
            label={genre}
          />
        ))}
      </FormGroup>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMovieGenre: (genre) => dispatch(addMovieGenre(genre)),
});

export default connect(null, mapDispatchToProps)(MovieGenres);
