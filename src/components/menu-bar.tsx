import { Modal } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  handleClickMenu: (idx: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

const MenuBar = ({
  handleClickMenu,
  isMenuOpen,
  setIsMenuOpen,
  isEnglish,
  setIsEnglish,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (isEnglish: boolean) => {
    setIsEnglish(isEnglish);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };
  return (
    <Modal open={isMenuOpen} className='w-full flex justify-end h-full'>
      <div className='w-[80%] h-full bg-[rgb(198,198,198)] backdrop-blur-[50px] bg-opacity-[0.2] px-[20px] py-[15px] focus:outline-none'>
        <div className='flex justify-end mb-[20px]'>
          <Image
            src='/assets/mobile/close.png'
            alt=''
            width={25}
            height={25}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className='h-full flex flex-col justify-between text-[16px] tracking-wider text-gray-200 font-[300] pb-[50px]'>
          <div className='h-[60%] flex justify-between flex-col'>
            <li
              onClick={() => {
                handleClickMenu(0);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                handleClickMenu(1);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              About us
            </li>
            <li
              onClick={() => {
                handleClickMenu(3);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Technology
            </li>
            <li
              onClick={() => {
                handleClickMenu(4);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Product
            </li>
            <li
              onClick={() => {
                handleClickMenu(5);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Applications
            </li>
            <li
              onClick={() => {
                handleClickMenu(6);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Service
            </li>
            <li
              onClick={() => {
                handleClickMenu(7);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Buisiness
            </li>
            <li
              onClick={() => {
                handleClickMenu(8);
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Contact
            </li>
          </div>
          {/* <li className='border-[1px] border-white w-fit h-fit py-[10px] px-[10px] rounded-[6px] font-[600]'>
            English
          </li> */}

          <li className='relative'>
            {isDropdownOpen && (
              <ul className='absolute left-0 bottom-[40px] border-[1px] border-gray-400 w-[78px] rounded-[6px] shadow-lg font-[600]'>
                <li
                  onClick={() => handleLanguageChange(true)}
                  className={
                    isEnglish
                      ? 'text-center py-[8px] border-b border-gray-400 bg-gray-400 text-gray-600'
                      : 'text-center py-[8px] border-b border-gray-400'
                  }
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange(false)}
                  className={
                    isEnglish
                      ? 'text-center py-[8px]'
                      : 'text-center py-[8px] bg-gray-400 text-gray-600'
                  }
                >
                  한국어
                </li>
              </ul>
            )}
            <div
              onClick={toggleDropdown}
              className='border-[1px] border-gray-500 w-[78px] h-fit rounded-[6px] text-center py-[8px] font-[600] cursor-pointer'
            >
              {isEnglish ? 'English' : '한국어'}
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default MenuBar;
