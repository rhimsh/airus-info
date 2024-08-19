import Footer from '@/components/footer';
import Header from '@/components/header';
import HomeSection from '@/components/sections/home';
import { useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { getDeviceType } from '@/common/funtion';
import clsx from 'clsx';
import MenuBar from '@/components/menu-bar';
import AboutUsSection from '@/components/sections/about-us';
import AboutUsSecondSection from '@/components/sections/about-us-second';
import TechnologySection from '@/components/sections/technology';
import ProductSection from '@/components/sections/product';
import ApplicationsSection from '@/components/sections/applications';
import ServiceSection from '@/components/sections/service';
import BusunessSection from '@/components/sections/business';

interface Props {
  isDesktop: boolean;
}
export default function Home({ isDesktop }: Props) {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const navHeight = 0;
  const handleClickMenu = (idx: number) => {
    window.scrollTo({
      top: scrollRef.current[idx].offsetTop - navHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full overflow-clip'>
      <Header
        handleClickMenu={handleClickMenu}
        isDesktop={isDesktop}
        setIsMenuOpen={setIsMenuOpen}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
      />
      <MenuBar
        handleClickMenu={handleClickMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
      />
      <div>
        <div ref={ref => (ref ? (scrollRef.current[0] = ref) : null)}>
          <HomeSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[1] = ref) : null)}>
          <AboutUsSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[2] = ref) : null)}>
          <AboutUsSecondSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[3] = ref) : null)}>
          <TechnologySection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[4] = ref) : null)}>
          <ProductSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[5] = ref) : null)}>
          <ApplicationsSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[6] = ref) : null)}>
          <ServiceSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[7] = ref) : null)}>
          <BusunessSection isDesktop={isDesktop} isEnglish={isEnglish} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[8] = ref) : null)}>
          <Footer isDesktop={isDesktop} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const device = getDeviceType(req);
  const isDesktop = device === 'desktop';

  return { props: { isDesktop } };
};
