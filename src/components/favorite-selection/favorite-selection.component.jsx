import React from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton, Tooltip } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';

const FavoriteSelection = ({ toggleFavorite, movieId, isFavorite, title }) => {
  const { enqueueSnackbar } = useSnackbar();

  let actionMsg = '';

  const createActionMsg = () => {
    if (isFavorite) {
      actionMsg = 'remove from fav';
    } else {
      actionMsg = 'add to fav';
    }
  };

  createActionMsg();

  const handleClick = () => {
    enqueueSnackbar(`${title} is successfully ${actionMsg}`);

    toggleFavorite(movieId);
  };

  return (
    <div>
      <Tooltip title={actionMsg} id='tooltip'>
        <IconButton onClick={handleClick} id='favorite-icon'>
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
