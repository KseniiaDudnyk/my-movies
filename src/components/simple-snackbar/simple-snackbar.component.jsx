import React from 'react';

import './simple-snackbar.styles.scss';

import Snackbar from '@material-ui/core/Snackbar';

const SimpleSnackbar = ({ message, open }) => {
  const [state] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={message}
      key={vertical + horizontal}
    />
  );
};

export default SimpleSnackbar;
