import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface ICard {
  id: string,
  image: string
}

export const Card = ({ id , image}: ICard) => {
  const history = useHistory();

  const redirect = () => {
    history.push(`/pokemons/${id}`);
  }

  return (
    <img className="w-56 max-w-sm transform hover:scale-110 cursor-pointer" src={image} alt="Sunset in the mountains" onClick={redirect}/>
  )
  
}
