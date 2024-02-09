import React from 'react'
import "./App.css"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Supply = () => {

  const [supplies, setSupplies] = useState([]);

  const [search , setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  const add = async()=>{
    await axios.get("http://localhost:3500/supply/sup").then((res)=>{
        setSupplies(res.data)
    })
  }

  useEffect(()=>{
    add()
  },[])

  const formattedDate =(supply)=>{
    const date = new Date(supply);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  }

  const handleBackToProduct =()=>{
        navigate("/product")
  }
  
  return (
    <>
      <div className="head">
      <h1 >Supplied Stock</h1>
     <input type='text' placeholder='Search product...' value={search} onChange={handleSearch}/>
     </div>
     <button className='b-to-product' onClick={handleBackToProduct}>Back To Product</button>
    <div className='supp'>
      <table>
        <thead>
          <tr className="rowhead">
            <th>ID</th>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Customer Name</th>
            <th>Qty Supply</th>
            <th>Balance</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            supplies.filter((spy) =>spy.productname.toLowerCase().includes(search)).map((supply)=>{
              return (
                <tr key={supply.id}>
                  <td>{supply.id}</td>
                  <td>{supply.productname}</td>
                  <td>{supply.qty}</td>
                  <td>{supply.customername}</td>
                  <td>{supply.supply}</td>
                  <td>{supply.balance}</td>
                  <td>{formattedDate(supply.createdAt)}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Supply
