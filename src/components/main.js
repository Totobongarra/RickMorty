//import infoRick from "../rickandmorty.json";
import Tarjetas from "./tarjetas";
import React, {Component} from "react";

class Main extends Component{
    constructor(){
        super();
        this.state={
            items : [],
            contador: 0

        }
    }

    componentDidMount(){
        this.resetDefault();
     }

     resetDefault(){
         fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(result=>result.json())
        .then(data=>{
            this.setState({items: data.results, nextPage: data.info.next, lastPage: data.info.last, contador: 0});
            console.log(data.results);
        })
     }

    Borrar(idTarjeta){
        console.log(idTarjeta);
        let resultado = this.state.items.filter( (item) => {
            return item.id !== idTarjeta
        })
        this.setState({items: resultado, contador: this.state.contador +1})
        console.log("Borraste " + this.state.contador + " tarjeta/s")

        

    }

    agregarTarjeta(){
        fetch(this.state.nextPage)
        .then(result=>result.json())
        .then(data=>{
                this.setState({items: data.results, nextPage: data.info.next, lastPage: data.info.last});
                console.log(data.results);
        })



    }



    render(){
    return(
        <div className="tarjetas">
            <div>
            <button onClick={this.resetDefault.bind(this)}> Reset </button>
            <button onClick={this.agregarTarjeta.bind(this)}> More cards </button>
            <div className= "contador">
                    Tarjetas Eliminadas = {this.state.contador}
            </div>
            </div>
            <br/>
            <br/>
            <br/>
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