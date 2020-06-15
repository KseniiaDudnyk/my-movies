import React from 'react';
import './homepage.styles.scss';

import { Button } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

const HomePage = () => (
  <div>
    <div className='greetings'>
      <h1>Welcome to MyMovies!</h1>
      <h3>Let's collect your movies!</h3>
    </div>
    <div className='select-buttons'>
      <Button endIcon={<BorderColorIcon />} variant='contained'>
        Add Review
      </Button>
      <Button endIcon={<MovieFilterIcon />} variant='contained'>
        Select Next Movie
      </Button>
    </div>
  </div>
);

export default HomePage;
