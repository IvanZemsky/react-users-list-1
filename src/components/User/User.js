import React, {useRef} from "react";

export default function User({i, users}) {
   const arrowIcon = useRef(null);
   const userCard = useRef(null);

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
            {users.name}
            <svg ref={arrowIcon} className="card-open-arrow" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
               <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
            </svg>
         </p>
         <div className="card-info">
            <p className="card-info_age">Возраст: {users.age}</p>
            <p className="card-info_desc">Описание: {users.desc}</p>
         </div>
      </div>
   );
}
