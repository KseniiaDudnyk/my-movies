import React from 'react';
import { connect } from 'react-redux';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';

const FavoriteSelection = ({ toggleFavorite, movieId, isFavorite }) => {
  return (
    <div className='selection-container'>
      <IconButton onClick={() => toggleFavorite(movieId)} id='favorite-icon'>
        <FavoriteIcon color={isFavorite ? 'primary' : 'inherit'} />
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
