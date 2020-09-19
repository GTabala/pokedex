import React from "react"
let Logo = ({appName}) => {
    // let appName = "Pokedox";
    return (
      <header>
        <h1> Welcome to the {appName}</h1>
        <img
          src=" https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt=""
        />
      </header>
    );
  };

  export default Logo;