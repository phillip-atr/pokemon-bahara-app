import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import authService from '../../shared/services/auth.service';

const LoginForm: React.FC = () => {
  const [user, setUser] = useState<any>(null)
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();

    let target = e.target as HTMLFormElement;

    const payload = {
      email: target.username.value,
      password: target.password.value
    }

    authService.login(payload)
      .then((res) => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
        alert('Invalid user. Please try again.');
      });
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', user.id);
      history.push('/pokemons');
    }
  })

  return (
    <div className="w-full max-w-lg">
      <form id="login" className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <Link to="/register" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
