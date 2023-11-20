import React, { useState } from "react";
import Linkedin from "../../components/svgs/Linkedin";
import Website from "../../components/svgs/Website";
import ProfielLink from "../../components/ProfileLink";
import Pencil from "../../components/svgs/Pencil";
import Arrow from "../../components/svgs/Arrow";
import ProfileModal from "../../components/modal/Profile";
import IProfile from "../../types/IProfile";
import { RootState, useAppDispatch, useAppSelector } from "../../store";

import { setLoading } from "../../store/reducers/ui";
import { uiAvatarSelector } from "../../store/selectors/ui";
import { useSelector } from "react-redux";
import {
  setDescription,
  setLinkedin,
  setTitle,
  setUsername,
  setWebsite,
} from "../../store/reducers/profile";
import { useGlobalDispatch, useGlobalState } from "@/components/State";

const Admin = () => {
  // const dispatch = useAppDispatch();
  const dispatch = useGlobalDispatch();
  const { username, title, description, website, linkedin } = useSelector(
    (state: RootState) => state.profile
  );
  const avatar = useAppSelector(uiAvatarSelector);
  const [document, setDocument] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileModalData, setProfileModalData] = useState({
    username: "",
    title: "",
    description: "",
    website: "",
    linkedin: "",
  });
  const { loading } = useGlobalState();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target.files) {
      dispatch({
        type: "STATUS_LOADING",
        payload: !loading,
      });
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("file", e.target.files[i]);
      }
      try {
        // Replace with your server's URL
        const result = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        const data = await result.json();
        setDocument(data.filenames);

        await fetch("http://localhost:5000/clear_indexes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pinecone_api_key: "b84a158f-4401-409b-a63b-636aebbd29b1",
            pinecone_environment: "us-west1-gcp-free",
            pinecone_index_name: "internal-knowledgebase",
          }),
        });

        const response = await fetch("http://localhost:5000/create_indexes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file_names: data.filenames,
            pinecone_api_key: "b84a158f-4401-409b-a63b-636aebbd29b1",
            pinecone_environment: "us-west1-gcp-free",
            pinecone_index_name: "internal-knowledgebase",
            openai_api_key:
              "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",
          }),
        });
      } catch (error) {
        console.error(error);
      }
      dispatch({
        type: "STATUS_LOADING",
        payload: !loading,
      });
    }
  };

  const handleProfileChange = () => {
    setProfileModalData({
      username,
      title,
      description,
      website,
      linkedin,
    });
    setIsProfileOpen(true);
  };

  const handleProfileSave = (data: IProfile) => {
    // dispatch(setUsername(data.username));
    // dispatch(setTitle(data.title));
    // dispatch(setDescription(data.description));
    // dispatch(setWebsite(data.website));
    // dispatch(setLinkedin(data.linkedin));
  };

  const closeProfileModal = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="max-w-[1200px] px-[20px] mx-auto w-full mt-[25px]">
      <div className="flex flex-col gap-[20px] lg:flex-row items-center justify-between">
        <div className="flex items-center gap-1">
          <ProfielLink />
          <button className="text-[#6355D8] bg-[#6355D810] py-[7px] px-2 rounded-md text-[14px] hover:bg-[#6355D8] hover:text-white transition-all">
            Share
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-600">
              Don&apos;t forget to publish your latest updates
            </span>
          </div>
          <button className="border-transparent uppercase border-[1px] bg-[#6355D8] text-white py-2 px-7 rounded-md text-[14px] hover:bg-white hover:border-[#6355D8] hover:text-[#6355D8] transition-all flex gap-2 items-center">
            <span>Publish</span>
            <Arrow width={16} />
          </button>
        </div>
      </div>

      <div className="mt-[10px] flex flex-col p-5 border-[1px] rounded-md border-gray-200 gap-3">
        <div className="flex flex-col sm:flex-row justify-between w-full items-start gap-3">
          <div className="flex flex-row gap-6 items-center">
            <img
              src={avatar || "/images/avatar.png"}
              className="w-[110px] h-[115px] rounded-full object-cover"
              alt="avatar"
            />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[22px] font-[700] text-[#6355D8]">
                {username}
              </span>
              <span className="text-[17px] text-gray-500 font-[500]">
                {title}
              </span>
              <div className="flex flex-row gap-2 mt-[5px]">
                <a
                  href={linkedin}
                  target="_blank"
                  className="cursor-pointer text-gray-700 hover:text-gray-950 transition-all"
                  rel="noreferrer"
                >
                  <Linkedin width={18} />
                </a>
                <a
                  href={website}
                  target="_blank"
                  className="cursor-pointer text-gray-700 hover:text-gray-950 transition-all my-auto"
                  rel="noreferrer"
                >
                  <Website width={14} />
                </a>
              </div>
            </div>
          </div>

          <button
            className="text-[#6355D8] border-[#6355D8] bg-transparent border-[1px] rounded-md mr-10 px-8 py-[6px] hover:bg-[#6355D8] hover:text-white transition-all flex gap-3 items-center"
            onClick={handleProfileChange}
          >
            <Pencil width={16} />
            <span>Edit Public profile</span>
          </button>
        </div>

        <div className="mt-10 pb-[100px]">
          <span className="text-[20px] font-bold">About me</span>
          <p className="mt-2 text-gray-700 font-[500]">{description}</p>
        </div>
        <div className="mt-10 pb-[20px]">
          <label className="block">
            <input
              id="file_input"
              type="file"
              multiple
              accept=".docx,.pdf"
              onChange={handleUpload}
              className="text-slate-500 block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>
        </div>
      </div>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={closeProfileModal}
        data={profileModalData}
        onSave={handleProfileSave}
      />
    </div>
  );
};

export default Admin;
