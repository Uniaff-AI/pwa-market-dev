import type {TScore} from '../shared/types/score.types';

export function calculatingScore(scores: TScore<number>) {
  let lenScores = 0;
  let resultScore = 0;
  for (const [keyScores, valueScore] of Object.entries(scores)) {
    if (keyScores === 'A') resultScore += valueScore * 5;
    else if (keyScores === 'B') resultScore += valueScore * 4;
    else if (keyScores === 'C') resultScore += valueScore * 3;
    else if (keyScores === 'D') resultScore += valueScore * 2;
    else resultScore += valueScore;

    lenScores += valueScore;
  }

  const result = Number((resultScore / lenScores).toFixed(1));

  return { result, lenScores };
}