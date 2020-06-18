import React from 'react';

import './watched-movies-card.styles.scss';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteSelection from '../favorite-selection/favorite-selection.component';
import Unfold from '../unfold/unfold.component';

const WatchedMoviesCard = ({ review }) => {
  return (
    <Card className='movie-card'>
      <CardMedia
        style={{ height: 350 + 'px', width: 100 + '%' }}
        image={review.posterUrl}
        title={review.title}
      />
      <CardContent className='movie-review-container'>
        <Typography gutterBottom variant='h5' component='h2'>
          {review.title}
        </Typography>

        <div className='movie-rate'>
          <Typography className='rate-number' variant='h6'>
            {review.rate}
          </Typography>
          <StarIcon className='star-icon' />
          <FavoriteSelection />
        </div>

        <Unfold isHidden={review.isReviewTextHidden} movie={review} />
      </CardContent>
    </Card>
  );
};

export default WatchedMoviesCard;
