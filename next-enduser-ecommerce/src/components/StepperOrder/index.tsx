import { FaCheck } from "react-icons/fa6";

interface StepperProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: "Cart" },
  { number: 2, label: "Checkout" },
  { number: 3, label: "Confirmation" },
  { number: 4, label: "Complete" },
];
const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center py-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex justify-center items-center font-bold transition-all duration-300 ease-in-out ${
                currentStep === step.number
                  ? "bg-black text-white"
                  : "bg-[#fff] border-[#7f7f7f] border-[3px] text-[#7f7f7f]"
              } hover:bg-blue-700 hover:text-white`}
            >
              {step.number === 4 ? <FaCheck /> : step.number}
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              {step.label}
            </div>
          </div>
          {step.number !== steps.length && (
            <div
              className={`w-[150px] h-1 ${
                currentStep >= step.number ? "bg-black" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
