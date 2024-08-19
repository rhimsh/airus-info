import Image from 'next/image';

interface Props {
  isDesktop: boolean;
}

const Footer = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-fit h-fit'>
        <Image src='/assets/desktop/footer.png' width={1920} height={1080} alt='footer' />
      </div>
    );
  }
  return (
    <div className='w-fit h-fit'>
      <Image src='/assets/mobile/footer.png' width={550} height={300} alt='footer-mobile' />
    </div>
  );
};

export default Footer;
