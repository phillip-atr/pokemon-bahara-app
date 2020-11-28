import React, { useEffect, useState } from 'react'
import {CollectionsTable} from './collections-table';
import typeService from '../../shared/services/type.service';
import pokemonService from '../../shared/services/pokemon.service';

export const CollectionsPage = () => {
  const [pokemons, setPokemons] = useState<any | null>(null);
  const [types, setTypes] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const trainer_id = localStorage.getItem('trainer');

  const FilterButton = () => {
    if (loadingButton) {
      return <div className="mt-2">Loading...</div>
    } else {
      return (
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Filter
        </button>
      );
    }
  }

  const getPokemonInfos = async () => {
    const [types, {data: {data}}] = await Promise.all([
      typeService.list(),
      pokemonService.listByTrainer(trainer_id)
    ])
    setTypes(types.data);
    setPokemons(data);
    setIsLoading(false);
  }

  const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();
    
    setLoadingButton(true);

    let target = e.target as HTMLFormElement;

    const payload = {
      trainer: localStorage.getItem('trainer'),
      search: target.search.value,
      type: target.type.value,
      weakness: target.weakness.value,
      resistance: target.resistance.value
    }
    
    pokemonService.listByFilter(payload)
      .then((res) => {
        setPokemons(res.data.data);
        setLoadingButton(false);
      })
      .catch(err => {
        console.log(err);
        alert('Invalid.');
      });
  }

  useEffect(() => {
    getPokemonInfos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
            <div className="py-4 px-8">
              <form id="filter" onSubmit={onSubmit}>
                <div className="flex flex-row space-x-3">
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Search: </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" name="search" type="text" placeholder="Search..." />
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Type: </label>
                      <div className="inline-block relative w-64">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="type" name="type">
                          <option value="">Choose Type</option>
                          {types.data.map((type: any, index: number) => <option key={index} value={type.name}>{type.name}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Weakness: </label>
                      <div className="inline-block relative w-64">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="weakness" name="weakness">
                          <option value="">Choose Type</option>
                          {types.data.map((type: any, index: number) => <option key={index} value={type.name}>{type.name}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Resistance: </label>
                      <div className="inline-block relative w-64">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="resistance" name="resistance">
                          <option value="">Choose Type</option>
                          {types.data.map((type: any, index: number) => <option key={index} value={type.name}>{type.name}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="flex flex-row justify-center">
                      <FilterButton />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <CollectionsTable props={pokemons} />
          </div>
        </div>
      </div>
    )
  }
}
