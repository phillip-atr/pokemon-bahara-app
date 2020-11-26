import React, { useEffect, useState } from 'react'
import typeService from '../../shared/services/type.service';
import classService from '../../shared/services/class.service';
import groupService from '../../shared/services/group.service';
import trainerService from '../../shared/services/trainer.service';
import { Link, useHistory, useParams } from 'react-router-dom';

const TypeOptions = ({props}: any) => {
  return props.map((type: any) => <option key={type.id} value={type.id}>{type.name}</option>)
}

const ClassOptions = ({props}: any) => {
  return props.map((classes: any) => <option key={classes.id} value={classes.id}>{classes.name}</option>)
}

const GroupOptions = ({props}: any) => {
  return props.map((group: any) => <option key={group.id} value={group.id}>{group.name}</option>)
}

export const EditTrainerForm = () => {
  const [types, setTypes] = useState<any | null>(null);
  const [groups, setGroups] = useState<any | null>(null);
  const [classes, setClasses] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [name, setName] = useState<string | null>('');
  const [age, setAge] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>('');
  const [typeForm, setTypeForm] = useState<number | null>(null);
  const [classForm, setClassForm] = useState<number | null>(null);
  const [groupForm, setGroupForm] = useState<number | null>(null);
  const history = useHistory();
  let { slug } = useParams<any | null>();

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLFormElement;
    if (target.name === 'username') {
      setName(target.value);
    }
    if (target.name === 'age') {
      setAge(target.value);
    }
    if (target.name === 'gender') {
      setGender(target.value);
    }
    if (target.name === 'type') {
      setTypeForm(target.value);
    }
    if (target.name === 'class') {
      setClassForm(target.value);
    }
    if (target.name === 'group') {
      setGroupForm(target.value);
    }
  }

  const onSubmit = (e: React.FormEvent<EventTarget>): void  => {
    e.preventDefault();

    let target = e.target as HTMLFormElement;

    const payload = {
      id: parseInt(slug),
      name: target.username.value,
      age: target.age.value,
      gender: target.gender.value,
      type_id: parseInt(target.type.value),
      class_id: parseInt(target.class.value),
      group_id: parseInt(target.group.value),
      user_id: parseInt(slug)
    }

    trainerService.update(payload)
      .then(() => {
        alert('Successfully Updated Trainer Info');
        history.push('/trainer');
      })
      .catch(err => {
        console.log(err);
        alert('Invalid');
      });
  }

  const setFields = async () => {
    const [types, classes, groups, {data: {data}}] = await Promise.all([
      typeService.list(),
      classService.list(),
      groupService.list(),
      trainerService.show(slug)
    ])
    setTypes(types.data);
    setClasses(classes.data);
    setGroups(groups.data);
    setName(data.name);
    setAge(data.age);
    setGender(data.gender);
    setTypeForm(data.type.id);
    setClassForm(data.class.id);
    setGroupForm(data.group.id);
    setIsLoading(false);
  }

  useEffect(() => {
    setFields();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <div className="my-10">
          <div className="border rounded shadow-lg">
            <div className="py-4 px-8">
  
              <div className="w-full max-w-lg mx-auto">
                <form id="login" onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" value={name || ''} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                      Age
                    </label>
                    <input className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" name="age" type="text" value={age || ''} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                      Gender
                    </label>
                    <div className="relative">
                      <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" name="gender" value={gender || ''} onChange={handleChange}>
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
                      <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" name="type" value={typeForm || ''} onChange={handleChange}>
                        <TypeOptions props={types.data} />
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
                      <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" name="class" value={classForm || ''} onChange={handleChange}>
                        <ClassOptions props={classes.data} />
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
                      <select className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="group" name="group" value={groupForm || ''} onChange={handleChange}>
                        <GroupOptions props={groups.data} />
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Update
                    </button>
                    <Link to="/trainer" className="hover:underline">Back</Link>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
