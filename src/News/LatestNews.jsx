import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-gray-300 flex items-center text-wrap">
      <button className="bg-[#D72050] m-2 p-2 text-[18px]">Latest</button>
      <Marquee pauseOnHover={true} className="space-x-10 ">
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
