import React from 'react'
import RegisterForm  from '../components/auth/register-form';
import logo from '../assets/images/pokeball-logo.png';

export const Register = () => {
  return (
    <div className="flex">
      <div className="w-6/12 flex h-screen justify-center items-center bg-red-500">
        <img className="object-center" src={logo} alt="pokemball" width="300" height="240"/>
      </div>
      <div className="w-6/12">
        <div className="flex h-screen justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
