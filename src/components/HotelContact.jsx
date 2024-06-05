import React from "react";
import Container from "./Container";
import MainHeading from "./partials/MainHeading";

const HotelContact = () => {
  return (
    <Container>
      <div className="mx-12 my-10 flex flex-col gap-5">
        <MainHeading className={"text-2xl"}>Hotel Information</MainHeading>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="md:col-span-1 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 pt-2"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <p>
              Some hotel features, including vitae, varius ipsum ultrices
              adipiscing senectus turpis non due to COVID-19.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-5">
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>CHECK-IN</p>
                <p>04:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>PHONE NUMBER</p>
                <p>+95 989 862 6060</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32H384v32H333.3zm32 32H400c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H269.3L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48H304c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM229.5 320l-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H229.5z" />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>NO SMOKING</p>
                <p>100% Smoke Free</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>CHECK-OUT</p>
                <p>11:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>FAX NUMBER</p>
                <p>+95 989 862 6060</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex pt-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-5"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                </svg>
              </div>

              <div className="flex flex-col justify-start">
                <p>PET POLICY</p>
                <p>Pet Allowed: Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HotelContact;
