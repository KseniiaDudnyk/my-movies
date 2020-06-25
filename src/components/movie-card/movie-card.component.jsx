import React from 'react';

import './movie-card.styles.scss';

import movieDefault from '../../assets/images/movie-default.jpg';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteSelection from '../favorite-selection/favorite-selection.component';
import Unfold from '../unfold/unfold.component';
import WatchedSelection from '../watched-selection/watched-selection.component';

const MovieCard = ({ movie }) => {
  const {
    posterUrl,
    title,
    isWatched,
    rate,
    isFavorite,
    isReviewTextHidden,
    id,
  } = movie;

  return (
    <Card className='movie-card'>
      <CardMedia
        style={{ height: 350 + 'px', width: 100 + '%' }}
        image={!posterUrl ? movieDefault : posterUrl}
        title={title}
      />
      <CardContent className='movie-review-container'>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>

        {isWatched ? (
          <div className='movie-rate'>
            <Typography className='rate-number' variant='h6'>
              {rate}
            </Typography>
            <StarIcon className='star-icon' />

            <FavoriteSelection isFavorite={isFavorite} movieId={id} />
          </div>
        ) : (
          <WatchedSelection isWatched={isWatched} movieId={id} />
        )}

        <Unfold isHidden={isReviewTextHidden} movie={movie} />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
