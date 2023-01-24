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
      <a href="#contacts" className="navigation-item">
        contacts
      </a>
    </nav>
  );
};

export default Navigation;
