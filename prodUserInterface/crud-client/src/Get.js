import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Get() {

  //Init an empty array in the constructor and get the Parent class

const [product, setProduct] = useState({});

function getProduct() {
    axios.get("http://localhost:8080/api/products/"+product.id)
    .then(res=>{
        if(res.data[0] === undefined){
          setProduct({product: {
            name: "Unknown Product",
            price: 0
          }});
          console.log(this.state.product.price);
        }
        else{
          console.log(res.data[0]);
          setProduct(res.data[0]);
        }
    })
}
    return (
      <div>
        <h1 className='sectionHeader'>Get information about a listing</h1>
        <h2>Enter Product ID to get its info: <input onChange={e=>setProduct({id:e.target.value})} className='inputClass'></input></h2>
        <br/>
        <button onClick={getProduct.bind(this)} className="buttonClass">Get Product</button>
        <br/>
        <br/>
        <p className="standardText">Name: {product.name}</p>
        <p className="standardText">Price: {!product.price ? null : '$' + product.price}</p>
      </div>
    );}

export default Get;
