import { BsFacebook, BsYoutube } from "react-icons/bs";
import {
  AiOutlineCopyrightCircle,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-32">
        <div className="mx-0 lg:mx-[16px] mt-3 lg:mt-14">
          <div className="flex flex-wrap md:flex gap-16 mb-6">
            <div className="hidden lg:flex lg:flex-row ">
              <img
                onClick={() => router.push("/")}
                src={"/images/logo.png"}
                alt="logo"
                className="h-[50px] w-[50px] cursor-pointer"
              />
              <p className="ml-2 lg:ml-[16px] pt-[12px] font-bold capitalize">
                interview bot
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-between lg:flex justify-between w-[100%] xl:w-[70%]">
              <div>
                <p className="font-bold">Product</p>
                <p>Home</p>
                {/* <p>pricing</p> */}
              </div>
              <div>
                <p className="font-bold">Resources</p>
                <p>Blog</p>
              </div>
              <div>
                <p className="font-bold">Company</p>
                <Link href={"/about"}>About</Link>
                <div className="flex flex-col">
                  <Link href="/tos">Terms of Service</Link>
                  <Link href="/privacypolicy">Privacy Policy </Link>
                </div>
              </div>
              {/* <div className="mt-4 md:mt-0">
                <p>Subscribe to our newsletter</p>
                <p className="mb-2">
                  for product announcements and exclusive insights
                </p>
                <form className="form-inline">
                  <div className="form-group mb-2 relative">
                    <label className="sr-only">Email</label>
                    <div className="absolute top-4 left-2">
                      <AiOutlineMail />
                    </div>
                    <input
                      type="text"
                      readOnly
                      className="border-[2.5px] pl-7 font-light rounded p-2 form-control-plaintext"
                      id="staticEmail2"
                      defaultValue="input your email"
                    />
                    <button
                      type="submit"
                      className="ml-2 bg-blue-700 p-2 rounded text-white btn btn-primary mb-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="border-b border-gray-300"></div>
          <div className="flex flex-wrap justify-center md:justify-between my-2 lg:my-6">
            <div>

            </div>
            <div className="flex flex-column lg:flex lg:flex-row lg:justify-center lg:items-center">

              <p className="flex justify-center items-center">Copyright InterviewBot.com.au </p>
            </div>
            <div className="flex items-center mb-10 md:mb-0 gap-3 lg:gap-2">
              <AiOutlineTwitter size={28} />
              <BsFacebook size={23} />
              <AiFillLinkedin size={28} />
              <BsYoutube size={28} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
