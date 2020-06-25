import React from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

import './watched-selection.styles.scss';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton, Tooltip } from '@material-ui/core';
import { selectWatched } from '../../redux/movies-data/movies-data.actions';

const WatchedSelection = ({ selectWatched, isWatched, movieId, title }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar(`${title} is removed to watched movies`);

    selectWatched(movieId);
  };

  return (
    <div className='selection-container'>
      <Tooltip id='tooltip' title='select as watched'>
        <IconButton
          onClick={handleClick}
          id='select-icon'
          aria-label='select watched'
        >
          {!isWatched ? <DoneOutlineIcon /> : null}
        </IconButton>
      </Tooltip>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectWatched: (movieId) => dispatch(selectWatched(movieId)),
});

export default connect(null, mapDispatchToProps)(WatchedSelection);
