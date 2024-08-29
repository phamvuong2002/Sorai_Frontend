import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const images = [
  {
    src: "/sorai-images/about/process_1.jpg",
    alt: "Image 1 description",
  },
  {
    src: "/sorai-images/about/process_2.jpg",
    alt: "Image 2 description",
  },
  {
    src: "/sorai-images/about/process_3.png",
    alt: "Image 3 description",
  },
  // Thêm nhiều hình ảnh ở đây
];

export const About = () => {
  return (
    <div className="bg-white">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        {/* Giới thiệu */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:px-10 sm:mb-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="block mb-2 w-full font-cursive2 bg-gradient-to-b from-gray-600 to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Giới Thiệu Sorai Electronics Việt Nam
            </h2>
            <p className="font-normal text-base font-cursive2 leading-6 text-gray-600 dark:text-white">
              Chào mừng đến với Sorai Electronics Việt Nam - điểm đến của quý
              khách hàng cho linh kiện điện tử chính hãng và chất lượng cao nhất
              tại Việt Nam. Chúng tôi không chỉ mang đến sản phẩm chất lượng với
              giá thành thuần Việt, mà còn đặt sự uy tín và chuyên nghiệp lên
              hàng đầu. Tại Sorai, chúng tôi không chỉ là nhà cung cấp linh kiện
              điện tử, mà còn là người bạn đồng hành tin cậy của quý khách hàng
              trên hành trình sống kỹ thuật số. Chúng tôi tin rằng sự chuyên
              nghiệp không chỉ là cách tốt nhất thể hiện lòng tôn trọng với
              khách hàng, mà còn là tiêu chí hàng đầu trong mọi hoạt động của
              chúng tôi.
            </p>
          </div>
          <div className="w-full flex justify-center items-center lg:w-8/12">
            <img
              className="w-[38rem] rounded-xl"
              src="/sorai-images/about/about_1.jpg"
              alt="A group of People"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full bg-gradient-green-left ">
            <img
              className="w-24 float-right pt-28 -scale-x-100"
              src="/sorai-logos/logo_192.png"
              alt="logo-sorai"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full bg-gradient-green-left "></div>
          <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full bg-gradient-black"></div>
        </div>

        {/* Sứ mệnh */}
        <div className="font-cursive2">
          <div id="features" className="relative py-10 sm:py-20 sm:mt-32">
            <div className="relative text-center">
              {/* <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span> */}
              <h2 className="block mb-2 w-full bg-gradient-to-b from-gray-600 to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Sứ mệnh Sorai Electronics Việt Nam
              </h2>
              <p className=" text-gray-900">
                "Chúng tôi cam kết mang đến cho khách hàng những sản phẩm linh
                kiện điện tử chính hãng, chất lượng và tin cậy nhất. Với sự
                chuyên nghiệp và tận tâm, chúng tôi đặt lòng tin của khách hàng
                lên hàng đầu, đồng hành cùng quý khách trên mọi bước đường của
                cuộc sống kỹ thuật số. Sứ mệnh của chúng tôi là nâng cao chất
                lượng cuộc sống số của mọi người thông qua việc cung cấp những
                sản phẩm và dịch vụ tốt nhất, đáng tin cậy nhất. Với mong muốn
                “Nâng tầm thương hiệu Việt”, chúng tôi đã đưa ra sản phẩm pin
                dùng cho iphone giá thành tốt nhất với sự đảm bảo về chất lượng
                và độ an toàn theo tiêu chuẩn Apple."
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md p-8 text-center shadow bg-banner-2">
                <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border">
                  <img src="/sorai-icons/professional.png" alt="professional" />
                </div>
                <h3 className="mt-1 text-gray-900">Chuyên Nghiệp</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                  Đội ngũ kỹ thuật viên tay nghề cao. Đảm bảo mọi dịch vụ đều
                  được thực hiện một cách chính xác và nhanh chóng.
                </p>
              </div>

              <div className="rounded-md bg-neutral-900/50 p-8 text-center shadow bg-banner-2">
                <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border">
                  <img src="/sorai-icons/quality.png" alt="quality" />
                </div>
                <h3 className="mt-1 text-gray-900">Chất Lượng</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                  Chúng tôi cam kết mang đến sản phẩm và dịch vụ đạt tiêu chuẩn
                  cao nhất, đảm bảo hầu hết các tiêu chuẩn an toàn.
                </p>
              </div>

              <div className="rounded-md  bg-neutral-900/50 p-8 text-center shadow bg-banner-2">
                <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border">
                  <img src="/sorai-icons/trust.png" alt="trust" />
                </div>
                <h3 className="mt-1 text-gray-900">Tin Cậy</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                  Bảo hành toàn diện và dịch vụ hỗ trợ tận tâm. Uy tín trên từng
                  sản phẩm.
                </p>
              </div>
            </div>

            {/* footer */}
          </div>
        </div>
      </div>
      {/* Công Nghệ Sản Xuất */}
      <div className="relative overflow-hidden font-cursive2 bg-gradient-to-tl from-gray-50 to-primary/60 bg pt-16 pb-32 space-y-12">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Công Nghệ Sản Xuất PIN SORAI
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    Giới thiệu về pin SORAI: Được sản xuất tại Công ty công nghệ
                    điện tử Zunhoang.Địa chỉ: Tầng 5, tòa nhà Guo Peng, Khu công
                    nghệ cao Zhongkai, quận Huicheng, thành phố Huizhou, tỉnh
                    Quảng Đông. Pin do chính công ty SORAI thiết kế và đạt tiêu
                    chuẩn nghêm ngặt như pin của Apple.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {images.map((image, index) => (
                    <SwiperSlide className="" key={index}>
                      <img
                        loading="lazy"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                        style={{ color: "transparent" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mb-20 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-12 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Sản Phẩm Chất Lượng
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    Với công nghệ sản xuất 100% trên dây truyền tự động hiện đại
                    nhất cho ra sản phẩm chất lượng, được kiểm tra nghiêm ngặt
                    khi đưa ra thị trường với giấy chứng nhận kiểm định đầy đủ
                    trước khi đến với người tiêu dùng:
                  </p>
                  <div className="mt-6">
                    {/* <a
                      className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                      href="/login"
                    >
                      Learn More
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/sorai-images/certification.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:flex flex-col lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-5 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0">
              <div>
                <div className="flex gap-4 items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      ></path>
                    </svg>
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Quy Trình Sản Xuất PIN SORAI
                  </h2>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700">
                    The AI product can generate human-like written content,
                    summaries, or reports based on structured data or analysis
                    results.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:px-0">
                <iframe
                  width="560"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                  // Bạn có thể điều chỉnh kích thước theo nhu cầu
                  height="690"
                  src="https://www.youtube.com/embed/MNruKFlC8VI" // đổi url để nhúng video
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:flex lg:flex-col lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-1 lg:px-0">
              <div>
                <div className="flex gap-4 items-center">
                  <span className="flex h-14 p-1 w-14 items-center justify-center rounded-xl bg-white">
                    <img src="/sorai-logos/logo_192.png" alt="" />
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Pin SORAI có gì khác biệt?
                  </h2>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700">
                    The AI product can generate human-like written content,
                    summaries, or reports based on structured data or analysis
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="flex gap-4 items-end">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl ">
                    <img src="/sorai-images/numbers/number-one.png" alt="1" />
                  </span>
                  <h2 className="text-3xl font-bold font-cursive2 tracking-tight text-gray-800">
                    Sử dụng chip gốc nguyên bản Apple.
                  </h2>
                </div>
                <div className="mt-6">
                  <p className="mt-4 text-lg text-gray-700">
                    Nhiều dòng pin trên thị trường sử dụng chip không rõ nguốn
                    gốc,chính vì thế hiệu năng không được ổn định sẽ bị tụt
                    nguồn, ảo nguồn và tắt máy nhanh chóng khi sử dụng khi dung
                    lượng đạt 5%. Chip của chúng tôi có độ ổn định cao, là chip
                    Apple chính hãng đáp ứng được các tiêu chí sau.
                  </p>
                  <ul
                    className="mt-2 ml-8"
                    style={{ "list-style-type": "disc" }}
                  >
                    <li>Bảo vệ chập cháy</li>
                    <li>Tự ngắt khi nhiệt độ cao</li>
                    <li>Chống quá tải</li>
                    <li>Chống quá dòng</li>
                    <li>
                      Phù hợp với mọi phiên bản IOS, hiển thị % pin (từ 6 đến X)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_1.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_2.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-12 lg:px-0 lg:col-start-2">
              <div>
                <div className="flex gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-xl">
                    <img src="/sorai-images/numbers/number-two.png" alt="" />
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Cell Pin: là nơi lưu trữ toàn bộ năng lượng của pin
                  </h2>
                </div>
                <div className="mt-6">
                  <p className="mt-4 text-lg text-gray-700">
                    <ul
                      className="mt-2 ml-4"
                      style={{ "list-style-type": "disc" }}
                    >
                      <li>Sử dụng vật liệu coban nguyên chất</li>
                      <li>
                        Chu kỳ nạp xả tối thiểu 800-900 lần, cao nhất với dòng
                        pin hiện nay
                      </li>
                      <li>Cell pin cứng cáp</li>
                      <li>
                        Đảm bảo chu kỳ sau 800 lần sạc xả vẫn trên 80% pin
                      </li>
                      <li>
                        Pin không báo dung lượng ảo, dưới 5% pin không bị sập
                        nguồn
                      </li>
                    </ul>
                  </p>
                  <div className="mt-6">
                    {/* <a
                      className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                      href="/login"
                    >
                      Learn More
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_3.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_4.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_5.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="flex gap-4 items-end">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl ">
                    <img src="/sorai-images/numbers/number-three.png" alt="1" />
                  </span>
                  <h2 className="text-3xl font-bold font-cursive2 tracking-tight text-gray-800">
                    Cáp Pin
                  </h2>
                </div>
                <div className="mt-6">
                  <ul
                    className="mt-2 ml-8"
                    style={{ "list-style-type": "disc" }}
                  >
                    <li>Được sản xuất đáp ứng tiêu chuẩn Apple</li>
                    <li>
                      Chân cáp to hơn chân nguyên bản để lắp ráp phù hợp với
                      dòng máy
                    </li>
                    <li>
                      Được kiểm định bởi nhà máy sản xuất trước khi xuất ra thị
                      trường
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="">
                    <img
                      loading="lazy"
                      className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                      style={{ color: "transparent" }}
                      src={"/sorai-images/about/why_6.jpg"}
                      alt={"why_1"}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-2xl font-bold font-cursive text-center text-gray-800">
          Chân thành cảm ơn quý khách hàng đã luôn tin tưởng và đồng hành cùng{" "}
          <span className="text-secondary">SORAI</span>. Chúng tôi vô cùng hân
          hạnh được phục vụ quý khách!
        </p>
        <div className="text-3xl text-center">🥳🥳🥳</div>
      </div>
    </div>
  );
};
