import RenderScoreInViewStars from '../RenderScoreInViewStart/RenderScoreInViewStars';
import type { TReview } from '../../../shared/types/review';

interface ReviewProps {
  review: TReview;
}

const Review = ({ review }: ReviewProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <span
          className="size-7 rounded-full bg-pink-600 text-[#FFF4FC] font-semibold leading-[100%] flex items-center justify-center">{review.userLetter}</span>
        <p className="text-sm text-[rgb(32,33,36)]">{review.userTitle}</p>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <RenderScoreInViewStars score={review.userScore} />
        <p className="text-[rgb(95,99,104)] text-xs tracking-wider">{review.singleReviewDate}</p>
      </div>
      <div className="flex flex-col gap-3 my-3">
        <p className="text-[rgb(95,99,104)] tracking-wide">{review.singleReviewText}</p>
        <p className="text-[rgb(95,99,104)] text-xs tracking-wider">{review.likes}</p>
      </div>
    </>
  );
};

export default Review;