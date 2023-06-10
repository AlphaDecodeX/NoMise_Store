import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";
import "./Navbar.css";

const NavBar: React.FC = () => {
  const imageUrl: string = "../../assets/nomise-logo.png";
  return (
    <div className="bg-black flex flex-col items-center justify-center p-5">
    <p className="text-white">All Copyrights reserved 2023</p>
    <div className="text-white flex" id="socials">
      <p>Twitter</p>
      <p className="ml-5">Discord</p>
    </div>
  </div>
  );
};

export default NavBar;
