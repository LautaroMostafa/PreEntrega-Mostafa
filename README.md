# E-Commerce App - React

Es una aplicación web de comercio en la cual se venden una variedad de objetos como: Muebles, Comida y productos de belleza.

## Funciones Principales

### Pantalla de Productos

- Ordena los productos en tarjeta con nombre y foto.
- Tiene un sistema de filtrado por categorias.
- Al hacer click en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de detalles del Producto

- Proporciona los detalles del producto.
- Te permite seleccionar la cantidad deceada que quieres comprar.
- Permite agregar el producto al carrito.

### Pantalla de Carrito

- Proporciona un breve detalle del producto agregado.
- Muestra la cantidad seleccionada del producto y su precio.
- Muestra el precio en total del producto asi como el de todos los productos juntos.

<img src="./screenshot/pagina.mp4" width="300" >

### Navegación 

```javascript
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
            <Route path="/orders" element={<Order/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
```

- **Link 1 - Productos:** Categorías y productos (stack principal).
- **Link 2 - Órdenes:** Historial de órdenes realizadas.
- **Link 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.

## Tecnologías Utilizadas

- **React Router DOM:** Gestiona la navegación entre pantallas.
- **React:** Framework para contruccion de interfaces.
- **API** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Firebase, etc.).
4. Ejecuta la aplicación: `npm start`