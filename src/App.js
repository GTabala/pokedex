import React from "react";
// import logo from './logo.svg';
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

let App = () => {
  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon  date = {new Date().toLocaleDateString()} />
    </div>
  );
};
// let BestPokemon = () => {
//   let abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//       <p> My favourite Pokemon is Squirtle</p>
//       <ul>
//         {abilities.map((item, ind) => (
//           <li key={ind}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// let Logo = () => {
//   let appName = "Pokedox";
//   return (
//     <header>
//       <h1> Welcome to the {appName}</h1>
//       <img
//         src=" https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//         alt=""
//       />
//     </header>
//   );
// };
// let CaughtPokemon = () => {
//   let date = new Date().toLocaleDateString();
//   return <p>Caught 0 Pokemon on {date}</p>;
// };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
