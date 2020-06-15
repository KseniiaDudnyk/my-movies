import React from 'react';
import './homepage.styles.scss';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Kseniia',
    };
  }

  render() {
    return (
      <AppBar position='static' color='transparent'>
        <Toolbar className='nav-bar'>
          <div className='buttons'>
            <Button endIcon={<PlaylistAddCheckIcon />}>Watched</Button>
            <Button endIcon={<PlaylistPlayIcon />}>Will watch</Button>
            <Button endIcon={<FavoriteIcon />}>Favorite</Button>
          </div>

          <div className='user-data'>
            <Typography className='name' variant='h6'>
              {this.state.name}
            </Typography>
            <Avatar
              alt={this.state.name}
              src='/src/assets/images/kseniia.jpg'
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HomePage;
