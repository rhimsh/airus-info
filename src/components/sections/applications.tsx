import Image from 'next/image';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}
const ApplicationsSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-fit h-fit'>
        <Image
          src={
            isEnglish
              ? '/assets/desktop/applications.png'
              : '/assets/desktop/korean/applications.png'
          }
          width={1920}
          height={1080}
          alt='applications'
        />
      </div>
    );
  }
  return (
    <div className='w-fit h-fit'>
      <Image
        src={
          isEnglish ? '/assets/mobile/applications.png' : '/assets/mobile/korean/applications.png'
        }
        width={550}
        height={1617}
        alt='applications-mobile'
      />
    </div>
  );
};

export default ApplicationsSection;
