
import bannerImg from '../../assets/banner-image1.png'


const Banner = () => {
    return (
      <div className="relative h-screen top-[-100px]  w-screen">
        <div className="">
          <div className="absolute top-[27%] left-[5%] font-krub font-bold text-5xl">
            <h1>
              UI<span className="text-main">.</span>
            </h1>
          </div>
          <div
            className="absolute top-[48%] left-[5%]"
            style={{ writingMode: "vertical-rl" }}
          >
            <h1 className="rotate-180 tracking-[.1em]">
              BEGINNER<span className="font-bold">'S</span>
            </h1>
          </div>
          <div className="flex absolute top-[60%] left-[14%] w-[180px] h-[40px] font-krub font-semibold text-xl">
            <div className="w-[12px] h-[12px] mt-2 mr-3 bg-white"></div>
            <h3>
              BECOME A<br />
              PRO-DESIGNER{" "}
            </h3>
          </div>
          <div className="bg-main w-[376px] h-[376px] rounded-full absolute bottom-[175px] right-[38%]"></div>
          <img
            className="absolute bottom-0 right-[40%]"
            src={bannerImg}
            alt=""
          />
          <div className="absolute right-0 top-[29%] font-krub border-y-2 border-l-2 w-[230px] h-[125px]">
            <h2 className="text-2xl p-6 tracking-[.35em] font-semibold">
              EDITION <br />
              <span className="font-bold text-5xl tracking-[.26em]">2023</span>
            </h2>
          </div>
          <div className="absolute top-[49%] right-[15%] font-krub w-[350px] h-[230px]">
            <h2 className="text-xl mb-4 tracking-[.05em] font-semibold">
              START GUIDE FOR BEGINNER <br /> DESIGNERS
            </h2>
            <h3 className="text-md ">
              User interface (UI) design is the pro-cess designers use to build
              interfaces <br />
              in software or computerized devices.
            </h3>
            <div className="font-krub font-semibold">
              {" "}
              <button className="bg-main p-4 px-6 mt-8 font-krub font-bold">LET'S START</button>
              <button className="hover:border-2 p-4 ml-4">READ MORE</button>
            </div>
          </div>
          <div className="absolute top-[90%] right-[61%]">
            <svg
              width="63"
              height="20"
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
          <div className="absolute top-[90%] right-[30%]">
            <svg
              width="63"
              height="20"
              viewBox="0 0 63 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-5.23037e-05"
                y1="9.5"
                x2="62.1499"
                y2="9.4935"
                stroke="white"
              />
              <line
                x1="61.8388"
                y1="9.54594"
                x2="52.6464"
                y2="0.353549"
                stroke="white"
              />
              <line
                x1="52.6464"
                y1="18.8388"
                x2="61.8388"
                y2="9.64644"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>
    );
};

export default Banner;