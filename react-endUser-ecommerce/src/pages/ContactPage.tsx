import banner_1 from "../assets/img/banner_1.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCursor } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

export const ContactPage = () => {
  const [phoneHover, setPhoneHover] = useState(0);
  const [mailHover, setMailHover] = useState(0);
  const [addressHover, setAddressHover] = useState(0);
  const handleMousePhoneEnter = () => {
    setPhoneHover(1);
    setTimeout(() => setPhoneHover(2), 150);
  };
  const handleMousePhoneLeave = () => {
    setPhoneHover(0);
  };
  const handleMouseMailEnter = () => {
    setMailHover(1);
    setTimeout(() => setMailHover(2), 150);
  };
  const handleMouseMailLeave = () => {
    setMailHover(0);
  };
  const handleMouseAddressEnter = () => {
    setAddressHover(1);
    setTimeout(() => setAddressHover(2), 150);
  };
  const handleMouseAddressLeave = () => {
    setAddressHover(0);
  };
  const phoneStyle: object = {
    backgroundColor:
      phoneHover === 0 ? "black" : phoneHover === 1 ? "gray" : "white",
    color: phoneHover === 2 ? "black" : "white",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  const mailStyle: object = {
    backgroundColor:
      mailHover === 0 ? "black" : mailHover === 1 ? "gray" : "white",
    color: mailHover === 2 ? "black" : "white",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  const addressStyle: object = {
    backgroundColor:
      addressHover === 0 ? "black" : addressHover === 1 ? "gray" : "white",
    color: addressHover === 2 ? "black" : "white",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  const PlayfairDisplayFont = styled.h2`
    font-family: "Playfair Display", serif;
    width: 150px;
  `;

  const RalewayFont = styled.p`
    font-family: "Raleway", sans-serif;
  `;
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1180px)",
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <div className='contact'>
      {isMobile ? (
        <div>
          <div
            className='banner pt-12 pb-12 relative'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "49% 0px",
              backgroundSize: "1350px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                Contact
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / contact
              </RalewayFont>
            </div>
          </div>
          <div className='h-10'></div>
          <div className='contact_content'>
            <div className='max-w-screen-xl mx-5 p-5 sm:p-10 '>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {/* CARD 1 */}
                <div className='overflow-hidden flex flex-col'>
                  <div
                    onMouseEnter={handleMousePhoneEnter}
                    onMouseLeave={handleMousePhoneLeave}
                    className='cursor-pointer'
                  >
                    <FiPhone
                      className='text-[46px] p-[7px]'
                      style={phoneStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-6'>
                      phone
                    </RalewayFont>
                    <RalewayFont className='mr-20'>
                      0000 - 123 - 456789
                    </RalewayFont>
                    <RalewayFont className=''>0000 - 123 - 456789</RalewayFont>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className='overflow-hidden flex flex-col'>
                  <div
                    onMouseEnter={handleMouseMailEnter}
                    onMouseLeave={handleMouseMailLeave}
                    className='cursor-pointer'
                  >
                    <LuMail className='text-[46px] p-[7px]' style={mailStyle} />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-5'>
                      email
                    </RalewayFont>
                    <RalewayFont>info@example.com</RalewayFont>
                    <RalewayFont>support@example.com</RalewayFont>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className='overflow-hidden flex flex-col '>
                  <div
                    onMouseEnter={handleMouseAddressEnter}
                    onMouseLeave={handleMouseAddressLeave}
                    className='cursor-pointer'
                  >
                    <BsCursor
                      className='text-[46px] p-[7px]'
                      style={addressStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-5'>
                      address
                    </RalewayFont>
                    <RalewayFont className=' capitalize'>
                      no: 58 a, east madison street,
                    </RalewayFont>
                    <RalewayFont className=' '>
                      Baltimore, MD, USA 4508
                    </RalewayFont>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact_form sm:mx-auto md:mx-8 mt-5'>
            <PlayfairDisplayFont className='capitalize text-[33px] mb-7'>
              contact form
            </PlayfairDisplayFont>
            <div className='form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                  <div>
                    <input
                      className='border border-black w-[178px] pl-[20px] py-3  focus:font-medium '
                      type='text'
                      id='name'
                      placeholder='Name'
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <input
                      className='border border-black w-[178px] pl-[20px] py-3 box-border  focus:font-medium '
                      type='email'
                      id='email'
                      placeholder='Email'
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <input
                      className='border border-black w-[178px] pl-[20px] py-3 mt-5  focus:font-medium placeholder:text-lg'
                      type='text'
                      id='phone'
                      placeholder='Phone'
                      {...register("phone")}
                    />
                  </div>
                </div>
                <textarea
                  className='border border-black  bg-transparent resize-none mt-5 pl-5 pt-5 focus:font-medium'
                  name='message'
                  id='message'
                  cols={47}
                  rows={10}
                  placeholder='Message'
                ></textarea>
                <button
                  className='uppercase bg-black text-white px-20 py-2 text-lg ml-[80px] mt-5 mb-8 hover:bg-white duration-500 hover:text-black'
                  type='submit'
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div>
          <div
            className='banner pt-12 pb-12 relative'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "52% 15%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                Contact
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / contact
              </RalewayFont>
            </div>
          </div>
          <div className='h-8'></div>
          <div className='contact_content'>
            <div className='max-w-screen-xl p-5 sm:p-10 '>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {/* CARD 1 */}
                <div className='overflow-hidden flex flex-col'>
                  <div
                    onMouseEnter={handleMousePhoneEnter}
                    onMouseLeave={handleMousePhoneLeave}
                    className='cursor-pointer'
                  >
                    <FiPhone
                      className='text-[46px] p-[7px]'
                      style={phoneStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-6'>
                      phone
                    </RalewayFont>
                    <RalewayFont className=''>0000 - 123 - 456789</RalewayFont>
                    <RalewayFont className=''>0000 - 123 - 456789</RalewayFont>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className='overflow-hidden flex flex-col'>
                  <div
                    onMouseEnter={handleMouseMailEnter}
                    onMouseLeave={handleMouseMailLeave}
                    className='cursor-pointer'
                  >
                    <LuMail className='text-[46px] p-[7px]' style={mailStyle} />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-5'>
                      email
                    </RalewayFont>
                    <RalewayFont>info@example.com</RalewayFont>
                    <RalewayFont>support@example.com</RalewayFont>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className='overflow-hidden flex flex-col'>
                  <div
                    onMouseEnter={handleMouseAddressEnter}
                    onMouseLeave={handleMouseAddressLeave}
                    className='cursor-pointer'
                  >
                    <BsCursor
                      className='text-[46px] p-[7px]'
                      style={addressStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-5'>
                      address
                    </RalewayFont>
                    <RalewayFont className=' capitalize'>
                      no: 58 a, east madison street,
                    </RalewayFont>
                    <RalewayFont>Baltimore, MD, USA 4508</RalewayFont>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact_form mx-[39px] mt-5'>
            <PlayfairDisplayFont className='capitalize text-[35px] mb-7'>
              contact form
            </PlayfairDisplayFont>
            <div className='form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                  <div>
                    <input
                      className='border border-black w-[233px] pl-[20px] py-3 mr-5   focus:font-medium'
                      type='text'
                      id='name'
                      placeholder='Name'
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <input
                      className='border border-black w-[233px] pl-[20px] py-3 box-border  focus:font-medium mr-5 '
                      type='email'
                      id='email'
                      placeholder='Email'
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <input
                      className='border border-black w-[233px] pl-[20px] py-3  focus:font-medium '
                      type='text'
                      id='phone'
                      placeholder='Phone'
                      {...register("phone")}
                    />
                  </div>
                </div>
                <textarea
                  className='border border-black  bg-transparent resize-none mt-5 pl-5 pt-5  '
                  name='message'
                  id='message'
                  cols={95}
                  rows={10}
                  placeholder='Message'
                ></textarea>
                <button
                  className='uppercase bg-black text-white px-32 py-2 text-lg ml-[210px] mt-5 mb-8 hover:bg-white duration-500 hover:text-black focus:font-medium'
                  type='submit'
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className='banner pt-12 pb-12 relative justify-items-center'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "52% 15%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                Contact
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / contact
              </RalewayFont>
            </div>
          </div>
          <div className='contact_content justify-items-center mt-[80px]'>
            <div className='max-w-screen-xl mx-72 p-5 sm:p-10 flex justify-center'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40'>
                {/* CARD 1 */}

                <div className='overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]'>
                  <div
                    onMouseEnter={handleMousePhoneEnter}
                    onMouseLeave={handleMousePhoneLeave}
                    className='cursor-pointer'
                  >
                    <FiPhone
                      className='text-[46px] p-[7px] ml-[24px] mt-[24px]'
                      style={phoneStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 ml-[24px] mt-[24px]'>
                      phone
                    </RalewayFont>
                    <RalewayFont className='mr-20 ml-[24px] mt-[24px]'>
                      0000 - 123 - 456789
                    </RalewayFont>
                    <RalewayFont className='ml-[24px]'>
                      0000 - 123 - 456789
                    </RalewayFont>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className='overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]'>
                  <div
                    onMouseEnter={handleMouseMailEnter}
                    onMouseLeave={handleMouseMailLeave}
                    className='cursor-pointer'
                  >
                    <LuMail
                      className='text-[46px] p-[7px] ml-[24px] mt-[24px]'
                      style={mailStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 mt-5 ml-[24px] mt-[24px]'>
                      email
                    </RalewayFont>
                    <RalewayFont className='ml-[24px] mt-[24px]'>
                      info@example.com
                    </RalewayFont>
                    <RalewayFont className='ml-[24px]'>
                      support@example.com
                    </RalewayFont>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className='overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]'>
                  <div
                    onMouseEnter={handleMouseAddressEnter}
                    onMouseLeave={handleMouseAddressLeave}
                    className='cursor-pointer'
                  >
                    <BsCursor
                      className='text-[46px] p-[7px] ml-[24px] mt-[24px]'
                      style={addressStyle}
                    />
                    <RalewayFont className='uppercase text-[18px] mb-4 ml-[24px] mt-[24px]'>
                      address
                    </RalewayFont>
                    <RalewayFont className=' capitalize ml-[24px]'>
                      no: 58 a, east madison street,
                    </RalewayFont>
                    <RalewayFont className='ml-[24px]'>
                      Baltimore, MD, USA 4508
                    </RalewayFont>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact_form mx-[310px] mt-5 flex justify-center'>
            <PlayfairDisplayFont className='capitalize text-[35px] mb-7'>
              contact form
            </PlayfairDisplayFont>
            <div className='form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-items-stretch'>
                  <div className='grow'>
                    <input
                      className='border border-black w-[300px] pl-[20px] py-3 mr-10  focus:font-medium placeholder:text-lg'
                      type='text'
                      id='name'
                      placeholder='Name'
                      {...register("name")}
                    />
                  </div>
                  <div className='grow'>
                    <input
                      className='border border-black w-[300px] pl-[20px] py-3 mr-10 box-border  focus:font-medium placeholder:text-lg'
                      type='email'
                      id='email'
                      placeholder='Email'
                      {...register("email")}
                    />
                  </div>
                  <div className='grow'>
                    <input
                      className='border border-black w-[300px] pl-[20px] py-3  focus:font-medium placeholder:text-lg'
                      type='text'
                      id='phone'
                      placeholder='Phone'
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className='flex grow'>
                  <textarea
                    // className="border border-black mt-5 pl-5 pt-5"
                    className='border border-black  bg-transparent resize-none mt-5 pl-5 pt-5  focus:font-medium placeholder:text-lg grow'
                    name='message'
                    id='message'
                    cols={118}
                    rows={10}
                    placeholder='Message'
                  ></textarea>
                </div>
                <button
                  className='uppercase bg-black text-white px-32 py-2 text-lg ml-[340px] mt-5 mb-8 hover:bg-white duration-500 hover:text-black'
                  type='submit'
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
