import React from "react";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className="col-span-2">
      <h1 className="text-2xl font-bold pb-4 border-b">Payment Method</h1>
      <div className="py-6">
        <h2 className="text-lg font-semibold pb-4">
          Please select a payment method
        </h2>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="COD"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked={paymentMethod === "COD"}
              className="mr-2"
            />
            COD (Cash on Delivery)
          </label>
          <label className="flex items-center">
            <input
              required
              type="radio"
              name="payment"
              value="Credit"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked={paymentMethod === "Credit"}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="ATM"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked={paymentMethod === "ATM"}
              className="mr-2"
            />
            ATM Transfer
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="Cash"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked={paymentMethod === "Cash"}
              className="mr-2"
            />
            Cash
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
