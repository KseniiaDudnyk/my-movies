import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './watched-selection.styles.scss';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton, Tooltip } from '@material-ui/core';
import { selectForReview } from '../../redux/movies-data/movies-data.actions';

const WatchedSelection = ({ selectForReview, isWatched, movie, history }) => {
  const handleClick = () => {    
    selectForReview(movie);

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
  selectForReview: (movie) => dispatch(selectForReview(movie)),
});

export default withRouter(connect(null, mapDispatchToProps)(WatchedSelection));
