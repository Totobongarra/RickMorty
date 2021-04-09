
import React, {Component} from 'react';

class Tarjetas extends Component{

    constructor(props){
        super(props);
        this.state = {
            colorInicial:this.props.colorFondo,
            colorFondo : this.props.colorFondo,
        }
    };

    cambiarColor(color){
        if(this.state.colorFondo !== "green")
        this.setState({
            colorFondo: color,
        })
        else
        this.setState({
            colorFondo: "green"
        })
        
        
        ;

        console.log("Cambiamos el color de fondo por " + color);
    }
;

    borrarItem(){
        this.props.borrar(this.props.info.id)

    }

render(){
    return(
        <div className="personajes" style={{backgroundColor: this.state.colorFondo}} 
        onMouseEnter= {()=>this.cambiarColor("yellow")} 
        onMouseLeave={()=>this.cambiarColor("white")}>
            <img src={this.props.info.image} alt=""/>
            <ul>
                <li>Name: {this.props.info.name}</li>
                <li>Status: {this.props.info.status}</li>
                <li> Species: {this.props.info.species}</li>
                <li>Origin: {this.props.info.origin.name}</li>

            </ul>
            <button onClick={()=>this.cambiarColor("green")}>Cambiar color</button>
            <button onClick={this.borrarItem.bind(this)}>Borrar</button>

        </div>

    )
}

};

export default Tarjetas;