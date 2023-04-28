import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CreateInput from "./components/CreateInput/CreateInput";
import Output from "./components/Output/Output";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
   let [users, setUsers] = useState([]);
   let [controlForm, setControlForm] = useState("search");
   let [searchRequest, setSearchRequest] = useState('');

   /*
   useEffect(() => {
      console.log(searchRequest);
      console.log(users);
   }, [searchRequest, users])
   */
  
   const setNewUser = (newUser) => {
      if (newUser === '' || users.find(item => item.name === newUser)) return;
      setUsers([...users, {name: newUser, age: 'Не указано', desc: 'Не указано' }]);
   }

   return (
      <div className="app">
         <div className="control">
            {controlForm === "search" ? (
               <SearchInput setControlForm={setControlForm} setSearchRequest={setSearchRequest} />
            ) : (
               <CreateInput setControlForm={setControlForm} setNewUser={setNewUser} />
            )}

            <Output users={users} searchRequest={searchRequest} />
         </div>
      </div>
   );
}

export default App;
