import React from 'react'

export const TrainerPage = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="my-10">
         <div className="border rounded shadow-lg">
            <div className="py-4 px-8">


              <h1 className="font-bold text-gray-500 text-2xl mb-3">Trainer Information</h1>

              <hr className="mb-3"/>

              <div className="flex flex-row justify-center">

                <div className="w-1/3">
                  
                  <div className="flex flex-row mb-3">
                    
                    <div className="w-4/12">
                      <strong>Name</strong>
                    </div>
                    
                    <div className="w-8/12">
                      Phillip Arman Rios
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-4/12">
                      <strong>Age</strong>
                    </div>
                    
                    <div className="w-8/12">
                      22
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-4/12">
                      <strong>Gender</strong>
                    </div>
                    
                    <div className="w-8/12">
                      Male
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-4/12">
                      <strong>Group</strong>
                    </div>
                    
                    <div className="w-8/12">
                      Team Rocket
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-4/12">
                      <strong>Type</strong>
                    </div>
                    
                    <div className="w-8/12">
                      Rock
                    </div>

                  </div>

                  <div className="flex flex-row">
                    
                    <div className="w-4/12">
                      <strong>Class</strong>
                    </div>
                    
                    <div className="w-8/12">
                      Gym Leader
                    </div>

                  </div>

                </div>

                <div className="w-1/3">
                  
                  <div className="flex flex-row mb-3">
                      
                    <div className="w-6/12">
                      <strong>Number of Pokemons</strong>
                    </div>
                    
                    <div className="w-6/12">
                      24
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-6/12">
                      <strong>Number of Types</strong>
                    </div>
                    
                    <div className="w-6/12">
                      8
                    </div>

                  </div>

                  <div className="flex flex-row mb-3">
                    
                    <div className="w-6/12">
                      <strong>Catch Limit</strong>
                    </div>
                    
                    <div className="w-6/12">
                      6
                    </div>

                  </div>

                  <div className="flex flex-row">
                    
                    <div className="w-6/12">
                      <strong>Catch left</strong>
                    </div>
                    
                    <div className="w-6/12">
                      3
                    </div>

                  </div>

                </div>

                <div className="w-1/3">
                  
                  <div className="flex flex-wrap space-x-4">

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                    
                  </div>

                </div>

              </div>

            </div>
         </div>
      </div>
    </div>
  )
}
