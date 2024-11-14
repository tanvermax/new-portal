import { Link } from "react-router-dom";
import usericon  from './../assets/user.png'

const Navber = () => {
  return (
    <div className="flex  justify-between items-center">
      <div></div>
      <div className="nav space-x-5 items-center">
        <Link to={"/"}>Home</Link>

        <Link to={"/about"}>About</Link>

        <Link to={"/career"}>Career</Link>
      </div>
      <div className="loging flex gap-5 items-center">
        <img src={usericon} alt="" />
        <button className="btn border-teal-600">Log in</button>
      </div>
    </div>
  );
};

export default Navber;
