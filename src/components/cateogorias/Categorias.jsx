import "./categorias.css"

function Categorias() {
    const categoriasProductos = ["Juegos","Peliculas","Series"]
    return (
            <div className="categorias">
            {
                categoriasProductos.map((categoria)=> (
                    <>
                    <button>{categoria}</button>
                    </>
                ))
            }
            </div>
    )
}

export default Categorias