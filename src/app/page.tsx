"use client";

import Image from "next/image";
import bghomepage from "@/assets/bgbatik.png";
import Navbar from "@/components/Navbar/Navbar";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";
import aboutImg from "@/assets/0016.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { batikItem } from "@/utils/batikItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { KeunggulanWeb } from "@/utils/KeunggulanWeb";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${bghomepage.src})` }}
        className="bg-center relative bg-cover h-screen "
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 "></div>
        <Navbar />

        <div className="relative pt-28 px-[3%] flex justify-center items-center gap-6">
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
           py-2 mt-4 "
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

      <section className="mt-16 px-[5%] ">
        <div className="text-center">
          <div className="">
            <h1 className="text-3xl font-bold">About</h1>
            <hr className="border-2 border-primary w-20 mx-auto" />
          </div>
          <div className="mt-7">
            <p className="max-w-xl mx-auto">
              <span className="font-semibold">Mengapa Kami Hadir?</span>
              Website prediksi batik ini diciptakan untuk memudahkan masyarakat
              dalam mengenali ragam batik Nusantara. Menggunakan teknologi
              kecerdasan buatan (AI), kami membantu Anda memahami identitas,
              sejarah, dan makna di balik setiap motif batik.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-20">
          <div className="w-1/2">
            <Image
              src={aboutImg}
              alt="home1"
              width={300}
              height={300}
              className="w-full object-cover h-80 rounded-lg"
            />
          </div>
          <div className="w-1/2">
            {KeunggulanWeb.map((item) => (
              <div className="border border-slate-400 rounded-lg p-2 mb-4">
                <div className="flex items-center gap-4">
                  <FaCheckCircle size={25} className="text-primary" />
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                </div>
                <p className="mt-3 pl-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
