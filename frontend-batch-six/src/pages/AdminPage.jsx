import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./login";

export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">
            <div className="h-full w-[300px] bg-blue-500 flex flex-col ">
                <Link to="/admin/products">products</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/reviews">Reviews</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] bg-amber-400">
                <Routes path="/*">
                    <Route path="/products" element={<LoginPage/>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
        </div>
    )
}