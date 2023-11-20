import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Hamburger = () => {
    const router = useRouter();
    const [active, setActive] = useState<number>(0);
    const [navbar, setNavbar] = useState(false);
    const menu = [
        { name: "Dashboard", url: "/" },
        { name: "Projects", url: "/about" },
        { name: "Notifications", url: "/" },
    ];

    return (
        <>
            <div className="mb-8 flex justify-center lg:flex lg:flex-row lg:justify-center gap-20 relative">
                <nav className="w-full">
                    <div className="justify-between gap-20 xl:gap-48 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
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
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none "
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <RxCross1 className="text-black" />
                                        ) : (
                                            <AiOutlineMenu className="text-black" />
                                        )}
                                    </button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    {menu.map(({ name, url }: any, index) => (
                                        <li key={index} className="text-black">
                                            <Link href={url} className="font-medium text-[16px] hover:underline hover:text-[#6355D8]">{name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Hamburger