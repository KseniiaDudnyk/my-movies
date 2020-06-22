import React from 'react';
import { connect } from 'react-redux';

import './favorite-selection.styles.scss';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import { toggleFavorite } from '../../redux/review-inputs/review-inputs.actions';
import Snackbar from '@material-ui/core/Snackbar';

const FavoriteSelection = ({ toggleFavorite, title, isFavorite }) => {
  const message = `${title} was added to favorite`;
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    toggleFavorite(title);

    setTimeout(() => {
      setState({ ...state, open: false });
    }, 1500);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (title) => dispatch(toggleFavorite(title)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
