import React from "react";
import Container from "./Container";
import MainHeading from "./partials/MainHeading";
import Nvabar from "./partials/Nvabar";
import SubHeading from "./partials/SubHeading";

const Header = () => {
  return (
    <div
      className="w-full h-[100vh] bg-no-repeat bg-cover bg-bottom bg-slate-600/50 bg-blend-multiply"
      style={{ backgroundImage: "url(/hotel-cover.jpg)" }}
    >
      <div className="">
        <Container>
          <div className="flex justify-between items-center py-2 px-2">
            <MainHeading className={"text-white"}> HOTEL</MainHeading>
            <Nvabar />
            <div>
              <a
                href="#booking"
                className="border border-slate-300 text-white hover:bg-white hover:text-black rounded-md px-5 py-2"
              >
                Book now
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-full w-full flex justify-center items-center text-white">
        <div className="flex flex-col gap-5 w-[600px]">
          <SubHeading>WELCOME TO</SubHeading>
          <MainHeading className={"text-5xl"}>HOTEL IN YANGON</MainHeading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            sapiente dolorem unde modi earum dignissimos.
          </p>
          <div>
            <a
              href="#booking"
              className="border-2 hover:border border-slate-300 text-white rounded-md px-8 py-2"
            >
              check available
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
