import React, { useContext, useEffect, useState } from "react";
import { Slider } from "../components/Product/Slider";
import DetailsCard from "../components/Product/DetailsCart";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { DescriptionFeedback } from "../components/Product/DescriptionFeedback";

const bgImage = {
  backgroundImage: `url("/sorai-banners/banner_2.jpg")`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const DetailProduct = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  // const [product, setProduct] = useState([]);
  const [thumbnails, setThumbnails] = useState([
    {
      id: 1,
      url: "/sorai-images/sorai-products/cell_dung_luong_chuan/iphone_6.jpg",
      title: "iphone_6",
    },
    {
      id: 2,
      url: "/sorai-images/sorai-products/dung_luong_chuan/iphone_6.png",
      title: "iphone_6",
    },
    {
      id: 3,
      url: "/sorai-images/sorai-products/cell_dung_luong_chuan/iphone_6.jpg",
      title: "iphone_6",
    },
    {
      id: 4,
      url: "/sorai-images/sorai-products/dung_luong_chuan/iphone_6.png",
      title: "iphone_6",
    },
  ]);
  const { product, setProductUrl } = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);

  // Get product from url
  useEffect(() => {
    // setProductUrl(id);
    //for demo
    setProductUrl("pin-sorai-iphone-6splus-chuan");
  }, [id]);

  return (
    <>
      <div style={bgImage}>
        <h1
          style={bgImage}
          className=" text-3xl font-semibold my-10 text-center items-center font-cursive"
        >
          Thông Tin Sản Phẩm <strong className="text-secondary">SORAI</strong>
        </h1>
      </div>
      <div className="lg:flex bg-white pb-8">
        <Slider _sliderData={thumbnails} />
        <DetailsCard
          amountValue={amount}
          changeAmount={setAmount}
          cartValue={cartItems}
          updateCartValue={setCartItems}
          product={product}
        />
      </div>
      <DescriptionFeedback data={product} />
    </>
  );
};
