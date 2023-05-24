
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="h-[500px] bg-main mt-24 p-12">
        <div className="flex mt-32 justify-between ml-12 mr-12">
          <div className="flex gap-24">
            <div className="text-white font-krub font-normal text-xl px-3">
              <h2 className="text-3xl font-krub font-bold underline underline-offset-8 mb-4">
                About
              </h2>
              <p>History</p>
              <p>Our team</p>
              <p>Terms & condition</p>
              <p>Our mission</p>
              <p>Privacy policy</p>
            </div>
            <div className="text-white font-krub font-normal text-xl">
              <h2 className="text-3xl font-krub font-bold underline underline-offset-8 mb-4">
                What we do
              </h2>
              <p>News and stories</p>
              <p>Publication</p>
              <p>Recommendations</p>
              <p>Take actions</p>
              <p>Help</p>
            </div>
          </div>

          <div className="mr-16">
            <div className="flex justify-end">
              <div>
                <h2 className="text-3xl font-krub font-bold mb-4">
                  Sign Up To Receive <br />
                  <span className="flex justify-end">__ Our Newsletter</span>
                </h2>
              </div>
            </div>

            <div className="mt-8">
              <input
                className="border-2 border-white outline-none bg-main flex justify-end h-12 w-[400px]"
                type="text"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <p className="text-white font-krub font-normal text-xl">
                {" "}
                Follow Us On!
              </p>
              <div className="text-3xl flex gap-8">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsTwitter></BsTwitter>
                <BsWhatsapp></BsWhatsapp>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;