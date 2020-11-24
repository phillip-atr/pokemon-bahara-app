import React from 'react'

export const HPInfo = ({card}: any) => {
  if (card.hp !== 'None') {
    return <h1 className="text-4xl text-gray-700">HP {card.hp}</h1>
  }
  return <div></div>
}
