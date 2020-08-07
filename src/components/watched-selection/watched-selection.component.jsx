import React from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { withRouter } from 'react-router-dom';

import './watched-selection.styles.scss';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton, Tooltip } from '@material-ui/core';
import { leaveReview } from '../../redux/movies-data/movies-data.actions';

const WatchedSelection = ({ leaveReview, isWatched, movie, history }) => {
  const { enqueueSnackbar } = useSnackbar();  

  const handleClick = () => {
    enqueueSnackbar(`${movie.title} is removed to watched movies`);
    
    leaveReview(movie);

    history.push('/review');
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
  leaveReview: (movie) => dispatch(leaveReview(movie)),
});

export default withRouter(connect(null, mapDispatchToProps)(WatchedSelection));
