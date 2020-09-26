import React from "react";

// const logWhenClicked = () => console.log("Hooray!");


let Logo = ({appName,handleClick}) => {
    // let appName = "Pokedox";
    return (
      <header>
        <h1> Welcome to the {appName}</h1>
        <img onClick={handleClick}
          src=" https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt=""
        />
      </header>
    );
  };

  export default Logo;