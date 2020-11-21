import React from 'react'

export const Card = (prop: any) => {
  
  return (
    <div className="max-w-sm rounded shadow-lg mb-6 bg-gray-100">
      <img className="w-full" src={prop.image} alt="Sunset in the mountains" />
      <div className="flex flex-row justify-center space-x-6 m-4">
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">Select</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>
      </div>
    </div>
  )
}
