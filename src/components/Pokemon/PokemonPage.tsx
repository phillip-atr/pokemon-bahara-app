import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const PokemonPage = () => {
  let { slug } = useParams<any>();
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPokemon () {
      const response = await axios.get(`https://api.pokemontcg.io/v1/cards/${slug}`);
      setPokemon(response.data);
      setIsLoading(false);
    };
    getPokemon();
  }, [slug])

  console.log(pokemon);

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          
          <div className="border rounded shadow-lg">
            <div className="py-4 px-6">

            <Link to="/pokemons" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</Link>

            <div className="max-w-sm mt-4">
              <img className="w-full" src={pokemon.card.imageUrl} alt="Sunset in the mountains" />
            </div>
            
            </div>
          </div>
  
        </div>
      </div>
    )
  }
}
