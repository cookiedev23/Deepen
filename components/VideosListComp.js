import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import vid from "../images/sample.mp4";

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
      <p className=" pt-6 xl:text-2xl font-semibold">{categoryName}</p>
      <div className="flex">
        {test.map((item, ind) => (
          <div key={ind}>
            <HoverVideoPlayer
              videoSrc={vid}
              pausedOverlay={
                <img
                  src="https://qph.fs.quoracdn.net/main-qimg-98504d6190580238f9c15962800aa659"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            <div
              onMouseEnter={() => handleEnter()}
              onMouseLeave={() => handleLeave()}
              className={`hover:w-80 mt-3 mr-4 rounded-lg overflow-hidden w-56 bg-[#1D1D1D] cursor-pointer hover:scale-105 transition-all `}
            >
              {/*  {showVid && (
                <video className="">
                  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
                </video>
              )}

              {!hideImg && (
                <img
                  className="object-contain w-full max-h-[150px]"
                  src={
                    "https://qph.fs.quoracdn.net/main-qimg-98504d6190580238f9c15962800aa659"
                  }
                />
              )} */}
              <div className="w-full bg-blue-500 h-1 " />
              <div className="px-2">
                <div>
                  <p className="font-medium text-lg ">{title}</p>
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
                    <div className="bg-[#232323] mr-2 p-1 rounded-lg ">
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
