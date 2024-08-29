import React from "react";
import Slider from "react-slick";

const FeedbacksData = [
  {
    id: 1,
    name: "Phạm Hùng",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://res.cloudinary.com/dayrqfwxo/image/upload/v1724950245/Sorai/6581c5b4-1f70-4139-9dba-3d6fd436442f.png",
  },
  {
    id: 2,
    name: "Nguyễn Văn An",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://res.cloudinary.com/dayrqfwxo/image/upload/v1724950348/Sorai/459df42a-7840-4e82-a70c-3196e4356dc3.png",
  },
  {
    id: 3,
    name: "Anh Kiệt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://res.cloudinary.com/dayrqfwxo/image/upload/v1724950311/Sorai/a674e915-75d9-4498-a1a5-3a84c41d9aa7.png",
  },
  {
    id: 5,
    name: "Anh Long",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://res.cloudinary.com/dayrqfwxo/image/upload/v1724950292/Sorai/252212b6-2785-4185-850a-5b7381e90ebd.png",
  },
];

const Feedbacks = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Phản Hồi Của Khách Hàng
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {FeedbacksData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-lg w-[15rem]"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-40 right-2">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
