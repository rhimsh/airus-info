import Image from 'next/image';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}

const BusunessSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <Image
        src={isEnglish ? '/assets/desktop/business.png' : '/assets/desktop/korean/business.png'}
        width={1920}
        height={1080}
        alt=''
        onContextMenu={e => {
          e.preventDefault();
        }}
      />
    );
  }
  return (
    <div
      className='w-fit h-fit bg-black'
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <Image
        src={isEnglish ? '/assets/mobile/business.png' : '/assets/mobile/korean/business.png'}
        width={550}
        height={1617}
        alt='business-mobile'
      />
    </div>
  );
};

export default BusunessSection;
