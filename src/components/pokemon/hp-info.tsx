import React from 'react'

export const HPInfo = ({card}: any) => {
  if (card.supertype === 'Energy' || card.supertype === 'Trainer') {
    return <div></div>
  }
  return <h1 className="text-4xl text-gray-700">HP {card.hp}</h1>
}
