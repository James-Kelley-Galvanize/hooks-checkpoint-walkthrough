import { createContext, useEffect, useState } from "react";
const url = `http://52.26.193.201:3000/`;

export const AppContext = createContext(); // this is the context

export default function AppProvider({ children }) {
  // this is the context provider wrapper HOC
  let [productList, setProductList] = useState([]);
  // let [realProductList, setRealProductList] = useState([]); // if you wanted to map over all products - not efficient
  let [activeProduct, setActiveProduct] = useState(false);
  let [activeProductDetails, setActiveProductDetails] = useState(false);
  let [activeProductPhoto, setActiveProductPhoto] = useState("");

  useEffect(() => {
    fetch(`${url}products/list`)
      .then((res) => res.json())
      .then(setProductList)
      .catch(console.err);
  }, []);

  useEffect(() => {
    // get details
    let { id } = activeProduct ? productList[activeProduct] : false;
    if (id) {
      fetch(`${url}products/${id}`)
        .then((res) => res.json())
        .then(setActiveProductDetails)
        .catch(console.err);
    }
  }, [activeProduct]);

  useEffect(() => {
    // get photo
    let { id } = activeProduct ? productList[activeProduct] : false;
    if (id) {
      fetch(`${url}products/${id}/styles`)
        .then((res) => res.json())
        .then((data) => {
          let url =
            data.results[0].photos[0].url || "http://placekitten.com/200/300";
          setActiveProductPhoto(url);
        })
        .catch(console.err);
    }
  }, [activeProductDetails]);

  function setOrToggleActiveProduct(index) {
    let setting = index === activeProduct ? false : index;
    setActiveProductPhoto("");
    setActiveProductDetails(false);
    setActiveProduct(setting);
  }

  const valueObj = {
    productList,
    activeProduct,
    setOrToggleActiveProduct,
    activeProductDetails,
    activeProductPhoto,
  };

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
