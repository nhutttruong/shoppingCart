import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavbarDefault from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <NavbarDefault />

      <div className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
