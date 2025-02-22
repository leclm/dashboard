import style from "./Check.module.scss";

const Check: React.FC = () => {
  const platforms = ["HackerRank", "LeetCode", "Beecrowd", "Codewars", "Warmup"];

  return (
    <div className={style.check}>
      {platforms.map((label, index) => (
        <div className={style.checkItem} key={index}>
          <input type="checkbox" id={`check-${index}`} />
          <label htmlFor={`check-${index}`}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default Check;
