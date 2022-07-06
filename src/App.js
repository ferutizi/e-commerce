import { Provider } from "react-redux"
import store from "./store";
import Nav from "./components/Nav";
import Products from "./components/Products";
import productsData from "./data/ProductsData";
import Contador from "./components/Contador";

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Products />
        <Contador />
      </div>
    </Provider>
  );
}

export default App;
