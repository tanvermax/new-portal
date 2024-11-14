import Header from "../Components/Header";
import Navber from "../Components/Navber";
import LatestNews from "../News/LatestNews";
import LeftNavber from "./LeftNavber";
import MainSec from "./MainSec";
import RigtNavber from "./RigtNavber";

const HomeLayout = () => {
  return (
    <div>
      <header className="">
        <Header></Header>
        <section className="w-11/12 mx-auto py-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto py-5 grid grid-cols-12">
        <aside className="left col-span-3">
            <LeftNavber></LeftNavber>
        </aside>
        <section className="col-span-6 ">
            <MainSec></MainSec>
        </section>
        <aside className="col-span-3 ">
            <RigtNavber></RigtNavber>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
