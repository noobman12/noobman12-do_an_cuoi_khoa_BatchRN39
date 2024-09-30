"use client";
import React, { useState } from "react";
import Stepper from "@/components/StepperOrder";
import CartItem from "@/components/CartItem";
import { CartItemProps } from "@/components/CartItem";
import OrderConfirmation from "@/components/OrderConfirmation";
import OrderSuccess from "@/components/OrderSuccess";
import PaymentMethod from "@/components/PaymentMethod";
import TotalCost from "@/components/TotalCost";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItemProps[]>([
    {
      name: "Animal Crossing: New Horizons (Nintendo Switch)",
      price: 5280,
      image:
        "https://content.bookoff.co.jp/goodsimages/LL/001940/0019400342LL.jpg",
      quantity: 1,
    },
    {
      name: "Naruse Takes Over the World (Book)",
      price: 1595,
      image:
        "https://content.bookoff.co.jp/goodsimages/LL/002002/0020021517LL.jpg",
      quantity: 1,
    },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleQuantityChange = (index: number, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // State to track the current step (1, 2, 3, 4)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  return (
    <div className="min-h-screen p-4 mx-[10%]">
      <Stepper currentStep={currentStep} />

      <div className="bg-white shadow-lg rounded-lg grid grid-cols-3 gap-8 p-4">
        <div className="col-span-2">
          {currentStep === 1 && (
            <>
              <h1 className="text-2xl font-bold pb-4 border-b">Cart</h1>
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  {...item}
                  onQuantityChange={(amount) =>
                    handleQuantityChange(index, amount)
                  }
                />
              ))}
            </>
          )}

          {currentStep === 2 && (
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          )}

          {currentStep === 3 && (
            <OrderConfirmation
              cart={cart}
              total={total}
              paymentMethod={paymentMethod}
            />
          )}
        </div>

        {/* Total and Checkout Section */}
        {currentStep === 1 && (
          <TotalCost
            total={total}
            itemCount={cart.length}
            onNext={() => setCurrentStep(2)}
            buttonLabel="Proceed to Checkout"
          />
        )}
        {currentStep === 2 && (
          <TotalCost
            total={total}
            itemCount={cart.length}
            onNext={() => setCurrentStep(3)}
            buttonLabel="Proceed to Order Confirmation"
          />
        )}
        {currentStep === 3 && (
          <TotalCost
            total={total}
            itemCount={cart.length}
            onNext={() => setCurrentStep(4)}
            buttonLabel="Complete Order"
          />
        )}
      </div>
      {currentStep === 4 && (
        <OrderSuccess onGoHome={() => (window.location.href = "/")} />
      )}
    </div>
  );
};

export default Cart;
