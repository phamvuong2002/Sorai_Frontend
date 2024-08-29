import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Sản Phẩm",
    link: "/products?cate=pin-sorai-dung-luong-chuan",
  },
  {
    id: 2,
    name: "Giới Thiệu",
    link: "/intro",
  },
  {
    id: 3,
    name: "Chính Sách Bảo Hành",
    link: "/#policies",
  },
  {
    id: 4,
    name: "Tin Tức",
    link: "/blogs",
  },
  {
    id: 5,
    name: "Liên Hệ",
    link: "/#contact",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md text-secondary">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="../"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img
                  src={"/sorai-logos/logo_192.png"}
                  alt="Logo"
                  className="w-14"
                />
                <strong className="text-gray-900">SORAI</strong>
                electronics
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden xl:flex items-center xl:gap-4 md:hidden">
                {Menu.map((menu) => (
                  <li key={menu.id} className="cursor-pointer">
                    <a
                      href={menu.link}
                      className="inline-block text-md font-thin py-4 px-4 text-gray-800 relative after:bg-gradient-to-r from-brandDark/70 to-secondary  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="hidden xl:flex bg-primary/70 hover:scale-105 hover:bg-primary duration-200 text-white px-4 py-2 rounded-full items-center gap-3">
                Đăng nhập/ Đăng Ký
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* mobile memu */}
              {/* <svg
                className="w-5 h-5 xl:hidden"
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
