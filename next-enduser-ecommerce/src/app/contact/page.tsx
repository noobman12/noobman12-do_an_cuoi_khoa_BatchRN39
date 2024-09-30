"use client";
import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCursor } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import styled from "styled-components";

const ContactPage = () => {
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

  const RalewayFont = styled.p`
    font-family: "Raleway", sans-serif;
  `;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <div className="contact">
      <div>
        <PageBanner bannerTitle="Contact" bannerUrl="HOME/CONTACT" />
      </div>
      <div className="contact_content justify-items-center mt-[80px]">
        <div className="max-w-screen-xl mx-72 p-5 sm:p-10 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40">
            {/* CARD 1 */}

            <div className="overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]">
              <div
                onMouseEnter={handleMousePhoneEnter}
                onMouseLeave={handleMousePhoneLeave}
                className="cursor-pointer"
              >
                <FiPhone
                  className="text-[46px] p-[7px] ml-[24px] mt-[24px]"
                  style={phoneStyle}
                />
                <RalewayFont className="uppercase text-[18px] mb-4 ml-[24px] mt-[24px]">
                  phone
                </RalewayFont>
                <RalewayFont className="mr-20 ml-[24px] mt-[24px]">
                  0000 - 123 - 456789
                </RalewayFont>
                <RalewayFont className="ml-[24px]">
                  0000 - 123 - 456789
                </RalewayFont>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]">
              <div
                onMouseEnter={handleMouseMailEnter}
                onMouseLeave={handleMouseMailLeave}
                className="cursor-pointer"
              >
                <LuMail
                  className="text-[46px] p-[7px] ml-[24px] mt-[24px]"
                  style={mailStyle}
                />
                <RalewayFont className="uppercase text-[18px] mb-4  ml-[24px] mt-[24px]">
                  email
                </RalewayFont>
                <RalewayFont className="ml-[24px] mt-[24px]">
                  info@example.com
                </RalewayFont>
                <RalewayFont className="ml-[24px]">
                  support@example.com
                </RalewayFont>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="overflow-hidden flex flex-col w-[344px] h-[224px] bg-[#EDEDED]">
              <div
                onMouseEnter={handleMouseAddressEnter}
                onMouseLeave={handleMouseAddressLeave}
                className="cursor-pointer"
              >
                <BsCursor
                  className="text-[46px] p-[7px] ml-[24px] mt-[24px]"
                  style={addressStyle}
                />
                <RalewayFont className="uppercase text-[18px] mb-4 ml-[24px] mt-[24px]">
                  address
                </RalewayFont>
                <RalewayFont className=" capitalize ml-[24px]">
                  no: 58 a, east madison street,
                </RalewayFont>
                <RalewayFont className="ml-[24px]">
                  Baltimore, MD, USA 4508
                </RalewayFont>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form mx-[310px] mt-5 flex flex-col justify-center">
        <div className="capitalize text-[35px] mb-7">contact form</div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-items-stretch">
              <div className="grow">
                <input
                  className="border border-black pl-[20px] py-3 mr-10  focus:font-medium placeholder:text-lg"
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                />
              </div>
              <div className="grow">
                <input
                  className="border border-black w-[300px] pl-[20px] py-3 mr-10 box-border  focus:font-medium placeholder:text-lg"
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              <div className="grow">
                <input
                  className="border border-black w-[300px] pl-[20px] py-3  focus:font-medium placeholder:text-lg"
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="flex grow">
              <textarea
                // className="border border-black mt-5 pl-5 pt-5"
                className="border border-black  bg-transparent resize-none mt-5 pl-5 pt-5  focus:font-medium placeholder:text-lg grow"
                name="message"
                id="message"
                cols={118}
                rows={10}
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="uppercase bg-black text-white px-32 py-2 text-lg ml-[340px] mt-5 mb-8 hover:bg-white duration-500 hover:text-black"
              type="submit"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
