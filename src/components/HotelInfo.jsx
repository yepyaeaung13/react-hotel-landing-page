import React from "react";
import Container from "./Container";
import SubHeading from "./partials/SubHeading";
import MainHeading from "./partials/MainHeading";

const HotelInfo = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 py-5">
        <div className="flex flex-col items-center">
          <MainHeading className={"md:text-3xl text-2xl"}>10</MainHeading>
          <SubHeading className={"md:text-xl text-sm"}>
            YEARS OF SERVICE
          </SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"md:text-3xl text-2xl"}>320</MainHeading>
          <SubHeading className={"md:text-xl text-sm"}>
            SQUARE METRES AREA
          </SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"md:text-3xl text-2xl"}>40</MainHeading>
          <SubHeading className={"md:text-xl text-sm"}>NICE ROOMS</SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"md:text-3xl text-2xl"}>4567</MainHeading>
          <SubHeading className={"md:text-xl text-sm"}>
            HAPPY VISITORS
          </SubHeading>
        </div>
      </div>
    </Container>
  );
};

export default HotelInfo;
