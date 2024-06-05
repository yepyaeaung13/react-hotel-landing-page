import React from "react";
import Container from "./Container";
import MainHeading from "./partials/MainHeading";
import { Card } from "flowbite-react";

const SpeacialOffer = () => {
  return (
    <Container>
      <div className="mx-12 my-10 flex flex-col gap-5">
        <MainHeading className={"text-3xl"}>Special Offers</MainHeading>
        <div className="flex md:flex-row flex-col justify-around gap-5">
          <Card
            className="max-w-lg"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/save.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Stay 3 Nights & Save!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="" className="text-blue-700 flex items-center gap-1">
              <span>View detail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </Card>
          <Card
            className="max-w-lg"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/pay.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mobile Only Discount
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="" className="text-blue-700 flex items-center gap-1">
              <span>View detail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default SpeacialOffer;
