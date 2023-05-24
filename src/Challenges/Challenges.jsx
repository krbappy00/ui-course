
const Challenges = () => {
    return (
      <div className="mt-[-100px] ">
        <div
          style={{ boxShadow: "0px 0px 25px 15px rgba(0, 0, 0, 0.70)" }}
          className="w-[100%]"
        >
          <div className="flex justify-between h-[165px] w-[70%] mx-auto ">
            <div className="flex items-center">
              <div className="font-Main flex">
                <h1 className="text-main">+</h1>
                <h1>150</h1>
              </div>
              <div className="font-krub tracking-[.1em] ml-4">
                <h3 className="mb-[-6px]">HAPPY</h3>
                <h3 className="font-bold">STUDENTS</h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="font-Main flex">
                <h1 className="text-main">+</h1>
                <h1>50</h1>
              </div>
              <div className="font-krub tracking-[.1em] ml-4">
                <h3 className="mb-[-6px]">CERTIFIED</h3>
                <h3 className="font-bold">COURSES</h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="font-Main flex">
                <h1 className="text-main">+</h1>
                <h1>350</h1>
              </div>
              <div className="font-krub tracking-[.1em] ml-4">
                <h3 className="mb-[-6px]">AWARDS</h3>
                <h3 className="font-bold">RECEIVED</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[725px] mt-24">
          <div className="w-[90%] mx-auto flex justify-between mt-16 relative">
            <div
              style={{ writingMode: "vertical-rl" }}
              className="font-krub font-semibold text-xl flex items-center gap-6 rotate-180"
            >
              <div className="w-[20px] h-[20px] bg-white"></div>
              <h2>DISCOVER YOUR SKILLS</h2>
            </div>
            <div className="absolute top-[25%] text-3xl left-[35%] font-krub">
              <h1 className="font-bold flex justify-center">ACCEPT</h1>
              <h1 className="flex justify-center">NEW</h1>
              <h1 className="font-bold">CHALLENGES</h1>
            </div>
            <div className=" absolute top-10 left-[28%]">
              <svg
                width="832"
                height="381"
                viewBox="0 0 832 381"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M829.109 349.078C823.644 363.316 807.014 372.644 781.296 377.17C755.613 381.69 721.04 381.386 679.993 376.527C597.907 366.811 490.042 338.89 375.863 295.061C261.684 251.232 162.842 199.805 95.3381 152.099C61.5829 128.244 35.6875 105.337 19.6257 84.7925C3.54136 64.2197 -2.57479 46.1602 2.89066 31.9222C8.35611 17.6842 24.9855 8.35586 50.7043 3.82979C76.3873 -0.689952 110.96 -0.386401 152.007 4.47252C234.093 14.1894 341.958 42.1099 456.137 85.939C570.316 129.768 669.158 181.195 736.662 228.901C770.417 252.756 796.312 275.663 812.374 296.208C828.459 316.78 834.575 334.84 829.109 349.078Z"
                  stroke="white"
                />
                <circle cx="777" cy="260" r="11" fill="#A460F9" />
                <circle cx="41" cy="108" r="11" fill="#A460F9" />
              </svg>
            </div>

            <div
              style={{ writingMode: "vertical-lr" }}
              className="font-krub font-semibold text-xl flex items-center gap-6 rotate-360"
            >
              <div className="w-[20px] h-[20px] bg-white"></div>
              <h2>DISCOVER YOUR SKILLS</h2>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-64 font-krub font-bold flex justify-between text-2xl text-[#252525]">
            <h1>EXPLORE</h1>
            <h1>ABOUT</h1>
          </div>
          <div className="flex justify-center">
            <svg
              className="-rotate-90"
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
    );
};

export default Challenges;