import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsApi } from 'services/api';
import { Container, ReviewItem, ReviewList } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsApi(movieId).then(review => setReviews(review));
  }, [movieId]);
  return (
    <Container>
      <ReviewList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </ReviewItem>
          ))
        ) : (
          <h3>We do not have any rewiwews for this movies</h3>
        )}
      </ReviewList>
    </Container>
  );
}
