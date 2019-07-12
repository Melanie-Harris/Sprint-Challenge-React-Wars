import React from 'react'
import './StarWars.css';

const StarCharacterComp = props => {
    return(
        <div>
            {props.setChar.map((item) => {
                return (
                    <h1 className="Header">React Wars</h1>
//                 {props.starChars.name}
//                 <img src={starChar.url} alt="character image" />
//                 {starChar.gender}
//                 {starChar.homeworld}
                )
            })}
        </div>
    )
}
         




//     return (
//         <div>
//             {props.starChars.map( (item) )=> {
//                 return( <StarCharacterComp>

//                 )
//             }}
//         </div>
//     )
// }


// <div>
//     {props.starChars.map( (items) => {
//         return(

//      ) )}
//             <div>
//                 {/* <h2 className="names">{item.name}</h2>
//                 <h2><span className="title">Birth Year: </span> {item.birth_year}</h2>
//                 <h2><span className="title">Mass: </span> {item.mass}</h2>
//                 <h2><span className="title">Height: </span> {item.height}</h2>
//                 <h2><span className="title"> Hair Color: </span> {item.hair_color}</h2> */}

//                 <h1 className="Header">React Wars</h1>
//                 {props.starChars.name}
//                 <img src={starChar.url} alt="character image" />
//                 {starChar.gender}
//                 {starChar.homeworld}
//             </div>
//         )};
//    </div>

//     );
// };

export default StarCharacterComp;