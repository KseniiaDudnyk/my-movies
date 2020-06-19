import { MoviesDataActionTypes } from './movies-data.types';
import { ReviewActionTypes } from '../review-inputs/review-inputs.types';

const INITIAL_STATE = {
  movies: [
    {
      title: 'Pulp Fiction',
      review:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      genres: ['comedy', 'crime', 'drama'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
      isFavorite: true,
      isWatched: true,
    },
    {
      title: 'Fight Club',
      review:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      genres: ['drama'],
      rate: '8',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/Fight_club.jpg/239px-Fight_club.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: true,
    },
    {
      title: 'The Matrix',
      review:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      genres: ['action', 'sci-fi'],
      rate: '9',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Matrix-DVD.jpg/217px-Matrix-DVD.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: true,
    },
    {
      title: 'Inception',
      review:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      genres: ['action', 'sci-fi', 'adventure', 'thriller'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: true,
    },
    {
      title: 'Jojo Rabbit',
      review:
        'A young boy in Hitler`s army finds out his mother is hiding a Jewish girl in their home.',
      genres: ['comedy', 'drama', 'war'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Jojo_Rabbit_%282019%29_poster.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: true,
    },
    {
      title: 'Ready or Not',
      review:
        'A bride`s wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.',
      genres: ['comedy', 'horror', 'thriller', 'mystery'],
      rate: '9',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2b/Ready_or_Not_2019_film_Russian_poster.jpg/210px-Ready_or_Not_2019_film_Russian_poster.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: false,
    },
    {
      title: 'Knives Out',
      review:
        'A detective investigates the death of a patriarch of an eccentric, combative family.',
      genres: ['comedy', 'drama', 'drama', 'mystery', 'thriller'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/8/83/Knives_Out_%28film%29.jpg/202px-Knives_Out_%28film%29.jpg',
      isReviewTextHidden: true,
      isFavorite: false,
      isWatched: false,
    },
  ],
};

const moviesDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesDataActionTypes.ADD_MOVIE_REVIEW:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case MoviesDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN:
      return {
        ...state,
        movies: state.movies.map((el, indx) => {
          if (el.title === action.payload) {
            return {
              ...el,
              isReviewTextHidden: !el.isReviewTextHidden,
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };

    case ReviewActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        movies: state.movies.map((el) => {
          if (el.title === action.payload) {
            return {
              ...el,
              isFavorite: !el.isFavorite,
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };

    default:
      return state;
  }
};

export default moviesDataReducer;
