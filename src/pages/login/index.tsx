import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import toast from "react-hot-toast";
import { Login } from "@/backend/User";
import Loading from "@/components/Loader";
import Cookies from "js-cookie";
import { useGlobalDispatch } from "@/components/State";
import SocialLogins from "@/components/SocialLogin";
import { ApiResponse, setAuthToken } from "@/backend/RestApi";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { setNavigator } from "../../store/reducers/ui";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useGlobalDispatch();

  const handleLoginResponse = (response: ApiResponse) => {
    if (response.status === true) {
      if (response?.data?.token) {
        Cookies.set("token", response.data.token);
        setAuthToken(response.data.token);
        dispatch({
          type: "LOGIN_CURRENT_USER",
          payload: response.data.token,
        });

        if (response?.message) {
          toast.success(response.message);
        }

        router.push("/profile");
      } else {
        toast.error("Unexpected error occurred");
      }
    } else {
      toast.error(response?.message ?? "Unexpected error occurred");
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);

    const response = await Login(email, password);

    handleLoginResponse(response);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className=" bg-[#F5F5F5] pt-[64px] pb-[64px]">
        <div className="mx-[20px] md:mx=[40px] lg:mx-[80px] bg-[#F5F5F5] ">
          <div className="flex justify-center">
            <div className="flex justify-center align-middle w-[100%] md:w-[65%] lg:w-[60%] xl:w-[50%] rounded border-[2px] border-[#f542c5]">
              <div className="mt-10 mb-10 w-[80%]">
                <p className="mb-8 text-center">Sign in</p>

                <SocialLogins
                  handleLoginResponse={handleLoginResponse}
                  setLoading={setLoading}
                />

                <div className="mt-4">
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
                      type={showPassword ? "text" : "password"}
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
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
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
                      onClick={handleLogin}
                      className={`bg-[#6355D8] w-full text-white py-2 px-4 rounded-full hover:bg-[#6355D8] transition duration-300 ease-in-out ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={loading}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-[#6355D8] hover:underline"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
