import "./App.css"
import Categorias from "./components/cateogorias/Categorias"
import Carrito from "./components/carrito/Carrito"
import Logo from "./components/logo/Logo"
import Texto from "./components/Texto/Texto"

function App() {
  return (
    <>
      <div className="navBar">
        <div className="categoriasNav">
          <Categorias />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <Carrito />
        </div>
      </div>

      <div className="parrafo">
          <h1>Bienvenidos</h1>
          <Texto nombre="Jazon" edad="85"/>
          <Texto nombre="Mandela" edad="75"/>
          <Texto nombre="Arlert" edad="80"/>
          <Texto nombre="Alias" edad="90"/>
      </div>

    </>
  )
}

export default App