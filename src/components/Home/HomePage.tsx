import React, {useState, useEffect} from 'react';
import {List} from '../Pokemons';
import axios from 'axios';

export const HomePage: React.FC = () => {
  const [cards, setCards] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCards () {
      const response = await axios.get('https://api.pokemontcg.io/v1/cards');
      setCards(response.data);
      setIsLoading(false);
    };
    getCards();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          <List props={cards} />
        </div>
      </div>
    )
  }
}