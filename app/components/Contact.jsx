import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c1e63e27-9943-4f33-a1c5-182bea219e6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success === true) {
      toast.success("Message sent successfully!");
      event.target.reset();
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg[length:90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me </h4>
      <h2 className="text-center text-5xl dark:text-darkHover">Get in Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  ">
        I'd love to hear from you! Whether you have a question,coments,or
        Feedback please use the form below.!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-8 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 outline-noneborder-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/40 dark:border-white/90"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="flex-1 p-3 outline-noneborder-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/40 dark:border-white/90"
          />
          {/* <input
            type="mobile"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            required
            className="flex-1 p-3 outline-noneborder-[0.5px] border-gray-400 rounded-md bg-white"
          /> */}
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/40 dark:border-white/90"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        {/* <p className="mt-4">{result}</p> */}
      </form>
    </div>
  );
};

export default Contact;
