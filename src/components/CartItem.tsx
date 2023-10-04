import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import close from "../assets/close.svg";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const itemInCart = storeItems.find((item) => item.id === id);

  return (
    itemInCart && (
      <div className="flex p-3">
        <div className=" overflow-hidden">
          <img
            className="w-[96px] h-[64px] object-cover rounded-sm"
            src={itemInCart?.imgUrl}
            alt={itemInCart?.name}
          />
        </div>
        <div className="flex justify-between pl-2 text-[12px] w-full">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center pr-2">
              <div className="font-bold">{itemInCart?.name}</div>
              <div className="text-gray-500 text-[11px]">
                {formatCurrency(itemInCart.price)}
              </div>
            </div>
            <div className="flex justify-center items-center italic">
              x{quantity}
            </div>
          </div>

          {/* remove */}
          <div className="flex items-center flex-1 justify-end">
            <div className="text-[14px] font-medium pr-2">
              {formatCurrency(quantity * itemInCart.price)}
            </div>
            <div
              className="bg-white border w-[18px] h-[18px]
             border-gray-500 flex items-center justify-center 
             hover:cursor-pointer hover:bg-red-500 rounded-sm hover:border-none"
              onClick={() => removeFromCart(id)}
            >
              <img className="w-[8px]" src={close} alt="remove icon" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
