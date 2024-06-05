import React from "react";
import Container from "./Container";
import MainHeading from "./partials/MainHeading";

const HotelAddress = () => {
  return (
    <Container>
      <div className="mx-14 sm:mx-5 my-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <MainHeading className={"text-3xl"}>How to be reach?</MainHeading>
          <a
            href="#home"
            className="flex items-center gap-1 border-2 border-purple-700 text-purple-800 rounded-md px-8 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span> Get Direction</span>
          </a>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3098.374484596644!2d96.15048028664795!3d16.801286146524333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smm!4v1717579787610!5m2!1sen!2smm"
            width={1200}
            height={400}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default HotelAddress;
