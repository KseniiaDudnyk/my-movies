import React from 'react';

import './movie-rate.styles.scss';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

export default function RadioButtonsGroup() {
  const rateArr = Array(10)
    .fill(1)
    .map((i, idx) => (idx + i).toString());

  const [value, setValue] = React.useState('5');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='rate-container'>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Rate the movie</FormLabel>
        <RadioGroup
          className='radio-group'
          aria-label='rate'
          name='rate1'
          value={value}
          onChange={handleChange}
        >
          {rateArr.map((rate) => (
            <FormControlLabel
              key={rate}
              value={rate}
              control={<Radio />}
              label={rate}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
