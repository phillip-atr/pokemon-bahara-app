import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/images/pokeball-logo.png';
 
 export const Header = () => {
  const history = useHistory();
  
  const onSubmit = () => {
    localStorage.clear();
    history.push('/');
  }

   return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-3">
        <img className="object-center" src={logo} alt="pokemball" width="24" height="24"/>
        <span className="font-semibold text-xl tracking-tight">Pokemon Baraha</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4" to="/pokemons">
            Pokemons
          </Link>
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4" to="/trainer">
            Trainer
          </Link>
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white" to="/collections">
            Collections
          </Link>
          <button className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4 float-right" onClick={onSubmit}>Logout</button>
        </div>
      </div>
    </nav>
   )
 }
 