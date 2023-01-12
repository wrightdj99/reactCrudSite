import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GetAll() {
  const [products, setProducts] = useState([]);
  //Init an empty array in the constructor and get the Parent class

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/')
    .then(res=> {
      console.log(res.data);
      setProducts(res.data);
    }).catch(error=>{
      console.error('Error', error);
    })
  }, []);
      return (
        <div>
          <h1 className='sectionHeader'>Home</h1>
          <h1>Your Products Listed</h1>
          <div className='listingsHome'>
          <ul className='liClass'>
          {products.map(product => (
            <li key={product.id}>{product.name} (id: {product.id}) - ${product.price % 1 !== 0 ? product.price : product.price + ".00"}</li>
            ))}
          </ul>
          </div>
        </div>
      )
}

export default GetAll;
