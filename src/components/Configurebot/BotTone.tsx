import { useState } from "react";
import toast from "react-hot-toast";
type BotToneProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setBotTone: React.Dispatch<React.SetStateAction<string>>;
};
const BotTone = ({ setCurrentPage, setBotTone }: BotToneProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  // console.log(selectedOption, "seletedoption");



  const handleNext = () => {
    if (selectedOption === "") {
      toast.error("Please select a tone")
    }
    else {
      setBotTone(selectedOption)
      toast.success("Tone selected")

      setCurrentPage(3)
    }
  }
  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  }
  const toneData = [
    {
      title: "Formal",
      description:
        "Using proper grammar and a demeanor to convey seriousness and interest in step",
      name: "formal",
      value: "formal",
    },
    {
      title: "Casual",
      description:
        "Employing a relaxed and informal style with contractions and everyday language",
      name: "casual",
      value: "casual",
    },
    {
      title: "Friendly",
      description:
        "Creating an approachable and warm atmosphere and a sense of camaraderie",
      name: "friendly",
      value: "friendly",
    },
    {
      title: "Professional",
      description:
        "Maintaining a business-like and efficient communication style for official contexts",
      name: "professional",
      value: "professional",
    },
    {
      title: "Neutral",
      description:
        "Presenting information objectively, without personal biases or emotional influence",
      name: "neutral",
      value: "neutral",
    },
    {
      title: "Playful",
      description:
        "Using creativity and a sense of fun to engage in a lively and imaginative manner",
      name: "playful",
      value: "playful",
    },
  ];
  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-[80px]">
        <div className="mt-4 lg:mt-[12px] pb-2">
          <div className="flex justify-center items-center">
            <p className="font-semibold text-xl">
              What tone would you like the bot to take?
            </p>
          </div>
          <div className="  flex flex-wrap lg:justify-center lg:items-center gap-8 my-10">
            {toneData.map((item, i) => (
              <div
                key={i}
                className="flex gap-2 border-[2px] bg-[#F5F5F5] rounded-md p-4 h-[132px] border-purple-500 w-[100%] md:w-[45%] lg:w-[80%] xl:w-[40%]"
              >
                <div className="flex p-1 radio-item">
                  <label htmlFor="vanilla">
                    <input
                      type="radio"
                      name={item.name}
                      value={item.value}
                      checked={selectedOption === item.value}
                      onChange={handleRadioChange}
                    />
                  </label>
                </div>
                <div onClick={() => setSelectedOption(`${item.value}`)}>
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" md:mx=[40px] lg:mx-[40px] xl:mx-[80px] 2xl:mx-[140px] gap-8 my-4">
            <div className="flex gap-2 border-[2px] bg-[#F5F5F5] rounded-md p-4 border-purple-500 w-[100%] ">
              <div className="flex p-1 radio-item">
                <label htmlFor="vanilla">
                  <input
                    className="w-full"
                    type="radio"
                    id="playful"
                    name="playful"
                    value="playful"
                  />
                </label>
              </div>
              <div>
                <p className="font-bold text-lg">Add my own style</p>
                <textarea
                  className=" w-full"
                  rows={2}
                  cols={80}
                  // title="Describe the tone you like to use"
                  placeholder={"Describe the tone you like to use"}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 mb-4 flex justify-end">
            <button className=" p-1 rounded-md"> Cancel</button>
            <button
              className="bg-[#6355D8] ml-4 text-white p-1 w-[80px] rounded-md"
              onClick={handleNext}
            >
              {/* <Link className="" href={"/"}></Link> */}
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotTone;
