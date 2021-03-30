import infoRick from "../rickandmorty.json";
import Tarjetas from "./tarjetas";
function Main(){
    return(
        <div className="tarjetas">
            {infoRick.map(function(unPersonaje,idx){
                return(
                    <Tarjetas key={idx} info={unPersonaje}/>
                )
            })}
        
        </div>

    )


};

export default Main;