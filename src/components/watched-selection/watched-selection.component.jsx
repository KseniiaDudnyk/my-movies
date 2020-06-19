import React from 'react';
import { connect } from 'react-redux';

import './watched-selection.styles.scss';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton } from '@material-ui/core';
import { selectWatched } from '../../redux/movies-data/movies-data.actions';

const WatchedSelection = ({ selectWatched, title, isWatched }) => (
  <IconButton
    onClick={() => selectWatched(title)}
    id='select-icon'
    aria-label='select watched'
  >
    {!isWatched ? <DoneOutlineIcon /> : null}
  </IconButton>
);

const mapDispatchToProps = (dispatch) => ({
  selectWatched: (title) => dispatch(selectWatched(title)),
});

export default connect(null, mapDispatchToProps)(WatchedSelection);
