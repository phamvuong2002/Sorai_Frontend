import React from "react";
import { useNavigate } from "react-router-dom";
const CategoriesData = [
  {
    id: 1,
    img: "/sorai-images/sorai-products/pin_dung_luong_chuan.png",
    name: "Pin SORAI dung lượng chuẩn",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "50",
    slug: "pin-sorai-dung-luong-chuan",
  },
  {
    id: 2,
    img: "/sorai-images/sorai-products/cell_pin_dung_luong_chuan.png",
    name: "Cell pin SORAI dung lượng chuẩn",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "150",
    slug: "cell-pin-sorai-dung-luong-chuan",
  },
  {
    id: 3,
    img: "/sorai-images/sorai-products/pin_dung_luong_cao.png",
    name: "Pin SORAI dung lượng cao",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "250",
    slug: "pin-sorai-dung-luong-cao",
  },
];
const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <span id="categorys"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="px-8 text-4xl font-bold font-cursive text-gray-800">
              Các Dòng Sản Phẩm Nhà{" "}
              <strong className="text-secondary">SORAI</strong>
            </h1>
          </div>

          {/* categorys Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {CategoriesData.map((category, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={category.aosDelay}
                className="rounded-2xl bg-white cursor-pointer transition-all hover:bg-gradient-to-tr hover:from-primary hover:via-secondary/35 hover:to-secondary/65 hover:text-secondary/55 relative shadow-xl duration-high group max-w-[300px]"
                style={{
                  backgroundImage: "url('/sorai-banners/banner_2.jpg')",
                }}
                onClick={() => {
                  navigate(`../products?cate=${category.slug}`);
                }}
              >
                <div className="p-1">
                  <img
                    src="/sorai-logos/logo_192.png"
                    alt="logo_sorai"
                    className="absolute w-16 "
                  />
                </div>
                <div className="h-[11rem]">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center items-center justify-center h-[10rem]">
                  <div className="w-full flex text-center items-center text-xl font-bold h-[60%] ">
                    {category.name}
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-500 duration-high text-sm line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
