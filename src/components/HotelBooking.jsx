import React from "react";
import Container from "./Container";
import SubHeading from "./partials/SubHeading";
import MainHeading from "./partials/MainHeading";

const HotelBooking = () => {
  return (
    <div
      id="booking"
      className="md:my-10 my-3 h-[400px] bg-no-repeat bg-cover text-white bg-slate-600/50 bg-blend-multiply flex flex-col gap-5 justify-center items-center"
      style={{ backgroundImage: "url(/bedroom2.jpg)" }}
    >
      <SubHeading className={"text-lg"}>HOTEL RESERVATION</SubHeading>
      <MainHeading className={"text-xl"}>Book Directly With Us</MainHeading>
      <p>CALL US NOW:</p>
      <MainHeading className={"md:text-5xl text-xl flex md:gap-5 gap-2"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:w-10 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <span>+95 989 862 6060</span>
      </MainHeading>
    </div>
  );
};

export default HotelBooking;
