import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";
// import "./navbar.css";

const NavBar: React.FC = ()=>{
    const imageUrl: string = "https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png";
    const classForLogo: string = "flex items-center h-full";
    return(
        <div className="flex bg-purple-500">
            <Logo imgUrl={imageUrl} className = {classForLogo}/>
            <SearchBar/>
        </div>
    );
}

export default NavBar;