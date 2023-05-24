import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../features/search/components/SearchBar";
import "./Navbar.css";

const NavBar: React.FC = () => {
  const imageUrl: string = "../../assets/nomise-logo.png";
  return (
    <div className="flex navbar space-x-16 p-b-5 p-t-5 w-full bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Logo imgUrl={imageUrl} />
      <SearchBar />
    </div>
  );
};

export default NavBar;
