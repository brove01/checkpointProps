import React from 'react';
import './App.css';
import Profile from './profile/Profile';


function App() {
  
  return (
    <div className="App">
      <header></header>
      <section>
      </section>
      <article><Profile fullName={["Badreddine", "Hajji"]} bio="A young man in the 22 years old of his a" profession="Student of the 3 year licence of Computer Science and Embaded Systeme and micro"/></article>
      <footer></footer>
    </div>
  );
}

export default App;
