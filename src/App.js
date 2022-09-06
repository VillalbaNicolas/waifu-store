import logo from './logo.svg';
import './App.css';
import NavBar from'./components/navBar/navBar.js'
import React, {Component, useEffect, useState} from "react";
import ItemList from './components/itemList/itemList';
import rem from './images/products/rem01.jfif'
import raph from './images/products/raph01.jfif'



const productos = async () => {

  const product = [
    {
      id: 1,
      title: 'Raphtalia',
      description: 'Tate no Yuushan',
      price: 10000,
      pictureUrl : raph
    },
    {
      id: 2,
      title: 'Rem',
      description: 'Re Zero',
      price: 20000,
      pictureUrl : rem
    },
  ]
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 5000);
    });
}

function App() {

  const [name, setNames] = useState([])
   useEffect(() => {
    productos().then((data) => {
      setNames(data)
    })
  },[])
  return (
    <div className="App">
      <NavBar />
      <ItemList items = {name} updateItems = {setNames}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
}

export default App;
