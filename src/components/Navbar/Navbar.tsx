import Image from "next/image";
import { NavItem } from "./NavItem";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const height = window.innerHeight;

      if (scrollTop > height * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-white py-2" : "bg-transparent py-4 "
      } w-full fixed z-10  transition-all`}
    >
      <div className="flex justify-evenly items-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-cover w-14"
          />
          <h1
            className={`${
              scrolled ? "text-primary" : "text-white"
            } text-2xl font-semibold`}
          >
            My.Batik
          </h1>
        </div>
        <ul className="flex justify-center items-center gap-10">
          {NavItem.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                className={`${
                  scrolled ? "text-primary" : "text-white"
                } text-lg cursor-pointer `}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className={`bg-white ${scrolled ? 'border border-gray-400 rounded-lg' :''} px-4 py-2 rounded-lg font-semibold`}>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
