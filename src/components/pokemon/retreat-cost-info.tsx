import React from 'react'

export const RetreatCostInfo = ({retreatCost}: any) => {
  if (retreatCost) {
    return retreatCost.map((cost: any, index: number) => <p className="text-gray-700 mb-2" key={index}>{cost}</p>)
  }
  return <p className="text-gray-700 mb-2">N/A</p>
}
