import React from "react";
import { GiSpellBook } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sm:justify-between bg-red text-xs lg:text-base text-white font-popi">
      <div className="bg-gradient-to-r from-primary to-secondary hidden lg:flex flex-row justify-between text-xs lg:text-base">
        <div id="logo_name" className="flex items-center lg:gap-4 px-5">
          {/* <GiSpellBook className="w-5 h-5 lg:w-10 lg:h-10 pb-1" /> */}
          <img
            src="/sorai-icons/battery.png"
            alt="battery-icon"
            className="w-10"
          />
          <div className="py-2 text-center sm:block uppercase text-[0.8rem]">
            Giữ cho iPhone của bạn luôn sẵn sàng!
          </div>
        </div>

        <div className=" flex flex-row items-center gap-5 px-5 sm:px-10">
          <a href="https://www.facebook.com/">
            <FaFacebookF className="w-4 h-4 sm:w-5 lg:h-5" />{" "}
          </a>
          <a href="#">
            <FaInstagram className="w-4 h-4 sm:w-5 lg:h-5" />{" "}
          </a>
          <a href="#">
            <FaLinkedin className="w-4 h-4 sm:w-5 lg:h-5" />{" "}
          </a>
        </div>
      </div>

      <Link
        to="/"
        className="flex items-center justify-center lg:hidden text-base sm:text-lg lg:text-xl text-center text-white bg-gradient-to-r from-primary to-secondary"
      >
        <div className="flex justify-between w-full">
          <div className="flex gap-1 pl-1 items-center w-full my-1">
            <img
              src="/sorai-icons/battery.png"
              alt="battery-icon"
              className="w-10"
            />
            {/* <GiSpellBook className="w-5 h-5 lg:w-10 lg:h-10 pb-1" /> */}
            <div className="text-xs">Sạc đầy niềm tin, bền bỉ cả ngày!</div>
          </div>

          <div className=" flex justify-end flex-row pr-1 items-center gap-4 sm:px-10 w-1/3">
            <button href="https://www.facebook.com/">
              <FaFacebookF className="w-4 h-4 sm:w-5 lg:h-5" />{" "}
            </button>
            <button href="#">
              <FaInstagram className="w-4 h-4 sm:w-5 lg:h-5" />{" "}
            </button>
            <button href="#">
              <FaLinkedin className="w-4 h- sm:w-5 lg:h-5" />{" "}
            </button>
          </div>
        </div>
      </Link>
    </header>
  );
};
