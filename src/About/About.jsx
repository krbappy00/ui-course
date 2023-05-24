import about from '../../src/assets/Anout.png'


const About = () => {
  return (
    <div className="w-[100%] relative h-screen">
      <div className="w-[23px] h-[23px] bg-main rounded-full absolute top-[20%] right-[20%]"></div>
      <div className="w-[23px] h-[23px] bg-main rounded-full absolute top-[80%] right-[50%]"></div>
      <div className="w-[300px] relative">
        <svg
          className="absolute top-12 left-[-500px]"
          width="718"
          height="377"
          viewBox="0 0 718 377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M714.826 34.5761C720.328 46.934 715.848 63.1848 702.706 82.1126C689.583 101.012 667.919 122.434 639.38 145.039C582.307 190.244 497.828 240.106 399.47 283.898C301.112 327.69 207.53 357.106 135.747 369.271C99.8519 375.354 69.4362 377.119 46.6106 374.225C23.7503 371.327 8.67614 363.782 3.17405 351.424C-2.32804 339.066 2.15158 322.815 15.2944 303.887C28.4172 284.988 50.0805 263.566 78.6199 240.961C135.692 195.756 220.172 145.894 318.53 102.102C416.888 58.3104 510.47 28.8943 582.253 16.7291C618.148 10.6459 648.564 8.8814 671.389 11.7751C694.25 14.6733 709.324 22.2182 714.826 34.5761Z"
            stroke="white"
          />
          <circle cx="638.5" cy="11.5" r="11.5" fill="#AA84F9" />
        </svg>
      </div>
      <div className="absolute top-[25%] left-[12%]  h-[440px] flex items-center gap-64">
        <div>
          <div>
            <h1 className="text-7xl font-bold font-krub">
              About{" "}
              <span className="font-krub text-6xl font-light text-main">
                us.
              </span>
            </h1>
          </div>
          <div className="mt-8 font-krub font-semibold leading-6 tracking-wide">
            <p>
              You don’t need to outright say, “our mission is ____,” <br />
              but you should convey the mission of your business in
              <br /> your About Us copy. This is key for attracting talent,{" "}
              <br />
              as well as leads that have Corporate <br />
              Social Responsibility (CSR) goals.
            </p>
          </div>
          <div>
            <div className="mt-16 flex gap-24">
              <div className="">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] bg-main"></div>
                  <div className="font-krub font-semibold leading-6 tracking-wide">
                    <p>First UI course selling </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-12">
                  <div className="w-[12px] h-[12px] bg-main"></div>
                  <div className="font-krub font-semibold leading-6 tracking-wide">
                    <p>100% Qualified Mentor</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] bg-main"></div>
                  <div className="font-krub font-semibold leading-6 tracking-wide">
                    <p>24/7 Hours support from</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-12">
                  <div className="w-[12px] h-[12px] bg-main"></div>
                  <div className="font-krub font-semibold leading-6 tracking-wide">
                    <p>Top industry leading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-main p-3 px-4 mt-16 font-krub font-bold border-main text-main text-white">
            READ MORE
          </button>
        </div>
        <div className="w-[600px] h-[800px]">
          <div className="relative mt-24">
            <div className="absolute top-[115px] right-[80px] w-[390px] h-[390px] rounded-full bg-main"></div>
            <img
              className="absolute top-0 w-[600px] h-[647px]"
              src={about}
              alt=""
            />
          </div>
        </div>

        <div className="relative">
          <svg
            className="absolute top-12 left-[-250px] rotate-180"
            width="718"
            height="377"
            viewBox="0 0 718 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.826 34.5761C720.328 46.934 715.848 63.1848 702.706 82.1126C689.583 101.012 667.919 122.434 639.38 145.039C582.307 190.244 497.828 240.106 399.47 283.898C301.112 327.69 207.53 357.106 135.747 369.271C99.8519 375.354 69.4362 377.119 46.6106 374.225C23.7503 371.327 8.67614 363.782 3.17405 351.424C-2.32804 339.066 2.15158 322.815 15.2944 303.887C28.4172 284.988 50.0805 263.566 78.6199 240.961C135.692 195.756 220.172 145.894 318.53 102.102C416.888 58.3104 510.47 28.8943 582.253 16.7291C618.148 10.6459 648.564 8.8814 671.389 11.7751C694.25 14.6733 709.324 22.2182 714.826 34.5761Z"
              stroke="white"
            />
            <circle cx="638.5" cy="11.5" r="11.5" fill="#AA84F9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
