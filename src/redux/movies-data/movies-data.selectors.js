import { createSelector } from 'reselect';

const selectMoviesData = (state) => state.moviesData;

export const selectMovies = createSelector(
  [selectMoviesData],
  (moviesData) => moviesData.movies
);
