import "./App.css";

function App() {
   let action = 'search';

   return (
      <div className="app">
         <div className="control">
            <form className="control-form">
               {
                  action == 'search'
                     ?  <button className="control-turn-add">Add a user</button>
                     :  <button className="control-turn-search">Return to search</button>
               }

               <fieldset className="control-search">
                  <input type="text" placeholder="Search" />
                  <button className="control-search-button">Search</button>
               </fieldset>

            </form>
            <div className="output"></div>
         </div>
      </div>
   );
}

export default App;

/*
<fieldset className="control-create">
                  <button className="control-create-close">Close</button>
                  <input type="text" placeholder="Write a name of user" />
                  <button className="control-create-button">Create</button>
               </fieldset>
               */