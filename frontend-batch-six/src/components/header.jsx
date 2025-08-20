
import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header(){
    return(
        <div className="bg-[#FFFF00]">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/SignUp">Sign Up</Link>
        </div>
    )
}