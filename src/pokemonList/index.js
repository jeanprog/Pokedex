import  { useState, useEffect } from 'react';
import { api } from '../service';



const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
      
      
      const fetchPokemons = async () => {
        
        let namepoke = 'ditto'
        api.get(`pokemon/${namepoke}`)
        .then(response => {
          const {
            id,
            weight,
            height,
            stats,
            sprites,
            types,
            species,
          } = response.data;

          setPokemons({
            id,
            weight,
            height,
            stats,
            sprites,
            types,
            species,
          })
        })
        .catch(error => {
          console.error(error);
        });
          
        };
        fetchPokemons();
        
    }, []);
 console.log(pokemons)
/* 
 const pokeSearch = pokemons.filter((pokemon)=> { 
      return pokemon.name ==  "pikachu"
 }) 
 console.log(pokeSearch) 

 const pokeurl = pokeSearch.map((x) => { 
    return x.url
 })
console.log(pokeurl) */

  return (
  <div>{pokemons.species.name} </div>
)
   
   
}
export default PokemonList;