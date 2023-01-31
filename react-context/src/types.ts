export type Product = {
	id: number;
	price: number;
	photo: string;
	title: string;
};

export type CartItem = Product & { quantity: number };

export type Actions =
	| { type: "CLEAR_BASKET" }
	| {
		type: "ADD_ITEM" | "DELETE_ITEM" | "REMOVE_ITEM_COMPLETELY";
		payload: Product;
	};
