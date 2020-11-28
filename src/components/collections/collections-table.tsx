import React, { useMemo, useState } from 'react'
import {CollectionsTableRow} from './collections-table-row';

const useSortableData = (items: any, config: any = null) => {
  const [sortConfig, setSortConfig] = useState<any | null>(config);
  
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: any) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export const CollectionsTable = ({props, removePokemon}: any) => {
  const { items, requestSort, sortConfig } = useSortableData(props);
  const getClassNamesFor = (name: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  function handleChange(value: any) {
    removePokemon(value);
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort('id')} className={getClassNamesFor('id')}>
              ID
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort('pokemon_id')} className={getClassNamesFor('pokemon_id')}>
              Pokemon TCG ID
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
              Name
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort('nickname')} className={getClassNamesFor('nickname')}>
              Nickname
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort('type')} className={getClassNamesFor('type')}>
              Type
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">        
            <button onClick={() => requestSort('weakness')} className={getClassNamesFor('weakness')}>
              Weakness
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">    
            <button onClick={() => requestSort('resistance')} className={getClassNamesFor('resistance')}>
              Resistance
            </button>
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map((pokemon: any, index: number) => <CollectionsTableRow key={index} id={pokemon.id} pokemon_id={pokemon.pokemon_id} name={pokemon.name} nickname={pokemon.nickname} type={pokemon.type} weakness={pokemon.weakness} resistance={pokemon.resistance} trainer={pokemon.trainer_id} removePokemon={handleChange} />)}
      </tbody>
    </table>
  )
}
