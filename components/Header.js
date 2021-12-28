import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { data: session } = useSession();
  return (
    <div className="backdrop-blur-sm text-[#d9d9d9] flex items-center sm:justify-between px-3 sticky top-0 z-50 bg-black/30 border-b border-[#202020]">
      <div className="backdrop-blur-sm sticky top-0 bg-[#202020] rounded-lg z-50 w-8/12 xl:w-9/12">
        <div className="transition-all flex items-center bg-[#202020] p-2.5 rounded-lg relative">
          <SearchIcon className="text-[#818181] h-5 z-50" />
          <input
            type="text"
            className="transition-all duration-100 bg-transparent placeholder-[#818181] outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#6D86FF] rounded-lg focus:bg-black focus:shadow-lg"
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
      <Menu as="div" className="py-1 relative inline-block xl:px-0 ml-auto  ">
        <div>
          <Menu.Button className="pb-2 inline-flex justify-center items-center w-full   focus:outline-none">
            <img
              src={session.user.image}
              alt=""
              className="h-10 mt-2 w-10 rounded-full"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Header;
