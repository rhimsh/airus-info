import Image from 'next/image';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}
const AboutUsSecondSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-fit h-fit'>
        <Image
          src={
            isEnglish
              ? '/assets/desktop/about-us-second.png'
              : '/assets/desktop/korean/about-us-second.png'
          }
          width={1920}
          height={1080}
          alt='about-2'
        />
      </div>
    );
  }
  return (
    <div className='w-fit h-fit'>
      <Image
        src={isEnglish ? '/assets/mobile/about-2.png' : '/assets/mobile/korean/about-2.png'}
        width={550}
        height={750}
        alt='about-2-mobile'
      />
    </div>
  );
};

export default AboutUsSecondSection;
