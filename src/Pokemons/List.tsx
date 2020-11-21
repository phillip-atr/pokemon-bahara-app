import React from 'react'
import {Card} from './Card';

export const List = (prop: any) => {

  const list = [];
  
  for (let i = 0 ; i < prop.cards.cards.length ; i++) {
    list.push(<Card key={i} image={prop.cards.cards[i].imageUrl} />)
  }

  return (
    <div className="flex flex-wrap justify-around">
      {list}
    </div>
  )
}
