import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  function onSubmitHandler() {
    searchYelp(term, location);
  }

  return (
    <div className="search-bar">
      <div className="search-bar__fields">
        <input
          className="search-bar__input search-bar__input--business"
          value={term}
          placeholder="Ne Arıyorsunuz?"
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          className="search-bar__input"
          value={location}
          placeholder="Nerede?"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button className="search-bar__submit" onClick={onSubmitHandler}>
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
