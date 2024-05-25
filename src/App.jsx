import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemLinsContainer/ItemListContainer"
import ItemDetail from "./components/ItemDetail/ItemDetail"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App