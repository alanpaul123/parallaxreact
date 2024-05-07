import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import React from "react";

function imageThree() {
  return (
    <>
      <Parallax
        bgImage="https://images.unsplash.com/photo-1533135404995-a618910b7b6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBza3lsaW5lfGVufDB8fDB8fHww"
        strength={800}
        className="image"
      >
        <div className="c">
          <h1 data-aos="fade-right">Explore the world of mountains</h1>
          <div className="container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modulues={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1615809265087-1416ccddd6ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB2aWV3fGVufDB8fDB8fHww"
                  alt="slide_image"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://miro.medium.com/v2/resize:fit:643/1*06ujBAXVeGHGifgqzuMn6Q.jpeg"
                  alt="slide_image"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://whitecoatsoftheroundtable.com/wp-content/uploads/2023/03/hd-wallpaper-nature-wallpaper-hills-2836301.jpg"
                  alt="slide_image"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://w0.peakpx.com/wallpaper/464/921/HD-wallpaper-beauty-of-nature-hills-green-nature-trees-clouds.jpg"
                  alt="slide_image"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://w0.peakpx.com/wallpaper/994/393/HD-wallpaper-beautiful-nature-hills-view-grass-trees-sky-clouds-mountains-nature-ray-forset.jpg"
                  alt="slide_image"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.pinimg.com/736x/da/76/45/da76455b146dee303919aefc85a87885.jpg"
                  alt="slide_image"
                />
              </SwiperSlide>

              {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

            <div className="swiper-pagination"></div>
          </div> */}
            </Swiper>
          </div>
        </div>
      </Parallax>
    </>
  );
}

export default imageThree;
