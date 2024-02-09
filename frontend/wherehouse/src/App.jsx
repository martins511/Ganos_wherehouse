import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Supply from './Supply';
import Products from './Products';
import StockAdjusment from './StockAdjusment';
import SupplyProduct from './SupplyProduct';
import CreateProduct from './CreateProduct';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Routes>
          {/* <Route path='/' element ={<CreateProduct/>}/> */}
          <Route path='/productSupply/:id' element={<SupplyProduct/>}/>
          <Route path='/supply' element={<Supply/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/adjust/:id' element={<StockAdjusment/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
