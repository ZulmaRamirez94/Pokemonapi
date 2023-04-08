import React, { useState } from "react"
import Pokemonapi from "./components/Pokemonapi/Pokemonapi";

const App = () => {
  //estado y funciones para obtener el listado de pokemons (o pokemones) aqui.
  const [show, setShow] = useState(false);
  const mostar = () => {
    setShow(!show);
  };
  return (
    <div className="container" style={{marginLeft:'45%'}}>
        <button onClick={() => mostar()} style={{backgroundColor:'gray', color:'white'}}>
        Fetch Pokemon
        </button>
        {show && <Pokemonapi />}
    </div>
    )
}
export default App;