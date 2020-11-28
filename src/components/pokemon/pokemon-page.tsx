import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {AttackInfo} from './attack-info';
import {HPInfo} from './hp-info';
import {WeaknessesInfo} from './weaknesses-info';
import {ResistancesInfo} from './resistances-info';
import {RetreatCostInfo} from './retreat-cost-info';
import pokemonService from '../../shared/services/pokemon.service';

export const PokemonPage = () => {
  let { slug, trainer } = useParams<any | null>();
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    async function getPokemon () {
      const response = await axios.get(`https://api.pokemontcg.io/v1/cards/${slug}`);
      setPokemon(response.data);
      setIsLoading(false);
    };
    getPokemon();
  }, [slug])

  const onSubmit = (e: React.FormEvent<EventTarget>)  => {
    setIsSelected(false);

    if (pokemon.card.supertype === 'Trainer') {
      alert('The selected card is a Trainer Card. Please choose a Pokemon Card');
      setIsSelected(true);
      return
    }

    if (pokemon.card.supertype === 'Energy') {
      alert('The selected card is a Energy Card. Please choose a Pokemon Card');
      setIsSelected(true);
      return
    }

    const payload = {
      name: pokemon.card.name,
      type: pokemon.card.types[0],
      weakness: pokemon.card.weaknesses ? pokemon.card.weaknesses[0].type : null,
      resistance: pokemon.card.resistances ? pokemon.card.resistances[0].type : null,
      trainer_id: localStorage.getItem('trainer'),
      pokemon_id: pokemon.card.id
    }
    
    pokemonService.create(payload)
      .then(() => {
        alert('Successfully store in the collection');
        setIsSelected(true);
      })
      .catch(err => {
        console.log(err);
        alert('Invalid.');
        setIsSelected(true);
      });
  }

  const SelectButton = () => {
    if (!isSelected) {
      return <div>Loading...</div>;
    }
    
    if (trainer) {
      return <div>Selected</div>;
    }

    return <button className="w-56 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" onClick={onSubmit}>Select</button>;
  }

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          
          <div className="border rounded shadow-lg">
            <div className="py-4 px-6">

              <div className="flex mb-4">
                <Link to={trainer ? '/collections' : '/pokemons'} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</Link>
              </div>

              <div className="flex flex-row">

                <div className="w-4/12">
      
                  <div className="max-w-sm">
                    <img className="w-full mb-4" src={pokemon.card.imageUrl} alt="Sunset in the mountains" />
                    <div className="flex justify-center">
                      <SelectButton />
                    </div>
                  </div>

                </div>

                <div className="w-8/12">
                  
                  <div className="flex flex-row justify-between">
                    <h1 className="text-4xl text-gray-700">{pokemon.card.name}</h1>
                    <HPInfo card={pokemon.card} />
                  </div>
                  <hr className="bg-gray-700 mt-4 mb-6"/>
                  <AttackInfo card={pokemon.card}/>
                  <div className="mb-6">
                    <h1 className="text-2xl text-gray-700">Weakness</h1>
                    <WeaknessesInfo weaknesses={pokemon.card.weaknesses}/>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-2xl text-gray-700">Resistance</h1>
                    <ResistancesInfo resistances={pokemon.card.resistances}/>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-2xl text-gray-700">Retreat Cost</h1>
                    <RetreatCostInfo retreatCost={pokemon.card.retreatCost}/>
                  </div>
                </div>
              </div>
            
            </div>
          </div> 
  
        </div>
      </div>
    )
  }
}
