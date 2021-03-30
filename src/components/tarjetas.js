function Tarjetas(props){
    return(
        <div className="personajes">
            <img src={props.info.image} alt=""/>
            <ul>
                <li>Name: {props.info.name}</li>
                <li>Status: {props.info.status}</li>
                <li> Species: {props.info.species}</li>
                <li>Origin: {props.info.origin.name}</li>

            </ul>


        </div>

    )
};

export default Tarjetas;