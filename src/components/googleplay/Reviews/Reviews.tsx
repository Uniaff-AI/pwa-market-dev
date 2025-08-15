import { GooglePlayText } from '../../../content/googlePlayText';
import Review from './Review';

const Reviews = () => {
  return (
    <div className="mt-7">
      {GooglePlayText.reviews.map(review => (
        <Review key={review.id} review={review}/>
      ))}
    </div>
  );
};

export default Reviews;