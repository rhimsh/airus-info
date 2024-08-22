import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}
const HomeSection = ({ isDesktop, isEnglish }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  if (isDesktop) {
    return (
      <div
        className='w-fit h-fit bg-gray-100 mt-[-72px] relative'
        onContextMenu={e => {
          e.preventDefault();
        }}
      >
        <Image
          src={isEnglish ? '/assets/desktop/home.png' : '/assets/desktop/korean/home.png'}
          width={1920}
          height={1200}
          alt='home'
        />
        <Link href={'https://youtu.be/R5qlj0p1kMA'} target='_blank'>
          <button
            className='absolute mt-[40px] px-[34px] w-[280px] h-[63px] rounded-[50px] bg-white bg-opacity-10 top-[calc(25%+70px)] left-[50%] translate-x-[-50%] border-[1px] flex items-center justify-center mx-auto z-1'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className='text-white font-[400] text-[20px]'>
              {isHover ? 'Watch Video' : 'Experience Innovation'}
            </div>
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div
      className='w-fit h-fit bg-[rgb(02,02,02)] mt-[-50px] relative'
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <Image
        src={isEnglish ? '/assets/mobile/home.png' : '/assets/mobile/korean/home.png'}
        width={550}
        height={750}
        alt='mobile-home'
      />
      <Link href={'https://youtu.be/R5qlj0p1kMA'} target='_blank'>
        <button className='absolute mt-[40px] px-[14px] w-[60%] h-[53px] rounded-[50px] bg-white bg-opacity-10 top-[calc(35%+50px)] left-[50%] translate-x-[-50%] border-[1px] flex items-center justify-center mx-auto z-1'>
          <div className='text-white font-[300] text-[16px]'>Experience Innovation</div>
        </button>
      </Link>
    </div>
  );
};

export default HomeSection;
