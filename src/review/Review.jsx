import review1 from '../assets/review (1).jpg'
import review2 from '../assets/review (2).jpg'
import review3 from '../assets/review (3).jpg'
import { AiFillStar } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";

const Review = () => {
    return (
      <div className="h-screen w-[80%] mx-auto">
        <div className="">
          <h1 className="text-7xl font-bold font-krub text-center">
            WHAT <br />
            <span className="font-krub text-6xl font-light text-main">
              users think.
            </span>
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="w-[360px] relative   flex flex-col justify-center items-center mt-28">
            <div className="relative w-[200px] h-[200px] rounded-full border-4 border-main overflow-hidden">
              <img className="absolute top-[-55px] " src={review1} alt="" />
            </div>
            <div className="mt-4 text-2xl font-bold font-krub">
              <h2>LAURA SMITH</h2>
            </div>
            <div className="text-xl flex gap-4 text-main mt-6 mb-6">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <div className="text-white">
                <AiFillStar />
              </div>
            </div>
            <div className="">
              <div className="text-main text-4xl absolute top-[385px] left-[-8px]">
                <BsQuote />
              </div>
              <div className="font-krub text-center">
                <h2 className="text-3xl mb-4">
                  Fast shipping and better support for Morocco.
                </h2>
                <p>
                  Their shipping with DHL is overpriced to Morocco but they ship
                  so you don't have to deal with customs clearance and they have
                  nice support. If you're looking for better support and speedy
                  shipping use Amazon. AliExpress they have the worst experience
                  hahaha avoid them.
                </p>
              </div>
              <div className="text-main text-4xl mt-4 rotate-180 absolute bottom-[-16px] right-[-34px]">
                <BsQuote />
              </div>
            </div>
          </div>
          <div className="w-[360px] relative   flex flex-col justify-center items-center mt-28">
            <div className="relative w-[200px] h-[200px] rounded-full border-4 border-main overflow-hidden">
              <img className="absolute top-[-20px] " src={review2} alt="" />
            </div>
            <div className="mt-4 text-2xl font-bold font-krub">
              <h2>LEANA LOVINGS</h2>
            </div>
            <div className="text-xl flex gap-4 text-main mt-6 mb-6">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <div className="text-white">
                <AiFillStar />
              </div>
            </div>
            <div className="">
              <div className="text-main text-4xl absolute top-[385px] left-[-8px]">
                <BsQuote />
              </div>
              <div className="font-krub text-center">
                <h2 className="text-3xl mb-4">
                  Course hero was such a great help…
                </h2>
                <p>
                  Their shipping with DHL is overpriced to Morocco but they ship
                  so you don't have to deal with customs clearance and they have
                  nice support. If you're looking for better support and speedy
                  shipping use Amazon. AliExpress they have the worst experience
                  hahaha avoid them.
                </p>
              </div>
              <div className="text-main text-4xl mt-4 rotate-180 absolute bottom-[-16px] right-[-34px]">
                <BsQuote />
              </div>
            </div>
          </div>
          <div className="w-[360px] relative   flex flex-col justify-center items-center mt-28">
            <div className="relative w-[200px] h-[200px] rounded-full border-4 border-main overflow-hidden">
              <img className="absolute top-[-12px] " src={review3} alt="" />
            </div>
            <div className="mt-4 text-2xl font-bold font-krub">
              <h2>ADAM TRACKER</h2>
            </div>
            <div className="text-xl flex gap-4 text-main mt-6 mb-6">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <div className="text-white">
                <AiFillStar />
              </div>
            </div>
            <div className="">
              <div className="text-main text-4xl absolute top-[385px] left-[-8px]">
                <BsQuote />
              </div>
              <div className="font-krub text-center">
                <h2 className="text-3xl mb-4">
                  Wow very nice and i like this…
                </h2>
                <p>
                  Their shipping with DHL is overpriced to Morocco but they ship
                  so you don't have to deal with customs clearance and they have
                  nice support. If you're looking for better support and speedy
                  shipping use Amazon. AliExpress they have the worst experience
                  hahaha avoid them.
                </p>
              </div>
              <div className="text-main text-4xl mt-4 rotate-180 absolute bottom-[-16px] right-[-34px]">
                <BsQuote />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;