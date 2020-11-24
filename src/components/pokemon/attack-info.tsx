import React from 'react'

interface ISkill {
  name: string,
  text: string,
  damage: string,
  cost: string[]
}

const DisplayInfo = ({name, text, damage, cost}: ISkill) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl text-gray-700">{name} | {damage || ''}</h1>
      <div className="flex flex-row space-x-3">
        {cost.map((cost, index) => <p key={index}>{cost}</p>)}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

export const AttackInfo = ({card}: any) => {
  if (card.attacks) {
    return card.attacks.map((attack: any, index: number) => <DisplayInfo key={index} name={attack.name} text={attack.text} damage={attack.damage} cost={attack.cost} />)
  } else {
    return (
      <div className="mb-6">
        <h1 className="text-2xl text-gray-700">Rules</h1>
        <p className="text-gray-700 mb-2">{card.text}</p>
      </div>
    )
  }
}
