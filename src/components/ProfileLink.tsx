import React from "react";
import CopyIcon from "./svgs/Copy";
import Check from "./svgs/Check";
import copy from "clipboard-copy";
import { useSnackbar } from "notistack";

const ProfielLink = () => {
  const { enqueueSnackbar } = useSnackbar();
  const url = "https://www.linkedin.com/in/neiljaitken/";
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    copy(url);
    setCopied(true);

    enqueueSnackbar(`Copied!`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  return (
    <div
      className="flex gap-4 border-[1px] border-gray-400 text-[14px] py-[6px] px-[10px] rounded-[4px] items-center cursor-pointer"
      onClick={() => handleCopy()}
    >
      <span className="font-bold text-gray-500 w-fit flex-1 whitespace-nowrap">
        Profile link
      </span>
      <span className="text-gray-300 text-ellipsis whitespace-nowrap max-w-[140px] sm:w-fit overflow-hidden">
        {url}
      </span>

      {copied ? (
        <div className="text-green-400">
          <Check width={20} />
        </div>
      ) : (
        <CopyIcon width={20} />
      )}
    </div>
  );
};

export default ProfielLink;
