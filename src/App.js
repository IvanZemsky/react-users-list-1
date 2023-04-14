import React, { useState } from "react";
import "./App.css";
import CreateInput from "./components/CreateInput/CreateInput";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
   
   let [formAction, setFormAction] = useState("search");
   let [inputForm, setInputForm] = useState(<SearchInput/>);

   const turnFormAction = (event) => {
      event.preventDefault();

      if (formAction === 'search') {
         setFormAction("create");
         setInputForm(<CreateInput/>);
      }
      else {
         // formAction === 'create
         setFormAction("search");
         setInputForm(<SearchInput/>);
      }
   };

   return (
      <div className="app">
         <div className="control">
            <form className="control-form">
               {formAction === "search" 
               ? (
                  <button className="control-turn" onClick={turnFormAction}>
                     Add a user
                  </button>
               ) 
               : (
                  <button className="control-turn" onClick={turnFormAction}>Return to search</button>
               )}

               {inputForm}

            </form>
            <div className="output"></div>
         </div>
      </div>
   );
}

export default App;
