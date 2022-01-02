import { SearchIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Wishlist from "./DropdownMenus/Wishlist";
import Cart from "./DropdownMenus/Cart";
import Notifications from "./DropdownMenus/Notifications";
import Profile from "./DropdownMenus/Profile";

function Header() {
  return (
    <div className="backdrop-blur-xl text-[#d9d9d9] flex items-center sm:justify-between px-5 sticky top-0 z-50 bg-black/50">
      <div className="backdrop-blur-sm sticky top-0 rounded-lg z-50 w-8/12 xl:w-9/12">
        <div className="transition-all flex items-center p-2.5 rounded-lg relative">
          <SearchIcon className="text-[#818181] h-5 z-50" />
          <input
            type="text"
            className="transition-all text-sm duration-100 bg-transparent placeholder-[#818181] outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#6D86FF] rounded-lg focus:bg-black focus:shadow-lg"
            placeholder="Search Deepen"
          />
        </div>
      </div>
      {/*         <div className="xl:h-auto py-3 flex items-center justify-center xl:px-0 ml-auto">
          <div className="">
            <button className="transition-all hover:bg-[#1D1D1D] p-2 mr-3 rounded-lg bg-black border border-[#1D1D1D]">
              <p className="px-2 font-semibold ">Sign in</p>
            </button>
            <button className="transition-all hover:bg-[#4564ff] p-2 rounded-lg bg-[#6D86FF] border border-[#1D1D1D]">
              <p className="px-2 font-semibold ">Sign up</p>
            </button>
          </div>
        </div> */}
      <div className="ml-auto flex ">
        <div className="flex md:hidden py-1 items-center justify-center">
          <Notifications />
          <Profile />
        </div>
        <div className="hidden xl:h-auto py-1 md:flex items-center justify-center xl:px-0 ">
          <Wishlist />
          <Cart />
          <Notifications />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Header;
