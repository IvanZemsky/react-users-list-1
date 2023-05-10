import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CreateInput from "./components/CreateInput/CreateInput";
import Output from "./components/Output/Output";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
   let [users, setUsers] = useState([]);
   let [controlForm, setControlForm] = useState("search");
   let [searchRequest, setSearchRequest] = useState("");
   
   const setNewUser = (newUser) => {
      if (newUser === "" || users.find((item) => item.name === newUser)) return;
      setUsers([
         ...users,
         {
            id: users.length,
            name: newUser,
            age: "Не указано",
            desc: "Не указано",
         },
      ]);
   };

   const handleUserUpdate = (updatedUser, index) => {
      setUsers(prevUsers => {
         const newUsers = [...prevUsers];
         newUsers[index] = updatedUser;
         return newUsers;
      });
   }

   return (
      <div className="app">
         <div className="control">
            {controlForm === "search" ? (
               <SearchInput
                  setControlForm={setControlForm}
                  setSearchRequest={setSearchRequest}
               />
            ) : (
               <CreateInput
                  setControlForm={setControlForm}
                  setNewUser={setNewUser}
               />
            )}

            <Output users={users} searchRequest={searchRequest} handleUserUpdate={handleUserUpdate}/>
         </div>
      </div>
   );
}

export default App;
