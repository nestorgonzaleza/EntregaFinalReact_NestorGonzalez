import NavBar from "./components/NavBar"
import ItemListContainer from './components/pages/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ItemDetailContainer from './components/pages/ItemDetailContainer'
import MiCustomProvider from "./components/miContexto"
import Cart from "./components/pages/Cart"



function App() {
  return (
    <MiCustomProvider>
      <BrowserRouter>
          <NavBar />
          <main className='p-4 grow'>

            <Routes>
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/' element={<Home />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<p>404</p>} />
            </Routes>

          </main>
      </BrowserRouter> 
    </MiCustomProvider>
  );
}

export default App;

