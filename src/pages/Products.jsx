import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Filter from "../components/Products/Filter";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Products/Product";
import ScrollToTop from "../helpers/ScrollToTop";

const bgImage = {
  backgroundImage: `url("/sorai-banners/banner_2.jpg")`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cate_param = queryParams.get("cate");
  const { products, setProductsUrl } = useContext(ProductContext);
  const [cate, setCate] = useState(null);
  const [fetchProducts, setFetchProducts] = useState([]);

  useEffect(() => {
    setCate(cate_param);
  }, [cate_param]);

  useEffect(() => {
    if (cate) {
      setProductsUrl(cate);
    }
  }, [cate]);

  useEffect(() => {
    setFetchProducts(products);
  }, [products]);

  return (
    <>
      <ScrollToTop />

      <div style={bgImage}>
        <h1
          style={bgImage}
          className=" text-3xl font-semibold my-10 text-center items-center font-cursive"
        >
          Danh Sách Sản Phẩm <strong className="text-secondary">SORAI</strong>
        </h1>
      </div>

      <div className="container bg-white sm:flex gap-6">
        <div className="pt-2">
          <Filter cate={cate} setCate={setCate} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0 mt-2 pb-20">
          {fetchProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
};
