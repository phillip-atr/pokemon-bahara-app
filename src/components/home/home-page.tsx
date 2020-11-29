import React, {useState, useEffect} from 'react';
import {List} from '../pokemon-list/list-of-cards';
import typeService from '../../shared/services/type.service';
import axios from 'axios';

export const HomePage: React.FC = () => {
  const [cards, setCards] = useState<any>([]);
  const [cardsCopy, setCardsCopy] = useState<any>([]);
  const [search, setSearch] = useState<any | null>(null);
  const [types, setTypes] = useState<any | null>(null);
  const [typeOptions, setTypeOptions] = useState<any | null>(null);
  const [weaknessOptions, setWeaknessOptions] = useState<any | null>(null);
  const [resistanceOptions, setResistanceOptions] = useState<any | null>(null);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [loadingClearButton, setloadingClearButton] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const ClearFilter = () => {
    if (loadingClearButton) {
      return <div className="mt-2">Loading...</div>
    } else {
      return (
        <button onClick={clearFilter} className="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Clear
        </button>
      );
    }
  }

  const DisplayList = () => {
    if (loadingClearButton) {
      return <div className="py-4 px-8">Loading...</div>
    } else {
      return (
        <List props={cards} />
      );
    }
  }

  async function getPokemonCards () {
    return await axios.get('https://api.pokemontcg.io/v1/cards');
  }

  async function getPokemonInfos () {
    const [types, response]: any = await Promise.all([
      typeService.list(),
      getPokemonCards()
    ]);
    setCards(response.data);
    setCardsCopy(response.data);
    setTypes(types.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonInfos();
  }, []);

  const filterSearch = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();
    setLoadingButton(true);

    let target = e.target as HTMLFormElement;

    const filter = {
      search: target.search.value,
      type: target.type.value,
      weakness: target.weakness.value,
      resistance: target.resistance.value
    }

    let filteredCards = cardsCopy.cards;

    if (filter.search !== '') {
      filteredCards = filteredCards.filter((card: any) => {
        return card.name.toLowerCase().indexOf(filter.search.toLowerCase()) >= 0;
      });
    }

    if (filter.type !== '') {
      filteredCards = filteredCards.filter((card: any) => {
        if (card.types !== undefined) {
          return card.types[0] === filter.type;
        }
      });
    }

    if (filter.weakness !== '') {
      filteredCards = filteredCards.filter((card: any) => {
        if (card.weaknesses !== undefined) {
          return card.weaknesses[0].type === filter.weakness;
        }
      });
    }

    if (filter.resistance !== '') {
      filteredCards = filteredCards.filter((card: any) => {
        if (card.resistances !== undefined) {
          return card.resistances[0].type === filter.resistance;
        }
      });
    }

    const props = {
      cards: filteredCards
    }

    setCards(props);
    setLoadingButton(false);
  }

  const clearFilter = async () => {
    setloadingClearButton(true);
    await Promise.all([
      setSearch(''),
      setTypeOptions(''),
      setWeaknessOptions(''),
      setResistanceOptions(''),
      getPokemonInfos()
    ]);
    setloadingClearButton(false);
  }

  const handleInput = (event: any) => {
    switch(event.target.name) {
      case 'search':
        setSearch(event.target.value);
        break;
      case 'type':
        setTypeOptions(event.target.value);
        break;
      case 'weakness':
        setWeaknessOptions(event.target.value);
        break;
      case 'resistance':
        setResistanceOptions(event.target.value);
        break;
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
            <div className="py-4 px-8">
              <form id="filter" onSubmit={filterSearch}>
                <div className="flex flex-row space-x-3">
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Search: </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" name="search" type="text" value={search || ''} onChange={handleInput} placeholder="Search..." />
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="flex flex-row items-center  space-x-3">
                      <label htmlFor="Search">Type: </label>
                      <div className="inline-block relative w-64">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="type" name="type" value={typeOptions || ''} onChange={handleInput}>
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
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="weakness" name="weakness" value={weaknessOptions || ''} onChange={handleInput}>
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
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="resistance" name="resistance" value={resistanceOptions || ''} onChange={handleInput}>
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
                    <div className="flex flex-row justify-center space-x-3">
                      <FilterButton />
                      <ClearFilter />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <DisplayList />
        </div>
      </div>
    )
  }
}