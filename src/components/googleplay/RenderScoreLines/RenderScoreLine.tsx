interface RenderScoreLineProps {
  keyScore: string;
  lenScore: number;
  lenScores: number;
}

const RenderScoreLine = ({ keyScore, lenScore, lenScores }: RenderScoreLineProps) => {
  return (
    <div className={'flex justify-between gap-5 items-center'}>
      <span className={'text-[rgb(95,99,104)] text-xs leading-[16px] tracking-wide'}>
        {keyScore === 'A' && 5}
        {keyScore === 'B' && 4}
        {keyScore === 'C' && 3}
        {keyScore === 'D' && 2}
        {keyScore === 'F' && 1}
      </span>
      <div className={'h-2.5 w-full rounded-full bg-[rgb(232,234,237)] relative'}>
        <div className={'absolute h-full top-0 left-0 bg-[#01875f] rounded-full'} style={{ width: `${(lenScore/lenScores) * 100}%` }}/>
      </div>
    </div>
  );
};

export default RenderScoreLine;