import React, {useRef} from "react";

export default function User({user}) {
   const arrowIcon = useRef(null);
   const userCard = useRef(null);
   const editCard = useRef(null);

   const openCardDesc = (event) => {
      if (userCard.current.style.height) {
         arrowIcon.current.style.transform = 'translateY(-50%) rotate(90deg)';
         userCard.current.style.height = null;
      } 
      else {
         arrowIcon.current.style.transform = 'translateY(-50%) rotate(-90deg)';
         userCard.current.style.height = userCard.current.scrollHeight + "px";
      }
   };

   return (
      <div className="user-card" ref={userCard}>
         <p className="card-name" onClick={openCardDesc}>
            {user.name}
            <svg ref={arrowIcon} className="card-open-arrow" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
               <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
            </svg>
         </p>
         <div className="card-info">
            <button ref={editCard} type="text" className="card-info-btn">
               <svg enableBackground="new 0 0 64 64" width="37" height="37" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g>
                     <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/>
                     <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/>
                     <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/>
                     <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/>
                  </g>
               </svg>
            </button>
            <p className="card-info_age">Age: <input className="card-info_input" type="text" readOnly value={user.age}/></p>
            <p className="card-info_desc">Description: <input className="card-info_input" type="text" readOnly value={user.desc}/></p>
         </div>
      </div>
   );
}
