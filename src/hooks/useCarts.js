import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../utilities/fakedb";

const useCarts = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = loadFromLocalStorage();
    const localProduct = [];
    for (const id in storedCart) {
      const singleProduct = products.find((product) => product._id === id);
      if (singleProduct) {
        const quantity = storedCart[id];
        singleProduct.quantity = quantity;
        localProduct.push(singleProduct);
      }
    }
    setCart(localProduct)
  }, [products]);

  return [cart, setCart];
};
export default useCarts;
