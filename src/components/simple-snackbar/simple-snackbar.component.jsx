import React from 'react';

import './simple-snackbar.styles.scss';

import Snackbar from '@material-ui/core/Snackbar';

const SimpleSnackbar = ({ message, open, handleClose }) => {
  const [state] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;

  return (
    <Snackbar
      autoHideDuration={1500}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
      key={vertical + horizontal}
    />
  );
};

export default SimpleSnackbar;
