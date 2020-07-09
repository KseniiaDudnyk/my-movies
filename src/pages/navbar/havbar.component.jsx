import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import movieDefault from '../../assets/images/movie-default.jpg';

import './navbar.styles.scss';

import { AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import UpdateIcon from '@material-ui/icons/Update';
import HomeIcon from '@material-ui/icons/Home';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResponsiveNavBar from './responsive-navbar.component';
import Menu from '../../components/menu/menu.component';

const NavBar = ({ user }) => {
  const isMatches = useMediaQuery('(min-width:940px)');

  return (
    <AppBar position='sticky' color='default'>
      <Toolbar className='nav-bar'>
        <Link to='/'>
          <HomeIcon color='action' />
        </Link>

        {isMatches ? (
          <div className='buttons'>
            <Link to='/watched'>
              <Button endIcon={<PlaylistAddCheckIcon />}>Watched</Button>
            </Link>

            <Link to='/next-to-watch'>
              <Button endIcon={<PlaylistPlayIcon />}>Next To Watch</Button>
            </Link>

            <Link to='/favorite'>
              <Button endIcon={<FavoriteIcon />}>Favorite</Button>
            </Link>

            <Link to='/review'>
              <Button endIcon={<BorderColorIcon />}>Add Review</Button>
            </Link>

            <Link to='/add-to-watch'>
              <Button endIcon={<UpdateIcon />}>Add To Future</Button>
            </Link>
          </div>
        ) : (
          <ResponsiveNavBar />
        )}

        <div className='user-data'>
          {user ? (
            <div className='user'>
              <Avatar
                alt={user.displayName}
                src={!user.photoURL ? movieDefault : user.photoURL}
                style={{ marginRight: 7 + 'px' }}
              />

              <Menu />
            </div>
          ) : (
            <Link to='/sign-in'>
              <Button>SIGN IN</Button>
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(NavBar);
