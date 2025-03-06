"use client";
// base
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getItemGeneric,
  setItemGeneric,
} from "../services/common/storage.service";
import { storageTypeEnum } from "../enums/storage-type.enum";
import { IGetCoursesList } from "../types/response/Course.res";
// type for Provider
interface IShoppingCartContext {
  children: ReactNode;
}
// type for shopping state
interface ShoppingCartItem {
  course: IGetCoursesList | null;
}
// type for value provider
export interface shoppingCartContextType {
  cart: ShoppingCartItem[];
  addToCart: (course: IGetCoursesList | null) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// === one ===
export const shoppingCartContext =
  createContext<shoppingCartContextType | null>(null);

// === two ===
const useShoppingCart = () => {
  const context = useContext(shoppingCartContext);
  if (context === null) {
    throw new Error("must be used within a ShoppingCartProvider");
  }
  return context;
};

// === three ===
// Provider
const ShoppingCartProvider: FC<IShoppingCartContext> = ({ children }) => {
  // ابتدا داده رو از لوکال استوریج بگیر
  // برای حالت هایی که داده ها بصورت آبجکت هستند ===> Generic
  // اگه استرینگ باشه مثل توکن معمولی ===> Get
  const initialCart =
    getItemGeneric(storageTypeEnum.localStorage, "shoppingCart") || [];
  // state ===> سبد خرید
  const [cart, setCart] = useState<ShoppingCartItem[]>(initialCart);
  console.log("cart", cart);
  // Save the cart state to localStorage whenever it changes
  // اگه یوزافکت نباشه به ازای هر رندر شدن کامپوننت داده ها در لوکال ذخیره میشود
  useEffect(() => {
    setCart(cart);
    setItemGeneric(storageTypeEnum.localStorage, "shoppingCart", cart);
  }, [cart]);

  // Add course to the cart
  const addToCart = (course: IGetCoursesList | null) => {
    if (!course) return;
    // آیا قبلا در سبد خریدم درسی خریداری شده یا خیر
    // some ===> پیمایش در آرایه و برگرداندن ترو و فالس
    const isAlreadyInCart = cart.some((item) => item.course?.id === course.id);
    // اگه دوره در سبد من وجود نداشت اضافش کن
    if (!isAlreadyInCart) {
      setCart((prevCart) => [...prevCart, { course }]);
    }
  };
  // Remove course from the cart
  const removeFromCart = (id: string) => {
    // filter ===> روی یک آرایه فیلتر میکند و نتیجه را به صورت آرایه جدید به ما می دهد
    // آیتم هایی از درس که برابر نباشد با چیزی که من دارم انتخاب میکنم فیلتر میشن و در آرایه باقی میمانند
    setCart((prevCart) => prevCart.filter((item) => item.course?.id !== id));
  };
  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <shoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, useShoppingCart };
