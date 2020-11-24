import React from 'react'

export const WeaknessesInfo = ({weaknesses}: any) => {
  if (weaknesses) {
    return weaknesses.map((weakness: any, index: number) => <p className="text-gray-700 mb-2" key={index}>{weakness.type} {weakness.value}</p>)
  }
  return <p className="text-gray-700 mb-2">N/A</p>
}
