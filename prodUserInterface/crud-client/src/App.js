import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Routes } from 'react-router-dom';
import GetAll from './GetAll';
import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import Logo from './IBAY_LOGO.png';

class App extends Component {

  render(){
  return (
      <div className="App">
        <img src={Logo} alt='Company Logo'/>
        <div className='NavBar'>
        <br/>
          <Link to="/"><button type="button" className="buttonClass">Home</button></Link>
          <Link to="/Create"><button type="button" className="buttonClass">Create Listing</button></Link>
          <Link to="/Update"><button type="button" className="buttonClass">Update Listing</button></Link>
          <Link to="/Get"><button type="button" className="buttonClass">Get Listing Info</button></Link>
          <Link to="/Delete"><button type="button" className="buttonClass">Delete Listing</button></Link>
        </div>
          <Switch className="linkClass">
            <Route exact path="/" component={GetAll}></Route>
            <Route  path="/Create" component={Create}></Route>
            <Route  path="/Update" component={Update}></Route>
            <Route  path="/Get" component={Get}></Route>
            <Route  path="/Delete" component={Delete}></Route>
          </Switch>
      </div>
  );
}
}

export default App;
