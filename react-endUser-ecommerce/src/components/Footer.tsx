import { FiMail } from "react-icons/fi";
import {
  FaChevronDown,
  FaXTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#1A1A1A] text-[#fff] px-5 md:px-[100px] py-[40px] text-[16px]">
      <div className="flex flex-col gap-[48px] items-center">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="YOUR EMAIL"
            className="text-[#868686] w-full md:w-[285px] pr-[10px] pl-[20px] border-solid border-b-[1px] bg-[#1A1A1A] border-[#868686] mb-4 md:mb-0"
          />
          <span>
            <FiMail size={40} />
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-[50px] text-center">
          {["STORE MAP", "BEST PRODUCTS", "FACILITES", "PORTFOLIO"].map(
            (title, index) => (
              <div key={index} className="flex flex-col gap-y-[8px]">
                <span className="font-semibold">{title}</span>
                <span className="text-xs">
                  {index === 0
                    ? "Orders"
                    : index === 1
                    ? "Deliveries"
                    : index === 2
                    ? "Cancellation"
                    : "Terms & Condition"}
                </span>
              </div>
            )
          )}
        </div>
        <div className="flex gap-[30px] justify-center">
          <FaXTwitter size={22} />
          <FaFacebookF size={22} />
          <FaPinterest size={22} />
          <FaInstagram size={22} />
        </div>
        <div className="flex flex-col gap-y-[8px] items-center">
          <span>© 2024 DT-BOOKMAX DESIGN THEMES</span>
          <span className="p-[5px] flex gap-[4px] bg-white text-black justify-center items-center">
            <img
              src="/images/united-states-flag-icon.svg"
              alt="US Flag"
              width={20}
            />
            <span className="font-semibold">USD</span>
            <FaChevronDown className="mt-[6px]" size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
