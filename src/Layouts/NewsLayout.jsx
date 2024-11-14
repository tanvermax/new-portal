import { useLoaderData } from "react-router-dom";
import Newslist from "../News/Newslist";


const NewsLayout = () => {
const {data}= useLoaderData();
console.log(data);


    return (
        <div>
            <h2>this category has {data.length}</h2>
            <div>
                {
                    data.map( alldata=><Newslist key={alldata.id} alldata={alldata}></Newslist> )
                }
            </div>
        </div>
    );
};

export default NewsLayout;