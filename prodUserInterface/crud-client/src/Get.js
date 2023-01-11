import './App.css';
import { Component } from 'react';
import axios from 'axios';

class Get extends Component {

  //Init an empty array in the constructor and get the Parent class
constructor(props){
  super(props);
  this.state = {product: {}}
}

onIdChange = (e) => {
    this.setState({id: e.target.value});
}

getProduct = () => {
    axios.get("http://localhost:8080/api/products/"+this.state.id)
    .then(res=>{
        if(res.data[0] === undefined){
          this.setState({product: {
            name: "Unknown Product",
            price: 0
          }});
          console.log(this.state.product.price);
        }
        else{
          console.log(res.data[0]);
          this.setState({product: res.data[0]});
        }
    })
}

  render(){
    return (
      <div>
        <h1 className='sectionHeader'>Get information about a listing</h1>
        <h2>Enter Product ID to get its info: <input onChange={this.onIdChange} className='inputClass'></input></h2>
        <br/>
        <button onClick={this.getProduct.bind(this)} className="buttonClass">Get Product</button>
        <br/>
        <br/>
        <p className="standardText">Name: {this.state.product.name}</p>
        <p className="standardText">Price: {!this.state.product.price ? null : '$' + this.state.product.price}</p>
      </div>
    );
  }
}

export default Get;
