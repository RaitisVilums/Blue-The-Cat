import "./header.styles.scss";
import Navigation from "../Navigation/navigation.component";
import Logo from "../Logo/logo.component";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header-heading">Hello and Welcome!</div>
      <Logo />
    </header>
  );
};

export default Header;
