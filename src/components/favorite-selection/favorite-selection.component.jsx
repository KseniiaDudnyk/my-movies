import React from 'react';
import { connect } from 'react-redux';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';
import SimpleSnackbar from '../simple-snackbar/simple-snackbar.component';

const FavoriteSelection = ({ toggleFavorite, title, isFavorite }) => {
  let message;

  if (isFavorite) {
    message = `${title} was added to favorite`;
  } else {
    message = `${title} was deleted from favorite`;
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => () => {
    setOpen(true);
    toggleFavorite(title);

    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  return (
    <div className='selection-container'>
      <IconButton
        onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
        id='favorite-icon'
        aria-label='add to favorites'
      >
        <FavoriteIcon color={isFavorite ? 'primary' : 'inherit'} />
      </IconButton>
      <SimpleSnackbar open={open} message={message} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (title) => dispatch(toggleFavorite(title)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
