import { GetProfileFormData } from "@/backend/User";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsFillChatLeftTextFill, BsFillSendFill } from "react-icons/bs";
import { FaMicrophone, FaReceipt, FaShare } from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import { useRouter } from "next/router";
import { IoSettingsOutline } from "react-icons/io5";
import Header from "@/components/Header";

const UserProfile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<string, any>>();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {

  //   setLoading(true)
  //   fetchFormData()
  //   setLoading(false)

  // }, []);
  // let access_token = Cookies.get("token");
  // console.log(access_token);

  // console.log(formData, "formData");
  // try {
  //   const data = await GetProfileFormData();
  //   setFormData(data?.data);
  //   console.log(data, "data");

  // } catch (error: any) {
  //     // message gets narrowed to string!
  //     toast.error(
  //       error.response?.data?.message
  //         ? error?.response?.data?.message
  //         : "unexpected error"
  //     );
  //     console.log(error);
  // }
  return (
    <>
      <div className="mx-[20px] -[2px] mt-6 md:mx=[40px] lg:mx-32">
        <div className="mt-4 lg:mt-[12px] pb-2">
          <div className="h-full w-full">
            <div className="">
              <div className=" gap-2">
                <div className="flex justify-between">
                  <div className="flex mr-6 flex-row">
                    <Image
                      onClick={() => router.push("/")}
                      src={logo}
                      height={40}
                      width={50}
                      alt="logo"
                      className="cursor-pointer"
                    />
                    <p className="ml-[16px] flex items-center capitalize font-bold">
                      interview bot
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="flex justify-center bg-white border-[2px] border-blue-200 text-blue-400 rounded-md p-2 gap-2">
                      <div className="p-1">
                        <BsFillChatLeftTextFill />
                      </div>
                      <Link
                        href={"/configure-bot"}
                        className=" whitespace-nowrap"
                      >
                        Chat with interview bot
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="flex md:block mb-4 md:mb-0 ">
                  <div className="mr-2">
                    <p className="text-sm">{formData?.name}</p>
                    <p className="text-sm">{formData?.headline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div
              className="p-2
            flex flex-col rounded-md cursor-pointer w-[15%]"
            >
              <div className="rounded-full  border-neutral-200 ">
                <img
                  src={formData ? formData?.photo : "/images/placeholder.jpg"}
                  className="rounded-full h-[80px] w-[80px]"
                  id="output"
                  alt="test"
                />
              </div>
            </div>
            <div className="flex  font-semibold">
              <p className="whitespace-nowrap mr-3">About Me</p>
              <p className="font-thin flex justify-center items-center">
                {formData?.about}
              </p>
            </div>
          </div>
          <div className="border-[1px] rounded border-gray-500 mt-10 h-[90vh] w-80%">
            <div className="py-6">
              <div className="">
                <div className="flex flex-col md:flex md:flex-row border-b-[1px] px-4 border-gray-400 pb-4 justify-between">
                  <div>
                    <p className="p-2 text-center font-semibold">
                      Chat to my interview bot
                    </p>
                  </div>
                </div>
                <div className=" p-6 flex gap-2">
                  <img
                    src="/images/mobilelogo.png"
                    alt="logo"
                    className="h-[25px] w-[25px] mt-3"
                  />
                  <p className="border-[1px] border-gray-400 p-4">
                    Hi i am diana&apos;s interview bot, ask me anything about
                    diana&apos;s work experience
                  </p>
                </div>
                <div className="mt-8 md:mt-16"></div>
                <div className="flex justify-center">
                  <div className=" w-[70%] md:w-[60%] ">
                    <div className=" p-4">
                      <div className="border-[1px] p-2 md:p-4 gap-2 md:gap-0 rounded-md border-gray-400 flex justify-between">
                        <p className="whitespace-nowrap ">Send your message</p>
                        <div className="flex p-1 gap-1">
                          <FaMicrophone />
                          <BsFillSendFill />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="font-light text-sm">
                        Interview may produce inaccurate information about
                        people,professions or facts.{" "}
                        <Link className="text-blue-400 underline" href={"/"}>
                          Privacy Note
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
