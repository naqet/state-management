import { createContext, Dispatch } from "react";
import { Actions, Product } from "./types";

export const CartContext = createContext<Set<> | null>(null);
export const CartDispatchContext = createContext<Dispatch<Actions> | null>(
  null
);
export const ItemsContext = createContext<Product[] | null>(null);
