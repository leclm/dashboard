import { Card } from "..";
import style from "./Grid.module.scss";

type GridProps = {
  data: string;
};

const Grid: React.FC<GridProps> = ({ data }) => {
  return (
    <div className={style.grid}>
      <Card data={`${data} 1`} />
      <Card data={`${data} 2`} />
      <Card data={`${data} 3`} />
      <Card data={`${data} 4`} />
    </div>
  );
};

export default Grid;
