import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Banner from "../components/Banner/Banner";
import SmallBanner from "../components/SmallBanner/SmallBanner";
import Feedbacks from "../components/Feedbacks/Feedbacks";

export const Home = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Lấy phần sau dấu #
    if (hash) {
      if (hash === "contact") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        }); // Di chuyển đến cuối trang
      } else {
        const element = document.getElementById(hash); // Tìm thẻ có ID tương ứng
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Di chuyển đến thẻ đó
        }
      }
    }
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Categories />
      <Banner />
      <SmallBanner />
      <Feedbacks />
    </div>
  );
};
