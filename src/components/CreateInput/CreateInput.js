import React from "react";
import './CreateInput.css';

function CreateInput() {
   return (
      <fieldset className="control-create">
         <button className="control-create-button">Close</button>
         <input type="text" placeholder="Write a name of user" />
         <button className="control-create-button">Create</button>
      </fieldset>
   );
}

export default CreateInput;
