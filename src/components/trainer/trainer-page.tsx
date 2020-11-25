import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import trainerService from '../../shared/services/trainer.service';

export const TrainerPage = () => {
  const [trainer, setTrainer] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = localStorage.getItem('user');

  useEffect(() => {
    const getTrainer = async () => {
      const [{data: {data}}] = await Promise.all([trainerService.show(user)]);
      setTrainer(data);
      setIsLoading(false);
    }
    getTrainer();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>
  }else {
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
                        {trainer.name}
                      </div>
  
                    </div>
  
                    <div className="flex flex-row mb-3">
                      
                      <div className="w-4/12">
                        <strong>Age</strong>
                      </div>
                      
                      <div className="w-8/12">
                        {trainer.age}
                      </div>
  
                    </div>
  
                    <div className="flex flex-row mb-3">
                      
                      <div className="w-4/12">
                        <strong>Gender</strong>
                      </div>
                      
                      <div className="w-8/12">
                        {trainer.gender === 'MALE' ? 'Male' : 'Female'}
                      </div>
  
                    </div>
  
                    <div className="flex flex-row mb-3">
                      
                      <div className="w-4/12">
                        <strong>Group</strong>
                      </div>
                      
                      <div className="w-8/12">
                        {trainer.group.name}
                      </div>
  
                    </div>
  
                    <div className="flex flex-row mb-3">
                      
                      <div className="w-4/12">
                        <strong>Type</strong>
                      </div>
                      
                      <div className="w-8/12">
                        {trainer.type.name}
                      </div>
  
                    </div>
  
                    <div className="flex flex-row">
                      
                      <div className="w-4/12">
                        <strong>Class</strong>
                      </div>
                      
                      <div className="w-8/12">
                        {trainer.class.name}
                      </div>
  
                    </div>
  
                  </div>
  
                  <div className="w-1/3">
                    
                    <div className="flex flex-row mb-3">
                        
                      <div className="w-6/12">
                        <strong>Number of Pokemons</strong>
                      </div>
                      
                      <div className="w-6/12">
                        {trainer.number_of_pokemons}
                      </div>
  
                    </div>
  
                    {/* <div className="flex flex-row mb-3">
                      
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
  
                    </div> */}
  
                  </div>
  
                  <div className="w-1/3">
                    
                    <div className="flex flex-wrap space-x-4">
  
                      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={`trainer/${user}/edit`}>
                        Edit
                      </Link>
    
                    </div>
  
                  </div>
  
                </div>
  
              </div>
           </div>
        </div>
      </div>
    )
  }
}
