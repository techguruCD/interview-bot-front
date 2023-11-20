import BotTone from "@/components/Configurebot/BotTone";
import FAQ from "@/components/Configurebot/FAQ";
import FileUpload from "@/components/Configurebot/FileUpload";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function ConfigurePageOne() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [configureBotData, setConfigureBotData] = useState<Record<string, any>>(
    {}
  );
  const [botTone, setBotTone] = useState<string>("");
  const [fileUpload, setFileUpload] = useState<File>();

  // const handleFileUpload = (file: File) => {
  //   // Handle the uploaded file here
  //   console.log("Uploaded file:", file);
  // };
  const updateConfigureBot = (key: string, payload: Record<string, any>) => {
    const oldData = { ...configureBotData };
    oldData[key] = payload;
    setConfigureBotData(oldData);
  };

  const pageRenderer = () => {
    if (currentPage === 1) {
      return (
        <>
          <FileUpload
            setCurrentPage={setCurrentPage}
            // onFileUpload={handleFileUpload}
            setFileUpload={setFileUpload}
          />
        </>
      );
    }
    if (currentPage === 2) {
      return (
        <>
          <BotTone setBotTone={setBotTone} setCurrentPage={setCurrentPage} />
        </>
      );
    }
    if (currentPage === 3) {
      return (
        <>
          <FAQ
            payload={configureBotData}
            fileData={fileUpload}
            botTone={botTone}
          />
        </>
      );
    }
  };
  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-48">
        <div className="mt-4 lg:mt-[12px] pb-2">
          <div className="border-[1px]  border-gray-400 rounded-md w-[100%]  ">
            <div className="flex border-[0.5px] border-gray-200 justify-between p-4">
              <h1 className="text-xl font-bold">Configure Interview Bot</h1>
              <RxCross1 />
            </div>
            <div className="flex justify-center">
              <div className="flex p-4 flex-wrap md:flex md:flex-row gap-3">
                <div className={"flex gap-2"}>
                  <p
                    id="numbers"
                    className={
                      currentPage === 1
                        ? "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300 bg-[#6355D8] text-white"
                        : "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300"
                    }
                  >
                    1
                  </p>
                  <div className="">
                    <p
                      className={
                        currentPage === 1 ? "text-[#6355D8]" : "text-black"
                      }
                    >
                      Upload your CV
                    </p>
                    <div
                      className={
                        currentPage === 1
                          ? "mt-2 w-full h-[1px] border-[1px] border-[#6355D8]"
                          : "mt-2"
                      }
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p
                    className={
                      currentPage === 2
                        ? "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300 bg-[#6355D8] text-white"
                        : "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300"
                    }
                  >
                    2
                  </p>
                  <div className="">
                    <p
                      className={
                        currentPage === 2 ? "text-[#6355D8]" : "text-black"
                      }
                    >
                      Give it personality
                    </p>
                    <div
                      className={
                        currentPage === 2
                          ? "mt-2 w-full h-[1px] border-[1px] border-[#6355D8]"
                          : "mt-2"
                      }
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p
                    className={
                      currentPage === 3
                        ? "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300 bg-[#6355D8] text-white"
                        : "rounded-full h-[25px] w-[25px] flex justify-center align-middle border-[1px] border-gray-300"
                    }
                  >
                    3
                  </p>
                  <div className="">
                    <p
                      className={
                        currentPage === 3 ? "text-[#6355D8]" : "text-black"
                      }
                    >
                      Answer FAQ&apos;s
                    </p>
                    <div
                      className={
                        currentPage === 3
                          ? "mt-2 w-full h-[1px] border-[1px] border-[#6355D8]"
                          : "mt-2"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {pageRenderer()}
          </div>
        </div>
      </div>
    </>
  );
}
