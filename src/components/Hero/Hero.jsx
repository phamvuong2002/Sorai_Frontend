import React from "react";
import HeroPng from "../../assets/coffee2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/sorai-banners/banner_2.jpg')" }}
        className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-white"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800"
              >
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  SORAI
                </span>{" "}
                Mong muốn phục vụ bạn mọi nơi
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  to={"../products?cate=pin-sorai-dung-luong-chuan"}
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  ĐẶT PIN NGAY
                </Link>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[10rem] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={"/sorai-images/sorai-products/banner_sorai_pin_1.png"}
                alt="biryani img"
                className="w-[450px] sm:scale-125 mx-auto zoom-in"
              />
              <div
                data-aos="fade-left"
                className="hidden sm:block bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">
                  Thương hiệu pin hàng đầu Việt Nam
                </h1>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-6 right-20 sm:hidden"
              >
                <h1 className="text-white">
                  Thương hiệu pin hàng đầu Việt Nam
                </h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute sm:bottom-10 bottom-1 sm:right-10 "
              >
                <h1 className="text-white">Tận Tâm - Uy Tín - Chuyên Nghiệp</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
