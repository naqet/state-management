import { Actions, CartItem } from "./types";
import { atomWithReducer } from "jotai/utils";

const reducer = (cart: CartItem[], action: Actions) => {
	switch (action.type) {
		case "CLEAR_BASKET":
			return [];
		case "REMOVE_ITEM_COMPLETELY": {
			const itemInCart = cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemInCart === -1) {
				return cart;
			}

			return cart.filter((item) => item.id !== action.payload.id);
		}
		case "ADD_ITEM": {
			const itemInCart = cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemInCart === -1) {
				return [...cart, { ...action.payload, quantity: 1 }];
			}

			return cart.map((item) =>
				item.id === action.payload.id
					? { ...action.payload, quantity: item.quantity + 1 }
					: item
			);
		}
		case "DELETE_ITEM": {
			const itemInCart = cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemInCart === -1) {
				return cart;
			}

			if (cart[itemInCart].quantity <= 1) {
				return cart.filter((item) => item.id !== action.payload.id);
			}

			return cart.map((item) =>
				item.id === action.payload.id
					? { ...action.payload, quantity: item.quantity - 1 }
					: item
			);
		}
		default:
			return cart;
	}
};

export const cartReducerAtom = atomWithReducer([], reducer);
