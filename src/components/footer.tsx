import bghomepage from "@/assets/home3.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bghomepage.src})` }}
        className="bg-center relative bg-cover h-60 mt-10 px-10 py-6 "
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 "></div>
        <div className="relative flex justify-between">
          <Image src={'/logo.png'} alt="logo" width={90} height={90} className="w-10"/>
          <div className="flex items-center gap-4">
            <h1 className="text-white font-semibold">Siap Untuk Menemukan Batik Nusantara?</h1>
            <Button className="bg-white text-primary">Coba Sekarang</Button>
          </div>
        </div>
      </div>
    </>
  );
}
