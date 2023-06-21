import React from "react";
import { Navigation, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';

const LoginSwiper = () => {
  return (
    <div className="h-screen w-full">
      {" "}
      <Swiper
        modules={[ Autoplay,Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay= {{
            delay: 8000,
            disableOnInteraction: false
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="bg-login bg-cover w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-login2 bg-cover w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-login3 bg-cover w-full h-full"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LoginSwiper;
