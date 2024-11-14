import { useLoaderData } from "react-router-dom";


const NewsLayout = () => {
const {data}= useLoaderData();
console.log(data);


    return (
        <div>
            <h2>this category has {data.length}</h2>
        </div>
    );
};

export default NewsLayout;