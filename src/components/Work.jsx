import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo ">My Latest Work</h2>
      <p className="text-center font-ovo max-w-2xl mb-12 mx-auto">
        Welcome to my fullstack development portfolio Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Repellendus, sint quasi eligendi sequi
        cumque adipisci maxime qui saepe, vero voluptate ab et alias mollitia
        dolorem nesciunt temporibus. Quidem, atque accusamus?
      </p>

      <div className="grid grid-cols-auto my-5 gap-5">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-cover bg-center rounded-lg  relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute bg-white w-10/12 rounded-md bottom-5 left-1/2 -translate-x-1/2 flex items-center 
            justify-between py-3 px-5 group-hover:bottom-7 duration-500">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              <div>
                <Image
                  src={assets.send_icon}
                  alt="send_icon"
                  className="'w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="w-max flex justify-center gap-2  text-gray-700 items-center border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-light-hover duration-500 " href="">Show More <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/></a>
     
    </div>
  );
};

export default Work;
