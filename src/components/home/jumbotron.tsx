import Image from "next/image";

import bghomepage from "@/assets/bgbatik.png";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";
import { batikItem } from "@/utils/batikItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Navbar from "@/components/navbar";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Jumbotron() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bghomepage.src})` }}
        className="bg-center relative bg-cover h-screen "
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 "></div>
        <Navbar />

        <div className="relative pt-36 px-[3%] flex justify-center items-center gap-6">
          <div className="w-1/2">
            <h1 className="text-white text-4xl font-bold max-w-2xl">
              Satu Gambar, Seribu Cerita: Kenali Batik dengan Mudah!
            </h1>
            <p className="text-white mt-4 max-w-lg text-xl">
              Berbasis kecerdasan buatan, kami membantu Anda memahami keunikan
              dan identitas batik Nusantara. Temukan asal-usul batik dan
              pelajari lebih dalam tentang warisan budaya yang tak ternilai ini.
            </p>

            <button
              className="bg-white rounded-md px-4
           py-2 mt-4 hover:border-white border-2 hover:bg-transparent hover:text-white transition-all "
            >
              Learn More
            </button>

            <div className="w-[80%] mt-10">
              <h1 className="text-white pb-2">Batik Gallery</h1>
              <Swiper
                modules={[Pagination, Navigation]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={30}
                className="mySwiper"
                slidesPerView={3}
              >
                <div className="flex justify-center items-center">
                  {batikItem.map((item) => (
                    <SwiperSlide>
                      <Image
                        src={item.images}
                        alt="batik"
                        width={300}
                        height={300}
                        className="w-52 h-20 object-cover border border-white "
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 w-1/2">
            <div className="w-52 h-96 parallelogram">
              <Image
                src={home2}
                alt="home1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-52 h-96 parallelogram">
              <Image
                src={home3}
                alt="home1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
