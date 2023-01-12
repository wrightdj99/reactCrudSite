import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Create (){

const [id, setId]=useState('');
const [name, setName]=useState('');
const [price, setPrice]=useState(0);
const [message, setMessage]=useState(false);

function submitHandler(e){
    axios.post("http://localhost:8080/api/products", {id: id, name: name, price: price})
    .then(res=> {
        console.log(res.data);
        setMessage(true);
    }).catch(error=> {
        console.error("Error in posting this data");
    })}

    return (
      <div>
        {
        message ? <p className='notificationText'>Creation Successful</p> : null
      }
        <h1 className='sectionHeader'>Create new listing</h1>
       <h2>Enter new Product ID: <input onChange={e=>setId(e.target.value)} className='inputClass'/></h2>
       <h2>Enter new Product Name: <input onChange={e=>setName(e.target.value)} className='inputClass'/></h2>
       <h2>Enter new Product Price: <input onChange={e=>setPrice(e.target.value)} className='inputClass'/></h2>
       <br/>
       <button onClick={submitHandler.bind(this)} className='buttonClass'>Submit</button>
       <br/>
      </div>
    );
}

export default Create;
