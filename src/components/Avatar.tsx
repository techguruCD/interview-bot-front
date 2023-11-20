import { useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";

export default function App() {
  const [image, setImage] = useState("");

  var loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center">
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={loadFile}
          style={{ display: "none" }}
        />

        <img
          src={image ? image : "/images/placeholder.jpg"}
          className="rounded-full h-[80px] w-[80px]"
          id="output"
          alt="test"
        />
      </div>
      <div className="relative flex justify-end">
        <label htmlFor="file" style={{ cursor: "pointer" }}>
          <div className="absolute bottom-0 right-0">
            <MdOutlinePhotoCamera size="30" />
          </div>
        </label>
      </div>
    </div>
  );
}
