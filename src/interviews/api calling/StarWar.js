import style from './starWar.module.css';

const StarWar = props => {
  console.log('starwar', props.resource.title);

  return (
    <>
      {props.resource.map(movie => (
        <div className={style.container} key={movie.title}>
          <div className={style.heading}>
            <h1>{movie.title}</h1>
          </div>
          <div className={`${style.episode} ${style.font}`}>
            {`Episode ${movie.episode}`}
          </div>
          <div style={{ 'margin-bottom': '20px' }}>{movie.release}</div>

          <summary className={style.episode}>{movie.summary}</summary>
        </div>
      ))}
    </>
  );
};

export default StarWar;
