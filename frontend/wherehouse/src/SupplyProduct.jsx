import React from 'react'
import './App.css';
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const SupplyProduct = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [supply , setSupply] = useState({});

  const [user , setUser] = useState({})

    const handleChange = (e)=>{
        setSupply((user)=>({...user,[e.target.name]:e.target.value}))
    }

    const handleSupplyChange =(e)=>{
          setUser((user)=>({...user,[e.target.name]:e.target.value}))
    }
  

    useEffect(()=>{
        axios.get(`http://localhost:3500/product/${id}`).then((res)=>{
          setSupply(res.data)
        })
    },[id])
    let add;
let stock = Number(supply.stock);
let suppliedQty = Number(user.item);

const recordSupply = async() =>{
   await axios.post("http://localhost:3500/supply/createsupply",{productname:supply.productname,qty:supply.stock,customername:user.customername,supply:suppliedQty,balance:add})
}

const makeSupply = async() => {
  if (!isNaN(stock) && !isNaN(suppliedQty)) {
    // Check if stock and received are valid numbers
    add = stock - suppliedQty;
    await axios.put(`http://localhost:3500/stockAdjust/update`, { ...supply, bal: add });
    recordSupply()
    navigate("/product");
  } else {
    alert("Invalid stock or received");
  }
  
};

  return (
    <>
    <div className="stock-head">
    <h1 >Make A Supply</h1>
     </div>
    <div className="supply-container">
      <div className="labels">
        <label htmlFor="product name">Product Name</label>
        <label htmlFor="">Quantity</label>
        <label htmlFor="">CustomerName</label>
        <label htmlFor="">Supply</label>
      </div>
      <div className="inputs">
        <input type="text" value={supply.productname} name="productname"  onChange={handleChange}/>
        <input type="text" value={supply.stock} name="qty" onChange={handleChange}/>
        <input type="text" value={user.customername} name="customername" onChange={handleSupplyChange}/>
        <input type="text" value={user.item} name="item" onChange={handleSupplyChange}/>
      </div>
    </div>
    <div className="actions">
    <Link to="/product"><button className="right-btn">Cancle</button></Link><button onClick={makeSupply}>Supply</button>
    </div>
    </>
  )
}

export default SupplyProduct
