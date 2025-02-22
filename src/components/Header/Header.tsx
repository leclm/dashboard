import style from "./Header.module.scss";
import dashboard from "../../assets/images/dashboard.png";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={dashboard} alt="" />
      <p>TrackIt</p>
    </header>
  );
};

export default Header;
