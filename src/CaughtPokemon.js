import React, {useState} from "react"
import BestPokemon from "./BestPokemon";
let CaughtPokemon = ({date, abilities1}) => {
  
    // let date = new Date().toLocaleDateString();
const [caught,setCaught] = useState(abilities1);
const catchPokemon = () => setCaught(caught.concat(abilities1[Math.floor(Math.random()*abilities1.length)]));
    return (<><BestPokemon abilities = {caught}/>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <button onClick={catchPokemon}>Catch it!</button>
     </> )
  };

  export default CaughtPokemon;