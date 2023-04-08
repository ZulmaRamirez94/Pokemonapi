import React, {useState, useEffect} from 'react'

const Pokemonapi = () => {

    const [pokemones, setPokemones] = useState ([]);
    const [show, setShow] = useState(true);

    useEffect (() => {
        async function obtnerPokemones(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
            const data = await response.json();

            setPokemones(data.results);
            console.log(pokemones);
        }
        obtnerPokemones();
    }, [])

    return (
        <div style={{margin:'auto'}}>
           <ul>
                {
                    pokemones.map((pokemon, index) =>{
                    return <li key={index}>{pokemon.name}</li> 
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemonapi
