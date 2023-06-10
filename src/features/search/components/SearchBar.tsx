import React, { useEffect, useState } from "react";
import { ProductService } from "../../products/services/ProductService";
import SearchService from "../services/SearchService";
import productFetchResponse from "../../products/utils/productResponse";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import "../../../pages/global.css";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<productFetchResponse[]>(
    []
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchService = new SearchService();
  const productService = new ProductService();
  const navigate = useNavigate();

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = ()=>{
  //   setIsDropdownVisible(false);
  // }

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
    <div id="searchBar">
      <input
        placeholder="Search Products 🔥"
        className="focus:outline-none p-2 rounded"
        onChange={handleInputChange}
        value={inputValue}
        onKeyDown={handleKeyDown}
        required
      />
      <button
        className="focus:outline-none rounded bg-indigo-500 text-white ml-2 p-2"
        onClick={searchProduct}
      >
        Search
      </button>
      {isDropdownVisible && (
        <div
          id={searchResults.length==0?"dropdownEmpty":"dropdown"}
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-1"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {searchResults.length == 0 ? (
              <div className="mt-5 flex items-center justify-center">🤷‍♂️Couldn't find any Product</div>
            ) : null}
            {searchResults.map((result, index) => (
              <li key={index}>
                <div
                  data-index={index}
                  onClick={handleItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {result.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
