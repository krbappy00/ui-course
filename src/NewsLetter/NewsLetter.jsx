import './News.css'
import img from '../assets/newsLetter.png'

const NewsLetter = () => {
    return (
      <div className="w-[100%]">
        <div className="flex w-[90%] justify-center mt-8">
          <div className="relative w-[60%] ">
            <img
              className="absolute left-[-20%] top-[-175px] h-[1500px] "
              src={img}
              alt=""
            />
          </div>
          <div className="mt-64">
            <h1 className="text-7xl font-bold font-krub text-center">
              SUBSCRIBE <br />
              <span className="font-krub text-6xl font-light text-main ">
                to our newsletter.
              </span>
            </h1>
            <div className="font-krub font-bold mt-12">
              <form action="">
                <div className="relative mb-8">
                  <input
                    type="text"
                    name="name"
                    className="w-full font-krub py-4 px-4 text-white bg-transparent border-2 border-main focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-main  left-1 duration-300
                      transform -translate-y-5 translate-x-3 bg-bg
                      top-2 px-2 peer-focus:px-2 peer-focus:text-main
                      peer-placeholder-shown:-translate-y-1/2
                      peer-placeholder-shown:top-1/2 peer-focus:top-2
                      peer-focus:-translate-y-5
                    peer-placeholder-shown:text-white
                    "
                  >
                    NAME
                  </label>
                </div>

                <div className="relative mb-8">
                  <input
                    type="text"
                    name="email"
                    className="w-full font-krub py-4 px-4 text-white bg-transparent border-2 border-main focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-main  left-1 duration-300
                      transform -translate-y-5 translate-x-3 bg-bg
                      top-2 px-2 peer-focus:px-2 peer-focus:text-main
                      peer-placeholder-shown:-translate-y-1/2
                      peer-placeholder-shown:top-1/2 peer-focus:top-2
                      peer-focus:-translate-y-5
                    peer-placeholder-shown:text-white
                    "
                  >
                    EMAIL
                  </label>
                </div>
                <div className="relative mb-8">
                  <textarea
                    type="text"
                    name="text"
                    className="h-[150px] w-full font-krub py-4 px-4 text-white bg-transparent border-2 border-main focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-main  left-1 duration-300
                      transform -translate-y-5 translate-x-3 bg-bg
                      top-2 px-2 peer-focus:px-2 peer-focus:text-main
                      peer-placeholder-shown:-translate-y-1/2
                      peer-placeholder-shown:top-8 peer-focus:top-2
                      peer-focus:-translate-y-5
                    peer-placeholder-shown:text-white
                    "
                  >
                    TEXT
                  </label>
                </div>
                <button className="bg-main w-[100%] mx-auto p-3 mt-6 font-krub font-bold border border-main text-white">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewsLetter;