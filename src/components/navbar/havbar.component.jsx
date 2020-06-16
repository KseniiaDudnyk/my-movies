import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './navbar.styles.scss';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import {
  selectUserName,
  selectUserImage,
} from '../../redux/user/user.selectors';

class NavBar extends React.Component {
  render() {
    return (
      <AppBar position='static' color='transparent'>
        <Toolbar className='nav-bar'>
          <div className='buttons'>
            <Button endIcon={<PlaylistAddCheckIcon />}>Watched</Button>
            <Button endIcon={<PlaylistPlayIcon />}>Will watch</Button>
            <Button endIcon={<FavoriteIcon />}>Favorite</Button>
          </div>
          npm i --save redux-logger
          <div className='user-data'>
            <Typography className='name' variant='h6'>
              {this.props.name}
            </Typography>
            <Avatar alt={this.props.name} src={this.props.image} />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name: selectUserName,
  image: selectUserImage,
});

export default connect(mapStateToProps)(NavBar);
