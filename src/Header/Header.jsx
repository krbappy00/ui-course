import logo from '../../src/assets/logo.svg'
const Header = () => {
    return (
      <div className="w-[100%] h-[100px] bg-bg flex items-center pt-16">
        <div className="text-white font-semibold text-xl flex justify-between items-center w-[90%] mx-auto">
          <img className='w-[100px] h-[100px]' src={logo} alt="" />
          <div className="flex justify-between items-center gap-48">
            <h3 className="border-b-4 border-white pb-2 mt-2">
              HOME
            </h3>
            <h3 className="hover:border-b-4 hover:border-white hover:pb-2">
              ABOUT
            </h3>
            <p className="hover:border-b-4 hover:border-white hover:pb-2">
              COURSES
            </p>
            <p className="hover:border-b-4 hover:border-white hover:pb-2">
              BLOG
            </p>
            <button className="text-white border px-8 py-2 bg-transparent hover:text-bg hover:bg-white">SIGN IN</button>
          </div>
        </div>
      </div>
    );
};

export default Header;