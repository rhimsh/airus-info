import Image from 'next/image';
import { useState } from 'react';
import Slick from '../slick';

interface Props {
  isDesktop: boolean;
  isEnglish: boolean;
}

const ProductSection = ({ isDesktop, isEnglish }: Props) => {
  if (isDesktop) {
    return (
      <div
        className='w-fit h-fit relative'
        onContextMenu={e => {
          e.preventDefault();
        }}
      >
        <Image
          src={isEnglish ? '/assets/desktop/product.png' : '/assets/desktop/korean/product.png'}
          width={1920}
          height={1080}
          alt='prod'
        />
        <div className='h-[500px] w-[100%] z-1 absolute top-[40%]'>
          <Slick isDesktop={true} />
        </div>
      </div>
    );
  }
  return (
    <div
      className='w-fit h-fit relative'
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <Image
        src={isEnglish ? '/assets/mobile/product.png' : '/assets/mobile/korean/product.png'}
        width={550}
        height={750}
        alt='product-mobile'
      />
      <div className='h-[500px] w-[100%] z-1 absolute top-[40%]'>
        <Slick isDesktop={false} />
      </div>
    </div>
  );
};

export default ProductSection;
