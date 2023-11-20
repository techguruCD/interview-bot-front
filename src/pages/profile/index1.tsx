import { GetBot, GetProfileFormData } from "@/backend/User";
import Footer from "@/components/Footer";
import { useGlobalState } from "@/components/State";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaMicrophone, FaReceipt, FaShare } from "react-icons/fa";
import {
  BsArrowUpRight,
  BsClipboardCheck,
  BsFillPatchExclamationFill,
  BsFillSendFill,
} from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import EditPublicProfileModal from "@/components/Profile/EditPublicProfileModal";
import { FiEdit2 } from "react-icons/fi";
import React from "react";
import Hamburger from "@/components/Landingpage/Hamburger";
import { copyTextToClipboard } from "@/components/Helper";
import { setAuthToken } from "@/backend/RestApi";

export default function Index() {
  const router = useRouter();
  const { userToken } = useGlobalState();

  useEffect(() => {
    if (!userToken) {
      router.push("/login");
    }
  }, [userToken, router]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleMicrophoneClick = () => {
    // Add code to handle the microphone button click, e.g., for voice input.
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      // Add code to send the message, e.g., post it to the server.
      console.log("Sending message:", message);
      setMessage(""); // Clear the input field
    }
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default "Enter" key behavior (e.g., line break)
      handleSend(); // Call the send action when "Enter" is pressed
    }
  };

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLoggedin(false);
    router.push("/login");
  };

  useEffect(() => {
    setLoading(true);
    fetchFormData();
    GetBot(userToken ?? "");
    setLoading(false);
  }, [showModal]);

  // console.log(formData, "formData");
  // const response = GetBot(userToken ?? "")
  // console.log(response);

  const fetchFormData = async () => {
    setAuthToken(userToken ?? "");
    const data = await GetProfileFormData();
    setFormData(data?.data);
    console.log("data", data);
  };
  console.log(userToken);

  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-[80px]">
        <div className="mt-4 lg:mt-[12px] pb-2">
          <div className="">
            <>
              {/* profile nav */}
              <div className="mt-4 lg:mt-[12px] pb-2">
                <div className="trap flex justify-between bg-[#f5f5f5]">
                  <Hamburger />
                  <div
                    onClick={handleClick}
                    className="p-2
            flex flex-col rounded-md cursor-pointer"
                  >
                    <div className="rounded-full  border-[1px] border-neutral-200 ">
                      <img
                        src={
                          formData ? formData?.photo : "/images/placeholder.jpg"
                        }
                        className="rounded-full h-[80px] w-[80px]"
                        id="output"
                        alt="test"
                      />
                    </div>
                    {isOpen && (
                      <div className="relative">
                        <div className=" z-10 top-[-15px] ">
                          <ul className="navbar-nav absolute   bg-[#f5f5f5] py-2 px-4 rounded-md ">
                            <li>
                              <button
                                onClick={logout}
                                className="flex justify-center align-middle text-blue-600 bg-white rounded-md p-2"
                              >
                                Signout
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=""></div>
              </div>
              {/* profileLinkInput */}
              <div className="flex flex-col md:flex md:flex-row justify-between">
                <div className="flex h-[60px] md:h-auto gap-6 md:gap-2 relative">
                  <div className="flex justify-between w-[240px] lg:w-[270px] align-middle">
                    <p className=" absolute text-xs md:text-sm top-3.5 md:top-3 p-2  font-light">
                      Profile link
                    </p>
                    <input
                      className="w-auto lg:w-[200px] ml-16 md:ml-20 text-[8px] md:text-[10px]"
                      defaultValue={"daina@example.com"}
                    />

                    <BsClipboardCheck
                      onClick={() => {
                        copyTextToClipboard;
                      }}
                      className="mt-[23px] ml-[-20px]"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center w-[84px] md:w-auto rounded-md text-[#6355D8] h-[34px] border-[1px] text-center border-gray-200 bg-gray-100 p-2 ml-2 md:ml-0 md:p-2">
                      <div className="flex md:flex text-center mr-[2px]">
                        <PiShareFatLight />
                      </div>
                      Share
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 p-2">
                  <div className="flex">
                    <div className="p-1 flex ">
                      <BsFillPatchExclamationFill color={"#6355D8"} />
                    </div>
                    <p className="flex ">
                      Don&apos;t forget to push your latest updates
                    </p>
                  </div>
                  <button className="flex justify-center rounded-md align-middle bg-[#6355D8] text-white p-2.5 w-[120px]">
                    Publish
                    <BsArrowUpRight className="mt-1 ml-[6px]" />
                  </button>
                </div>
              </div>
              <div className="border-[1px] relative rounded border-gray-500 mt-10 ">
                {formData ? (
                  <>
                    <div className="p-6 flex-col justify-between">
                      <div className="flex-col-reverse justify-center md:flex md:flex-row md:justify-between">
                        <div
                          className="flex justify-center
             md:flex md:justify-normal gap-2"
                        >
                          <div>
                            <Image
                              src={
                                formData
                                  ? formData?.photo
                                  : "/images/placeholder.jpg"
                              }
                              alt="User profile"
                              height={120}
                              width={120}
                            />
                          </div>
                          <div className="flex md:block mb-4 md:mb-0 ">
                            <div className="mr-2">
                              <p className="text-sm capitalize">
                                {formData?.name}
                              </p>
                              <p className="text-sm capitalize">
                                {formData?.headline}
                              </p>
                            </div>
                            <div className="pt-1 md:pt-0 flex">
                              <FaShare />
                              <FaReceipt />
                            </div>
                          </div>
                        </div>
                        <div className=" h-[60%] flex md:shadow-md mt-4 md:mt-0 justify-center">
                          {showModal && (
                            <EditPublicProfileModal
                              setShowModal={setShowModal}
                              formData={formData}
                            />
                          )}
                          <button
                            onClick={() => setShowModal(true)}
                            className="flex whitespace-nowrap bg-white border-[2px] border-[#6355D8] text-[#6355D8] rounded-md p-2 gap-2"
                          >
                            <FiEdit2 className="mt-1" />
                            Edit public profile
                          </button>
                        </div>
                      </div>
                      <div className="mt-10 font-semibold w-[80vw]">
                        <p>About Me</p>
                        <p className="font-thin break-words ">
                          {formData?.about}
                        </p>
                        <Link href={`/profile/test`}>
                          <button>Clikck</button>
                        </Link>
                      </div>
                    </div>
                    <div className="border-[1px] rounded border-gray-500 mt-10">
                      <div className="py-6">
                        <div className="">
                          <div className="flex flex-col md:flex md:flex-row border-b-[1px] px-4 border-gray-400 pb-4 justify-between">
                            <div>
                              <p className="p-2 text-center font-semibold">
                                Chat to my interview bot
                              </p>
                            </div>
                            <div className="flex justify-center">
                              <button className="flex justify-center bg-white border-[2px] border-[#6355D8] text-[#6355D8] rounded-md p-2 gap-2">
                                <div className="p-1">
                                  <IoSettingsOutline />
                                </div>
                                <Link
                                  href={"/configure-bot"}
                                  className=" whitespace-nowrap"
                                >
                                  Configure interview bot
                                </Link>
                              </button>
                            </div>
                          </div>
                          <div className=" p-6 flex gap-2">
                            <img
                              src="/images/mobilelogo.png"
                              alt="logo"
                              className="h-[25px] w-[25px] mt-3"
                            />
                            <p className="border-[1px] border-gray-400 p-4">
                              Hi i am {formData?.name}&apos;s interview bot, ask
                              me anything about {formData?.name}&apos;s work
                              experience
                            </p>
                          </div>
                          <div className="lg:flex lg:justify-end">
                            <div className="flex ">
                              <div className="bg-[#F5F5F5] rounded-md p-4 mb-6 relative w-[265px] md:w-auto">
                                <p className="text-right break-words">
                                  {message}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 md:mt-16"></div>
                          <div className="flex justify-center">
                            <div className=" w-[70%] md:w-[60%] ">
                              <div className=" p-4">
                                {/* <div className="border-[1px] p-2 md:p-4 gap-2 md:gap-0 rounded-md border-gray-400 flex justify-between">
                                  <p className="whitespace-nowrap ">Send your message</p>
                                  <div className="flex p-1 gap-1">
                                    <FaMicrophone />
                                    <BsFillSendFill />
                                  </div>
                                </div> */}
                                <div className="border-[1px] p-2 md:p-4 gap-2 md:gap-0 rounded-md border-gray-400 flex justify-between">
                                  <input
                                    type="text"
                                    className="w-full p-2 outline-none font-thin break-words"
                                    placeholder="Send your message"
                                    value={message}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                  />
                                  <div className="flex p-1 gap-1">
                                    <FaMicrophone
                                      onClick={handleMicrophoneClick}
                                      style={{ cursor: "pointer" }}
                                    />
                                    <BsFillSendFill
                                      onClick={handleSend}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <p className="font-light text-sm">
                                  Interview may produce inaccurate information
                                  about people,professions or facts.{" "}
                                  <Link
                                    className="text-[#6355D8] underline"
                                    href={"/"}
                                  >
                                    Privacy Note
                                  </Link>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-6 flex-col justify-between">
                    <div className="flex-col-reverse justify-center md:flex md:flex-row md:justify-between">
                      <div
                        className="flex justify-center
             md:flex md:justify-normal gap-2"
                      >
                        <p>Please fill in the form</p>
                      </div>
                      <div className=" h-[60%] flex md:shadow-md mt-4 md:mt-0 justify-center">
                        {showModal && (
                          <EditPublicProfileModal
                            setShowModal={setShowModal}
                            formData={formData}
                          />
                        )}
                        <button
                          onClick={() => setShowModal(true)}
                          className="flex whitespace-nowrap bg-white border-[2px] border-[#6355d8] text-[#6355d8] rounded-md p-2 gap-2"
                        >
                          <FiEdit2 className="mt-1" />
                          Edit public profile
                        </button>
                      </div>
                    </div>
                    <div className="mt-10 font-semibold">
                      <p>About Me</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
