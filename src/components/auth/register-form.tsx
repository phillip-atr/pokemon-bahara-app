import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import authService from '../../shared/services/auth.service';

const RegisterForm: React.FC = () => {
	const history = useHistory();

	const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();

    let target = e.target as HTMLFormElement;

    const payload = {
			name: target.username.value,
			email: target.email.value,
			password: target.password.value,
			password_confirmation: target.password_confirmation.value
    }

    authService.register(payload)
      .then((res) => {
				alert('Successfully registered.');
        history.push(`/register/${res.data.user.id}`);
      })
      .catch(err => {
        alert('Invalid registration.');
      });
  }

	return (
		<div className="w-full max-w-lg">
      <form id="login" className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" />
        </div>
				<div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" />
        </div>
				<div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
            Password Confirmation
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password_confirmation" name="password_confirmation" type="password" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
					<Link to="/" className="hover:underline">Back</Link>
        </div>
      </form>
    </div>
	)
}

export default RegisterForm;