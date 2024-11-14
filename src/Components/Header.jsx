import moment from "moment/moment";
import logo from "./../assets/logo.png";




const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="logo">
        <img className="w-[400px] mx-auto" src={logo} alt="" />
      </div>
      <p className="text-[18px] text-gray-500">
        Journalism Without Fear or Favour
      </p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
