import React from "react";
import Video from "./Video";
import Button from "./Button";

const MainBanner = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg,#1B1530 0%,#172B34 100%)" }}
      className="lg:px-10 flex w-screen flex-col items-center gap-3 lg:gap-5 py-4 px-1"
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
        <span className="text-text_yellow mr-2 mt-0">Unlock the Goldmine</span>
        {/* First Or Next */}
      </h1>
      <h2 className=" text-2xl md:text-2xl:text-2xl text-center font-bold text-white">
        {/* <span className="text-text_yellow mr-2">"HIGH CONVERTING FUNNEL"</span> */}
        Generate Thousands of{" "}<br></br>
        <span className="text-text_yellow  text-2xl">High-Quality</span> Stock Market
        Leads in a Single Day
      </h2>

      {/**<h3 className="text-lg md:text-xl lg:text-3xl text-center font-bold text-white px-4 lg:px-20">
        Struggling to Generate Quality Leads and Boost Your Stock Market
        Conversions?
      </h3>*/} 

      <h3 className="text-base text-lg md:text-lg lg:text-2xl text-center font-bold text-white">
        Discover Our Proven Formula for Transforming Low-Quality Leads into
        High-Quality Goldmines!
      </h3>

      {/* <div className="py-2 lg:py-2 px-4 md:px-6 lg:px-8 border-2 border-text_yellow rounded-md ">
        <p className="text-white font-bold text-sm md:text-lg lg:text-xl">
          Workshop is on{" "}
          <span className="text-text_yellow">23rd November 2023 at 7 PM</span>
        </p>
      </div> */}

     <div className="h-auto w-full lg:h-1/3 lg:w-1/3 -my-10">
        <Video/>
      </div> 
       

     <Button/>
      <h2 className="font-extrabold mt-2 text-center text-lg md:text-4xl lg:text-4xl text-white">
        HERE IS WHAT YOU ARE GOING TO LEARN
      </h2>

      <div className="flex items-center justify-center mx-3 gap-5 text-white text-base md:text-xl lg:text-2xl font-medium flex-wrap">
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Instant Lead Quality Improvement:
            </span>{" "}
            See a surge in high-quality leads from day one
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Faster Conversions:
            </span>{" "}
            Convert leads into clients faster than ever before.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Hands-On Guidance:
            </span>{" "}
            Start implementing winning strategies today with our expert advice.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Proven Techniques:
            </span>{" "}
            Instantly access the same techniques used by industry leaders.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Automation:
            </span>{" "}
            Leveraging AI Tools To Automate WhatsApp Campaigns And Nurture Leads
            Through The Funnel
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Data Security:
            </span>{" "}
            Communicate strong data security measures through digital channels,
            building trust and confidence among clients.
          </div>
        </div>
      </div>

      <i
        className="fa-solid fa-arrow-down fa-beat-fade font-extrabold text-xl md:text-3xl lg:text-5xl"
        style={{ color: "#e2b42d" }}
      ></i>

     <Button/>
    </div>
  );
};

export default MainBanner;
