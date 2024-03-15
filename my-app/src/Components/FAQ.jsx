import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import SideLogo from "../assets/image 1.png";


export const FAQ = () => {
  return (
    <>
      <div className="bg-FooterBackground  justify-center items-center lg:flex flex-row pb-20">
        <div>
          <img src={SideLogo} alt="" />
        </div>

        <div>
          <div className="flex flex-col">
            <h1 className="font-Shojumaru text-heading text-3xl text-center">
              {" "}
              FAQ
            </h1>
            <div className="flex  mt-5 border border-1 border-BorderColor px-10 py-3 rounded-lg ">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">1</span>
                <span className="ml-2 font-2xl">WHY CHOOSE "SAVIOR"?</span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            <div className="flex  mt-5 border border-1 border-BorderColor px-10 py-3 rounded-lg">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">2</span>
                <span className="ml-2 font-2xl">
                  WHY IS THE IDO DURATION SO LONG?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            <div className="flex  mt-5 border border-1 border-BorderColor px-10 py-3 rounded-lg">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">3</span>
                <span className="ml-2 font-2xl">
                  WHEN WILL TRADING GO LIVE?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            {/* <div className="flex flex-col mt-5 border border-2 border-BorderColor px-10 py-3 rounded-md">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="lg:text-left font-Shojumaru">4</span>
                <span className="ml-5 font-2xl">
                  WHEN CAN WE CLAIM THE TOKENS?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>   
            </div> */}
            <div className="flex flex-col mt-5 border border-1 border-BorderColor px-10 py-3 rounded-lg">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="lg:text-left font-Shojumaru">4</span>
                <span className="ml-5 font-2xl">
                  WHEN CAN WE CLAIM THE TOKENS?
                </span>
                <MdKeyboardArrowUp className="ml-5 font-Shojumaru text-5xl" />
              </p>
              <p className="text-white ml-10 mt-3 font-zcool bg-CustomBackground p-5 rounded-md font-xl -ml-3">
                After the IDD Concludes, you can claim the tokens on our
                official <br /> website
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
