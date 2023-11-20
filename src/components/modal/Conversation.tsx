import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useSnackbar } from "notistack";
import axios from "axios";
import CloseSvg from "../svgs/Close";
import IConversation from "../../types/IConversation";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAvatar } from "../../store/reducers/ui";
import { uiAvatarSelector } from "../../store/selectors/ui";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: IConversation) => void;
  data: IConversation;
};

const ConversationModal = ({
  isOpen,
  onClose: handleClose,
  onSave: handleSave,
  data,
}: ModalProps) => {
  const dispatch = useAppDispatch();
  const [prompt, setPrompt] = useState(data?.prompt);
  const [greeting, setGreeting] = useState(data?.greeting);
  const [imageUrl, setImageUrl] = useState(useAppSelector(uiAvatarSelector));

  useEffect(() => {
    setPrompt(data?.prompt);
    setGreeting(data?.greeting);
  }, [data]);

  const handleSubmit = () => {
    dispatch(setAvatar(imageUrl));
    handleSave({
      prompt,
      greeting,
    });
    handleClose();
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

        <div className="relative h-[80%] w-full max-w-2xl rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="h-[15%] flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Configure Bot
            </h3>
            <button
              type="button"
              className="bg-transparent ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <CloseSvg width={24} height={24} />
            </button>
          </div>
          <div className="scrollbar overflow-y-auto h-[70%] space-y-6 p-6">
            <div className="mb-6">
              <label
                htmlFor="prompt"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Prompt
              </label>
              <textarea
                id="prompt"
                rows={12}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-6">
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
            </div>
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

export default ConversationModal;
