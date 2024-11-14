import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavber = () => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="font-semibold text-left">All Caterogy{category.length}</h1>
     <div className="flex flex-col">
        {
            category.map( itemcategory => <NavLink to={`/category/${itemcategory.category_id}`} className="btn text-left my-2 " key={itemcategory.category_id}>{itemcategory.category_name}</NavLink> )
        }
     </div>
    </div>
  );
};

export default LeftNavber;
