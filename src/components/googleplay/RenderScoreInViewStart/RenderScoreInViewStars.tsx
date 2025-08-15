import type {TScore} from '../../../shared/types/score.types';
import {Star} from "lucide-react";
import {calculatingScore} from '../../../utils/calculatingScore';

interface RenderScoreInViewStartProps {
  scores?: TScore<number>;
  score?: number;
}

const RenderScoreInViewStars = ({ scores, score }: RenderScoreInViewStartProps) => {
  const { result: resultScore } = scores ? calculatingScore(scores) : { result: score };
  const fullStars = Math.floor(resultScore as number);
  const hasHalfStar = resultScore as number - fullStars >= 0.25 && resultScore as number - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-0.5">
      {new Array(fullStars).fill(0).map((_, index) => (
        <Star key={`full-${index}`} className="size-4 fill-[rgb(1,135,95)] stroke-0" />
      ))}

      {scores && hasHalfStar && (
        <div className="relative size-4">
          <Star className="absolute top-0 left-0 size-4 fill-[rgb(241,243,244)] stroke-0" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="size-4 fill-[rgb(1,135,95)] stroke-0" />
          </div>
        </div>
      )}

      {new Array(emptyStars).fill(0).map((_, index) => (
        <Star key={`empty-${index}`} className="size-4 fill-[rgb(241,243,244)] stroke-0" />
      ))}
    </div>
  );
};

export default RenderScoreInViewStars;