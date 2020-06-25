import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import { Button } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

const HomePage = () => (
  <div>
    <div className='greetings'>
      <h1>Welcome to MyMovies!</h1>
      <h3>Let's collect your movies!</h3>
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

export default HomePage;
