import React from 'react'
import "./App.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const CreateProduct = ({add,handleDisplay}) => {
  
    const [product , setProduct] = useState({})

    const handleChange = (e) =>{
        setProduct(user =>({...user,[e.target.name]:e.target.value}))
    }


    const createProduct = async()=>{
      if(!isNaN(product.stock) && product.productname && product.producttype && product.companyname){
        await axios.post("http://localhost:3500/product/createproduct",product);
        handleDisplay()
        await add()
        setProduct({})
      }else{
        alert("Invalid product")
      }
      
    }

  return (
    <div className='create-product'>
    <div className="createproduct-stock-head">
    <h1 >Add A Product</h1>
     </div>
    <div className="product-container">
      <div className="labels">
        <label >Product Name</label>
        <label >ProductType</label>
        <label >CompanyName</label>
        <label >Stock</label>
      </div>
      <div className="inputs">
        <input type="text" value={product.productname || ''} name="productname"  onChange={handleChange}/>
        <input type="text" value={product.producttype || ''} name="producttype" onChange={handleChange}/>
        <input type="text" value={product.companyname || ''} name="companyname" onChange={handleChange}/>
        <input type="text" value={product.stock || ''} name="stock" onChange={handleChange}/>
      </div>
    </div>
    <div className="createproduct-actions">
    <Link to="/product"><button className="right-btn" onClick={()=>handleDisplay()}>Cancle</button></Link><button onClick={createProduct}>Add Product</button>
    </div>
    </div>
  )
}

export default CreateProduct
