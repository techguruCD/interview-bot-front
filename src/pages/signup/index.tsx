import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { Register } from "@/backend/User";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Link from "next/link";
import Footer from "@/components/Footer";
import Icon from "react-icons-kit";
import Loading from "@/components/Loader";
import { useGlobalDispatch } from "@/components/State"
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import SocialLogins from "@/components/SocialLogin";
import { ApiResponse, setAuthToken } from "@/backend/RestApi";


export default function Home() {

  const router = useRouter();

  const dispatch = useGlobalDispatch();


  const [username, setusername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginResponse = (response: ApiResponse) => {

    if (response.status === true) {

      if (response?.data?.token) {

        Cookies.set('token', response.data.token);
        setAuthToken(response.data.token);
        dispatch({
          type: 'LOGIN_CURRENT_USER', payload: response.data.token
        });

        if (response?.message) {
          toast.success(response?.message);
        }

        router.push('/profile');
      } else {
        toast.error('Unexpected error occured');
      }


    } else {
      toast.error(response?.message ?? 'Unexpected error occured');
    }
    setLoading(false);
  }


  const handleSignUp = async () => {

    setLoading(true);
    const response = await Register(username, email, password);
    handleLoginResponse(response)


  };

  if (loading)
    return <Loading />

  return (
    <>
      <Header />
      <div className=" bg-[#F5F5F5] pt-[64px] pb-[64px]">
        <div className="mx-[20px] md:mx=[40px] lg:mx-[80px] bg-[#F5F5F5] ">
          <div className="flex justify-center">
            <div className="flex justify-center align-middle w-[100%] md:w-[65%] lg:w-[60%] xl:w-[50%] rounded border-[2px] border-[#f542c5]">
              <div className="mt-10 mb-10 w-[80%]">
                <p className="mb-8 text-center">Create an account</p>

                <SocialLogins
                  handleLoginResponse={handleLoginResponse}
                  setLoading={setLoading}
                />

                <div className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={username}
                      className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 font-medium"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Password"
                      required
                    />
                    <button
                      className="flex justify-around items-center"
                      onClick={() => { setShowPassword(!showPassword) }}
                    >
                      <Icon
                        className="absolute bottom-[10%] right-[4%]"
                        icon={showPassword ? eye : eyeOff}
                        size={25}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleSignUp}
                      className={`bg-[#6355D8] w-full text-white py-2 px-4 rounded-full hover:bg-[#6355D8] transition duration-300 ease-in-out ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={loading}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Been here before?{" "}

                    <Link
                      href="/login"
                      className="text-[#6355D8] hover:underline"
                    >

                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
