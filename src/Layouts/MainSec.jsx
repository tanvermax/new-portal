import { Outlet } from "react-router-dom";


const MainSec = () => {
    return (
        <div>
        <h1>Dragon News Home</h1> 
        <Outlet></Outlet>           
        </div>
    );
};

export default MainSec;