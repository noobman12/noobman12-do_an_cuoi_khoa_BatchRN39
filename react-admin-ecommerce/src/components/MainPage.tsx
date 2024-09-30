import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [openAdmin, setOpenAdmin] = React.useState(false);
  return (
    <div className='Main_Pages ml-[24px] mt-[40px] '>
      <span className='uppercase'>Main Pages</span>
      <ul>
        <li>
          <div
            className='admin font-raleway text-[16px] mt-[32px] flex cursor-pointer'
            onClick={() => {
              setOpenAdmin(!openAdmin);
            }}
          >
            {openAdmin ? (
              <img
                src='/images/user_icon.png'
                alt=''
                className='w-[24px] h-[24px]'
              />
            ) : (
              <img
                src='/images/user_icon_default.png'
                alt=''
                className='w-[24px] h-[24px]'
              />
            )}

            <span className=' ml-[24px] mt-[2px]'>
              {openAdmin ? (
                <span className='text-[#0B51BB]'>Admin</span>
              ) : (
                <span>Admin</span>
              )}
            </span>
            {openAdmin ? (
              <FaChevronDown
                width={11}
                height={6}
                color='0B51BB'
                className='ml-[68px] mt-[6px]'
              />
            ) : (
              <FaChevronDown
                width={11}
                height={6}
                color='white'
                className='ml-[68px] mt-[6px] rotate-180'
              />
            )}
          </div>
          {openAdmin && (
            <ul className='mt-[24px] ml-[24px]'>
              <li className='mt-[24px] flex'>
                <img
                  src='/images/clock_icon_default.png'
                  alt=''
                  className='w-[20px] h-[20px]'
                />

                <Link to='/dashboard' className='ml-[24px]'>
                  Dashboard
                </Link>
              </li>
              <li className='mt-[24px] flex'>
                <img
                  src='/images/category_icon_default.png'
                  alt=''
                  className='w-[19px] h-[12px] mt-[5px]'
                />
                <span className='ml-[24px]'>Category Lists</span>
              </li>
              <li className='mt-[24px] flex'>
                <img
                  src='/images/author_icon_default.png'
                  className='w-[18px] h-[18px]  mt-[2px]'
                  alt=''
                />
                <span className='ml-[24px]'>Author</span>
              </li>
              <li className='mt-[24px] flex'>
                <img
                  src='/images/book_icon_default.png'
                  className='w-[15px] h-[18px] mt-[2px]'
                  alt=''
                />
                <span className='ml-[24px]'>Books</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
