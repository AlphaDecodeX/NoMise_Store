import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";
import "./Navbar.css";

const NavBar: React.FC = ()=>{
    const imageUrl: string = "https://api.logomaster.ai/icon/abstract_1552992.svg";
    const classForLogo: string = "h-14 w-14 p-3";
    const classForSearchBar: string = "p-4";
    return(
        <div className="space-between p-b-5 p-t-5 nav-container">
            <div className="joined-div">
                <Logo imgUrl={imageUrl} className = "m-l-15"/>
                <div className="title m-l-5">NoMise Store</div>
            </div>
            <div className="joined-div p-r-5 m-r-5">
                <i className="search-icon m-i-5 fa fa-search"></i>
                <input placeholder="Search" className="search-input"></input>
            </div>
            
            {/* <SearchBar className = {classForSearchBar}/> */}
        </div>
    );
}

export default NavBar;