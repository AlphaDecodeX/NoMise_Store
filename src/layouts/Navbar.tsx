import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";
import "./Navbar.css";

const NavBar: React.FC = () => {
  const imageUrl: string = "../../assets/nomise-logo.png";
  return (
    <div className="bg-black relative">
       <div
          id="logo"
          className="flex justify-between items-center ml-5 mr-5 p-5"
        >
          <p className="text-white font-mono">NoMise</p>
          <SearchBar />
        </div>
      </div>
  );
};

export default NavBar;
