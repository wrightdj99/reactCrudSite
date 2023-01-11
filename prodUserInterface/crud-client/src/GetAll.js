import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class GetAll extends Component {

  //Init an empty array in the constructor and get the Parent class
constructor(props){
  super(props);
  this.state = {products: []}
}

componentDidMount(){
  axios.get('http://localhost:8080/api/products/')
  .then(res=> {
    console.log(res.data);
    this.setState({products:res.data});
  }).catch(error=>{
    console.error('Error', error);
  })
}

  render(){
    return (
      <div>
        <h1 className='sectionHeader'>Home</h1>
        <h1>Your Products Listed</h1>
        <ul className='liClass'>
        {this.state.products.map(product => (
          <li key={product.id}>{product.name} (id: {product.id}) - ${product.price % 1 != 0 ? product.price : product.price + ".00"}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GetAll;
