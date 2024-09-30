import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

const Pages = () => {
  const [openUser, setOpenUser] = React.useState(false);
  return (
    <div className='Main_Pages ml-[24px] mt-[40px] '>
      <span className='uppercase'>Pages</span>
      <ul>
        <li>
          <div
            className='admin font-raleway text-[16px] mt-[32px] flex cursor-pointer'
            onClick={() => {
              setOpenUser(!openUser);
            }}
          >
            {openUser ? (
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
              {openUser ? (
                <span className='text-[#0B51BB]'>User</span>
              ) : (
                <span>User</span>
              )}
            </span>
            {openUser ? (
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
          {openUser && (
            <ul className='mt-[24px] ml-[24px]'>
              <li className='mt-[24px] flex'>
                <LuUserSquare2
                  width={24}
                  height={24}
                  className='w-[20px] h-[20px] mt-[2px]'
                />
                <span className='ml-[24px]'>User Profile</span>
              </li>
              <li className='mt-[24px] flex'>
                <BiEditAlt
                  width={24}
                  height={24}
                  className='w-[20px] h-[20px] mt-[2px]'
                />
                <span className='ml-[24px]'>User Edit</span>
              </li>
              <li className='mt-[24px] flex'>
                <IoMdAddCircleOutline
                  width={24}
                  height={24}
                  className='w-[20px] h-[20px] mt-[2px]'
                />
                <span className='ml-[24px]'>User Add</span>
              </li>
              <li className='mt-[24px] flex'>
                <img
                  src='/images/user_list_icon_default.png'
                  className='w-[16px] h-[20px] mt-[2px]'
                  alt=''
                />
                <span className='ml-[24px]'>User List</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pages;
