import React, { useState } from 'react';

const Form = props => {
  //   const [name, setName] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const submitHandler = event => {
    event.preventDefault();
    console.log(list);
    // props.addUser(name);
    setList(p => {
      const user = {
        name,
      };
      return [...p, user];
    });

    setName(' ');
  };
  const userChangeHandler = event => {
    // setName(p => {
    //   const obj = {
    //     ...p,
    //     // id: p.id++,
    //     name: event.target.value,
    //   };
    //   return obj;
    // });
    setName(event.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Your Name</label>
        <input
          type='text'
          id='username'
          onChange={userChangeHandler}
          value={name}
        />
        <button type='submit'>Submit</button>
      </form>

      <div style={{ background: 'teal' }}>
        <ul>
          {list.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;
