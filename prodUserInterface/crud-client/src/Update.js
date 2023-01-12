import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Update(){

const [id, setId]=useState('');
const [name, setName]=useState('');
const [price, setPrice]=useState(0);
const [message, setMessage]=useState(false);

function updateHandler(e){
    axios.put("http://localhost:8080/api/products", {id: id, name: name, price: price})
    .then(res=> {
      console.log(res.data);
      setMessage(true);
    }).catch(error=> {
        console.error("Error in posting this data");
    })
}

    return (
      <div>
        {
        message ? <p className='notificationText'>Successful Update</p> : null
      }
      
      <h1 className='sectionHeader'>Update a product listing</h1>
       <h2>Enter current Product ID: <input onChange={e=>setId(e.target.value)} className='inputClass'/></h2>
       <h2>Enter updated Product Name: <input onChange={e=>setName(e.target.value)} className='inputClass'/></h2>
       <h2>Enter updated Product Price: <input onChange={e=>setPrice(e.target.value)} className='inputClass'/></h2>
       <button onClick={updateHandler.bind(this)} className='buttonClass'>Submit</button>
      </div>
    );
}

export default Update;
