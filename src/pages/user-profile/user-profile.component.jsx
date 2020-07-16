import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import movieDefault from '../../assets/images/movie-default.jpg';

import './user-profile.styles.scss';

import { TextField, Avatar } from '@material-ui/core';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const UserProfile = ({ user }) => (
  <div className='profile-container'>
    {user ? (
      <div className='profile'>
        <Avatar
          alt={user.displayName}
          src={!user.photoURL ? movieDefault : user.photoURL}
          style={{ marginRight: 7 + 'px' }}
        />

        <form noValidate autoComplete='off'>
          <TextField
            id='outlined-basic2'
            variant='outlined'
            label='Name'
            color='secondary'
            defaultValue={user.displayName}
          />
        </form>
      </div>
    ) : (
      <div></div>
    )}
  </div>
);
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(UserProfile);
