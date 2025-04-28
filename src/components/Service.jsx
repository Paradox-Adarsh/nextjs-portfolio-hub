import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center font-ovo text-5xl">My Services</h2>
      <p className="mx-auto text-center max-w-2xl mt-5 mb-12  font-ovo text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo
        assumenda sint, et architecto qui modi sapiente? Iusto, vitae nemo.
      </p>

      <div className=" grid grid-cols-auto  gap-6 my-10">
        {serviceData.map(({icon,title,description,link},index)=>(
            <div className="border rounded-lg border-gray-400 px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover duration-500 hover:-translate-y-1" key={index}><Image className='w-10' src={icon} alt=''/> 
            <h3 className="text-lg my-4  text-gray-700" >{title}</h3>
            <p className="leading-5 text-gray-600 text-sm">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}><Image src={assets.right_arrow} alt=''/></a>

            </div>
           


        ))}
        
        
         </div>
    </div>
  );
};

export default Service;
