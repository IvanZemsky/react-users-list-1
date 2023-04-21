import React, { useRef } from "react";
import CreateInput from "../CreateInput/CreateInput";
import "./SearchInput.css";

function SearchInput(props) {
   let searchInput = useRef(null);

   const handleInputFocus = (event) => {
      searchInput.current.setAttribute("placeholder", "");
   };

   const handleInputBlur = (event) => {
      searchInput.current.setAttribute("placeholder", "Search");
   };

   return (
      <form className="control-form">
         <button
            className="control-turn"
            type="button"
         >
            Add a user
         </button>
         <fieldset className="control-search">
            <input
               ref={searchInput}
               type="text"
               placeholder="Search"
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
            />
            <button type="button" className="control-search-button">
               Search
            </button>
         </fieldset>
      </form>
   );
}

export default SearchInput;
