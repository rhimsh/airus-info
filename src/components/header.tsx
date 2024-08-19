import Image from 'next/image';
import { useState } from 'react';

interface Props {
  handleClickMenu: (idx: number) => void;
  isDesktop: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}
const Header = ({ handleClickMenu, isDesktop, setIsMenuOpen, isEnglish, setIsEnglish }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (isEnglish: boolean) => {
    setIsEnglish(isEnglish);
    setIsDropdownOpen(false);
  };
  if (isDesktop) {
    return (
      <header className='text-gray-700 h-[72px] w-full max-w-full font-[600] flex justify-center px-[360px] py-[14px] items-center sticky top-0 bg-black bg-opacity-[0.01] backdrop-blur-[15px] z-30 font-suitVariable'>
        <div className='text-[20px] font-extrabold'>AIRUS</div>
        <div className='mx-[100px]'></div>
        <nav className='min-w-[800px]'>
          <ul className='flex w-full justify-between items-center text-[15px] font-[500]'>
            <li
              onClick={() => handleClickMenu(0)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Home
            </li>
            <li
              onClick={() => handleClickMenu(1)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              About us
            </li>
            <li
              onClick={() => handleClickMenu(3)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Technology
            </li>
            <li
              onClick={() => handleClickMenu(4)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Product
            </li>
            <li
              onClick={() => handleClickMenu(5)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Applications
            </li>
            <li
              onClick={() => handleClickMenu(6)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Service
            </li>
            <li
              onClick={() => handleClickMenu(7)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Business
            </li>
            <li
              onClick={() => handleClickMenu(8)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300'
            >
              Contact
            </li>
            <li className='relative'>
              <div
                onClick={toggleDropdown}
                className='border-[1px] border-gray-500 w-[78px] h-fit rounded-[6px] text-center py-[6px] font-[600] cursor-pointer'
              >
                {isEnglish ? 'English' : '한국어'}
              </div>
              {isDropdownOpen && (
                <ul className='absolute right-0 mt-[8px] bg-white border-[1px] border-gray-300 rounded-[6px] shadow-lg'>
                  <li
                    onClick={() => handleLanguageChange(true)}
                    className='px-[12px] py-[8px] cursor-pointer hover:bg-gray-100'
                  >
                    English
                  </li>
                  <li
                    onClick={() => handleLanguageChange(false)}
                    className='px-[12px] py-[8px] cursor-pointer hover:bg-gray-100'
                  >
                    한국어
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header className='h-[50px] w-full max-w-full flex justify-between items-center sticky top-0 text-gray-50 bg-black bg-opacity-[0.01] backdrop-blur-[15px] z-30 font-suitVariable px-[30px]'>
      <div className='text-[20px] font-extrabold'>AIRUS</div>
      <Image
        src='/assets/mobile/menus.png'
        alt=''
        height={24}
        width={24}
        onClick={() => setIsMenuOpen(true)}
        className='cursor-pointer'
      />
    </header>
  );
};

export default Header;
