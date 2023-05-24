
import thumb from '../../src/assets/videoThub.png'

const Video = () => {
    return (
      <div className="w-[90%] mx-auto mt-24 h-screen flex items-center justify-between">
        <div className="h-[20%]">
          <div style={{ writingMode: "vertical-rl" }}>
            <h3 className="font-krub font-bold rotate-180 text-3xl">
              READY TO <br />
              GET STARTED
            </h3>
          </div>
          <div className="mt-12">
            <svg
              className="rotate-90"
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
        <div className="w-[1150px] h-[610px] mx-auto bg-slate-50 relative">
          <div className="w-[100%] h-[100%] absolute top-0 flex items-center justify-center z-20 opacity-60">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="150"
                cy="150"
                r="143.5"
                stroke="#DC8CFF"
                strokeWidth="13"
              />
              <path
                d="M216 150.5L116.25 208.091L116.25 92.9093L216 150.5Z"
                fill="#DC8CFF"
              />
            </svg>
          </div>
          <div className="w-[600px] h-[550px] absolute bottom-0 left-[24%] overflow-hidden z-10">
            <img src={thumb} alt="" />
          </div>
          <div className="font-krub font-bold text-[#b3b3b3] text-3xl flex justify-between items-center h-[100%] w-[90%] mx-auto">
            <h1>START</h1>
            <h1>NOW</h1>
          </div>
        </div>
        <div className="h-[20%] rotate-180">
          <div style={{ writingMode: "vertical-rl" }}>
            <h3 className="font-krub font-bold rotate-180 text-3xl">
              READY TO <br />
              GET STARTED
            </h3>
          </div>
          <div className="mt-12">
            <svg
              className="rotate-90"
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

export default Video;