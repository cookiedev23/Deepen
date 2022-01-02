import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LogoutIcon, UserIcon, CogIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      <Menu as="div" className="py-1 inline-block relative xl:px-0 ml-3">
        <Menu.Button className="pb-2 inline-flex justify-center items-center w-full focus:outline-none">
          <img
            src={session.user.image}
            alt=""
            className="h-8 mt-2 w-8 rounded-full"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-[204px] p-2 mt-2 origin-top-right bg-black border border-[#1D1D1D] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <div className="flex items-center">
                <img
                  src={session?.user.image}
                  className="w-12 h-12 mr-3 mt-1 bg-black rounded-full"
                  alt=""
                />
                <div className="">
                  <p className="text-sm">{session?.user.name}</p>
                  <div className="flex items-center">
                    <div className="bg-red-500 h-1.5 w-1.5 rounded-full" />
                    <p className="text-sm font-light text-[#a4a4a4] pl-1 ">
                      Do not disturb
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1D1D1D] w-full h-[1px] mt-3" />
              <Menu.Item>
                <button class="inline-flex items-center p-2 mt-3 bg-black hover:bg-[#1D1D1D] headerIconsButtonrounded-lg focus:shadow-outline rounded-lg w-full">
                  <UserIcon className="h-5 pr-2" />
                  <p>Profile</p>
                </button>
              </Menu.Item>

              <Menu.Item>
                <button class="inline-flex items-center p-2 mt-1 bg-black hover:bg-[#1D1D1D] headerIconsButtonrounded-lg focus:shadow-outline rounded-lg w-full">
                  <CogIcon className="h-5 pr-2" />
                  <p>Settings</p>
                </button>
              </Menu.Item>

              <div className="bg-[#1D1D1D] w-full h-[1px] my-3" />
              <Menu.Item>
                <button class="inline-flex items-center p-2 bg-black hover:bg-red-600 transition-all headerIconsButton focus:shadow-outline rounded-lg w-full">
                  <LogoutIcon className="h-5 pr-2 " />
                  <p>Log out</p>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Profile;
