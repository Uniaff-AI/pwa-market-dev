import type {TScore} from '../../../shared/types/score.types';
import {calculatingScore} from '../../../utils/calculatingScore';
import RenderScoreLine from './RenderScoreLine';

interface RenderScoreLinesProps {
  scores: TScore<number>
}

const RenderScoreLines = ({ scores }: RenderScoreLinesProps) => {
  const { lenScores } = calculatingScore(scores);
  const objScores = Object.entries(scores);

  return (
    <div className={'flex flex-col'}>
      {objScores.map(([keyScore, lenScore]) => (
        <RenderScoreLine keyScore={keyScore} lenScore={lenScore} lenScores={lenScores} key={keyScore}/>
      ))}
    </div>
  );
};

export default RenderScoreLines;