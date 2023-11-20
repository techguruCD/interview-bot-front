import { BiSolidMagicWand } from "react-icons/bi";
import {
  BsFillSendFill,
  BsGlobe2,
} from "react-icons/bs";
import Avatar from "./Avatar";
import { FaMicrophone, FaShare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { useGlobalState } from "./State";
import { useEffect, useState } from "react";
import { setAuthToken } from "@/backend/RestApi";
import { GetProfileFormData } from "@/backend/User";

const OverallProfile = () => {
  const { userToken } = useGlobalState();
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<Record<string, any>>();

  useEffect(() => {

    setLoading(true)
    fetchFormData()
    setLoading(false)

  }, []);

  const fetchFormData = async () => {
    setAuthToken(userToken ?? '');
    const data = await GetProfileFormData();
    setFormData(data?.data);
    console.log("data", data);
  }

  const qaBot = [
    {
      question:
        "what i need to do to get flex to work andndcndjncnk vfjnvfn njffvn fjnvfnvf fnfvnfnv",
      answer:
        "JSON is a data format. It could be classified as a language, but not a programming language. Its relationship to JavaScript is that it shares its syntax (more or less) with a subset of JavaScript literals.",
    },
    {
      question: "What features have been introduced in the ES6 version?",
      answer:
        "The fundamental difference, which no other answer seems to have mentioned, is that XML is a markup language (as it actually says in its name), whereas JSON is a way of representing objects (as also noted in its name). This is what makes markup languages so useful for representing documents.",
    },
  ];
  return (
    <>
      <div className="mt-4 lg:mt-[12px] pb-2">
        <div className="flex flex-col md:flex md:flex-row justify-between">
          <div className="flex flex-row justify-center mb-3">
            <img
              src="/images/mobilelogo.png"
              alt="logo"
              className="h-[25px] w-[25px] mt-3"
            />
            <p className="ml-[16px] pt-[12px] font-bold">interview bot</p>
          </div>
          <button className="flex bg-white border-[2px] border-[#6355D8] text-[#6355D8] rounded-md p-2 gap-2">
            <BiSolidMagicWand size={30} />
            Create your interview bot
          </button>
        </div>
        <div className="my-6">
          <div className="border-[1px]  rounded border-gray-500 mt-10 ">
            <div className="p-2 lg:p-6 flex-col justify-between">
              <div className="flex-col-reverse justify-center md:flex md:flex-row md:justify-between">
                <div
                  className="flex justify-center
             md:flex md:justify-normal gap-2"
                >
                  <div
                    className="rounded-full  border-[1px] border-neutral-200 "
                  >
                    <img
                      src={formData ? formData?.photo : "/images/placeholder.jpg"}
                      className="rounded-full h-[80px] w-[80px]"
                      id="output"
                      alt="test"
                    />
                  </div>
                  <div className="flex md:block mb-6 md:mb-0 ">
                    <div className="mr-2">
                      <p className="text-lg font-bold text-[#6355D8]">
                        {formData?.name}
                      </p>
                      <p className="text-md font-medium">
                        {formData?.headline}
                      </p>
                    </div>
                    <div className="pt-1 gap-1 md:pt-0 flex">
                      <AiFillLinkedin />
                      <BsGlobe2 />
                    </div>
                  </div>
                </div>
                <div className=" h-[60%] flex justify-center">
                  <button className="flex bg-white border-[2px] border-blue-200 text-[#6355D8] rounded-md p-2 gap-2">
                    <FaShare className="mt-1" />
                    <button className="whitespace-nowrap">Share</button>
                  </button>
                </div>
              </div>
              <div className="mt-10 font-semibold">
                <p>About Me</p>
                <p className="font-thin">
                  {formData?.about}
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] rounded border-gray-500 mt-10">
            <div className="border-b-[1px] px-4 border-gray-400">
              <div className="p-4">
                <p>Chat to my interview bot</p>
              </div>
            </div>
            <div className=" m-2 lg:p-8 md:mt-16">
              <div className="w-[85%] md:w-[95%] rounded-md p-4 mb-6 bg-[#efedfb] flex justify-start">
                <p className="  text-left ">Hi i am {formData?.name}&apos;s interview bot, ask me anything about {formData?.name}&apos;s work experience</p>
              </div>
              <div className="myMark">
                {qaBot.map((item, i) => (
                  <div key={i} className="p-0 md:mt-16">
                    <div className="lg:flex lg:justify-end">
                      <div className="flex ">
                        <div

                          key={i}
                          className="bg-[#F5F5F5] rounded-md p-4 mb-6 relative w-[265px] md:w-auto"
                        >
                          <p className="text-right">{item.question}</p>
                        </div>
                      </div>
                    </div>
                    <div> </div>
                    <div className="">
                      <div className="flex ">
                        <div
                          key={i}
                          className="bg-[#efedfb] rounded-md p-4 mb-6 w-[265px] md:w-[95%] "
                        >
                          <p className="text-left">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mb-4">
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
                    <Link className="text-[#6355D8] underline" href={"/"}>
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
  );
};

export default OverallProfile;
