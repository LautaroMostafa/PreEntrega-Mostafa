import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCartContainer from "./components/ItemCartContainer/ItemCartContainer"
import CartProvider from "./context/cart/CartProvider"
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<ItemCartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App