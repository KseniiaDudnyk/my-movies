import React from 'react';

import './movie-card.styles.scss';

import movieDefault from '../../assets/images/movie-default.jpg';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@material-ui/core';
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
    genres,
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

            <FavoriteSelection
              isFavorite={isFavorite}
              movieId={id}
              title={title}
            />
          </div>
        ) : (
          <WatchedSelection isWatched={isWatched} movieId={id} title={title} />
        )}

        <Unfold isHidden={isReviewTextHidden} movie={movie} />

        <div className='genres-container'>
          {genres.map((genre) => {
            return (
              <Chip variant='outlined' key={`${id}${genre}`} label={genre} />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
