import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);


const Root = () => {
  const { newCart, products } = useLoaderData();
  const [cart, setCart] = useState(newCart)
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-324px)]">
          <Outlet />
        </div>
        <Footer />
        <Toaster />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Root;
