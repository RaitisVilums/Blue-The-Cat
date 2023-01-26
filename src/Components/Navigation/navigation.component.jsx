import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#home" className="navigation-item">
        home
      </a>
      <a href="#about" className="navigation-item">
        about
      </a>
      <a href="#gallery" className="navigation-item">
        gallery
      </a>
      <a href="#family" className="navigation-item">
        family
      </a>
    </nav>
  );
};

export default Navigation;
