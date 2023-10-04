import { NavLink, useLocation } from "react-router-dom";
import shoppingCart from "../assets/shoppingCart.svg";
import { Navbar, Typography } from "@material-tailwind/react";
import { useShoppingCart } from "../context/shoppingCartContext";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function NavbarDefault() {
  const location = useLocation();
  const { openCart, cartQuantity, showNavBar, setShowNavBar } =
    useShoppingCart();

  const navList = (
    <div className="flex flex-col md:flex-row">
      <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 text-black">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink
            to="/"
            className={`flex items-center ${
              location.pathname === "/" ? "font-semibold" : "font-normal"
            }`}
          >
            Home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink
            to="/store"
            className={`flex items-center ${
              location.pathname === "/store" ? "font-semibold" : "font-normal"
            }`}
          >
            Store
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink
            to="/about"
            className={`flex items-center ${
              location.pathname === "/about" ? "font-semibold" : "font-normal"
            }`}
          >
            About
          </NavLink>
        </Typography>
      </ul>
    </div>
  );

  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-white z-[10] overflow-visible">
      <div
        className="container mx-auto flex items-center justify-between
       text-blue-gray-900"
      >
        <div className="sticky top-0 hidden md:inline-block">{navList}</div>

        {/* hi */}
        {/* moblie menu */}
        <div className="">
          <img
            className={`md:hidden 
            hover:cursor-pointer hover:bg-gray-300 rounded-md overflow-visible p-1 w-[26px]`}
            src={!showNavBar ? menu : close}
            alt="menu"
            onClick={() => setShowNavBar(!showNavBar)}
          />
          {showNavBar && (
            <div className="md:hidden flex flex-col w-[100px]  rounded-sm duration-500">
              {navList}
            </div>
          )}
        </div>

        {cartQuantity && (
          <div
            className={`flex-1 flex  ${
              showNavBar ? "h-[150px]" : null
            } justify-end items-start`}
          >
            <button
              className="border border-blue-500 hover:bg-blue-500 w-12 h-12 flex 
            items-center justify-center ml-0 md:ml-10  rounded-full relative"
              onClick={openCart}
            >
              <img
                src={shoppingCart}
                alt="shopping cart icon"
                className="w-8"
              />

              <div
                className="bg-red-500 rounded-full w-6 z-[50]
        absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-white font-semibold"
              >
                {cartQuantity}
              </div>
            </button>
          </div>
        )}
      </div>
    </Navbar>
  );
}
