import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './watched-movies.styles.scss';

import { selectReviews } from '../../redux/reviews-data/reviews-data.selectors';
import WatchedMoviesCard from '../../components/watched-movies/watched-movies-card.component';

const WatchedMovies = ({ reviews }) => {
  console.log(reviews);

  return (
    <div>
      <h2 className='watched-list-header'>Watched Movies List</h2>
      <div className='card-container'>
        {reviews.map((review, indx) => (
          <WatchedMoviesCard key={review.rate + 20 * indx} review={review} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  reviews: selectReviews,
});

export default connect(mapStateToProps)(WatchedMovies);
