import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import AreaAttraction from "./components/AreaAttraction";
import HotelInfo from "./components/HotelInfo";
import HotelAddress from "./components/HotelAddress";
import HotelFacilities from "./components/HotelFacilities";
import SpecialOffer from "./components/SpecialOffer";
import HotelRating from "./components/HotelRating";
import HotelContact from "./components/HotelContact";
import HotelGallery from "./components/HotelGallery";
import HotelBooking from "./components/HotelBooking";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <AreaAttraction />
      <HotelInfo />
      <HotelAddress />
      <HotelFacilities />
      <SpecialOffer />
      <HotelRating />
      <HotelContact />
      <HotelGallery />
      <HotelBooking />
      <Footer />
    </div>
  );
};

export default App;
