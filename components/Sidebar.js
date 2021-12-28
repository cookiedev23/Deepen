import Image from "next/image";
import logo from "../images/logo_fixed.png";
import logo_hat from "../images/logo_hat.png";
import {
  HomeIcon,
  AcademicCapIcon,
  ArrowNarrowLeftIcon,
  CogIcon,
  LogoutIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const menu = [
  { title: "Home", path: "/" },
  { title: "My Courses", path: "/my-courses" },
  { title: "Notifications", path: "/notifications" },
];

function Sidebar() {
  const router = useRouter();
  const { data: session } = useSession();

  const pushToHome = () => {
    router.push("/");
  };

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start md:w-[73px] xl:w-[240px] p-2 fixed h-full">
      <div className="flex mb-8 items-center xl:w-[120px] cursor-pointer p-0 xl:ml-2">
        <div className="hidden xl:inline" onClick={() => pushToHome()}>
          <Image
            layout="fixed"
            objectFit="contain"
            src={logo}
            height={40}
            width={120}
            className="justify-start"
          />
        </div>
        <div className="xl:hidden" onClick={() => pushToHome()}>
          <Image
            layout="fixed"
            objectFit="contain"
            src={logo_hat}
            height={40}
            width={40}
            className="justify-start"
          />
        </div>
      </div>
      <div>
        {menu.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <div
                className={`xl:ml-4 p-2 mt-1 flex justify-center items-center xl:justify-start text-base space-x-3 hoverAnimationLinks ${
                  router.pathname === item.path
                    ? "text-white bg-[#1D1D1D]"
                    : "text-[#888888]"
                }`}
              >
                {item.path === "/" && <HomeIcon className="h-6" />}
                {item.path === "/my-courses" && (
                  <AcademicCapIcon className="h-6" />
                )}
                {/* <HomeIcon className="h-7" /> */}
                <span className={`hidden xl:inline`}>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
      {/*       <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div> */}
    </div>
  );
}

export default Sidebar;
