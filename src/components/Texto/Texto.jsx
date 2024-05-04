import "./Texto.css"

function ComponenteTexto(props) {

    return (
        <div className="texto">
            <h3>{props.nombre}</h3> 
            <p>Tiene {props.edad} años</p>
        </div>
    )
}

export default ComponenteTexto