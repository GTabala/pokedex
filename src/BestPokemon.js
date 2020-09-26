import React from "react";

let BestPokemon = ({ abilities }) => {
  // let  = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p> My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
