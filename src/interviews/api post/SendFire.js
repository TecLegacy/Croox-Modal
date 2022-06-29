//fetching from firebase

import React, { useCallback, useState } from 'react';

const SendFire = () => {
  const [addMovies, SetMovies] = useState({});
  const [response, setResponse] = useState([]);
  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch(
        'https://movie-collection-7e5b2-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response) throw new Error('No Response');

      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        console.log(key);
        loadedMovies.push({
          movies: key,
        });
      }
      setResponse(loadedMovies);
      console.log(loadedMovies);
    } catch (error) {
      console.log(error);
      throw new Error('something went wrong');
    }
  }, []);

  console.log('response', response);

  //add to firebase
  const addMoviesHandler = async () => {
    try {
      const response = await fetch(
        'https://movie-collection-7e5b2-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          body: JSON.stringify(addMovies),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response) throw new Error('No Response');
    } catch (error) {
      console.log(error);
      throw new Error('something went wrong');
    }
  };

  const storeMovies = e => {
    SetMovies(e.target.value);
  };
  const setForm = e => {
    e.preventDefault();
    console.log({
      name: addMovies,
    });
    console.log(addMovies);
  };
  return (
    <>
      <div>
        {response.map((curr, index) => {
          return <li key={index}>{curr.movies} </li>;
        })}
      </div>

      <div>
        <h1>Fetch from Firebase</h1>
        <button onClick={fetchHandler}>click to fetch</button>
      </div>

      <div>
        <h1>Add movie to firebase</h1>

        <form onSubmit={setForm}>
          <label htmlFor='movie'>enter movie name</label>
          <input type='text' id='movie' onChange={storeMovies} />
          <button>Console</button>
        </form>
        <button onClick={addMoviesHandler}>Add</button>
      </div>
    </>
  );
};

export default SendFire;
