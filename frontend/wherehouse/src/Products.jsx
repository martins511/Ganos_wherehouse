import React, { useState } from 'react'
import "./App.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import CreateProduct from './CreateProduct';
import { useNavigate } from 'react-router-dom';
const Products = () => {

  const [search, setSearch] = useState("")
  const [products , setproducts] = useState([]);
  const [page , setPage] = useState(false);

  const navigate = useNavigate();

  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }

  const handleDisplay = ()=>{
      setPage(x => !x)
  }
  const add =async()=>{
   const products = await axios.get("http://localhost:3500/product/all");
   setproducts(products.data);
  }

  const handleNavigate =()=>{
    navigate("/supply")
  }

  useEffect(()=>{
    add()
  },[])

  return (
    <div>
      <button className='g-t-supply' onClick={handleNavigate}>Go To Supply</button>
      <div className="head">
      <h1 >Products Stocks</h1>
     <input type='text' placeholder='Search product...' value={search} onChange={handleSearch}/>
     </div>
     <button className='main-head' onClick={handleDisplay}>Add product</button>
    <div className='supp'>
      <table>
        <thead>
          <tr className="rowhead">
            <th>ID</th>
            <th>Product Name</th>
            <th>Products Type</th>
            <th>Company Name</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {products.filter((item)=>item.productname.toLowerCase().includes(search)).map((product)=> (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productname}</td>
                  <td>{product.producttype}</td>
                  <td>{product.companyname}</td>
                  <td>{product.stock}</td>
                  <td><Link to = {`/adjust/${product.id}`} className='table-btn'>Restock</Link><Link to={`/productSupply/${product.id}`}>Supply</Link></td>
                </tr>
              )
            )}
        </tbody>
      </table>
      <div className={`create-product-dialog ${page ? 'active' : ''}`}>
          <CreateProduct add={add} handleDisplay={handleDisplay}/>
          </div>
    </div>
    </div>
  )
}

export default Products
