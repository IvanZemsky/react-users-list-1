import React, { useState } from "react";
import "./App.css";
import CreateInput from "./components/CreateInput/CreateInput";
import Output from "./components/Output/Output";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
   let [users, setUsers] = useState([]);
   let [controlForm, setControlForm] = useState("search");

   const setNewUser = (newUser) => {
      setUsers([...users, {name: newUser, age: 'Не указано', desc: 'Не указано' }]);
      console.log(users);
   }

   return (
      <div className="app">
         <div className="control">
            {controlForm === "search" ? (
               <SearchInput setControlForm={setControlForm} />
            ) : (
               <CreateInput setControlForm={setControlForm} setNewUser={setNewUser} />
            )}

            <Output users={users} />
         </div>
      </div>
   );
}

export default App;
