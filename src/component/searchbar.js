import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      onChange={(e) => props.onSearch(e.target.value)}
      value={props.value}
      placeholder="Search..."
    />
  );
}

export default SearchBar;
