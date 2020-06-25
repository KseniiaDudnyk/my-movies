import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './movie-rate.styles.scss';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

import { addMovieRate } from '../../redux/review-inputs/review-inputs.actions';
import { selectIsMovieFavorite } from '../../redux/review-inputs/review-inputs.selectors';

const MovieRate = ({ addMovieRate, isMovieFavorite }) => {
  const rateArr = Array(10)
    .fill(1)
    .map((i, idx) => (idx + i).toString());

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    addMovieRate(event.target.value);
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
};

const mapDispatchToProps = (dispatch) => ({
  addMovieRate: (rate) => dispatch(addMovieRate(rate)),
});

const mapStateToProps = createStructuredSelector({
  isMovieFavorite: selectIsMovieFavorite,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRate);
