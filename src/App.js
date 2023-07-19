import NavBar from "./components/NavBar"
import ItemListContainer from './components/pages/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ItemDetailContainer from './components/pages/ItemDetailContainer'


function App() {
  return (
   
      <BrowserRouter>
        <NavBar />
        <main className='p-4 grow'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>

        </main>
      </BrowserRouter> 
  );
}

export default App;

