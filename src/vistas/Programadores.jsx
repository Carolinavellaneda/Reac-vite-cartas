import React from "react";
import "./ProgramVistas.css"

function ProgramV({len}){

return(
    <div className="lenprogram">
        
        <h1>{len.nombre}</h1>
        <img src={len.imagen2} alt={len.imagen2 + "imagen2"}></img>
        <h2>{len.nprogramador}</h2>
        <h2>{len.nprograma}</h2>
        <img src={len.imagen} alt={len.imagen + "imagen"}></img>
   
    

    </div>
)

}

export default ProgramV;
