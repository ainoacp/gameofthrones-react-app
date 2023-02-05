// import React from "react";

// export default function ChronologyGallery({list}){
//     return (
//         <div className="c-gallery-crono">
//         <button>0</button>
//         {/* list.length > 0 && */}
//           {list.map((character, index) => (
//               <div  className="c-card-crono"  key={index}>
//                     <img className="c-img-Crono" src={character.image} alt="character" />
//                     <p>{character.name}</p>
//                     <p>{character?.age?.age}</p>
//                     <div class="rect"></div>
//                     </div>
//             ))
    
//             }
    
//         </div>
//       );
//     }

//import './GalleryCharacters.scss'


export default function ChronologyGallery({characters}) {
    return (
    <>
            <div className="gallery">
            {characters.map((character) => (
            <figure character={character} key={character._id} className="card">
                    <img className="c-img-Crono" src={character.image} alt="character" />
                     <p>{character.name}</p>
                     <p>{character?.age?.age}</p>
                     <div class="rect"></div>
                     
            </figure>))}
        </div>
        </>
    )}