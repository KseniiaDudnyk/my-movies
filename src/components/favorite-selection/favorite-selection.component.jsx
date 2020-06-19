import React from 'react';
import { connect } from 'react-redux';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';

const FavoriteSelection = ({ toggleFavorite, title, isFavorite }) => (
  <IconButton
    onClick={() => toggleFavorite(title)}
    id='favorite-icon'
    aria-label='add to favorites'
  >
    <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} />
  </IconButton>
);

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (title) => dispatch(toggleFavorite(title)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
