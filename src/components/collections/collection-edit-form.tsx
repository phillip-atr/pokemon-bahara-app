import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import pokemonService from '../../shared/services/pokemon.service';

export const CollectionEditForm = () => {
  const { slug } = useParams<any>();
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const UpdateButton = () => {
    if (loadingButton) {
      return <div>Loading...</div>
    } else {
      return (
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Update
        </button>
      );
    }
  }

  const getPokemonInfo = async () => {
    const [{data: {data}}] = await Promise.all([pokemonService.show(slug)]);
    setPokemon(data);
    setIsLoading(false);
  };

  const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();
    
    setLoadingButton(true);

    let target = e.target as HTMLFormElement;

    const payload = {
      id: slug,
      nickname: target.nickname.value
    }
    
    pokemonService.update(payload)
      .then(() => {
        alert('Successfully updated Nickname to your pokemon.');
        setLoadingButton(false);
      })
      .catch(err => {
        console.log(err);
        alert('Invalid.');
        setLoadingButton(false);
      });
  }

  useEffect(() => {
    getPokemonInfo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }else {
    return (
      <div className="container mx-auto max-w-screen-sm">
        <div className="my-10">
          <div className="border rounded shadow-lg">
            <div className="py-4 px-8">
              <div className="flex justify-between border-b pb-1 mb-3">
                <span><strong>Pokemon: </strong>{pokemon.name}</span>
                {pokemon.nickname ? <span><strong>Current Nickname: </strong>{pokemon.nickname}</span> : ''}
              </div>
              <form action="" className="flex flex-row items-center space-x-3" onSubmit={onSubmit}>
                <label htmlFor="Search">Nickname: </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nickname" name="nickname" type="text" />
                <UpdateButton />
                <Link to="/collections" className="hover:underline">Back</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
