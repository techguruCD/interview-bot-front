import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

type FileUploadProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setFileUpload: React.Dispatch<React.SetStateAction<File | undefined>>;
};
const FileUpload = ({
  setCurrentPage,
  setFileUpload
}: FileUploadProps) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileUploading, setFileUploading] = useState<boolean>(false);
  const [progressUpdater, setProgressUpdater] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter()

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return;
      }

      var file = acceptedFiles[0];

      // Check if the uploaded file is a PDF
      if (file.type !== "application/pdf" && file.type !== "application/msword") {
        toast.error("Please upload a valid PDF or DOC file.");
        return;
      }

      setFileName(file.name);
      setFileUploading(true);
      // Upload file logic here (you can use fetch or an API)
      // Display upload progress using setUploadProgress

      let currentProgress = 0;
      const interval = 500; // Update progress every second

      const updater = setInterval(() => {
        currentProgress += 10; // Increment progress by 10%
        setUploadProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(updater);
          setTimeout(() => {
            setUploadProgress(null);
            setUploadMessage(`File "${file.name}" uploaded successfully.`);
            setFileUpload(file);
            setFileUploading(false); // Set to false when the upload is complete
          }, 500); // Simulate some additional processing time
        }
      }, interval);
      setProgressUpdater(updater);
    },
    [setFileUpload]
  );

  const handleCrossClick = () => {
    if (fileUploading && progressUpdater) {
      clearInterval(progressUpdater);
      setProgressUpdater(null); // Clear the progress updater from state
    }
    setUploadMessage("Upload canceled.");
    setUploadProgress(null);
    setFileName(null);
    setFileUploading(false);
  };

  const handleCancelClick = () => {
    router.push("/profile")
  }

  const handleNext = () => {
    if (fileName === null) {
      toast.error("Please upload a file.");
    } else if (uploadProgress === null) {
      toast.success("File uploaded.");
      setCurrentPage(2); // Navigate to the next page when the file is fully uploaded
    } else {
      toast.error("Please wait for the file to upload.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div {...getRootProps()} className="dropzone bg-[#f5f5f5] flex w-full m-4 md:w-[70%] lg:w-[70%] 2xl:w-[50%] h-auto md:h-[50vh] 2xl:h-[40vh] border-[2px] border-dotted rounded-md border-gray-400 mt-4 mb-4  justify-center items-center">
            <input {...getInputProps()} />
            {uploadMessage ? (

              <p className="p-4">{uploadMessage}</p>
            ) : (
              <div className="flex-col ">
                <div>
                  <div className="flex justify-center items-center">
                    <AiOutlineCloudUpload size={50} className="mt-4 mb-4" />
                  </div>
                  <p className="text-xl font-semibold text-center">Drop files here</p>
                  <p className="text-lg text-gray-500 font-light text-center">
                    Supported format: PDF, .doc
                  </p>
                </div>
                <p className="text-gray-500 font-bold mb-4 text-center">OR</p>
                <p className="text-center text-lg font-semibold text-[#6355D8] mb-4 cursor-pointer hover:underline hover:text-[#6355D8] hover:border-[#6355D8]">
                  Browse files
                </p>
              </div>
            )}
          </div>
        </div>
        {/* {uploadProgress !== null && ( */}
        <>
          <div className="flex justify-center items-center m-4">
            <BsFiletypePdf size={40} className="gap-2" />
            <div className="ml-2 w-full">
              <p className="font-semibold w-[20%]">{fileName}</p>
              <div className="flex gap-2">
                <div className="h-1 w-full flex justify-center items-center bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-[2px] bg-[#6355D8]"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {" "}
                    {uploadProgress}%
                  </div>
                </div>
                {/* {uploadProgress !== null && ( */}
                <button
                  onClick={handleCrossClick}
                  className="cancel-button h-[16px] mt-[-5px] w-[16px]"
                >
                  <RxCross2 />
                </button>
                {/* )} */}
              </div>
            </div>
          </div>
        </>
        {/* )} */}
        <div className="mt-10 flex justify-end mr-6 p-4">
          <button onClick={handleCancelClick} className=" p-1 rounded-md"> Cancel</button>
          <button
            className="bg-[#6355D8] ml-4 text-white p-1 w-[80px] h-[40px] rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
