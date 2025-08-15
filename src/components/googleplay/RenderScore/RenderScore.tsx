import type {TScore} from '../../../shared/types/score.types';
import {calculatingScore} from '../../../utils/calculatingScore';

interface RenderScoreProps {
  scores: TScore<number>;
}

const RenderScore = ({ scores }: RenderScoreProps) => {
  const { result } = calculatingScore(scores);

  return (
    <span className="text-[rgb(32,33,36)] text-[56px] leading-[64px]">
      {result}
    </span>
  );
};

export default RenderScore;