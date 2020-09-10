import React, { useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import "./editable-textfield.styles.scss";

import { TextField, Button } from "@material-ui/core";
import { updateUserDataField } from "../../redux/user/user.actions";
import EditIcon from "@material-ui/icons/Edit";

const EditableTextField = ({
  fieldData,
  fieldLabel,
  dataName,
  updateUserDataField,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState(fieldData);

  const handleTextField = (event) => {
    setData(event.target.value);
  };

  const handleClick = () => {
    let editedData = { [dataName]: data };

    if (data !== "") {
      updateUserDataField(editedData);
      enqueueSnackbar(`${fieldLabel} successfully edited`);
    } else {
      enqueueSnackbar(`Please fill ${fieldLabel}`);
    }
  };

  return (
    <form className="text-field" noValidate autoComplete="off">
      <TextField
        className="field"
        id="outlined-basic2"
        variant="outlined"
        label={fieldLabel}
        color="secondary"
        onChange={handleTextField}
        value={data}
      />
      <Button
        className="edit-button"
        onClick={handleClick}
        endIcon={<EditIcon />}
        variant="contained"
      >
        Edit
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserDataField: (fieldData) => dispatch(updateUserDataField(fieldData)),
});

export default connect(null, mapDispatchToProps)(EditableTextField);
