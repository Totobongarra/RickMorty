import infoRick from "../rickandmorty.json";
import Tarjetas from "./tarjetas";
import React, {Component} from "react";

class Main extends Component{
    constructor(){
        super();
        this.state={
            items : infoRick

        }
    }

    Borrar(idTarjeta){
        console.log(idTarjeta);
        let resultado = this.state.items.filter( (item) => {
            return item.id !== idTarjeta
        })
        this.setState({items: resultado})
        

    }
    render(){
    return(
        <div className="tarjetas">
            {this.state.items.map ((unPersonaje,idx)=>{
                return(
                    <Tarjetas key={idx} info={unPersonaje} colorFondo= "White" borrar={this.Borrar.bind(this)}/>
                )
            })}
        
        </div>

    )


}
};

export default Main;