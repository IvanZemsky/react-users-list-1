import React, { useRef, useState } from "react";
import { useEffect } from "react";
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
            onClick={() => props.setControlForm('create')}
         >
            Add a user
         </button>
         <fieldset className="control-search">
            <input
               ref={searchInput}
               type="text"
               placeholder="Search"
               onChange={() => props.setSearchRequest(searchInput.current.value)} // отправка данных родителю
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
            />
         </fieldset>
      </form>
   );
}

export default SearchInput;
