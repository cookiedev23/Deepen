import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
//import vid from "../images/sample.mp4";

const categories = [
  { name: "Italiano", color: "#FF9F9F" },
  { name: "Inglese", color: "#F7FF9F" },
  { name: "Francese", color: "#f77f8f" },
];

const test = [
  { name: "Italiano", color: "#FF9F9F" },
  { name: "Inglese", color: "#F7FF9F" },
  { name: "Francese", color: "#f77f8f" },
];

function VideosListComp({ title, categoryName }) {
  const { data: session } = useSession();

  const [showVid, setShowVid] = useState();
  const [hideImg, setHideImg] = useState();

  const handleEnter = () => {
    setShowVid(true);
    setHideImg(true);
  };

  const handleLeave = () => {
    setShowVid(false);
    setHideImg(false);
  };

  return (
    <div className="">
      <p className=" pt-10 xl:text-xl font-medium">{categoryName}</p>
      <div className="flex">
        {test.map((item, ind) => (
          <div key={ind}>
            <div
              onMouseEnter={() => handleEnter()}
              onMouseLeave={() => handleLeave()}
              className={`hover:w-80 mt-2 mr-4 rounded-lg overflow-hidden w-56 bg-[#1D1D1D] cursor-pointer hover:scale-105 transition-all `}
            >
              <img
                className="object-contain w-full"
                src={
                  "https://qph.fs.quoracdn.net/main-qimg-98504d6190580238f9c15962800aa659"
                }
              />

              <div className="w-full bg-blue-500 h-1 " />
              <div className="px-2">
                <div>
                  <p className="font-medium text-lg pt-1 ">{title}</p>
                </div>
                <div className="pt-2 flex items-center">
                  <img
                    className="h-6 w-6 bg-red-400 rounded-full"
                    src={session.user.image}
                  />
                  <p className="text-sm font-medium text-[#d1d1d1] pl-2">
                    Theblacboard
                  </p>
                </div>
                <div className="flex pt-3 pb-2 ">
                  {categories.map((item, ind) => (
                    <div className="bg-[#2d2d2d] mr-2 px-1.5 p-1 rounded-lg ">
                      <p className="text-[#8B8B8B] font-medium text-xs">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosListComp;
