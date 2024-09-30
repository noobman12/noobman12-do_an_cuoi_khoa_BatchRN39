import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MainLayout = () => {
  const [openAdmin, setOpenAdmin] = React.useState(false);
  return (
    <>
      <header></header>
      <div className='sidebar h-[100vh] lg:w-[314px] bg-[#000000] flex flex-col text-[#ffffff]'>
        <img
          src='/images/Logo.png'
          className='logo lg:w-[240px] h-[43.77px] mt-[24px] mx-auto'
        ></img>
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
                    className='w-[20px] h-[20px] mt-[3px]'
                  />
                ) : (
                  <img
                    src='/images/user_icon_default.png'
                    alt=''
                    className='w-[20px] h-[20px] mt-[3px]'
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
                      className='w-[24px] h-[24px]'
                    />

                    <Link to='/dashboard' />
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
                      className='w-[20px] h-[20px]  mt-[2px]'
                      alt=''
                    />
                    <span className='ml-[24px]'>Author</span>
                  </li>
                  <li className='mt-[24px] flex'>
                    <img
                      src='/images/book_icon_default.png'
                      className='w-[16px] h-[20px] mt-[2px]'
                      alt=''
                    />
                    <span className='ml-[24px]'>Books</span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
