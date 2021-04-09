import infoRick from "../rickandmorty.json";
import Tarjetas from "./tarjetas";
import React, {Component} from "react";

class Main extends Component{
    Borrar(id){
        console.log(id);
        
        
        

    }
    render(){
    return(
        <div className="tarjetas">
            {infoRick.map ((unPersonaje,idx)=>{
                return(
                    <Tarjetas key={idx} info={unPersonaje} colorFondo= "White" borrar={this.Borrar}/>
                )
            })}
        
        </div>

    )


}
};

export default Main;