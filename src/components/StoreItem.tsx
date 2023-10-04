import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "@material-tailwind/react";
import { useShoppingCart } from "../context/shoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex flex-col items-center justify-center bg-whiterounded-sm overflow-hidden bg-white rounded-[4px] pb-3">
      <img src={imgUrl} alt={name} className="h-[200px] w-full object-cover " />
      <div className="flex justify-between w-full px-3 font-semibold mt-3 mb-4">
        <h2 className="text-xl">{name}</h2>
        <h3 className="text-lg text-gray-600">{formatCurrency(price)}</h3>
      </div>

      <div className="w-full">
        {quantity === 0 ? (
          <div className="w-full flex">
            <Button
              className="bg-blue-500 p-1 flex-1 mx-[12px] rounded-sm mb-2"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Button
                className="bg-blue-500 text-white rounded-[4px] w-[30px] h-[30px]"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>
              <div>
                <span className="text-xl">{quantity}</span> in cart
              </div>
              <Button
                className="bg-blue-500 text-white rounded-[4px] w-[30px] h-[30px]"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </Button>
            </div>
            <Button
              className="bg-red-700 text-white rounded-[4px]  h-[30px] px-2"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
