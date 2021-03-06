import './App.css';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './components/Inicio/Inicio';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { Finalizar } from './components/FinalizarCompra/Finalizar';

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route
							path="/productos"
							element={
								<ItemListContainer greeting="P R O D U C T O S" />
							}
						/>
						<Route
							path="/categoria/:categoryId"
							element={
								<ItemListContainer greeting="C A T E G O R I A" />
							}
						/>
						<Route
							path="/productos/:productId"
							element={<ItemDetailContainer />}
						/>
						<Route path="*" element={<h1>Page not found.</h1>} />
						<Route
							path="/cart"
							element={<Cart titulo="C A R R I T O" />}
						/>
						<Route
							path="/carrito/finalizar"
							element={<Finalizar />}
						/>
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
