import { Provider } from "react-redux"
import store from "./store";
import Nav from "./components/Nav";
import Contador from "./components/Contador";
import ShoppingCart from "./components/ShoppingCart";

function App() {

  return (
    <>
      <Provider store={store}>
          <Nav />
          <ShoppingCart />
          <Contador />
      </Provider>
    </>
  );
}

export default App;
