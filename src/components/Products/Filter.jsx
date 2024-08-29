import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "pin-sorai-dung-luong-chuan",
    name: "Pin SORAI dung lượng chuẩn",
    count: 5,
  },
  {
    id: "cell-pin-sorai-dung-luong-chuan",
    name: "Cell pin SORAI dung lượng chuẩn",
    count: 17,
  },
  {
    id: "pin-sorai-dung-luong-cao",
    name: "Pin SORAI dung lượng cao",
    count: 21,
  },
];

const Filter = ({ cate, setCate }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    "pin-sorai-dung-luong-chuan"
  );
  useEffect(() => {
    setSelectedCategory(cate);
  }, [cate]);

  return (
    <div
      //   data-aos="fade-up"
      //   data-aos-duration="300"
      className="p-4 w-full sm:w-[16rem] border border-gray-300 rounded-lg"
    >
      <h2 className="pb-2 text-lg mb-4 border-b border-gray-400 font-cursive font-semibold">
        Loại PIN <strong className="text-secondary">SORAI</strong>
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.name}
            className="mb-2"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <button
              onClick={() => {
                navigate(`../products?cate=${category.id}`);
              }}
              className={`w-full flex gap-4 justify-between items-center px-1 py-2 transition-all rounded-md text-left ${
                selectedCategory === category.id
                  ? "bg-gray-200 text-black px-2"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  selectedCategory === category.id
                    ? "bg-secondary/50 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {category.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
