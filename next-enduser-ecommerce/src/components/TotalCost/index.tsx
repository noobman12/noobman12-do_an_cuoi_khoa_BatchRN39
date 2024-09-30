import React from "react";

interface TotalCostProps {
  total: number;
  itemCount: number;
  onNext?: () => void; // Optional callback function for the next step
  buttonLabel: string; // Label for the button
}

const TotalCost: React.FC<TotalCostProps> = ({
  total,
  itemCount,
  onNext,
  buttonLabel,
}) => {
  return (
    <div className="raleway p-6 rounded-lg shadow-md sticky top-4 h-fit">
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">Total</h2>
        <p className="text-gray-500">Items in Cart: {itemCount}</p>
      </div>

      <div className="text-right py-4">
        <p className="text-2xl font-bold text-black">
          ¥{total.toLocaleString()}
        </p>
      </div>

      {onNext && (
        <div className="mt-4 flex justify-center">
          <button
            className=" text-[16px] w-full h-[51px] border-[2px] bg-[#000] hover:border-black text-[#fff] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] cursor-pointer"
            onClick={onNext}
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export default TotalCost;
