import Image from 'next/image';
interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}
const AboutUsSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div
        className='w-fit h-fit'
        onContextMenu={e => {
          e.preventDefault();
        }}
      >
        <Image
          src={
            isEnglish
              ? '/assets/desktop/about-us-first.png'
              : '/assets/desktop/korean/about-us-first.png'
          }
          width={1920}
          height={1200}
          alt='about-1'
        />
      </div>
    );
  }
  return (
    <div
      className='w-fit h-fit'
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <Image
        src={isEnglish ? '/assets/mobile/about-1.png' : '/assets/mobile/korean/about-1.png'}
        width={550}
        height={750}
        alt='about-1-mobile'
      />
    </div>
  );
};

export default AboutUsSection;
