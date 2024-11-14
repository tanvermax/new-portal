import Rating from "react-rating";
import Author from "./Author";
import { FaEye } from "react-icons/fa"
const Newslist = ({ alldata }) => {
  const { title, author, image_url, details, rating, total_view } = alldata;
  return (
    <div>
      <div>
        <Author author={author}></Author>
      </div>

      <div className="border-[1px]">
        <h1 className="text-xl font-bold text-left py-2">{title}</h1>
        <img className="py-2" src={image_url} alt="" />
        <p className="text-left">{details}</p>
        <div></div>
      </div>
      <hr />
      <div className="flex justify-between px-5 py-6">
        <h3 className="items-center flex gap-3"><Rating />{rating.number}</h3>
        <h3  className="flex items-center gap-2" ><FaEye />{total_view}</h3>
      </div>
    </div>
  );
};

export default Newslist;
