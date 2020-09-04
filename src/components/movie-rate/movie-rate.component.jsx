import React, { useState } from 'react';
import { connect } from 'react-redux';

import './movie-rate.styles.scss';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

import { addMovieRate } from '../../redux/review-inputs/review-inputs.actions';

const MovieRate = ({ addMovieRate }) => {
  const [value, setValue] = useState('');

  const rateArr = Array(10)
    .fill(1)
    .map((i, idx) => (idx + i).toString());

  const handleChange = (event) => {
    setValue(event.target.value);
    addMovieRate(event.target.value);
  };

  return (
    <div className='rate-container'>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Rate the movie *</FormLabel>
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
};

const mapDispatchToProps = (dispatch) => ({
  addMovieRate: (rate) => dispatch(addMovieRate(rate)),
});

export default connect(null, mapDispatchToProps)(MovieRate);
