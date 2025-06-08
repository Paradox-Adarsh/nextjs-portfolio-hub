import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-11/12 max-w-3xl h-screen flex flex-col items-center justify-center mx-auto gap-4">
        <div>
          <Image
            src={assets.profile_img}
            alt=""
            className="mt-16 w-32 rounded-full"
          />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          I'm Adarsh Yadav{" "}
          <Image className="w-6" src={assets.hand_icon} alt="" />
        </h3>
        <h1 className="font-ovo text-3xl sm:text-6xl lg:text-[66px]">
          Full Stack Java Developer.
        </h1>
        <p className="max-w-2xl mx-auto font-ovo">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            className="px-10 py-3 border border-white rounded-full flex items-center text-white bg-black gap-2 "
            href="#contact"
          >
            Contact Me! <Image className="w-4" src={assets.right_arrow_white} />
          </a>
          <a
            className="px-10 py-3 border rounded-full flex items-center dark:bg-white dark:text-black border-gray-500 gap-2"
            href="/sample-resume.pdf"
            download
          >
            My Resume! <Image className="w-4" src={assets.download_icon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
