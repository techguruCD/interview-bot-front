import Image from "next/image";
import { useRouter } from "next/navigation";
import Benefits from "./Benefits";
import Features from "./Features";
import SimpleSlider from "./ReactSlick";
import chatbot from "../../../public/images/chatbot.png";
import Footer from "../Footer";
import { useState } from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const router = useRouter();
  const [active, setActive] = useState<number>(0);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div id="home" className="mx-[20px] md:mx=[40px] lg:mx-32">
        <div className="mt-4 lg:mt-[12px] pb-2">
          {/* <div className="mb-8 flex justify-center lg:flex lg:flex-row lg:justify-center gap-20 relative">
            <nav
              className={`w-full  ${navbar ? "bg-[#1d1326]" : "bg-[#f5f5f5]"} `}
            >
              <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
                <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div className="flex mr-6 flex-row">
                      <Image
                        onClick={() => router.push("/")}
                        src={logo}
                        height={40}
                        width={50}
                        alt="logo"
                        className="cursor-pointer"
                      />
                      <p
                        className={`ml-[16px] flex items-center capitalize font-bold ${
                          navbar ? "text-white" : "text-black"
                        }`}
                      >
                        interview bot
                      </p>
                    </div>
                    <div className="md:hidden">
                      <button
                        className="p-2 text-gray-700 rounded-md outline-none "
                        onClick={() => setNavbar(!navbar)}
                      >
                        {navbar ? (
                          <RxCross1
                            className={`${
                              navbar ? "text-white" : "text-black"
                            }`}
                          />
                        ) : (
                          <AiOutlineMenu className="text-black" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"
                    }`}
                  >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-right">
                      <li>
                        <Link
                          className={`
                          font-bold text-[16px]
                            ${active} !== 1
                              ? " "
                              : "active underline"
                           ${navbar ? "text-white" : "text-black"}`}
                          href="#home"
                          onClick={() => {
                            setActive(1);
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`
                        font-bold text-[16px]
                          ${active} !== 1
                            ? " "
                            : "active underline"
                         ${navbar ? "text-white" : "text-black"}`}
                          href="/about"
                          onClick={() => {
                            setActive(2);
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`
                   font-bold text-[16px]
                     ${active} !== 1
                       ? " "
                       : "active underline"
                    ${navbar ? "text-white" : "text-black"}`}
                          href="#blog"
                          onClick={() => {
                            setActive(3);
                          }}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`
                            font-bold text-[16px]
                              ${active} !== 1
                                ? " "
                                : "active underline"
                             ${navbar ? "text-white" : "text-black"}`}
                          href="/login"
                          onClick={() => {
                            setActive(4);
                          }}
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div></div>
              </div>
            </nav>
          </div> */}
          <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-evenly">
            <div className="">
              <div className="max-w-[739px] whitespace-nowrap lg:whitespace-pre-wrap font-bold text-[28px] md:text-[48px] lg:text-[64px] xl:text-[100px] 2xl:text-[128px] mb-[10px] leading-tight text-center lg:text-left">
                <span className="lg:line-clamp-1">Interview </span>
                the{" "}
                <span className="font-bold  text-[28px] md:text-[48px] lg:text-[64px] xl:text-[100px] 2xl:text-[128px] text-[#6355D8]">
                  AI
                </span>{" "}
                you.
              </div>
              <p className="mb-4 font-normal text-[24px] text-center md:text-left leading-normal">
                Upload Your CV/Resume And Talk To Your AI Chatbot in 5 Mins Or
                Less
              </p>
              <div className="flex justify-center lg:flex lg:justify-center 2xl:flex 2xl:justify-end ">
                <button
                  onClick={() => router.push("/signup")}
                  className="flex justify-center items-center mb-4 xl:mr-[-24rem] 2xl:mr-[-0px] whitespace-nowrap w-[270px] md:w-auto h-[60px] md:h-auto rounded-full border-[1px] text-[20px] md:text-[24px] font-semibold border-[#6355D8] text-[#6355D8] gap-2 p-4 lg:p-4"
                >
                  Make your Interview bot
                  <div className="hidden md:flex mt-[10px]">
                    <svg
                      width="33"
                      height="20"
                      viewBox="0 0 33 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9.75L32.4545 9.75"
                        stroke="#6355D8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.9728 4.26562L32.4546 9.75L26.9728 15.2344"
                        stroke="#6355D8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center h-[285px] w-[340px]  lg:h-[380px] lg:w-[540px]">
              <Image src={chatbot} alt="Dashboard Bot" />
            </div>
          </div>
          <div className="mb-[70px]">
            <Benefits />
          </div>
          <div>
            <Features />
          </div>
          <div className="mt-10">
            <div>
              <div className="">
                <p className="text-[28px] lg:text-[48px] font-medium leading-[55px] mb-[4px] lg:mb-[20px] text-center">
                  Want to interview a bot?{" "}
                </p>
                <p className="text-[20px] font-normal text-center leading-7">
                  Who wouldn&apos;t? Select a professional below and grill them
                  as you see fit
                </p>
              </div>
              {/* <div className="flex flex-wrap justify-evenly gap-4 mt-4">
                <img src={"/images/rikard.png"} alt="rikard" />
                <img src={"/images/briony.png"} alt="briony" />
                <img src={"/images/neil.png"} alt="neil" />
              </div> */}
              {/* <Slider {...sliderSettings}>
                <div className="mt-6">
                  <div className="flex flex-col justify-center ">

                    <img className="" src={"/images/rikard.png"} alt="rikard" />
                    <img alt="ricardavatar" src="/images/rikardslider.png" />
                    <button className=" text-white p-4  bg-[#6355d8]">Chat with Rikard&apos;s interview bot</button>
                  </div>

                  <div className="flex flex-col justify-center ">
                    <img src={"/images/briony.png"} alt="briony" />
                    <img alt="brionyavatar" src="/images/brionyslider.png" />
                    <button className=" text-white p-4  bg-[#6355d8]">Chat with Briony&apos;s interview bot</button>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <img className="" src={"/images/neil.png"} alt="neil" />
                    <img className="" alt="neilavatar" src="/images/neilslider.png" />
                    <button className=" text-white p-4  bg-[#6355d8]">Chat with Neil&apos;s interview bot</button>
                  </div>
                </div>

              </Slider> */}
            </div>
          </div>
          <div className="mt-[40px]">
            <SimpleSlider />
          </div>
          <section id="blog">
            <div className="mt-20 mb-20">
              <div>
                <div className="mb-6 mt-6">
                  <p className=" text-[28px] lg:text-5xl text-center font-medium mb-[10px]">
                    Article Below
                  </p>
                  <p className="text-2xl text-center font-normal mb-[12px] leading-8">
                    Learn how your Interview Bot uses AI to act as you in the
                    interview process
                  </p>
                </div>
                <div className="flex flex-wrap justify-center items-center xl:flex xl:flex-row xl:flex-nowrap gap-3">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#6355D8] rounded-lg w-[300px] lg:w-[310px] xl:w-[310px] 2xl:w-[380px] h-[277px]"></div>
                    <p className="text-[28px] mb-[12px] font-medium leading-8 text-center ">
                      Best Marketing Social Media
                    </p>
                    <p className="text-[20px] font-normal mb-[12px] leading-7 text-center ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent rhoncus lectus nisi,{" "}
                    </p>
                    <p className="text-[20px] font-light text-center leading-6">
                      August 19,2023
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#6355D8] rounded-lg w-[300px] lg:w-[310px] xl:w-[310px] 2xl:w-[380px] h-[277px]"></div>
                    <p className="text-[28px] mb-[12px] text-center font-medium leading-8">
                      Best Marketing Social Media
                    </p>
                    <p className="text-[20px] text-center font-normal mb-[12px] leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent rhoncus lectus nisi,{" "}
                    </p>
                    <p className="text-[20px] text-center font-light leading-6">
                      August 19,2023
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#6355D8] rounded-lg w-[300px] lg:w-[310px] xl:w-[310px] 2xl:w-[380px] h-[277px]"></div>
                    <p className="text-[28px] mb-[12px] text-center font-medium leading-8">
                      Best Marketing Social Media
                    </p>
                    <p className="text-[20px] text-center font-normal mb-[12px] leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent rhoncus lectus nisi,{" "}
                    </p>
                    <p className="text-[20px] text-center font-light leading-6">
                      August 19,2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <></>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
