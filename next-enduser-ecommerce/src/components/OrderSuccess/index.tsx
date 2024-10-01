import React from "react";

interface OrderSuccessProps {
  onGoHome: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onGoHome }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="py-[100px] text-center">
        <h2 className="text-lg font-semibold">Your Order Was Successful!</h2>
        <p>Thank you for your purchase.</p>
        <div className="mt-4">
          <p>Would you like to return to the homepage?</p>
          <button
            className="raleway text-[16px] w-[160px] mt-5 h-[51px] border-[2px] bg-[#000] hover:border-black text-[#fff] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] cursor-pointer "
            onClick={onGoHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
