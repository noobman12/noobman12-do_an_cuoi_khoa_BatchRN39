import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";

// Define the CartItem type
export interface CartItemProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemComponentProps extends CartItemProps {
  onQuantityChange: (amount: number) => void;
}

const CartItem: React.FC<CartItemComponentProps> = ({
  name,
  price,
  image,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="raleway flex space-x-4 p-4 border-b">
      <Image
        src={image}
        alt={name}
        width={98}
        height={98}
        className="object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500">在庫あり</p>
        <div className="flex justify-between w-full mt-14">
          <div className="flex justify-end items-center ">
            <button
              onClick={() => onQuantityChange(-1)}
              className=" text-blue-800"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => onQuantityChange(1)}
              className="text-gray-500"
            >
              ＋
            </button>
          </div>
          <div>
            <FaRegTrashCan />
          </div>
        </div>
      </div>

      <p className="text-black font-semibold">¥{price.toLocaleString()}</p>
    </div>
  );
};
export default CartItem;
