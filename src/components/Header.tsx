"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="lg:shadow-[#333] border-b-[2.5px]">
        <div className="mx-[20px] md:mx=[40px] lg:mx-[80px]">
          <div className="mt-4 lg:mt-[12px] pb-2">
            <div className="flex justify-between">
              <div className="flex flex-row">
                <Image
                  onClick={() => router.push("/")}
                  src={logo}
                  height={40}
                  width={50}
                  alt="logo"
                  className="cursor-pointer"
                />
                <p className="ml-[16px] flex items-center capitalize font-bold">
                  interview bot
                </p>
              </div>
              <Link href={"/login"} className="text-[#6355D8] pt-[12px]">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
