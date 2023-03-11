import React, { useState } from "react";
import SearchService from "../services/SearchService";
import { productFetchResponse } from "../../products/utils/productResponse";

type Props = {
  className: string;
};

const SearchBar: React.FC<Props> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<
    productFetchResponse | null
  >(null);

  const searchService = new SearchService();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSelectedSuggestion(null);
    setShowDropdown(true);
  };

  const handleSuggestionClick = (suggestion: productFetchResponse) => {
    setInputValue(suggestion.name);
    setShowDropdown(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setShowDropdown(false);
    } else if (event.key === "Enter" && selectedSuggestion !== null) {
      setInputValue(selectedSuggestion.name);
      setShowDropdown(false);
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const products: productFetchResponse[] = searchService.autoCompleteAndSuggest(inputValue);
      const currentIndex = selectedSuggestion
        ? products.findIndex((p) => p.name === selectedSuggestion.name)
        : -1;
      const nextIndex =
        event.key === "ArrowUp"
          ? currentIndex - 1
          : currentIndex + 1;
      if (nextIndex >= 0 && nextIndex < products.length) {
        setSelectedSuggestion(products[nextIndex]);
      } else {
        setSelectedSuggestion(null);
      }
    }
  };

  const suggestions = searchService.autoCompleteAndSuggest(inputValue);

  return (
    <div className={`relative ${className}`}>
      <input
        placeholder="Search"
        value={inputValue}
        className="p-2 rounded-l-lg border-2 border-r-0 border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
        Search
      </button>
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white w-full mt-2 border border-gray-300 rounded-b-lg shadow-lg">
          {suggestions.map((suggestion) => (
            <li
              className={`p-2 cursor-pointer ${
                selectedSuggestion && selectedSuggestion.name === suggestion.name
                  ? "bg-gray-100"
                  : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
