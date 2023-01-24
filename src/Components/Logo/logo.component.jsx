import "./logo.styles.scss";
import LOGO from "../../Assets/logo.png";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo" src={LOGO} alt={`Bluska`} />
    </div>
  );
};

export default Logo;
