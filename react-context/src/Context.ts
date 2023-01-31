import { createContext, Dispatch } from "react";
import { Actions, CartItem } from "./types";

export const CartContext = createContext<CartItem[]>([]);
export const CartDispatchContext = createContext<Dispatch<Actions> | null>(
  null
);
