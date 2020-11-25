import React, { useEffect, useState } from 'react'
import typeService from '../../shared/services/type.service';
import classService from '../../shared/services/class.service';
import groupService from '../../shared/services/group.service';
import trainerService from '../../shared/services/trainer.service';
import { useHistory, useParams } from 'react-router-dom';

const TrainerForm: React.FC = () => {
  const [types, setTypes] = useState<any | null>(null);
  const [groups, setGroups] = useState<any | null>(null);
  const [classes, setClasses] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const history = useHistory();
  let { slug } = useParams<any | null>();

  const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();

    let target = e.target as HTMLFormElement;

    const payload = {
      name: target.username.value,
      age: target.age.value,
      gender: target.gender.value,
      type_id: parseInt(target.type.value),
      class_id: parseInt(target.class.value),
      group_id: parseInt(target.group.value),
      user_id: parseInt(slug)
    }

    trainerService.create(payload)
      .then(() => {
        alert('Successfully created new Trainer');
        history.push('/pokemons');
      })
      .catch(err => {
        console.log(err);
        alert('Invalid registration');
      });
  }

  async function setOptions () {

    const [types, classes, groups] = await Promise.all([
      typeService.list(),
      classService.list(),
      groupService.list()
    ])
    setTypes(types.data);
    setClasses(classes.data);
    setGroups(groups.data);
    setIsLoading(false);
  }

  useEffect(() => {
    setOptions();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }else {
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" name="age" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <div className="relative">
              <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" name="gender">
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Types
            </label>
            <div className="relative">
              <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" name="type">
                {types.data.map((type: any) => <option key={type.id} value={type.id}>{type.name}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
              Class
            </label>
            <div className="relative">
              <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" name="class">
                {classes.data.map((classes: any) => <option key={classes.id} value={classes.id}>{classes.name}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="group">
              Group
            </label>
            <div className="relative">
              <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="group" name="group">
                {groups.data.map((group: any) => <option key={group.id} value={group.id}>{group.name}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
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
}

export default TrainerForm;
