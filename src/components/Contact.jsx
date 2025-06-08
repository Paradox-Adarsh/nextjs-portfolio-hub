import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const submitDetails = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76fe480c-0879-4215-81fa-b11de1a5b29f");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();

    }, 8000); 

    try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed");
    }
  }
    catch (error) {
      if (error.name === "AbortError") {
        setResult("Slow internet connection or no network.");
      } else {
        console.log("Error", error);
        setResult("An unexpected error occurred.");
      }
    }
  };




  return (
    <div
      id="work"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-cover bg-center bg-no-repeat bg-[length:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-ovo ">Get In Touch</h2>
      <p className="text-center font-ovo max-w-2xl mb-12 mx-auto">
        Welcome to my fullstack development portfolio Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Repellendus, sint quasi eligendi sequi
      </p>

      <form onSubmit={submitDetails} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-5">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md dark:text-black"
            type="text"
            name='name'
            placeholder="Enter Your Name "
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md  dark:text-black"
            type="email"
            name="email"
            placeholder="Enter Your Email "
            required
          />
        </div>

        <textarea
          className="w-full p-4  outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6 dark:text-black"
          rows="5"
          name="message"
          placeholder="Enter Your Message"
        ></textarea>
        <button
          type="submit"
          className=" w-max py-3 px-8 gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 flex justify-between"
        >
          Submit Now{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 h-3 my-auto"
          />
        </button>

        <p className=" text-center text-2xl mt-2 font-ovo ">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
