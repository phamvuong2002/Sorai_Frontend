import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    id: 1,
    title: "Sản Phẩm",
    link: "/products",
  },
  {
    id: 2,
    title: "Giới Thiệu",
    link: "/intro",
  },
  {
    id: 3,
    title: "Chính Sách Bảo Hành",
    link: "/#policies",
  },
  {
    id: 4,
    title: "Tin Tức",
    link: "/blogs",
  },
  {
    id: 5,
    title: "Liên Hệ",
    link: "/#contact",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  const handleClickNewletter = () => {
    console.log("okok");
  };
  return (
    <>
      <span id="contact"></span>
      <div className="bg-gradient-to-b from-primary/80 to-secondary text-white">
        <div className="bg-black/40 min-h-[400px]">
          {/*container */}
          <div className="container grid xl:grid-cols-3 md:grid-cols-1 pb-8 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
              {/* logo */}
              <Link
                to="../"
                className="flex gap-1 font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
              >
                <strong className="text-white">SORAI</strong>
                <div className="text-primary">electronics</div>
              </Link>

              {/* newletter */}
              <div className="mt-4">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 ">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-none focus:border-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required
                    />
                    <div
                      onClick={handleClickNewletter}
                      className="absolute xl:hidden md:hidden inset-y-0 right-0 cursor-pointer flex items-center pl-3  pr-3"
                    >
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/pulsar-gradient/48/submit-for-approval.png"
                        alt="submit-for-approval"
                      />
                    </div>
                  </div>
                  <div className="hidden xl:block md:block w-[8rem]">
                    <button
                      type="submit"
                      className="py-3 px-1 w-full bg-gradient-to-r from-primary to-secondary hover:to-primary transition-all hover:bg-primary text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-200 newsletter-form-footer dark:text-gray-300">
                  Đăng ký với chúng tôi để nhận thông tin về những ưu đãi sớm
                  nhất.
                </div>
              </div>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                href="https://www.facebook.com/profile.php?id=61561100466365"
                className="xl:inline-block py-2 mt-1 md:mt-4 text-sm rounded-full w-full flex justify-center"
                target="_blank"
                rel="noreferrer"
              >
                <button className=" bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Theo dõi Fanpage của chúng tôi
                </button>
              </a>
            </div>

            <hr className="xl:hidden hidden md:block mb-8" />
            {/* Footer links */}
            <div className="md:grid xl:grid col-span-1 xl:col-span-2 grid-cols-2 sm:grid-cols-3">
              {/* thông tin liên hệ */}
              <div className=" xl:py-8 md:py-1 xl:block md:block">
                <h1 className="text-xl font-semibold sm:text-left mb-1 md:pl-4 ">
                  Thông Tin Liên Hệ
                </h1>
                <hr className="mb-2 xl:hidden md:hidden" />
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="me-4 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Trụ sở chính : Số 137 đường Phạm Vấn, phường Lam Sơn, Tp Thanh
                  Hóa
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="me-4 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </span>
                  Văn Phòng tiếp nhận bảo hành : Số 45 ngõ 88 Giáp Nhị, phường
                  Thịnh Liệt, quận Hoàng Mai, Tp Hà Nội
                </p>
                <a
                  href={"mailto:sorai.electronics@gmail.com"}
                  className="mb-4 flex items-center xl:justify-start md:justify-start hover:text-primary transition-all"
                >
                  <span className="me-4 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </span>
                  sorai.electronics@gmail.com
                </a>
                <p className="mb-4 flex xl:items-center xl:justify-start md:justify-start">
                  <span className="me-4 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  +84 929 988 818
                </p>
                <a
                  href={"https://zalo.me/0929988818"}
                  className="mb-4 flex items-center xl:justify-start md:justify-start hover:text-primary transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <img
                      width="30"
                      src="/sorai-icons/zalo_icon.png"
                      alt="zalo"
                    />
                  </span>
                  Zalo: Sorai Electronics
                </a>
              </div>

              {/* Company Address */}
              <div className="xl:py-8 py-1 pl-1 col-span-2 sm:col-auto xl:ml-0 md:ml-6">
                <div>
                  <div>
                    <iframe
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=S%E1%BB%91%2045%20ng%C3%B5%2088%20Gi%C3%A1p%20Nh%E1%BB%8B,%20ph%C6%B0%E1%BB%9Dng%20Th%E1%BB%8Bnh%20Li%E1%BB%87t,%20qu%E1%BA%ADn%20Ho%C3%A0ng%20Mai,%20Tp%20H%C3%A0%20N%E1%BB%99i+(SORAI%20electronics)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Dịch vụ */}
              <div className="xl:py-8 py-1 px-4 xl:ml-12 md:ml-12 hidden xl:block md:block">
                <h1 className=" text-xl font-semibold sm:text-left mb-3 ">
                  Dịch Vụ hỗ trợ
                </h1>
                <ul className="space-y-3">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mx-8 flex justify-center xl:justify-start border-t border-gray-100">
            <div className="sm:flex sm:justify mt-4 mb-4">
              <p className="text-xs text-white">
                &copy; 2024. SORAI ELECTRONICS. All rights reserved.{" "}
              </p>

              <p className="text-xs text-blue-500">
                Designed by{" "}
                <a href="https://phamvuong.io.vn" className="underline">
                  Phạm Vương
                </a>
                .
              </p>

              <ul className="mt-8 ml-4 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
