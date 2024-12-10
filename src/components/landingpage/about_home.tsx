import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import aboutImg from "@/assets/batik_collection/20007.jpg";
import { KeunggulanWeb } from "@/utils/keunggulan-web";

export default function AboutHome() {
  return (
    <>
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
                <p className=" pl-10 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
