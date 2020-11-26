import React from 'react'
import {Card} from './card';

interface IList {
  props: {
    cards: any[]
  }
}

export const List = ({ props: {cards} }: IList) => {
  return (
    <div className="flex flex-wrap justify-around space-x-2 space-y-4">
      {cards.map(card => <Card key={card.id} id={card.id} image={card.imageUrl} /> )}
    </div>
  )
}
