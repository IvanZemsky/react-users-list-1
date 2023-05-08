import React, { useRef } from "react";
import { useState } from "react";

export default function User({ user }) {
   let [isEditor, setIsEditor] = useState(false);
   let [editFormData, setEditFormData] = useState({
      userAge: user.age,
      userDesc: user.desc
   });

   const arrowIcon = useRef(null);
   const userCard = useRef(null);
   const editCard = useRef(null);
   const cardInputs = [useRef(null), useRef(null)];
   const cardSave = useRef(null);

   const openCardDesc = () => {
      if (userCard.current.style.height) {
         arrowIcon.current.style.transform = "translateY(-50%) rotate(90deg)";
         userCard.current.style.height = null;
      } else {
         arrowIcon.current.style.transform = "translateY(-50%) rotate(-90deg)";
         userCard.current.style.height = userCard.current.scrollHeight + "px";
      }
   };

   const openCardEditor = (event) => {
      event.preventDefault();
      setIsEditor(true);

      cardInputs.forEach(ref => {
         ref.current.style.backgroundColor = '#2e2e2e';
         ref.current.removeAttribute('readonly');
      });

   };

   const handleInputEnter = (event) => { // upscaling input by onChange
      event.target.setAttribute("size", event.target.value.length || 10);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setIsEditor(false);

      cardInputs.forEach(ref => {
         ref.current.style.backgroundColor = null;
         ref.current.removeAttribute('readonly', 'readonly');


      });
   }

   const handleInputChange = (event) => {
      setEditFormData({
         ...editFormData,
         [event.target.name]: event.target.value
      })
   }

   return (
      <div className="user-card" ref={userCard}>
         <p className="card-name" onClick={openCardDesc}>
            {user.name}
            <svg
               ref={arrowIcon}
               className="card-open-arrow"
               xmlns="http://www.w3.org/2000/svg"
               width="17"
               height="17"
               viewBox="0 0 24 24"
            >
               <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
            </svg>
         </p>
         <form className="card-info">

            <button
               className="card-info-btn"
               ref={editCard}
               onClick={openCardEditor}
               type="text"
            >
               <svg
                  enableBackground="new 0 0 64 64"
                  width="37"
                  height="37"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g>
                     <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                     <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                     <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                     <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                  </g>
               </svg>
            </button>

            {isEditor && (
               <button ref={cardSave} className="card-info-save" onClick={handleSubmit} type="text">
               <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
               >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                     id="SVGRepo_tracerCarrier"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                     {" "}
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z"
                        fill="#ffc012"
                     />{" "}
                  </g>
               </svg>
            </button>
            )}

            <p className="card-info_age">
               Age:{" "}
               <input
                  className="card-info_input"
                  ref={cardInputs[0]}
                  name="userAge"
                  id="userAge"
                  size="10"
                  maxLength="30"
                  onKeyDown={handleInputEnter}
                  onKeyUp={handleInputEnter}
                  onKeyPress={handleInputEnter}
                  onChange={(event) => {
                     handleInputEnter(event);
                     handleInputChange(event);
                  }}
                  type="text"
                  readOnly
                  value={editFormData.userAge}
               />
            </p>
            <p className="card-info_desc">
               Description:{" "}
               <input
                  className="card-info_input"
                  ref={cardInputs[1]}
                  name="userDesc"
                  id="userDesc"
                  size="10"
                  maxLength="30"
                  onKeyDown={handleInputEnter}
                  onKeyUp={handleInputEnter}
                  onKeyPress={handleInputEnter}
                  onChange={(event) => {
                     handleInputEnter(event);
                     handleInputChange(event);
                  }}
                  type="text"
                  readOnly
                  value={editFormData.userDesc}
               />
            </p>
         </form>
      </div>
   );
}
