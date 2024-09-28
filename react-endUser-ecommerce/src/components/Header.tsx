import { useState } from "react";
import { FaUser, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaBagShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='h-[115px] bg-black text-[#fff] flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 px-5'>
      <div className='flex items-center'>
        <img
          className='w-[180px] md:w-[270px]'
          src='https://dt-bookmax.myshopify.com/cdn/shop/files/Bookmax.png?v=1658907922'
          alt='logo'
        />
      </div>
      <div className='hidden md:flex flex-wrap justify-center uppercase h-[53px] font-semibold italic text-[20px] md:text-[16px] gap-2'>
        {["home", "shop", "about", "pages", "contact", "collection"].map(
          (item, index) => (
            <div
              key={index}
              className='relative cursor-pointer px-[16px] py-[16px] hover:text-blue-700 transition duration-300 ease-in-out'
              onMouseEnter={() => item === "pages" && setIsDropdownOpen(true)}
              onMouseLeave={() => item === "pages" && setIsDropdownOpen(false)}
              onClick={() => item !== "pages" && navigate(`/${item}`)}
            >
              {item === "pages" ? (
                <div className='flex gap-[10px]'>
                  <span>{item}</span>
                  <FaChevronDown className='flex my-[5px]' size={12} />
                  {isDropdownOpen && (
                    <div className='absolute z-20 raleway text-[14px] left-0 mt-[30px] w-[150px] bg-white text-black shadow-lg rounded'>
                      <div
                        className='px-4 py-1 cursor-pointer hover:text-blue-700'
                        onClick={() => navigate("/blog")}
                      >
                        Blog
                      </div>
                      <div
                        className='px-4 py-2 cursor-pointer hover:text-blue-700'
                        onClick={() => navigate("/faq")}
                      >
                        Faq
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                item
              )}
            </div>
          )
        )}
      </div>
      <div className='flex gap-2 md:gap-4 items-center'>
        <div className='flex items-center gap-[8px] px-[8px] py-[16px] hover:text-gray-400 transition duration-300 ease-in-out italic text-[14px] md:text-[16px]'>
          <span>My Account</span>
          <FaUser size={18} />
        </div>
        <div className='flex items-center gap-[4px] px-[8px] py-[16px] relative hover:text-gray-400 transition duration-300 ease-in-out'>
          <FaBagShopping size={20} />
          <div className='absolute top-[10px] right-[3px] w-[12px] h-[12px] bg-white border rounded-full flex items-center justify-center'>
            <span className='text-[9px] text-black font-bold'>3</span>
          </div>
        </div>
        <div
          className='flex items-center gap-[4px] pl-[12px] py-[16px] cursor-pointer'
          onClick={toggleMenu}
        >
          <IoMdMenu size={30} />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white text-black shadow-lg z-50 flex flex-col transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className='flex justify-end p-4'>
            <button onClick={() => setIsMenuOpen(false)} className='text-xl'>
              <FaTimes size={35} />
            </button>
          </div>
          <div className='flex uppercase flex-col items-center justify-center text-[40px] font-semibold h-full'>
            {["home", "shop", "about", "pages", "contact", "collection"].map(
              (item, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 cursor-pointer transition duration-300 ease-in-out 
                    ${
                      item === "home" ? "text-blue-500 font-bold" : "text-black"
                    }
                    hover:text-blue-500 hover:text-shadow`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(`/${item}`); // Navigate to the corresponding route
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
