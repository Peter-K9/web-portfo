import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TestComp from './Components/FirstComponent';
import Nav from './Components/NavBar';


/*
export default function App() {
  
}
*/

class App extends Component{
render(){
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <TestComp />
      
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
      <body className='App-Body'>
        <div>
          <p>Random text</p>

        </div>
      </body>
      <footer className='App-Footer'>
        <div>
          <p>This is the footer</p>
        </div>

      </footer>
    </div>
  );

}

}

export default App;