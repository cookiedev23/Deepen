import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";

export default function Wishlist() {
  const [items, setItems] = useState([]);
  useEffect(() =>
    setItems([
      {
        img: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
        name: "I numeri primi e i suoi derivati dddn dnnd dddsjdsjdjsdjdj sdjdjdjdsjd",
        price: "24,99",
      },
      {
        img: "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
        name: "test2",
        price: "47,99",
      },
    ])
  );

  return (
    <div className=" text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="headerIconsButton">
            <span class="transition-all ">
              <HeartIcon className="h-7" />
              {/* {notifications.read != "read" && ( */}
              <span class=" absolute top-2 right-2 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
              {/* )} */}
            </span>
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
          <Menu.Items className="absolute right-0 w-[344px] p-2 mt-2 origin-top-right bg-black border border-[#1D1D1D] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <p className="pb-2 text-center ">My wishlist</p>
              <div className="bg-[#1D1D1D] w-full h-[1px] mb-2 " />
              {items == null && (
                <div>
                  <div className="animate-pulse flex items-start mb-2 cursor-pointer">
                    <div
                      className="w-10 h-10 mr-2 mt-1 bg-[#1D1D1D] rounded-lg"
                      alt=""
                    />
                    <div>
                      <div class="h-2 bg-[#1D1D1D] w-40 mt-1 mb-2 rounded"></div>
                      <div class="h-2 bg-[#1D1D1D] w-40 mt-1 mb-2 rounded"></div>
                      <div class="h-2 bg-[#1D1D1D] w-14 mt-1 mb-2 rounded"></div>
                    </div>
                  </div>
                  <div className="animate-pulse flex items-start mb-2 cursor-pointer">
                    <div
                      className="w-10 h-10 mr-2 mt-1 bg-[#1D1D1D] rounded-lg"
                      alt=""
                    />
                    <div>
                      <div class="h-2 bg-[#1D1D1D] w-40 mt-1 mb-2 rounded"></div>
                      <div class="h-2 bg-[#1D1D1D] w-40 mt-1 mb-2 rounded"></div>
                      <div class="h-2 bg-[#1D1D1D] w-14 mt-1 mb-2 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-[#1D1D1D] h-[1px] mb-2 " />
                </div>
              )}
              {items?.length > 0 &&
                items?.map((item) => (
                  <Menu.Item>
                    <div>
                      <div className="flex items-start mb-2 cursor-pointer">
                        <img
                          src={item.img}
                          className="w-10 h-10 mr-2 mt-1 bg-black rounded-lg"
                          alt=""
                        />
                        <div className="">
                          {/* onclick go to the video */}
                          <p className="line-clamp-2 max-w-[340px] text-gray-300">
                            {item.name}
                          </p>
                          <div className="flex">
                            <p>€</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1D1D1D] h-[1px] mb-2 " />
                    </div>
                  </Menu.Item>
                ))}
              {items?.length == 0 && (
                <p className="text-center py-2 text-gray-400 ">
                  It seems you don't have any wishlisted video yet
                </p>
              )}

              {items?.length > 0 && (
                <div className="pt-2 block">
                  <button className="bg-black border headerIconsButton w-full p-2 mb-3 rounded-lg border-[#1D1D1D]">
                    Add to cart
                  </button>
                </div>
              )}
              <div className={`${items?.length == 0 && "pt-2"} block`}>
                <button className="bg-[#6D86FF] hover:bg-[#4564ff] headerIconsButton border w-full p-2 rounded-lg border-[#1D1D1D]">
                  Go to wishlist
                </button>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
