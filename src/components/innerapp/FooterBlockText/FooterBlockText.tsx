import { useState } from 'react';
import { InnerAppText } from '../../../content/innerAppText';

const FooterBlockText = () => {
  const [isHideText, setIsHideText] = useState(true);
  const textBlock = InnerAppText.mainApp.footer.textBlock;

  return (
    <div className={'relative'}>
      <div className={'text-[11px] text-[#a9a9a9] text-justify leading-4 mt-5'} dangerouslySetInnerHTML={{ __html: isHideText ? textBlock.slice(0, 800) : textBlock }}/>
      <button onClick={() => setIsHideText(!isHideText)} className={'text-[#31353b] text-xs py-2 px-4 rounded-md border-solid border-1 border-[#dbdee2] cursor-pointer absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white'}>{isHideText ? 'Lihat Selengkapnya' : 'Hide'}</button>
    </div>
  );
};

export default FooterBlockText;