import React from "react";
import './SearchInput.css';

function SearchInput() {
   return (
      <fieldset className="control-search">
         <input type="text" placeholder="Search" />
         <button className="control-search-button">Search</button>
      </fieldset>
   );
}

export default SearchInput;
