import React from 'react';
import { connect } from 'react-redux';

import './watched-selection.styles.scss';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton } from '@material-ui/core';
import { selectWatched } from '../../redux/movies-data/movies-data.actions';

const WatchedSelection = ({ selectWatched, isWatched, movieId }) => {
  return (
    <div className='selection-container'>
      <IconButton
        onClick={() => selectWatched(movieId)}
        id='select-icon'
        aria-label='select watched'
      >
        {!isWatched ? <DoneOutlineIcon /> : null}
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectWatched: (movieId) => dispatch(selectWatched(movieId)),
});

export default connect(null, mapDispatchToProps)(WatchedSelection);
