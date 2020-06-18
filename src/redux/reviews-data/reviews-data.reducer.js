import { ReviewsDataActionTypes } from './reviews-data.types';

const INITIAL_STATE = {
  reviews: [
    {
      title: 'Pulp Fiction',
      review:
        'Great Great Great Great Great Great GreatGreatGreat Great Great Great Great Great Great  Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great Great v v Great GreatGreat Great Great Great',
      genres: ['comedy'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
    },
    {
      title: 'Pulp Fiction1',
      review: 'Great',
      genres: ['comedy'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
    },
    {
      title: 'Pulp Fiction2',
      review: 'Great',
      genres: ['comedy'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
    },
    {
      title: 'Pulp Fiction3',
      review: 'Great',
      genres: ['comedy'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
    },
    {
      title: 'Pulp Fiction4',
      review: 'Great',
      genres: ['comedy'],
      rate: '10',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg',
      isReviewTextHidden: true,
    },
  ],
};

const reviewsDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewsDataActionTypes.ADD_MOVIE_REVIEW_DATA:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    case ReviewsDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN:
      return {
        ...state,
        reviews: state.reviews.map((el, indx) => {
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

    default:
      return state;
  }
};

export default reviewsDataReducer;
