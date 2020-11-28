import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  id: string,
  name: string,
  nickname: string | null,
  type: string | null,
  weakness: string | null,
  resistance: string | null,
  trainer: string | null
}

export const CollectionsTableRow = ({id, name, nickname, type, weakness, resistance, trainer}: Props) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        {id}
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
          <Link to={`/pokemons/${id}/trainer/${trainer}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</a>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
      </td>
    </tr>
  )
}
