import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './homepage.styles.scss';

import { Button } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const HomePage = ({ currentUser }) => {
  return (
    <div>
      <div className='greetings'>
        <h1>Welcome to MyMovies!</h1>

        {currentUser ? (
          <h3>Let's collect your movies!</h3>
        ) : (
          <h3>Please Sign In</h3>
        )}
      </div>

      <div className='select-buttons'>
        <Link to='/review'>
          <Button endIcon={<BorderColorIcon />} variant='contained'>
            Add Review
          </Button>
        </Link>

        <Link to='/next-to-watch'>
          <Button endIcon={<PlaylistPlayIcon />} variant='contained'>
            Select Next To Watch
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(HomePage);
