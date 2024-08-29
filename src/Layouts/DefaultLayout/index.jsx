import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* <ProgressLoading/> */}
      {/* <Spinner /> */}
      <Header />
      <Navbar />
      <div>
        <div className="bg-[#efefef] flex flex-col gap-[0.1rem]">
          {/* Pages */}
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
