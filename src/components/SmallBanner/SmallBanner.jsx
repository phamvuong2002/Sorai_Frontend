import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${"./sorai-banners/bg_banner_1.png"})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // height: "100%",
  width: "100%",
};
const SmallBanner = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:flex sm:flex-col grid-cols-1 gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-8"
            >
              {/* text section */}
              {/* <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                NÂNG TẦM THƯƠNG HIỆU VIỆT
              </h1> */}
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                NÂNG TẦM THƯƠNG HIỆU VIỆT
              </h1>
              {/* img section */}
              {/* <div className="flex flex-wrap justify-start sm:justify-start">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div> */}
            </div>
            {/* img section */}
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              className="flex gap-1"
            >
              <div data-aos="fade-up" data-aos-once="true">
                <img src="/sorai-images/product_line.png" alt="product-line" />
              </div>
              <div data-aos="fade-up" data-aos-once="true">
                <img src="/sorai-images/url_sorai.png" alt="url-sorai" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallBanner;
