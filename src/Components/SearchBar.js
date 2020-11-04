import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (prop) => {
  return (
    <SearchBarStyled
      placeholder="Search for a product..."
      onChange={(event) => prop.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
