import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <header className="my-2">
        <h1 className="text-center text-xl">Demo Cart - React Context</h1>
      </header>
      <main className="px-2">
        <Cart />
        <ItemList />
      </main>
    </>
  );
}

export default App;
