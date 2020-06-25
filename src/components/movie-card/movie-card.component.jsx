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
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

  const isMatches = useMediaQuery('(min-width:940px)');

  return (
    <Card className='movie-card'>
      <CardMedia
        className={isMatches ? 'poster' : 'responsive-poster'}
        image={!posterUrl ? movieDefault : posterUrl}
        title={title}
      />
      <CardContent className='movie-review-container'>
        <Typography
          className={isMatches ? 'title' : 'responsive-title'}
          gutterBottom
          variant='h5'
          component='h2'
        >
          {title}
        </Typography>

        {isWatched ? (
          <div className={isMatches ? 'movie-rate' : 'responsive-movie-rate'}>
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
          <div className='movie-rate'>
            <WatchedSelection
              isWatched={isWatched}
              movieId={id}
              title={title}
            />
          </div>
        )}

        <Unfold
          className='unfold'
          isHidden={isReviewTextHidden}
          movie={movie}
        />

        {isMatches ? (
          <div className='genres-container'>
            {genres.map((genre) => {
              return (
                <Chip variant='outlined' key={`${id}${genre}`} label={genre} />
              );
            })}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
