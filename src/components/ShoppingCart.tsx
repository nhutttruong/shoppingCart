import { useShoppingCart } from "../context/shoppingCartContext";
import close from "../assets/close.svg";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  return (
    <div
      className={` z-[60] fixed top-0 w-full h-full flex 
      ${isOpen ? "" : "right-[-100%]"} duration-100`}
    >
      <div
        className={`fixed top-0 z-30 w-[18rem] md:w-[30rem] bg-gray-200 h-[100%]
      ${!isOpen ? "right-[-100%]" : "right-0"} duration-300 flex flex-col`}
      >
        <div className="p-5 flex justify-between border-b-[1.5px] border-gray-400">
          <h3 className="text-2xl font-mono ">Cart</h3>
          <img
            className="w-[25px] hover:cursor-pointer"
            src={close}
            alt="close"
            onClick={closeCart}
          />
        </div>

        {/* items container */}
        {cartItems && (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}

        {cartItems?.length !== 0 && (
          <div className="flex justify-end pr-3 text-lg font-bold">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce(
                (totalCost, item) =>
                  totalCost +
                  item.quantity *
                    storeItems.find((i) => i.id === item.id).price,
                0
              )
            )}
          </div>
        )}

        {!cartItems || cartItems.length === 0 ? (
          <p className="p-6 font-medium text-sm text-gray-600 italic">
            There's nothing in your cart
          </p>
        ) : null}
      </div>

      <div
        className={`flex-1 bg-gray-900 opacity-50`}
        onClick={closeCart}
      ></div>
    </div>
  );
};

export default ShoppingCart;
