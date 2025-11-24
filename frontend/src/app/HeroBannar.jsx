"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images from public
// import logo from "../public/logo.png";
import bannar1 from "../../public/assets/bannar/banar-1.avif";
import bannar2 from "../../public/assets/bannar/banar-2.avif";
import bannar3 from "../../public/assets/bannar/banar-3.avif";

const HeroBanner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="heroSwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="slide-content"
          style={{
            backgroundImage: `url(${bannar1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <Image src={logo} alt="logo" width={200} height={150} />
            <p className="text-xl text-primary-content">
              Find Your Perfect Study Partner
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="slide-content"
          style={{
            backgroundImage: `url(${bannar2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={200} height={150} />
            <h1 className="text-3xl font-bold text-primary-content">
              Collaborate and Learn
            </h1>
            <p className="text-xl text-primary-content">
              Connect with study partners by subject or location
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="slide-content"
          style={{
            backgroundImage: `url(${bannar3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={200} height={150} />
            <h1 className="text-3xl font-bold text-primary-content">
              Interactive Learning Platform
            </h1>
            <p className="text-xl text-primary-content">
              Make learning engaging and goal-oriented
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanner;
