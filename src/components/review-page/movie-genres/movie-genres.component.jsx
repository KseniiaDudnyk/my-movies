import React from 'react';

import {
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@material-ui/core';

import './movie-genres.styles.scss';

const MovieGenres = () => {
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
  ];

  const generate = () => {
    let someMap = new Map();

    genres.map((genre) => {
      return someMap.set(genre, false);
    });
    return Object.fromEntries(someMap.entries());
  };

  const obj = generate();

  const [state, setState] = React.useState({ ...obj });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log({ [event.target.name]: event.target.checked });
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

export default MovieGenres;
