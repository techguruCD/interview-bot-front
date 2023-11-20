import Avatar from "./Avatar";
import { RxCross1 } from "react-icons/rx";
import { FiHelpCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { setAuthToken } from "@/backend/RestApi";
import { useGlobalState } from "./State";
import { GetProfileFormData } from "@/backend/User";

const ChatBot = () => {
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
        "what i need to do to get flex to work andndcndjncnk vfjnvfn njffvn fjnvfnvf fnfvnfnv bggg gh hnhnhn  yhj hnhnhnhnhnm jm j",
      answer:
        "JSON is a data format. It could be classified as a language, but not a programming language. Its relationship to JavaScript is that it shares its syntax (more or less) with a subset of JavaScript literals.",
    },
    {
      question: "What features have been introduced in the ES6 version?",
      answer:
        "The fundamental difference, which no other answer seems to have mentioned, is that XML is a markup language (as it actually says in its name), whereas JSON is a way of representing objects (as also noted in its name). This is what makes markup languages so useful for representing documents.",
    },
    {
      question: "What is the main difference between var, const, and let?",
      answer:
        " JSON is like XML in that it is used to structure data in a text format and is commonly used to exchange data over the Internet. JSON is not a markup language. JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.",
    },
    {
      question: "What are promises and async-await?",
      answer:
        "A JSON text is a sequence of tokens formed from Unicode code points that conforms to the JSON value grammar. The set of tokens includes six structural tokens, strings, numbers, and three literal name tokens.",
    },
    {
      question: "Why is JavaScript single-threaded?",
      answer:
        "JSON syntax is derived from JavaScript object notation syntax. Data is in name/value pairs. Data is separated by commas. Curly braces hold objects. Square brackets hold arrays.",
    },
  ];

  return (
    <>
      <div className="border-[1px] rounded border-gray-500 mt-10">
        <div className="py-6">
          <div className="">
            <div className=" border-b-[1px] px-4 border-gray-400 ">
              <div className="flex justify-between">
                <div className="flex gap-2 mb-4">
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
                  <div className="">
                    <p className="text-lg font-bold">Interview Bot</p>
                    <p className="text-lg">{formData?.name}</p>
                  </div>
                </div>
                <div className="p-2">
                  <RxCross1 />
                </div>
              </div>
            </div>
            <div className="m-2 lg:p-8 md:mt-16">
              <div className=" flex justify-center text-lg font-bold gap-2">
                {formData?.about}
                <FiHelpCircle className="mt-1" />
              </div>
              <div className="w-[85%] md:w-[95%] rounded-md p-4 mb-6 bg-[#efedfb] flex justify-start">
                <p className="  text-left ">Hi i am {formData?.name}&apos;s interview bot, ask me anything about {formData?.name}&apos;s work experience</p>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default ChatBot;
