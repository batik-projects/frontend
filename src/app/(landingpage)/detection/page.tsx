import bghomepage from "@/assets/bgbatik.png";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Detection",
};

export default function Page(){
  return(
    <>
      <div style={{ backgroundImage: `url(${bghomepage.src})` }}
        className="bg-center relative bg-cover h-screen ">Detection</div>
    </>
  )
}