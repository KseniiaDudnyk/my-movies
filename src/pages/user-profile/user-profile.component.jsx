import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import movieDefault from "../../assets/images/movie-default-picture.jpg";

import "./user-profile.styles.scss";

import { Avatar, CircularProgress, Button } from "@material-ui/core";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import EditableTextField from "../../components/editable-textfield/editable-textfield.component";

const UserProfile = ({ user, history, dispatch }) => (
  <div className="profile-container">
    {user ? (
      <div className="profile">
        <Avatar
          alt={user.displayName}
          src={!user.photoURL ? movieDefault : user.photoURL}
          className="avatar"
        />

        <div className="fields">
          <EditableTextField
            fieldData={user.displayName}
            fieldLabel="Name"
            dataName="displayName"
          />
          <EditableTextField
            fieldData={user.email}
            fieldLabel="Email"
            dataName="email"
          />
          <EditableTextField
            fieldData={user.photoURL}
            fieldLabel="PhotoURL"
            dataName="photoURL"
          />
        </div>

        <div className="buttons">
          <Button variant="contained">Save</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              window.location.reload();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    ) : (
      <CircularProgress className="spinner" />
    )}
  </div>
);
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(UserProfile);
