import './App.css';
import { Component } from 'react';
import axios from 'axios';

class Update extends Component {

  //Init an empty array in the constructor and get the Parent class
constructor(props){
  super(props);
  this.state = {product: {}, showMessage: false}
}

onNameChange = (e) => {
    this.setState({name: e.target.value, showMessage: false});
}

onPriceChange = (e) => {
    this.setState({price: e.target.value, showMessage: false});
}

onIdChange = (e) => {
    this.setState({id: e.target.value, showMessage: false});
}

updateHandler = (e) => {
    axios.put("http://localhost:8080/api/products", {id: this.state.id, name: this.state.name, price: this.state.price})
    .then(res=> {
      console.log(res.data);
      this.setState({showMessage: true});
    }).catch(error=> {
        console.error("Error in posting this data");
    })
}

  render(){
    return (
      <div>
        {
        this.state.showMessage ? <p className='standardText'>Successful Update</p> : null
      }
      <h1 className='sectionHeader'>Update a product listing</h1>
       <h2>Enter updated Product ID: <input onChange={this.onIdChange} className='inputClass'/></h2>
       <h2>Enter updated Product Name: <input onChange={this.onNameChange} className='inputClass'/></h2>
       <h2>Enter updated Product Price: <input onChange={this.onPriceChange} className='inputClass'/></h2>
       <button onClick={this.updateHandler.bind(this)} className='buttonClass'>Submit</button>
      </div>
    );
  }
}

export default Update;
