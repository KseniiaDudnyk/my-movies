import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './navbar.styles.scss';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import UpdateIcon from '@material-ui/icons/Update';
import HomeIcon from '@material-ui/icons/Home';
import {
  selectUserName,
  selectUserImage,
} from '../../redux/user/user.selectors';

class NavBar extends React.Component {
  render() {
    return (
      <AppBar position='static' color='transparent'>
        <Toolbar className='nav-bar'>
          <Link to='/'>
            <HomeIcon />
          </Link>
          <div className='buttons'>
            <Link to='/watched'>
              <Button endIcon={<PlaylistAddCheckIcon />}>Watched</Button>
            </Link>
            <Link to='/next-to-watch'>
              <Button endIcon={<PlaylistPlayIcon />}>Next To Watch</Button>
            </Link>
            <Button endIcon={<FavoriteIcon />}>Favorite</Button>
            <Link to='/review'>
              <Button endIcon={<BorderColorIcon />}>Add Review</Button>
            </Link>
            <Link to='/add-to-watch'>
              <Button endIcon={<UpdateIcon />}>Add To Future</Button>
            </Link>
          </div>

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
