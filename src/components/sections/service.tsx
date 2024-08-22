import Image from 'next/image';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}

const ServiceSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div
        className='w-fit h-fit'
        onContextMenu={e => {
          e.preventDefault();
        }}
      >
        <Image
          src={isEnglish ? '/assets/desktop/service.png' : '/assets/desktop/korean/service.png'}
          width={1920}
          height={1080}
          alt='service'
        />
      </div>
    );
  }
  return (
    <div
      className='w-fit h-fit bg-[rgb(13,13,24)]'
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <Image
        src={isEnglish ? '/assets/mobile/service.png' : '/assets/mobile/korean/service.png'}
        width={550}
        height={915}
        alt='service-mobile'
      />
    </div>
  );
};

export default ServiceSection;
