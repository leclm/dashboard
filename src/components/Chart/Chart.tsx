import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import style from "./Chart.module.scss";
import lightningIcon from "../../assets/images/lightning-icon.svg";

type ChartProps = {
  data: { name: string; study: number; job: number; }[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className={style.chartContainer}>
      <AreaChart
        width={window.innerWidth > 768 ? 700 : 290}
        height={window.innerWidth > 768 ? 250 : 104}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorStudy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorJob" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="study"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorStudy)"
        />
        <Area
          type="monotone"
          dataKey="job"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorJob)"
        />
      </AreaChart>
      <div className={style.counter}>
        <div>
          <p>00:00:00</p>
        </div>
        <button>
          <img src={lightningIcon} alt="Lightning Icon" />
          Start
        </button>
      </div>
    </div>
  );
};

export default Chart;
