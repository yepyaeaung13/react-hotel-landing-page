import React from "react";
import Container from "./Container";
import MainHeading from "./partials/MainHeading";

const HotelGallery = () => {
  return (
    <Container>
      <div
        id="rooms"
        className="flex flex-col gap-5 md:mx-12 mx-5 md:my-10 my-5"
      >
        <MainHeading className={"text-3xl text-center my-5"}>
          Gallery
        </MainHeading>
        <div className="grid grid-cols-2 w-full gap-2">
          <img src="/bedroom.jpg" alt="" className="w-full" />
          <img src="/bathroom.jpg" alt="" className="w-full" />

          <img src="/bedroom1.jpg" alt="" className="w-full" />
          <img src="/bedroom2.jpg" alt="" className="w-full" />
        </div>
      </div>
    </Container>
  );
};

export default HotelGallery;
