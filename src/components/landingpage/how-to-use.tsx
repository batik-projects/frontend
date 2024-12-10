"use client";

import { IoIosCloudUpload, IoIosCheckmarkCircle } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa";


export const penggunaanItem = [
  {
    title: "Unggah Gambar Batik",
    description: "Pilih file gambar batik dari perangkat Anda",
    icon: <IoIosCloudUpload className="text-blue-500" size={40} />,
  },
  {
    title: "Proses Deteksi",
    description: "Tunggu beberapa detik hingga sistem memproses gambar",
    icon: <FaSearchengin className="text-yellow-500" size={40} />,
  },
  {
    title: "Lihat Hasil Deteksi",
    description:
      "Jenis batik akan ditampilkan",
    icon: <IoIosCheckmarkCircle className="text-green-500" size={40} />,
  },
];

export default function HowToUse() {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Bagaimana Cara Penggunaan</h1>
        <hr className="border-2 border-primary w-56 mx-auto" />
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 ">
        {penggunaanItem.map((item) => (
          <div className="w-52 text-center ">
            <div className="flex justify-center items-center h-20">{item.icon}</div>
            <div>
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
