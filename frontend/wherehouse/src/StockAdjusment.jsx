import React from "react";
import './App.css';
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const StockAdjusment = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [user , setuser] = useState({});

    const handleChange = (e)=>{
        setuser((user)=>({...user,[e.target.name]:e.target.value}))
    }

    
  

    useEffect(()=>{
        axios.get(`http://localhost:3500/product/${id}`).then((res)=>{
          setuser(res.data)
        })
    },[id])
    
    let add;
let stock = Number(user.stock);
let received = Number(user.received);

const handleAdjust = () => {
  if (!isNaN(stock) && !isNaN(received)) {
    // Check if stock and received are valid numbers
    add = stock + received;
    axios.put(`http://localhost:3500/stockAdjust/update`, { ...user, bal: add });
    navigate("/product");
  } else {
    alert("Invalid stock or received");
  }
};

console.log(user);    
    
  return (
    <>
    <div className="stock-head">
    <h1 >Products Stocks</h1>
     </div>
    <div className="adjustment-container">
      <div className="labels">
        <label htmlFor="product name">Product Name</label>
        <label htmlFor="">Quantity</label>
        <label htmlFor="">Received</label>
      </div>
      <div className="inputs">
        <input type="text" value={user.productname} name="productname"  onChange={handleChange}/>
        <input type="text" value={user.stock} name="qty" onChange={handleChange}/>
        <input type="text" value={user.received } name="received" onChange={handleChange}/>
      </div>
    </div>
    <div className="actions">
    <Link to="/product"><button className="right-btn">Cancle</button></Link><button onClick={handleAdjust}>Adjust</button>
    </div>
    </>
  );
};

export default StockAdjusment;
