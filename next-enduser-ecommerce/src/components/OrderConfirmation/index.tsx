import React from "react";

interface OrderConfirmationProps {
  cart: { name: string; price: number; quantity: number }[];
  total: number;
  paymentMethod: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  cart,
  total,
  paymentMethod,
}) => {
  return (
    <div className="col-span-2">
      <h1 className="text-2xl font-bold pb-4 border-b">Order Confirmation</h1>
      <div className="py-6">
        <h2 className="text-lg font-semibold pb-4">
          Please confirm your order details
        </h2>
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between p-2 border-b">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>¥{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between p-2 border-t font-bold">
          <span>Total</span>
          <span>¥{total.toLocaleString()}</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Payment Method: {paymentMethod}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
