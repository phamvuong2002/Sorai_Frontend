import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const showAlert = () => {
    Swal.fire({
      title: "Bạn Có Muốn Trở Thành Đại Lý Phân Phối SORAI?",
      html: `
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          Liên hệ với chúng tôi qua
          <a href="https://zalo.me/0929988818" class="flex flex-col gap-1 items-center hover:text-[#2596be]" target:"_blank">
            <img
              src="/sorai-icons/zalo_icon_color.png"
              alt="zalo"
              class="bg-white w-16"
            />
            Zalo: Sorai Electronics
          </a>
        </div>
        <a href="../#contact" class="text-secondary/50 hover:text-secondary">Nhấp vào đây để biết thêm chi tiết</a>
      </div>
    `,
      imageUrl: "/sorai-logos/logo_192.png", // Đường dẫn đến logo của bạn
      imageWidth: 100, // Chiều rộng logo
      imageHeight: 100, // Chiều cao logo
      imageAlt: "Logo",
      confirmButtonText: "OK",
    });
  };

  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-gray-300 h-[300px] rounded-lg mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
              loading="lazy"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* onClick={() => addToCart(product, id)} */}
          <button onClick={() => showAlert()}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div className="text-center sm:text-start">
        <div className="text-sm sm:text-[1.07rem] capitalize text-gray-500 mb-1">
          {category}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        {price.length === 0 ? (
          <button
            className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
            onClick={() => navigate("../#contact")}
          >
            Liên Hệ Ngay
          </button>
        ) : (
          <h2 className="font-semibbold">{price} vnđ</h2>
        )}
      </div>
    </div>
  );
};

export default Product;
