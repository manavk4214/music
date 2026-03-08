import { IoSearch } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { IoRadioSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function BottomNav() {
    const navigate = useNavigate();
    return(
        <nav className="bottom-nav">
            <li onClick={() => navigate("/")}><MdOutlineHome /></li>
            <li onClick={() => navigate("/library")}><MdOutlineLibraryMusic /></li>
            <li onClick={() => navigate("/search")}><IoSearch /></li>
            <li onClick={() => navigate("/radio")}><IoRadioSharp></IoRadioSharp></li>
            
        </nav>
    )
}