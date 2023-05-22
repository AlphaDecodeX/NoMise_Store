import React, { useState } from "react";
import { ProductService } from "../../products/services/ProductService";
import SearchService from "../services/SearchService";
import productFetchResponse from "../../products/utils/productResponse";
import {useNavigate } from "react-router-dom";
import "./SearchBar.css";
import "../../../pages/global.css";
type Props = {
  className: string;
};

const SearchBar: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<productFetchResponse[]>(
    []
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchService = new SearchService();
  const productService = new ProductService();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setSelectedItemIndex(-1); // Reset the selected item index when input value changes
    if (inputValue) {
      const results = searchService.autoCompleteAndSuggest(inputValue);
      setSearchResults(results);
      setIsDropdownVisible(true);
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        setSelectedItemIndex((prevIndex) =>
          prevIndex <= 0 ? searchResults.length - 1 : prevIndex - 1
        );
        break;
      case "ArrowDown":
        event.preventDefault();
        setSelectedItemIndex((prevIndex) =>
          prevIndex >= searchResults.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case "Enter":
        event.preventDefault();
        if (
          selectedItemIndex >= 0 &&
          selectedItemIndex < searchResults.length
        ) {
          setInputValue(searchResults[selectedItemIndex].name);
          setIsDropdownVisible(false);
        }
        break;
      case "Escape":
        event.preventDefault();
        setIsDropdownVisible(false);
        break;
    }
  };

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const index = parseInt(
      event.currentTarget.getAttribute("data-index") || ""
    );
    if (!isNaN(index)) {
      setInputValue(searchResults[index].name);
      setIsDropdownVisible(false);
    }
  };

  const searchProduct = () => {
    const productFetched = productService.fetchProductByName(inputValue);
    if (productFetched) {
      navigate(`/product/${productFetched.external_id}`);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="joined-div p-r-5 m-r-5">
        <input
          placeholder="Search"
          className="search-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>

        <button className="common-button" onClick={searchProduct}>
          Search
        </button>
      </div>

      {isDropdownVisible && (
        <div className="absolute overflow-auto	z-10 top-full left-0 h-screen w-full bg-white border-2 border-gray-400 rounded-b-lg">
          {searchResults.map((result, index) => (
            <div
              className={`px-2 py-1 cursor-pointer ${
                selectedItemIndex === index ? "bg-gray-200" : ""
              }`}
              data-index={index}
              onClick={handleItemClick}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
