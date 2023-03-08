import React from "react";

type Props = {
  className: string;
};

const SearchBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        placeholder="Search"
        className="p-2 rounded-l-lg border-2 border-r-0 border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      ></input>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
