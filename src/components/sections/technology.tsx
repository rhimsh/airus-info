import Image from 'next/image';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}

const TechnologySection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-fit h-fit'>
        <Image
          src={
            isEnglish ? '/assets/desktop/technology.png' : '/assets/desktop/korean/technology.png'
          }
          width={1920}
          height={1674}
          alt='tech'
        />
      </div>
    );
  }
  return (
    <div className='w-fit h-fit'>
      <Image
        src={isEnglish ? '/assets/mobile/technology.png' : '/assets/mobile/korean/technology.png'}
        width={550}
        height={1617}
        alt='tech-mobile'
      />
    </div>
  );
};

export default TechnologySection;
