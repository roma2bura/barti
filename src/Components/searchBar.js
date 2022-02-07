import React, { useState, useEffect } from "react";
import "./searchBar.css";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ placeholder, data, pickedElement }) => {

  useEffect(() => {
    pickedElement();
  }, [localStorage.getItem("searchQuery")]);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    localStorage.setItem("searchQuery", e.target.value);

    const newFilter = data.filter((value) => {
      return value.fullName
        .toLowerCase()
        .includes(localStorage.getItem("searchQuery").toLowerCase());
    });

    if (localStorage.getItem("searchQuery") === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    localStorage.setItem("searchQuery", "");
  };

  const pickedElementFunc = (e) => {
    localStorage.setItem("searchQuery", e.target.text);
    pickedElement(e.target.text);

    setFilteredData([]);
  };

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={localStorage.getItem("searchQuery")}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length !== 0 ? (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            ) : (
              <SearchIcon />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 20).map((element) => (
              <a
                className="dataItem"
                href="#"
                onClick={(e) => pickedElementFunc(e)}
              >
                <p>{element.fullName}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
