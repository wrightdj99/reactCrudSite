import './App.css';
import { Component } from 'react';
import axios from 'axios';

class Delete extends Component {

  //Init an empty array in the constructor and get the Parent class
constructor(props){
  super(props);
  this.state = {product: {}, deleted: false}
}

onIdChange = (e) => {
    this.setState({id: e.target.value, deleted: false});
}

delProduct = () => {
    axios.delete("http://localhost:8080/api/products/"+this.state.id)
    .then(res=>{
        this.setState({product: res.data[0] , deleted: true});
        console.log(res.data);
    })
}

  render(){
    return (
      <div>
        {
        this.state.deleted ? <p className='notificationText'>Successful Delete</p> : null
      }
        <h1 className='sectionHeader'>Delete a listing</h1>
        <h2>Enter Product ID to delete: <input onChange={this.onIdChange} className='inputClass'></input></h2>
        <br/>
        <button onClick={this.delProduct.bind(this)} className='buttonClass'>Delete Product</button>
        </div>
    );
  }
}

export default Delete;
