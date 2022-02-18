import "./App.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ProductList from "./components/ProductList";

function App() {
  let { productList } = useContext(AppContext);
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
