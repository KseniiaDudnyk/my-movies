import React from 'react';
import PropTypes from 'prop-types';

import './simple-dialog.styles.scss';

import { DialogTitle, Dialog } from '@material-ui/core';

const SimpleDialog = (props) => {
  const { onClose, open, message } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>{message}</DialogTitle>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default SimpleDialog;
