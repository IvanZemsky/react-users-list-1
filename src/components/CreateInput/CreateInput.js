import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "./CreateInput.css";

function CreateInput(props) {
   let createInput = useRef(null);

   const handleInputFocus = (event) => {
      createInput.current.setAttribute("placeholder", "");
   };

   const handleInputBlur = (event) => {
      createInput.current.setAttribute("placeholder", "Write a name of a user");
   };

   return (
      <form className="conctol-form">
         <button className="control-turn" type="button" onClick={() => props.setControlForm('search')}>
            Return to search
         </button>
         <fieldset className="control-create">
            <input
               ref={createInput}
               type="text"
               placeholder="Write a name of a user"
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
            />
            <button
               type="button"
               className="control-create-button"
               onClick={() => props.setNewUser(createInput.current.value)}
            >
               Create
            </button>
         </fieldset>
      </form>
   );
}

export default CreateInput;
