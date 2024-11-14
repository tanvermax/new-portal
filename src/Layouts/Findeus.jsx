import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Findeus = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl  py-3 text-left">Find Us On</h2>

      <div className="join flex join-vertical  ">
        <button className="btn join-item justify-start "><FaFacebookF />Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default Findeus;
