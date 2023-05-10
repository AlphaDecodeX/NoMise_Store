import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";

const NavBar: React.FC = ()=>{
    const imageUrl: string = "https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png";
    const classForLogo: string = "h-14 w-14 p-3";
    const classForSearchBar: string = "p-4";
    return(
        <div className="flex bg-indigo-600	justify-between">
            <Logo imgUrl={imageUrl} className = {classForLogo}/>
            <SearchBar className = {classForSearchBar}/>
        </div>
    );
}

export default NavBar;