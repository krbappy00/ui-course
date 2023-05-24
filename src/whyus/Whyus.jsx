
import why from '../../src/assets/whyus.png'


const Whyus = () => {
    return (
      <div className="mb-16">
        <div className="flex items-center gap-8">
          <div className="mt-28 w-[50%] ml-24 relative ">
            <svg
              width="814"
              height="425"
              viewBox="0 0 814 425"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M810.832 33.288C817.036 47.2207 811.885 65.57 796.923 86.946C781.982 108.292 757.354 132.509 724.935 158.079C660.103 209.215 564.202 265.694 452.6 315.383C340.998 365.071 234.856 398.548 153.473 412.511C112.778 419.493 78.3021 421.59 52.441 418.411C26.5438 415.227 9.46148 406.776 3.25825 392.843C-2.94497 378.911 2.20522 360.561 17.1676 339.185C32.1091 317.839 56.7366 293.622 89.1557 268.052C153.988 216.916 249.889 160.437 361.491 110.749C473.093 61.06 579.235 27.5834 660.618 13.6206C701.313 6.63848 735.789 4.54085 761.65 7.7205C787.547 10.9046 804.629 19.3554 810.832 33.288Z"
                stroke="#FCFCFC"
              />
              <circle cx="670.5" cy="11.5" r="11.5" fill="#AA84F9" />
              <circle cx="145.5" cy="413.5" r="11.5" fill="#AA84F9" />
            </svg>
            <div className="">
              <div className="mt-24">
                <div className="absolute top-[30px] right-[360px] w-[350px] h-[350px] rounded-full bg-main"></div>
                <img
                  className="absolute top-[-75px] left-64 w-[407px] h-[642px] "
                  src={why}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-7xl font-bold font-krub">
              Why{" "}
              <span className="font-krub text-6xl font-light text-main">
                us.
              </span>
            </h1>
            <p className="mt-8 font-krub font-semibold leading-6 tracking-wide">
              As an established agency for digital marketing, whY-us?
              <br /> support businesses from a wide range of sectors to help
              <br />
              them better understand their marketing needs. If you are <br />
              looking attract more customers or improve your brand awareness,
              <br /> we have a range of tools to bring your campaigns to life.
              <br />
              If you are looking for a new website, social media, SEO, <br />
              branded video, content creation or a CRM system whY-us? <br />
              will support you with design, development and day to day
              management.
            </p>
            <button className=" p-3 px-4 mt-8 font-krub font-bold border-main bg-main text-white">
              READ MORE
            </button>
            <div>
              <div className="font-krub absolute right-[-132px] font-bold -rotate-90 text-2xl text-[#252525]">
                <h1>EXPLORE</h1>
              </div>
              <div className="w-[23px] h-[23px] bg-main rounded-full absolute right-[100px] "></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Whyus;