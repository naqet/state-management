import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAtom } from "jotai";
import { cartReducerAtom } from "../Context";
import { Product } from "../types";

export default function Cart() {
	const [cart, dispatch] = useAtom(cartReducerAtom);
	const [parent] = useAutoAnimate();

	const totalPrice = cart.reduce(
		(total, item) => total + item.quantity * item.price,
		0
	);

	const handleAddToCart = (product: Product) => () => {
		dispatch && dispatch({ type: "ADD_ITEM", payload: product });
	};

	const handleDeleteFromCart = (product: Product) => () => {
		dispatch && dispatch({ type: "DELETE_ITEM", payload: product });
	};

	const handleRemoveFromCartCompletely = (product: Product) => () => {
		dispatch && dispatch({ type: "REMOVE_ITEM_COMPLETELY", payload: product });
	};

	return (
		<section className="border-gray-700 border rounded-md p-2 my-2">
			<h2 className="text-lg font-bold text-center">Summary</h2>
			<ul className="grid gap-2" ref={parent}>
				{cart.map((item) => (
					<li
						key={item.id}
						className="grid grid-rows-1 grid-cols-4 items-center gap-4 p-2 bg-slate-700/20 rounded-md h-20"
					>
						<div className="flex items-center gap-2">
							<img
								src={item.photo}
								alt={item.title}
								width={75}
								className="rounded-md"
							/>
							<h3 className="text-lg">{item.title}</h3>
						</div>
						<span>Price: ${item.price}</span>
						<div className="flex items-center gap-2">
							<p>Quantity: {item.quantity}</p>
							<div className="flex flex-row gap-1">
								<button
									type="button"
									onClick={handleDeleteFromCart(item)}
									className="bg-blue-800 bg-opacity-80 hover:bg-opacity-50 p-1 font-bold w-8 rounded-md"
								>
									{"<"}
								</button>
								<button
									type="button"
									onClick={handleAddToCart(item)}
									className="bg-blue-800 bg-opacity-80 hover:bg-opacity-50 p-1 font-bold w-8 rounded-md"
								>
									{">"}
								</button>
							</div>
						</div>
						<button
							type="button"
							onClick={handleRemoveFromCartCompletely(item)}
							className="bg-red-800 bg-opacity-80 hover:bg-opacity-50 p-1 w-fit ml-auto rounded-md"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			{cart.length ? (
				<p className="text-center text-gray-400">Total price: ${totalPrice}</p>
			) : (
				<pre className="text-sm text-center my-4">No items</pre>
			)}
		</section>
	);
}
