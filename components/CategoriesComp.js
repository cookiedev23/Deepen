function CategoriesComp() {
  const categories = [
    { name: "Italiano", color: "#FF9F9F" },
    { name: "Inglese", color: "#F7FF9F" },
    { name: "Francese", color: "#f77f8f" },
  ];

  return (
    <div className="">
      <div className="pb-1 pt-10 flex items-center justify-between">
        <p className=" xl:text-xl font-medium">Categorie</p>
        <button className=" text-[#6D86FF] ">See all</button>
      </div>
      <div className="flex">
        {categories.map((item, ind) => (
          <div className="z-0 relative ">
            <div
              className={`mr-4 flex items-center border-[#1D1D1D] border bg-black hover:bg-[#1D1D1D] mt-1 p-2 px-3 rounded-lg transition-all cursor-pointer  `}
              //style={{ backgroundColor: item.color }}
              key={ind}
            >
              <div
                style={{ backgroundColor: item.color }}
                className=" rounded-full bg-black w-9 h-9 "
              ></div>
              <p className="pl-3 text-white font-medium">{item.name}</p>
              <div
                id="absoluteDiv"
                class=" transition-all duration-100 absolute rounded-lg mr-4 mt-2 p-2 px-6 bottom-0 left-0 top-0 right-0"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComp;
