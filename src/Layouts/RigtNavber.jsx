import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Findeus from "./Findeus";

const RigtNavber = () => {
  return (

   <>
    <div className="pb-5">
      <h2 className="font-semibold text-xl  py-3 text-left">Login With</h2>
      <div className="gap-3 ">
        <button className=" btn w-full border-black hover:border-blue-500 hover:text-blue-600">
          <FaGoogle />
          Login with Google
        </button>
        <button className="   btn w-full mt-3 border-black hover:border-blue-500 hover:text-blue-600">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
    <Findeus></Findeus>
    </>
  );
};

export default RigtNavber;
