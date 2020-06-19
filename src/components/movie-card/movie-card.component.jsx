import React from 'react';

import './movie-card.styles.scss';

import movieDefault from '../../assets/images/movie-default.jpg';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteSelection from '../favorite-selection/favorite-selection.component';
import Unfold from '../unfold/unfold.component';
import WatchedSelection from '../watched-selection/watched-selection.component';

const MovieCard = ({ movie, type }) => {
  return (
    <Card className='movie-card'>
      <CardMedia
        style={{ height: 350 + 'px', width: 100 + '%' }}
        image={!movie.posterUrl ? movieDefault : movie.posterUrl}
        title={movie.title}
      />
      <CardContent className='movie-review-container'>
        <Typography gutterBottom variant='h5' component='h2'>
          {movie.title}
        </Typography>

        {type === 'watched' ? (
          <div className='movie-rate'>
            <Typography className='rate-number' variant='h6'>
              {movie.rate}
            </Typography>
            <StarIcon className='star-icon' />

            <FavoriteSelection
              title={movie.title}
              isFavorite={movie.isFavorite}
            />
          </div>
        ) : (
          <WatchedSelection title={movie.title} isWatched={movie.isWatched} />
        )}

        <Unfold isHidden={movie.isReviewTextHidden} movie={movie} />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
