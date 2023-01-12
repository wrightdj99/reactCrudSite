import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Delete(){

const [id, setId] = useState('');
const [deleted, setDeleted] = useState(false);

function delProduct(){
    axios.delete("http://localhost:8080/api/products/"+id)
    .then(res=>{
        setDeleted(true);
        console.log(res.data);
    })
}
    return (
      <div>
        {
        deleted ? <p className='notificationText'>Successful Delete</p> : null
      }
        <h1 className='sectionHeader'>Delete a listing</h1>
        <h2>Enter Product ID to delete: <input onChange={e=>setId(e.target.value)} className='inputClass'></input></h2>
        <br/>
        <button onClick={delProduct.bind(this)} className='buttonClass'>Delete Product</button>
        </div>
    );
  }

export default Delete;
