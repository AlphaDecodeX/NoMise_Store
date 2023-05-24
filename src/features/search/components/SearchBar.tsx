import React, { useState } from "react";
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
    <div className="mt-auto mb-auto w-1/2">
      <div className="p-r-5 m-r-5">
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleInputChange}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Products 🔥"
              value={inputValue}
              onKeyDown={handleKeyDown}
              required
            />
            <button
              onClick={searchProduct}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {isDropdownVisible && (
        <div
          id="dropdown"
          className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 darktext-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {searchResults.map((result, index) => (
              <li>
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
