import React from "react";
import { Outlet } from "react-router-dom";
import MainPage from "../components/MainPage";
import Pages from "../components/Pages";

const MainLayout = () => {
  return (
    <div>
      <header className='bg-black w-[1600px] ml-[314px] h-[86px] absolute'>
        <div className='search-form text-black bg-slate-500'>Header</div>
      </header>
      <div className='sidebar h-[100vh] lg:w-[314px] bg-[#000000] flex flex-col text-[#ffffff] fixed'>
        <img
          src='/images/Logo.png'
          className='logo lg:w-[240px] h-[43.77px] mt-[24px] mx-auto'
        ></img>
        <MainPage></MainPage>
        <Pages></Pages>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
