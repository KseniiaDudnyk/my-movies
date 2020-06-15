import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup, FormControlLabel } from '@material-ui/core';

export default function Checkboxes() {
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
      someMap.set(genre, false);
    });
    return Object.fromEntries(someMap.entries());
  };

  const obj = generate();

  const [state, setState] = React.useState({ ...obj });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
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
}