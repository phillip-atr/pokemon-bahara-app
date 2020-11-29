import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  id: string,
  pokemon_id: string,
  name: string,
  nickname: string | null,
  type: string | null,
  weakness: string | null,
  resistance: string | null,
  trainer: string | null,
  removePokemon: any
}

export const CollectionsTableRow = ({id, pokemon_id, name, nickname, type, weakness, resistance, trainer, removePokemon}: Props) => {

  const handleChange = () => {
    removePokemon(id);
  }

  const DeleteButton = () => {
    return <button onClick={handleChange} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {pokemon_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {nickname || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {type || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {weakness || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {resistance || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-center space-x-3">
          <Link to={`/pokemons/${pokemon_id}/trainer/${trainer}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
          <Link to={`/collections/${id}/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
          <DeleteButton />
        </div>
      </td>
    </tr>
  )
}
