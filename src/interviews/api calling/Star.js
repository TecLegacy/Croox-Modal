import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Designs/Loading/Loading';
import StarWar from './StarWar';

const Star = () => {
  const [loading, setLoading] = useState(false);
  const [resource, setResource] = useState([]);

  const fetchHandler = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response) {
        throw new Error('Something went wrong', response.status);
      }
      const data = await response.json();

      //transformed data
      const transformed = data.results.map(curr => {
        return {
          title: curr.title,
          episode: curr.episode_id,
          summary: curr.opening_crawl,
          release: curr.release_date,
        };
      });
      setResource(transformed);
    } catch (error) {
      throw new Error('Something went wrong', error);
    }
    setLoading(false);
  }, []);
  console.log(resource);
  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <>
      {loading && <Loading />}
      <div>Star</div>
      <button onClick={fetchHandler}>Fetch</button>
      <StarWar resource={resource} />
    </>
  );
};

export default Star;
