
const Courses = () => {
    return (
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between ">
          <div className="font-krub flex items-end text-4xl gap-2 ">
            <h1 className="font-bold">FIND</h1>
            <p className="mb-[18px]">Your Course.</p>
          </div>
          <div className="font-krub h-[125px] flex items-center">
            <div className="w-[15px] h-[15px] bg-white mr-4 mb-[40px]"></div>
            <h2 className="text-2xl font-semibold ">
              EDITION <br />
              <span className="font-bold text-3xl flex justify-end">2023</span>
            </h2>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-4 gap-32 mb-8 h-[500px]">
            <div className="border">
              <div className=" w-[50px] h-[50px] bg-white text-black justify-center font-krub font-bold flex items-center">
                01
              </div>
              <div className="flex flex-col items-center p-4 mt-16">
                <h2 className="text-[30px] font-krub font-bold">
                  ADOBE <span className="text-main">BASIC</span>
                </h2>
                <div className="w-[80px] h-[2px] bg-main mt-2 mb-4"></div>
                <p className="text-center font-krub font-semibold">
                  Welcome to the Get Started with Photoshop tutorials that teach
                  you the basic tools and techniques of Adobe Photoshop. This
                  tutorial introduces you to the Photoshop work area.
                </p>
                <button className="hover:bg-main p-3 mt-6 font-krub font-bold bg-transparent border border-main text-main hover:text-white">
                  VIEW COURSE
                </button>
              </div>
            </div>
            <div className=" border">
              <div className="w-[50px] h-[50px] bg-white text-black justify-center font-krub font-bold flex items-center">
                02
              </div>
              <div className="flex flex-col items-center p-4 mt-16">
                <h2 className="text-[30px] font-krub font-bold">
                  CHATGPT <span className="text-main">MID</span>
                </h2>
                <div className="w-[80px] h-[2px] bg-main mt-2 mb-4"></div>
                <p className="text-center font-krub font-semibold">
                  Welcome to the Get Started with Photoshop tutorials that teach
                  you the basic tools and techniques of Adobe Photoshop. This
                  tutorial introduces you to the Photoshop work area.
                </p>
                <button className="hover:bg-main p-3 mt-6 font-krub font-bold bg-transparent border border-main text-main hover:text-white">
                  VIEW COURSE
                </button>
              </div>
            </div>
            <div className=" border">
              <div className="w-[50px] h-[50px] bg-white text-black justify-center font-krub font-bold flex items-center">
                03
              </div>
              <div className="flex flex-col items-center p-4 mt-16">
                <h2 className="text-[30px] font-krub font-bold">
                  CANVA <span className="text-main">EXPERT</span>
                </h2>
                <div className="w-[80px] h-[2px] bg-main mt-2 mb-4"></div>
                <p className="text-center font-krub font-semibold">
                  Welcome to the Get Started with Photoshop tutorials that teach
                  you the basic tools and techniques of Adobe Photoshop. This
                  tutorial introduces you to the Photoshop work area.
                </p>
                <button className="hover:bg-main p-3 mt-6 font-krub font-bold bg-transparent border border-main text-main hover:text-white">
                  VIEW COURSE
                </button>
              </div>
            </div>
            <div className=" border">
              <div className="w-[50px] h-[50px] bg-white text-black justify-center font-krub font-bold flex items-center">
                04
              </div>
              <div className="flex flex-col items-center p-4 mt-16">
                <h2 className="text-[30px] font-krub font-bold">
                  ILLUSTRATOR <span className="text-main">BASIC</span>
                </h2>
                <div className="w-[80px] h-[2px] bg-main mt-2 mb-4"></div>
                <p className="text-center font-krub font-semibold">
                  Welcome to the Get Started with Photoshop tutorials that teach
                  you the basic tools and techniques of Adobe Photoshop. This
                  tutorial introduces you to the Photoshop work area.
                </p>
                <button className="hover:bg-main p-3 mt-6 font-krub font-bold bg-transparent border border-main text-main hover:text-white">
                  VIEW COURSE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-16 mt-24 flex justify-center items-center gap-8">
            <h3 className="font-krub font-bold">MORE COURSES</h3>
            <div className="">
              <svg
                className="rotate-180"
                width="70"
                height="30"
                viewBox="0 0 63 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="9.49675" x2="62.15" y2="9.49675" stroke="white" />
                <line
                  x1="0.353553"
                  y1="9.64645"
                  x2="9.54594"
                  y2="18.8388"
                  stroke="white"
                />
                <line
                  x1="9.54594"
                  y1="0.353553"
                  x2="0.353548"
                  y2="9.54594"
                  stroke="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Courses;