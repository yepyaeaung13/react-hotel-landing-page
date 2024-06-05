import React from "react";

const Nvabar = () => {
  return (
    <nav className="flex md:gap-10 gap-1 text-white">
      <a
        href="#home"
        className="hover:text-slate-950 rounded-md px-2 py-1 duration-200"
      >
        Home
      </a>
      <a
        href="#rooms"
        className="hover:text-slate-950 rounded-md px-2 py-1 duration-200"
      >
        Rooms
      </a>
      <a
        href="#facilities"
        className="hover:text-slate-950 rounded-md px-2 py-1 duration-200"
      >
        Facilities
      </a>
      <a
        href="#contact"
        className="hover:text-slate-950 rounded-md px-2 py-1 duration-200"
      >
        contact
      </a>
    </nav>
  );
};

export default Nvabar;
