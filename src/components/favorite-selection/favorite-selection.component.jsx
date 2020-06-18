import React from 'react';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

const FavoriteSelection = () => (
  <IconButton id='favorite-icon' aria-label='add to favorites'>
    <FavoriteIcon />
  </IconButton>
);
export default FavoriteSelection;
