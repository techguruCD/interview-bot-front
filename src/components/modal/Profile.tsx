import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useSnackbar } from "notistack";
import axios from "axios";
import CloseSvg from "../svgs/Close";
import IProfile from "../../types/IProfile";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAvatar } from "../../store/reducers/ui";
import { uiAvatarSelector } from "../../store/selectors/ui";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: IProfile) => void;
  data: IProfile;
};

const ProfileModal = ({
  isOpen,
  onClose: handleClose,
  onSave: handleSave,
  data,
}: ModalProps) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState(data?.username);
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const [website, setWebsite] = useState(data?.website);
  const [linkedin, setLinkedin] = useState(data?.linkedin);
  // const [greeting, setGreeting] = useState(data?.greeting);
  const [imageUrl, setImageUrl] = useState(useAppSelector(uiAvatarSelector));

  useEffect(() => {
    setUsername(data?.username);
    setTitle(data?.title);
    setDescription(data?.description);
    setWebsite(data?.website);
    setLinkedin(data?.linkedin);
    // setGreeting(data?.greeting);
  }, [data]);

  const handleSubmit = () => {
    dispatch(setAvatar(imageUrl));
    handleSave({
      username,
      title,
      description,
      website,
      linkedin,
      // greeting,
    });
    handleClose();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImageUrl(url);
    }
  };

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-60"
          onClick={handleClose}
        ></div>

        <div className="relative h-[90%] w-full max-w-2xl rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="h-[10%] flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit User Profile
            </h3>
            <button
              type="button"
              className="bg-transparent ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <CloseSvg width={24} height={24} />
            </button>
          </div>
          <div className="scrollbar overflow-y-auto h-[75%] space-y-6 p-6">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  id="preview_img"
                  className="h-32 w-32 rounded-full object-cover"
                  src={imageUrl || "/images/avatar.png"}
                  alt="User Avatar"
                />
              </div>
              <label className="block">
                <input
                  id="file_input"
                  type="file"
                  onChange={handleUpload}
                  className="text-slate-500 block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Job Title"
                required
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Gaming is Awesome!"
                required
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Add a summary of your career, aspirations and interests"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="website"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Your website link here."
                required
                defaultValue={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="linkedin"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                LinkedIn Profile
              </label>
              <input
                type="text"
                id="linkedin"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Your LinkedIn profile link here."
                required
                defaultValue={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            {/* <div className="mb-6">
              <label
                htmlFor="greeting"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Greeting Sentence
              </label>
              <input
                type="text"
                id="greeting"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Your LinkedIn profile link here."
                required
                defaultValue={greeting}
                onChange={(e) => setGreeting(e.target.value)}
              />
            </div> */}
          </div>
          <div className="h-[15%] flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
            >
              OK
            </button>
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ProfileModal;
