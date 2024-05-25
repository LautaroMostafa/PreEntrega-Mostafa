import { Link } from "react-router-dom"

function Categorias() {
    return (
        <>
            <nav className="nav">
                <Link to="/category/beauty"><button>Beauty</button></Link>
                <Link to="/category/furniture"><button>Furniture</button></Link>
                <Link to="/category/groceries"><button>Groceries</button></Link>
            </nav>
        </>
    )
}

export default Categorias