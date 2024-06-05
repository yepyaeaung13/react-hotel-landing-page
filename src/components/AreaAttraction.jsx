import React from "react";
import Container from "./Container";
import SubHeading from "./partials/SubHeading";
import { Carousel } from "flowbite-react";

const AreaAttraction = () => {
  return (
    <Container>
      <div className="w-full flex md:flex-row flex-col md:gap-10 gap-5 justify-between md:p-10">
        <div className="md:w-2/3 w-full md:h-96 h-80">
          <Carousel>
            <img
              src="/shwedagon-view.jpg"
              alt="..."
              className="w-full h-full"
            />
            <img
              src="/shwedagon-view1.jpg"
              alt="..."
              className="w-full h-full"
            />
            <img
              src="/shwedagon-view2.jpg"
              alt="..."
              className="w-full h-full"
            />
            <img
              src="/shwedagon-view3.jpg"
              alt="..."
              className="w-full h-full"
            />
          </Carousel>
        </div>
        <div className="md:w-1/3 w-full flex flex-col gap-10 px-5">
          <SubHeading className={"text-3xl"}>
            Get Comfy in The Near of Shwedagon Pagoda
          </SubHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maxime cum nemo atque ab ex nisi pariatur incidunt natus consectetur
            et architecto ipsam possimus, amet laboriosam iste aut earum
            sapiente!
          </p>
          <div>
            <a
              href="#home"
              className="border-2 hover:border border-blue-700 text-blue-800 rounded-md px-8 py-2"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AreaAttraction;
