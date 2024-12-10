import AboutHome from "@/components/landingpage/about_home";
import Faq from "@/components/landingpage/faq";
import HowToUse from "@/components/landingpage/how-to-use";
import Jumbotron from "@/components/landingpage/jumbotron";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Beranda",
};


export default function Page() {
  return (
    <>
      <Jumbotron />
      <AboutHome />
      <HowToUse />
      <Faq/>
    </>
  );
}
