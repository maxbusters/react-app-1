import logo from './logo.svg';
import './App.css';
import React from 'react';

const user = {
  firstName: 'Max',
  lastName: 'Busters'
}

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, wordld'
);

function formatName(user){
  return user.firstName+user.lastName;
}

function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}</h1>;
  } else{
    return <h1>Hello, Stranger</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {element}
        {getGreeting(user)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
