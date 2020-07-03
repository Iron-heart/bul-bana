import React from "react";
import { IconContext } from "react-icons";
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__fields">
        <input
          className="search-bar__input search-bar__input--business"
          placeholder="Ne Arıyorsunuz?"
        />
        <input className="search-bar__input" placeholder="Nerede?" />
      </div>
      <button className="search-bar__submit">
        <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
          <div>
            <FaSearchLocation />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default SearchBar;
