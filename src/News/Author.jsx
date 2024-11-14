import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Author = ({ author }) => {
  const { img, name, published_date } = author;
  return (
    <div className="flex justify-between bg-gray-200 items-center px-5 py-4">
      <div>
        <img className="w-12 rounded-full" src={img} alt="" />
      </div>
      <div className="text-left mr-auto px-3">
        <h3>{name}</h3>
        <p>{published_date}</p>
      </div>
      <div className="flex text-2xl">
        <CiBookmark />
        <CiShare2 />
      </div>
    </div>
  );
};

export default Author;
