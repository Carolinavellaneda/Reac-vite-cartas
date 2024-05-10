import "./CardP.css";
import {Link} from "react-router-dom";

function CardP ({titulo = "titulo", descripcion ="descripcion"}){
    return(
        <div className='CardP'> 

        <Link to = {titulo}>
            <h2>{titulo}</h2>
        </Link>
        <p>{descripcion}</p>


     </div>
    )
}
export default CardP;