import logo from './logo.svg';
import './App.css';
import NavBar from'./components/navBar/navBar.js'
import React, {Component, useState} from "react";
import ItemList from './components/itemList/itemList';

function App() {
 const aux = []
  var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
        id: 1,
        title: 'Raphtalia',
        description: 'Tate no Yuushan',
        price: 10000,
      },
      {
        id: 2,
        title: 'Rem',
        description: 'Re Zero',
        price: 10000,
      },
    ]);
    }, 300);
  })





    promise1.then((res) => {
      console.log(res)
      aux.push(...res);
    }); 
 

/*    const example =  [
      {
      id: 1,
      title: 'Raphtalia',
      description: 'Tate no Yuushan',
      price: 10000,
    },
    {
      id: 2,
      title: 'Rem',
      description: 'Re Zero',
      price: 10000,
    },
  ] */


  const [name, setNames] = useState([])
  return (
    <div className="App">
      <NavBar />
      <ItemList itemsArray = {aux} items = {name} updateItems = {setNames}/>
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
