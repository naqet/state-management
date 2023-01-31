import { useReducer } from "react";
import { CartContext, CartDispatchContext } from "./Context";
import { Actions, CartItem } from "./types";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

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

function App() {
	const [cart, dispatch] = useReducer(reducer, []);

	return (
		<CartContext.Provider value={cart}>
			<CartDispatchContext.Provider value={dispatch}>
				<header className="my-2">
					<h1 className="text-center text-xl">Demo Cart - React Context</h1>
				</header>
				<main className="px-2">
					<Cart />
					<ItemList />
				</main>
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
