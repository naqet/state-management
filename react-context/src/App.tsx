import { useReducer, useState } from "react";
import { CartContext, CartDispatchContext, ItemsContext } from "./Context";
import { Actions, Product } from "./types";
import { faker } from "@faker-js/faker";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

const items = [
	{
		id: 1,
		price: Number(faker.commerce.price()),
		photo: faker.image.fashion(),
		title: faker.commerce.product(),
	},

	{
		id: 2,
		price: Number(faker.commerce.price()),
		photo: faker.image.fashion(),
		title: faker.commerce.product(),
	},
	{
		id: 3,
		price: Number(faker.commerce.price()),
		photo: faker.image.fashion(),
		title: faker.commerce.product(),
	},
	{
		id: 4,
		price: Number(faker.commerce.price()),
		photo: faker.image.fashion(),
		title: faker.commerce.product(),
	},
	{
		id: 5,
		price: Number(faker.commerce.price()),
		photo: faker.image.fashion(),
		title: faker.commerce.product(),
	},
]satisfies Product[];

const reducer = (cart: Set<Product>, action: Actions) => {
	switch (action.type) {
		case "CLEAR_BASKET":
			cart.clear();
			return cart;
		case "ADD_ITEM":
			return cart;
		default:
			return cart;
	}
};

function App() {
	const [cart, dispatch] = useReducer(reducer, new Set([]));

	return (
		<CartContext.Provider value={cart}>
			<CartDispatchContext.Provider value={dispatch}>
				<ItemsContext.Provider value={items}>
					<ItemList />
					<Cart />
				</ItemsContext.Provider>
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
