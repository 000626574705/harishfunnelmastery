import React from "react";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import Timer from "./Timer";
import Button from "./Button";

const Previews = () => {
  return (
    <div className="flex flex-col  mb-4 gap-5 justify-center items-center pt-10 px-4 text-black bg-smoke_bg">
      <div className="uppercase font-medium text-center text-lg md:text-2xl lg:text-2xl">
        <p>DON’T JUST TAKE MY WORD FOR IT HAVE A LOOK AT WHAT PEOPLE</p>
        <h2 className="font-bold text-green-600">ABOUT MY FACEBOOK GUIDES</h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <img
          src={review1}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review2}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review3}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review4}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
      </div>

      <h1 className="mt-2 font-extrabold text-center text-2xl md:text-4xl lg:text-5xl">
        Time is running out. Reserve your seat now!
      </h1>

      <Timer/>

      <p className="font-bold text-center text-xl">
        Fee will increase to <span className="text-red-600">Rs 2,000</span> once
        the timer hits <span className="text-red-600">ZERO</span>
      </p>

      <i
        className="fa-solid fa-arrow-down fa-beat-fade font-extrabold text-xl md:text-3xl lg:text-5xl"
        style={{ color: "#e2b42d" }}
      ></i>
        <a
        href="https://rzp.io/l/harishfunnelmastery"
        className=" buttonscale text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center text-center "
      >
        <span className="text-lg lg:text-3xl font-bold">
          {">>Yes I Want High Quality leads"}
        </span>
        <span className="text-base lg:text-2xl">
          Get Step by Step Guide Now ₹299
        </span>
      </a>
    
    </div>
  );
};

export default Previews;
