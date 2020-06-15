import React from 'react';

import './navbar.styles.scss';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

const NavBar = ({ userName }) => (
  <AppBar position='static' color='transparent'>
    <Toolbar className='nav-bar'>
      <div className='buttons'>
        <Button endIcon={<PlaylistAddCheckIcon />}>Watched</Button>
        <Button endIcon={<PlaylistPlayIcon />}>Will watch</Button>
        <Button endIcon={<FavoriteIcon />}>Favorite</Button>
      </div>

      <div className='user-data'>
        <Typography className='name' variant='h6'>
          {userName}
        </Typography>
        <Avatar alt={userName} src='/src/assets/images/kseniia.jpg' />
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
