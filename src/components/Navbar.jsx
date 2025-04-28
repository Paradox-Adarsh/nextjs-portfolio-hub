import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      }
      else{
      setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12m  -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image
            alt="#top"
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex justify-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm ">
          <li>
            <a className="font-ovo" href="home">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="aboutMe">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="myWork">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contactMe">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button>
            {" "}
            <Image src={assets.moon_icon} className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex gap-2 items-center px-10 py-2 border border-gray-500 rounded-full font-ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="#" className="w-3" />
          </a>
          <button
            onClick={openMenu}
            className="cursor-pointer block md:hidden ml-3"
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>

          {/* mobile menu */}

          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-3 py-20 px-10 -right-64 fixed top-0 bottom-0 bg-rose-50 h-screen transition duration-500"
          >
            <div
              onClick={closeMenu}
              className=" cursor-pointer absolute right-6 top-6"
            >
              <Image src={assets.close_black} alt="" className="w-3" />
            </div>

            <li>
              <a className="font-ovo" href="home">
                Home
              </a>
            </li>
            <li>
              <a className="font-ovo" href="aboutMe">
                About Me
              </a>
            </li>
            <li>
              <a className="font-ovo" href="services">
                Services
              </a>
            </li>
            <li>
              <a className="font-ovo" href="myWork">
                My Work
              </a>
            </li>
            <li>
              <a className="font-ovo" href="#contactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
