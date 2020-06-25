import React from 'react';
import { connect } from 'react-redux';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton, Tooltip } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';

const FavoriteSelection = ({ toggleFavorite, movieId, isFavorite }) => {
  let tooltipMsg = '';

  const createTooltipMsg = () => {
    if (isFavorite) {
      tooltipMsg = 'remove';
    } else {
      tooltipMsg = 'add';
    }
  };

  createTooltipMsg();

  return (
    <div className='selection-container'>
      <Tooltip title={tooltipMsg} id='tooltip'>
        <IconButton onClick={() => toggleFavorite(movieId)} id='favorite-icon'>
          <FavoriteIcon color={isFavorite ? 'primary' : 'inherit'} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
