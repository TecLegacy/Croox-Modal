import style from './card.module.css';

const Card = props => {
  return (
    <div className={`${style.wrapper} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
