import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class Create extends Component {

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

submitHandler = (e) => {
    axios.post("http://localhost:8080/api/products", {id: this.state.id, name: this.state.name, price: this.state.price})
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
        this.state.showMessage ? <p className='notificationText'>Creation Successful</p> : null
      }
        <h1 className='sectionHeader'>Create new listing</h1>
       <h2>Enter new Product ID: <input onChange={this.onIdChange} className='inputClass'/></h2>
       <h2>Enter new Product Name: <input onChange={this.onNameChange} className='inputClass'/></h2>
       <h2>Enter new Product Price: <input onChange={this.onPriceChange} className='inputClass'/></h2>
       <br/>
       <button onClick={this.submitHandler.bind(this)} className='buttonClass'>Submit</button>
       <br/>
      </div>
    );
  }
}

export default Create;
