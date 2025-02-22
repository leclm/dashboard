import style from "./Card.module.scss";

type CardProps = {
  data: string;
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={style.card}>
      <h2>Horas de estudo</h2>
      <p>{data}</p>
    </div>
  );
};

export default Card;
