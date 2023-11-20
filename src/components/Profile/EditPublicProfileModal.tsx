
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { regexChecker, urlValidity } from '../Helper';
import Cookies from "js-cookie";
import Image from "next/image";
import { UpdateProfileModal } from "@/backend/User";

// Modal Type
type EditPublicProfileModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  formData: Record<string, any> | undefined;
};

//form-type
type payLoadType = {
  image: string;
  full_name: string;
  linkedin: string | null;
  website: string | null;
  headline: string;
  about: string;
  avatar: string;
}

const EditPublicProfileModal = ({
  setShowModal,
  formData,
}: EditPublicProfileModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  //myform-data
  const [profileImage, setProfileImage] = useState<string>(formData?.photo ?? "");
  const [userName, setUserName] = useState<string>(formData?.name ?? "");
  const [linkedinUrl, setLinkedinUrl] = useState<string>(formData?.linkedin ?? "");
  const [websiteUrl, setWebsiteUrl] = useState<string>(formData?.website ?? "");
  const [professionTitle, setProfessionTitle] = useState<string>(formData?.headline ?? "");
  const [notes, setNotes] = useState<string>(formData?.about ?? "");


  // Handle Image 
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        return toast.error("Error: Only JPEG and PNG files are allowed");
      }

      const maxSize = 500 * 1024; // 500KB in bytes

      if (file.size > maxSize) {
        return toast.error("Error: The image size exceeds the 500KB limit");
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setProfileImage(base64String);

      };

      reader.readAsDataURL(file);
    }
  };



  let access_token = Cookies.get("token")

  // Handle Submit 
  const handleSubmit = async () => {

    if (userName.trim() == "") {
      toast.error("Username is required");
    }
    else if (!regexChecker(userName, "special")) {
      toast.error("Invalid username: Avoid using special characters");
    }
    else if (professionTitle.trim() == "") {
      toast.error("Headline is required")
    }
    else if (!regexChecker(professionTitle, "special")) {
      toast.error("Invalid headline")
    }
    else if (linkedinUrl.trim() == "") {
      toast.error("linkedin url is required")
    }
    else if (websiteUrl.trim() == "") {
      toast.error("website url is required")
    } else {

      const payLoad: payLoadType = {
        image: profileImage,
        full_name: userName,
        headline: professionTitle,
        linkedin: urlValidity(linkedinUrl),
        website: urlValidity(websiteUrl),
        about: notes,
        avatar: "abc"
      }

      const response = await UpdateProfileModal(payLoad);
      if (response?.status === false) {
        toast.error(response.message || "Error: Please Try Again")
      }
      else {
        toast.success("Successfully submitted")
      }
      setShowModal(false)
      console.log(response, "response");


      console.log("payLoad", payLoad);


    }
  };

  // console.log(profileImage)
  return (
    <>
      <div className="absolute w-[100%] modal shadow-sm shadow-gray-400 left-0">
        <div className="mt-4 md:mt-12 lg:mt-[12px] pb-2 flex justify-center">
          <div className="border-[1px] bg-[#F5F5F5] z-10 border-gray-400 rounded-md w-[100%] md:w-[90%] lg:w-[60%] xl:w-[45%] ">

            <div className="flex border-[0.5px]  border-gray-200 justify-between p-4">
              <h1 className="text-lg font-semibold">Edit public profile</h1>
              <RxCross1
                className="cursor-pointer"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>
            <div className="">
              <h2 className="text-md font-semibold text-center my-2">Add a summary of your career experience and interests </h2>
            </div>

            <div className="ml-2 lg:ml-5">
              <div className="p-4 flex-col md:flex md:flex-row mb-8">

                <div>
                  <p className="mb-2">Profile picture</p>
                  <img
                    src={
                      profileImage !== ""
                        ?
                        profileImage
                        :
                        "/images/placeholder.jpg"
                    }
                    className="rounded-md h-[160px] w-[160px] image"
                    id="image"
                    alt="test"
                  />
                </div>

                <div>
                  <p className="font-medium ml-3 mt-4 md:mt-10">
                    Upload your photo
                  </p>
                  <p className="font-thin text-sm mt-1 ml-3 mb-2">
                    Your photos should be in png or jpg format
                  </p>
                  <div className="flex ml-3 mt-2 lg:mt-1">
                    <label
                      className="bg-white border-[2px]  border-[#6355D8] text-[#6355D8] rounded-md p-2"
                      htmlFor="modal_file"
                      style={{ cursor: "pointer" }}
                    >
                      Choose Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      title="Choose Image"
                      id="modal_file"
                      className="bg-white border-[2px] hidden border-blue-200 text-blue-400 rounded-md p-2"
                      onChange={handleImageChange}
                    />
                    <button className="ml-2">Remove</button>
                  </div>
                </div>

              </div>
              <div className="w-[90%] ml-3 mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={userName}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="profession"
                    className="block text-gray-700 font-medium"
                  >
                    Headline
                  </label>
                  <input
                    onChange={(e) => { setProfessionTitle(e.target.value) }}
                    value={professionTitle}
                    type="text"
                    id="profession"
                    name="profession"
                    className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="job title and/or career objectives"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="linkedin"
                    className="block text-gray-700 font-medium"
                  >
                    Linkedin Profile
                  </label>
                  <input
                    onChange={(e) => { setLinkedinUrl(e.target.value) }}
                    value={linkedinUrl}
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="linkedin/your-profile"
                    required
                  />
                </div>
                <div className="mb-6 relative">
                  <label
                    htmlFor="website"
                    className="block text-gray-700 font-medium"
                  >
                    Website
                  </label>
                  <input
                    onChange={(e) => { setWebsiteUrl(e.target.value) }}
                    value={websiteUrl}
                    type="url"
                    id="website"
                    name="website"
                    className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="www.etc.com"
                    required
                  />
                </div>
                <div className="textarea-container">
                  <label htmlFor="notes">About</label>
                  <textarea
                    name="notes"
                    onChange={(e) => { setNotes(e.target.value) }}
                    value={notes}
                    id="responsive-textarea notes"
                    placeholder="Type something..."
                  ></textarea>
                </div>
                <div className="flex justify-end mb-6">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className=""
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-[#6355D8] text-white p-2 rounded-md "
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>  */}
    </>
  );
};

export default EditPublicProfileModal;
