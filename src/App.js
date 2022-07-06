import Nav from "./components/Nav";
import Products from "./components/Products";
import productsData from "./data/ProductsData";

function App() {

  const agregarCarro = () => {
    console.log('agregando')
  }

  return (
    <div className="App">
      <Nav />
      <Products />
    </div>
  );
}

export default App;
