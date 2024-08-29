import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const BASE_URL = "../data/";

const ProductProvider = ({ children }) => {
  const [productsUrl, setProductsUrl] = useState(null);
  const [productUrl, setProductUrl] = useState(null);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      if (productsUrl === null) return [];
      try {
        const response = await fetch(`${BASE_URL + productsUrl + ".json"}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    };
    if (productsUrl !== null) {
      fetchProducts();
    }
  }, [productsUrl]);

  // fetch product detail
  useEffect(() => {
    const fetchProduct = async () => {
      if (productUrl === null) return null;
      try {
        const response = await fetch(
          `${BASE_URL + "products/" + productUrl + ".json"}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setProduct(null);
      }
    };
    if (productUrl !== null) {
      fetchProduct();
    }
  }, [productUrl]);

  return (
    <ProductContext.Provider
      value={{ product, products, setProductsUrl, setProductUrl }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
