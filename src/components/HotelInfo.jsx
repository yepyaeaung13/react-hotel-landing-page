import React from "react";
import Container from "./Container";
import SubHeading from "./partials/SubHeading";
import MainHeading from "./partials/MainHeading";

const HotelInfo = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 py-5">
        <div className="flex flex-col items-center">
          <MainHeading className={"text-3xl"}>10</MainHeading>
          <SubHeading>YEARS OF SERVICE</SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"text-3xl"}>320</MainHeading>
          <SubHeading>SQUARE METRES AREA</SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"text-3xl"}>40</MainHeading>
          <SubHeading>NICE ROOMS</SubHeading>
        </div>
        <div className="flex flex-col items-center">
          <MainHeading className={"text-3xl"}>4567</MainHeading>
          <SubHeading>HAPPY VISITORS</SubHeading>
        </div>
      </div>
    </Container>
  );
};

export default HotelInfo;
