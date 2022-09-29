import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Provider store={store}>
          <Nav />
          <ShoppingCart />
      </Provider>
    </>
  );
}

export default App;
