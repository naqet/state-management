import { faker } from "@faker-js/faker";
import { useSetAtom } from "jotai";
import { cartReducerAtom } from "../Context";
import { Product } from "../types";

const items = [
	{
		id: 1,
		price: Number(faker.commerce.price()),
		photo: faker.image.image(undefined, undefined, true),
		title: faker.commerce.product(),
	},

	{
		id: 2,
		price: Number(faker.commerce.price()),
		photo: faker.image.image(undefined, undefined, true),
		title: faker.commerce.product(),
	},
	{
		id: 3,
		price: Number(faker.commerce.price()),
		photo: faker.image.image(undefined, undefined, true),
		title: faker.commerce.product(),
	},
	{
		id: 4,
		price: Number(faker.commerce.price()),
		photo: faker.image.image(undefined, undefined, true),
		title: faker.commerce.product(),
	},
	{
		id: 5,
		price: Number(faker.commerce.price()),
		photo: faker.image.image(undefined, undefined, true),
		title: faker.commerce.product(),
	},
]satisfies Product[];

export default function ItemList() {
	const dispatch = useSetAtom(cartReducerAtom);
	const handleAddToCart = (product: Product) => () => {
		dispatch && dispatch({ type: "ADD_ITEM", payload: product });
	};

	return (
		<ul className="flex flex-wrap gap-2">
			{items.map((item) => (
				<li
					key={item.id}
					className="p-2 rounded-md border border-gray-700 text-center grid gap-1"
				>
					<img
						src={item.photo}
						alt={item.title}
						width={250}
						className="rounded-md"
					/>
					<h2 className="font-bold text-lg text-gray-200">{item.title}</h2>
					<p className="text-sm text-gray-400">${item.price}</p>
					<button
						type="button"
						className="bg-blue-800 bg-opacity-80 px-2 py-1 rounded-md hover:bg-opacity-50"
						onClick={handleAddToCart(item)}
					>
						Add to cart
					</button>{" "}
				</li>
			))}
		</ul>
	);
}
