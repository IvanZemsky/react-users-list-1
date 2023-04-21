import React, { useState } from "react";
import "./App.css";
import CreateInput from "./components/CreateInput/CreateInput";
import Output from "./components/Output/Output";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
   let [users, setUsers] = useState([]);

   const turnControlForm = (newForm) => {
      setControlForm(newForm);
   }

   const setNewUser = (newUser) => {
      setUsers([...users, newUser]);
      console.log(users);
   };

   let [controlForm, setControlForm] = useState({
      status: "search",
      component: <SearchInput users={users} setNewUser={setNewUser} turnControlForm={turnControlForm} />,
   });

   return (
      <div className="app">
         <div className="control">
            {controlForm.component}
            <Output users={users} />
         </div>
      </div>
   );
}

export default App;

/*
   const turnControlForm = () => {
      console.log(1);

      if (controlForm === "search") {
         setControlForm({
            status: "create",
            component: (
               <CreateInput
                  turnControlForm={turnControlForm}
                  users={users}
                  setNewUser={setNewUser}
               />
            ),
         });
      } else {
         // formAction === 'create'
         setControlForm({
            status: "search",
            component: <SearchInput turnControlForm={turnControlForm} />
         });
      }
   };
   */