export type Product = {
  id: number;
  price: number;
  photo: string;
  title: string;
};

export type CartItem = {};

export type Actions =
  | { type: "CLEAR_BASKET" }
  | { type: "ADD_ITEM" | "DELETE_ITEM"; payload: { id: number } };
