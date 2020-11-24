import React from 'react'

export const ResistancesInfo = ({resistances}: any) => {
  if (resistances) {
    return resistances.map((resistance: any, index: number) => <p className="text-gray-700 mb-2" key={index}>{resistance.type} {resistance.value}</p>)
  }
  return <p className="text-gray-700 mb-2">N/A</p>
}
