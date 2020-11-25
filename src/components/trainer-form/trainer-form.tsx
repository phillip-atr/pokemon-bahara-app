import React, { useEffect, useState } from 'react'
import typeService from '../../shared/services/type.service';

export const TrainerForm = () => {
  const [types, setTypes] = useState<string | null>(null);
  const [groups, setGroups] = useState<string | null>(null);
  const [classes, setClasses] = useState<string | null>(null);

  useEffect(() => {
    console.log(typeService.list);
  })

  return (
    <div className="w-full max-w-lg">
      <form id="login" className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" />
        </div>
				<div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" name="age" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Gender
          </label>
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender" name="gender">
            <option disabled>Select Option</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
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
        </div>
      </form>
    </div>
  )
}
