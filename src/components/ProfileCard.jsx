import React from "react";
import himanshu from "../assets/harish.png";

const ProfileCard = () => {
  return (
    <div className="relative lg:w-4/6 top-12 flex flex-col justify-center text-white items-center w-full  bg-dark_blue px-4 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10 justify-center w-full ">
        <img src={himanshu} alt="" className="h-auto w-96 relative bottom-4" />
        <div className="flex flex-col justify-center items-center text-center gap-2 text-lg">
          <h1 className="text-4xl font-extrabold text-white ">
            Harish Parihar
          </h1>
          <p>30 under 30</p>
          <p>
          The Brain behind Funnel God. With a whopping <span className="text-yellow-500">27 crore rupees spent on Facebook and Google.</span>
          </p>
          <p> I'm the media buying mastermind who turns 1x growth into an eye-popping 10x surge.
           Ready to skyrocket your business? I thought so.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
