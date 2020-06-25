import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import UpdateIcon from '@material-ui/icons/Update';

const ResponsiveNavBar = () => (
  <div className='buttons'>
    <Link to='/watched'>
      <PlaylistAddCheckIcon color='action' />
    </Link>

    <Link to='/next-to-watch'>
      <PlaylistPlayIcon color='action' />
    </Link>

    <Link to='/favorite'>
      <FavoriteIcon color='action' />
    </Link>

    <Link to='/review'>
      <BorderColorIcon color='action' />
    </Link>

    <Link to='/add-to-watch'>
      <UpdateIcon color='action' />
    </Link>
  </div>
);

export default ResponsiveNavBar;
