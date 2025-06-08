import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({isDarkMode}) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center font-ovo text-5xl">About Me!</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-1/2 border-1 border-black rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            harum ratione earum animi, impedit quam tempora?
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon,iconDark,title,description},index)=>(
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 hover:bg-light-hover duration-500 hover:shadow-black" key={index}>
                    <Image className='w-7 mt-3' src={isDarkMode?iconDark:icon} alt={title}/>
                    <h3 className='dark:text-white  my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className=" dark:text-white text-gray-600 text-sm">{description}</p>
                </li>
            ))}
          </ul>

          <h4 className="font-ovo text-gray-700 my-6">Tools I Use</h4>
          <ul className="flex gap-3 sm:gap-5 items-center ">
            {toolsData.map((tool,index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}><Image src={tool} alt='Tool' className="w-5 sm:w-7"/></li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
