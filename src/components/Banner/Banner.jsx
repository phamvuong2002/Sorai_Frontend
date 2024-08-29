import React from "react";
import BannerImg from "../../assets/coffee-white.png";
import { GrCheckmark, GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaUserTie, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="policies"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={"/sorai-images/sorai_pin_intro.png"}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Tiểu sử <strong className="text-secondary">SORAI</strong>
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className=" space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaUserTie className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>CEO - Phạm Văn A</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaCalendarAlt className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Thành lập năm 2000</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <FaMapMarkerAlt className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Hiện có 10 chi nhánh trên 10 tỉnh</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2 "
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Cam kết sản phẩm của{" "}
                      <strong className="text-secondary">SORAI</strong>
                    </h1>
                    {/* <p className="text-sm text-gray-500">
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p> */}
                    <div className="space-y-2">
                      <div
                        data-aos="fade-up"
                        className="flex items-center gap-3"
                      >
                        <div>
                          <GrCheckmark className="text-xl h-8 w-8 shadow-sm p-2 rounded-full bg-primary/50 " />
                        </div>
                        <span>Bảo hành 18 tháng</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex items-center gap-3"
                      >
                        <div>
                          <GrCheckmark className="text-xl h-8 w-8 shadow-sm p-2 rounded-full bg-primary/50 " />
                        </div>
                        <span>Chip IC chuẩn Apple, nhận mọi phiên bản IOS</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex items-center gap-3"
                      >
                        <div>
                          <GrCheckmark className="text-xl h-8 w-8 shadow-sm p-2 rounded-full bg-primary/50 " />
                        </div>
                        <span>
                          Cell pin nguyên chất coban, cực kì cứng cáp và chắc
                          chắn
                        </span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="flex items-center gap-3"
                      >
                        <div>
                          <GrCheckmark className="text-xl h-8 w-8 shadow-sm p-2 rounded-full bg-primary/50 " />
                        </div>
                        <span>Hiệu năng vượt trội, độ bền cao</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="flex items-center gap-3"
                      >
                        <div>
                          <GrCheckmark className="text-xl h-8 w-8 shadow-sm p-2 rounded-full bg-primary/50 " />
                        </div>
                        <span>
                          Giấy chứng nhận và kiểm định đầy đủ từ nhà sản xuất
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
