import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

export default function ProductList({ list }) {
  let { productList } = useContext(AppContext);
  return (
    <div className="product-list">
      {productList.map((product, index) => (
        <ProductCard
          key={"" + product.id + index}
          index={index}
          product={product}
        />
      ))}
    </div>
  );
}
