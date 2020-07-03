import React from 'react';

import './movie-card.styles.scss';

import movieDefault from '../../assets/images/movie-default.jpg';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
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
    id,
  } = movie;

  return (
    <Card className='movie-card'>
      <Grid container justify='center' spacing={2}>
        <Grid item>
          <CardMedia
            className='poster'
            image={!posterUrl ? movieDefault : posterUrl}
            title={title}
          />
        </Grid>

        <CardContent className='movie-review-container'>
          <Grid item xs={12}>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
          </Grid>

          <Grid container direction='row'>
            {isWatched ? (
              <Grid container justify='center'>
                <Typography variant='h6'>{rate}</Typography>
                <StarIcon className='star-icon' />

                <FavoriteSelection
                  isFavorite={isFavorite}
                  movieId={id}
                  title={title}
                />
              </Grid>
            ) : (
              <Grid container justify='flex-end'>
                <WatchedSelection
                  isWatched={isWatched}
                  movieId={id}
                  title={title}
                />
              </Grid>
            )}
          </Grid>

          <Grid item>
            <Unfold
              className='unfold'
              isHidden={isReviewTextHidden}
              movie={movie}
            />
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default MovieCard;
