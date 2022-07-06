import { createStore } from "redux"; // antes createStore
import reducer from "../reducers";

const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;