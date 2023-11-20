import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import QuestionField from "./QuestionField";
import { GetProfileFormData, PostSetupBot } from "@/backend/User";
import { useGlobalState } from "../State";
import { setAuthToken } from "@/backend/RestApi";


type FAQProps = {
  payload: Record<string, any>;
  fileData: File | undefined;
  botTone: string;
};
const FAQ = ({ payload, fileData, botTone }: FAQProps) => {
  const [faqOne, setFAQOne] = useState<string>("");
  const [faqTwo, setFAQTwo] = useState<string>("");
  const [faqThree, setFAQThree] = useState<string>("");
  const [fields, setFields] = useState<{ question: string; answer: string }[]>([
    { question: "", answer: "" },
  ]);
  const [loading, setLoading] = useState<boolean>(false)
  const [isFieldsVisible, setIsFieldsVisible] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>();

  const router = useRouter();

  const addField = () => {
    setFields([...fields, { question: "", answer: "" }]);
  };
  const { userToken } = useGlobalState();
  const deleteField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };
  const handleChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  const handleAddFieldClick = () => {
    setIsFieldsVisible(true);
    addField();
  };

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
  const handleSubmit = async () => {
    if (faqOne === "") {
      toast.error("Please tell us about yourself");
    } else if (faqTwo === "") {
      toast.error("Share your strengths and weaknesses");
    } else if (faqThree === "") {
      toast.error("Describe a challenge you faced");
    } else {
      try {
        // Prepare the data to send to the API
        let botData = {
          name: formData?.name,
          style: "guui",
          about: faqOne,
          strength_weakness: faqTwo,
          challenges: faqThree,
          tone: botTone,
          cv: fileData,
        };
        const botFormData = new FormData();
        botFormData.append('name', formData?.name);
        botFormData.append('style', "dsd");
        botFormData.append('about', faqOne);
        botFormData.append('strength_weakness', faqTwo);
        botFormData.append('challenges', faqThree);
        botFormData.append('tone', botTone);
        if (fileData) {
          // Make sure 'botData.cv' is not undefined before appending it
          botFormData.append('cv', fileData);
        }
        console.log(botData, "BOTDATA");
        console.log(formData, "BOTDATA");
        setAuthToken(userToken ?? '');
        console.log(userToken, "userToken");

        // Call the PostSetupBot API
        const response = await PostSetupBot(botFormData);
        console.log(response);
        toast.success("FAQ answered");
        // After successful API call, you can navigate to the desired route
        router.push("/publicprofile");

      } catch (error) {
        console.error("Error submitting FAQ:", error);
        toast.error("An error occurred while submitting FAQ");
      }
    }
  };




  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-[80px]">
        <div className="mt-4 lg:mt-[12px] pb-2">
          <div>
            <p className="text-xl font-bold">
              Train your interview bot on specific questions
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-2 mb-2">
              Tell me about yourself
            </h2>
            <textarea
              rows={4} // Specify the number of rows for the textarea
              cols={50} // Specify the number of columns for the textarea
              value={faqOne} // Set the value of the textarea to the state variable
              onChange={(e) => setFAQOne(e.target.value)} // Handle changes to the textarea value
              placeholder="Enter your text here..."
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-2 mb-2">
              Tell me about your strengths and weaknesses
            </h2>
            <textarea
              rows={4} // Specify the number of rows for the textarea
              cols={50} // Specify the number of columns for the textarea
              value={faqTwo} // Set the value of the textarea to the state variable
              onChange={(e) => setFAQTwo(e.target.value)} // Handle changes to the textarea value
              placeholder="Enter your text here..."
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-2 mb-2">
              Can you describe a challenging situation that you have had to
              face?
            </h2>
            <textarea
              rows={4} // Specify the number of rows for the textarea
              cols={50} // Specify the number of columns for the textarea
              value={faqThree} // Set the value of the textarea to the state variable
              onChange={(e) => setFAQThree(e.target.value)} // Handle changes to the textarea value
              placeholder="Enter your text here..."
            />
          </div>
          <div className="flex flex-col">

            <button onClick={handleAddFieldClick}
              className="border-[1px] text-[#6355d8] h-[40px] p-2 rounded-md w-[70px] bg-[#f5f5f5]"
            >
              + Add
            </button>
            {isFieldsVisible && fields.map((field, index) => (
              <QuestionField
                key={index}
                question={field.question}
                answer={field.answer}
                onDelete={() => deleteField(index)}
                onChangeQuestion={(value) => handleChange(index, "question", value)}
                onChangeAnswer={(value) => handleChange(index, "answer", value)}
              />
            ))}


          </div>
          <div className="mt-10 mb-4 flex justify-end">
            <button className=" p-1 rounded-md"> Cancel</button>
            <button
              onClick={handleSubmit}
              className="bg-[#6355D8] ml-4 text-white p-1 w-[80px] rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
