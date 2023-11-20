import React from "react";
import MenuSvg from "./svgs/Menu";
import CloseSvg from "./svgs/Close";
import { cn } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useRouter, usePathname } from "next/navigation";
import { useGlobalState } from "./State";
import { useGlobalDispatch } from "@/components/State";

const menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/#blog",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  //   const location = useLocation();
  const pathname = usePathname();
  const router = useRouter();
  const { userToken } = useGlobalState();
  const dispatch = useGlobalDispatch();

  let menuItems = menu.map((item) => {
    if (userToken && item.title === "Login") {
      return { ...item, title: "Logout" };
    } else {
      return item;
    }
  });

  // const navigate = useNavigate();
  const toggleMenu = (force = false) => {
    const navLinks = document.getElementById("navLinks");
    navLinks?.classList.toggle("opacity-0", force);
    navLinks?.classList.toggle("pointer-events-none", force);
    // navLinks?.classList.toggle('hidden', force);
  };

  return (
    <div className="w-full bg-[#F8F9FA]">
      <nav className="max-w-[1200px] relative z-50 flex items-center gap-[30px] px-[20px] mx-[20px] md:mx-auto ">
        <div className="flex items-center gap-[10px]">
          <img src={"images/logo-main.png"} className="w-10" alt="logo" />
          <span className="font-black text-xl">interview bot</span>
        </div>
        <div className="flex items-center flex-1">
          <div
            id="navLinks"
            className="pointer-events-none fixed inset-0 z-[99] list-none items-center bg-black text-gray-700 opacity-0 transition-opacity duration-200 md:pointer-events-auto md:relative md:flex md:bg-transparent md:opacity-100"
          >
            <div className="my-[28px] mx-[23px] md:hidden">
              <div
                className="ml-auto flex h-6 w-6 items-center justify-center"
                onClick={() => toggleMenu(true)}
              >
                <CloseSvg />
              </div>
            </div>
            <ul className="mx-[20px] mt-[3px] flex flex-col justify-center md:mx-[0px] md:mt-[0px] md:flex-row md:items-center">
              {menuItems &&
                menuItems.map((item, index) => {
                  const selected = item.path === pathname;

                  return (
                    <li
                      key={index}
                      className={cn({
                        "cursor-pointer border-b-[1px] md:border-transparent md:border-b-[3px] border-[#FFFFFF10]  px-[5px] py-[30px] text-[15px] text-white md:text-black transition duration-300 ease-in hover:text-[#00D5FF] md:py-[25px] md:px-[20px] font-[500]":
                          true,
                        "md:text-[#6355D8] md:border-[#6355D8]": selected,
                      })}
                      onClick={() => {
                        if (item.path === "/login")
                          dispatch({
                            type: "LOGIN_CURRENT_USER",
                            payload: null,
                          });
                        router.push(item.path);
                        toggleMenu(true);
                      }}
                      suppressHydrationWarning={true}
                    >
                      {item?.title}
                    </li>
                  );
                })}
            </ul>
          </div>
          <button
            className="ml-auto md:hidden py-[25px]"
            onClick={() => toggleMenu()}
          >
            <MenuSvg />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
